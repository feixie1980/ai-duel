import { ChatMessage } from '../../datastore/conversationsSlice';
import { Flex } from '@radix-ui/themes';
import { UserMessage } from './UserMessage';
import { BotMessage } from './BotMessage';
import ReactFlow, {
  Node,
  Edge,
  Background,
  Controls,
  MarkerType,
  useNodesState,
  useEdgesState,
  Handle,
  Position,
} from 'reactflow';
import dagre from '@dagrejs/dagre';
import { useCallback, useMemo } from 'react';
import styled from 'styled-components';
import 'reactflow/dist/style.css';

const Container = styled(Flex)`
  width: 100%;
  height: 100%;
`;

const FlowContainer = styled.div`
  width: 100%;
  height: 100%;

  .react-flow__edge-path {
    stroke: var(--gray-8);
    stroke-width: 2;
  }

  .react-flow__edge.animated path {
    stroke-dasharray: 5;
    animation: dashdraw 0.5s linear infinite;
  }

  @keyframes dashdraw {
    from {
      stroke-dashoffset: 10;
    }
  }

  .react-flow__handle {
    opacity: 0;
    &.react-flow__handle-top {
      top: 0;
    }
    &.react-flow__handle-bottom {
      bottom: 0;
    }
  }
`;

const MessageNodeWrapper = styled.div`
  // position: relative;
  width: 100%;
  padding: 4px 0;
`;

const UserMessageNode = ({ data }: { data: { message: ChatMessage } }) => (
  <MessageNodeWrapper>
    <Handle type="target" position={Position.Top} />
    <UserMessage message={data.message} />
    <Handle type="source" position={Position.Bottom} />
  </MessageNodeWrapper>
);

const BotMessageNode = ({ data }: { data: { message: ChatMessage } }) => (
  <MessageNodeWrapper>
    <Handle type="target" position={Position.Top} />
    <BotMessage message={data.message} />
    <Handle type="source" position={Position.Bottom} />
  </MessageNodeWrapper>
);

const nodeTypes = {
  userMessage: UserMessageNode,
  botMessage: BotMessageNode,
};

const getLayoutedElements = (
  nodes: Node[],
  edges: Edge[],
  direction = 'TB'
) => {
  const dagreGraph = new dagre.graphlib.Graph();
  dagreGraph.setDefaultEdgeLabel(() => ({}));
  dagreGraph.setGraph({
    rankdir: direction,
    ranksep: 30, // Minimum vertical spacing
    nodesep: 10, // Horizontal spacing
    edgesep: 20, // Edge spacing
  });

  // Add nodes to dagre
  nodes.forEach((node) => {
    dagreGraph.setNode(node.id, { width: 300, height: 80 });
  });

  // Add edges to dagre
  edges.forEach((edge) => {
    dagreGraph.setEdge(edge.source, edge.target);
  });

  // Calculate layout
  dagre.layout(dagreGraph);

  // Get positioned nodes
  const layoutedNodes = nodes.map((node) => {
    const nodeWithPosition = dagreGraph.node(node.id);
    return {
      ...node,
      position: {
        x: nodeWithPosition.x - 150, // Center node by subtracting half the width
        y: nodeWithPosition.y,
      },
    };
  });

  return { nodes: layoutedNodes, edges };
};

export interface ConversationPaneProps {
  messages?: ChatMessage[];
}

export function ConversationPane(props: ConversationPaneProps) {
  const { messages = [] } = props;

  // Create nodes from messages
  const initialNodes = useMemo(
    () =>
      messages.map((message, index) => ({
        id: message.id,
        type: message.from === 'user' ? 'userMessage' : 'botMessage',
        data: { message },
        position: { x: 0, y: index * 100 }, // Initial position, will be updated by dagre
      })),
    [messages]
  );

  // Create edges between consecutive messages
  const initialEdges = useMemo(
    () =>
      messages.slice(0, -1).map((_, index) => ({
        id: `edge-${messages[index].id}-${messages[index + 1].id}`,
        source: messages[index].id,
        target: messages[index + 1].id,
        type: 'smoothstep',
        animated: false,
        markerEnd: {
          type: MarkerType.ArrowClosed,
          width: 10,
          height: 10,
        },
      })),
    [messages]
  );

  // Get layouted elements
  /*
  const { nodes: layoutedNodes, edges: layoutedEdges } = useMemo(
    () => getLayoutedElements(initialNodes, initialEdges),
    [initialNodes, initialEdges]
  );
*/
  const layoutedNodes = initialNodes;
  const layoutedEdges = initialEdges;

  const [nodes, , onNodesChange] = useNodesState(layoutedNodes);
  const [edges, , onEdgesChange] = useEdgesState(layoutedEdges);

  const onInit = useCallback(() => {
    window.requestAnimationFrame(() => {
      const flowInstance = document.querySelector('.react-flow__viewport');
      if (flowInstance) {
        flowInstance.scrollTop = flowInstance.scrollHeight;
      }
    });
  }, []);

  return (
    <Container>
      <FlowContainer>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          nodeTypes={nodeTypes}
          nodeOrigin={[0.5, 0]}
          onInit={onInit}
          fitView
          minZoom={0.5}
          maxZoom={1.5}
          defaultViewport={{ x: 0, y: 0, zoom: 1 }}
        >
          <Background />
          <Controls showInteractive={false} />
        </ReactFlow>
      </FlowContainer>
    </Container>
  );
}
