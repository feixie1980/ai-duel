import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Dialog,
  Select,
  Button,
  Box,
  Text,
  TextField,
  Flex,
} from '@radix-ui/themes';
import { ServiceType } from '../../API/services';
import { addAPIKey, selectAPIKeyByService } from '../../API/apiKeysSlice';

interface APISettingsManagerProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const APISettingsManager: React.FC<APISettingsManagerProps> = ({
  open,
  onOpenChange,
}) => {
  const dispatch = useDispatch();
  const [selectedService, setSelectedService] = useState<ServiceType>('openai');
  const [apiKey, setApiKey] = useState('');

  const decriptedKey = useSelector(selectAPIKeyByService(selectedService));

  const handleSave = () => {
    if (apiKey.trim()) {
      dispatch(addAPIKey({ service: selectedService, key: apiKey }));
    }
    setApiKey('');
    onOpenChange(false);
  };

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Content style={{ maxWidth: 450 }}>
        <Dialog.Title>API Settings</Dialog.Title>
        <Flex direction="column" gap="20px">
          <Flex direction="column">
            <Text as="label" size="2" weight="bold" mb="2">
              LLM Provider
            </Text>
            <Select.Root
              value={selectedService}
              onValueChange={(value: ServiceType) => setSelectedService(value)}
            >
              <Select.Trigger />
              <Select.Content>
                <Select.Item value="openai">OpenAI</Select.Item>
                <Select.Item value="deepseek">Deepseek</Select.Item>
              </Select.Content>
            </Select.Root>
          </Flex>

          <Flex direction="column">
            <Text as="label" size="2" weight="bold" mb="2">
              API Key ({decriptedKey})
            </Text>
            <TextField.Root
              value={apiKey ?? 'no key'}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setApiKey(e.target.value)
              }
              placeholder={decriptedKey ? '**********' : 'Enter API key'}
            />
          </Flex>

          <Flex gap="10px">
            <Dialog.Close>
              <Button size="2" variant="soft">
                Cancel
              </Button>
            </Dialog.Close>
            <Dialog.Close>
              <Button size="2" onClick={handleSave}>
                Save
              </Button>
            </Dialog.Close>
          </Flex>
        </Flex>
      </Dialog.Content>
    </Dialog.Root>
  );
};
