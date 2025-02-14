export default function (plop) {
  plop.setGenerator('component', {
    description: 'Create a new React component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Component name (PascalCase):',
        validate: (value) => {
          if (/^[A-Z][a-zA-Z0-9]+$/.test(value)) {
            return true;
          }
          return 'Component name must be in PascalCase (e.g., Button, UserProfile)';
        },
      },
      {
        type: 'input',
        name: 'group',
        message: 'Component group (optional, use kebab-case):',
        validate: (value) => {
          if (!value) return true;
          if (/^[a-z0-9]+(-[a-z0-9]+)*$/.test(value)) {
            return true;
          }
          return 'Group name must be in kebab-case (e.g., form-controls, user-profile)';
        },
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/components/{{#if group}}{{group}}/{{/if}}{{pascalCase name}}/{{pascalCase name}}.tsx',
        templateFile: 'plop-templates/component/Component.tsx.hbs',
      },
      {
        type: 'add',
        path: 'src/components/{{#if group}}{{group}}/{{/if}}{{pascalCase name}}/{{pascalCase name}}.types.ts',
        templateFile: 'plop-templates/component/Component.types.ts.hbs',
      },
      {
        type: 'add',
        path: 'src/components/{{#if group}}{{group}}/{{/if}}{{pascalCase name}}/{{pascalCase name}}.spec.tsx',
        templateFile: 'plop-templates/component/Component.spec.tsx.hbs',
      },
      {
        type: 'add',
        path: 'src/components/{{#if group}}{{group}}/{{/if}}{{pascalCase name}}/{{pascalCase name}}.stories.tsx',
        templateFile: 'plop-templates/component/Component.stories.tsx.hbs',
      },
      {
        type: 'add',
        path: 'src/components/{{#if group}}{{group}}/{{/if}}{{pascalCase name}}/index.ts',
        templateFile: 'plop-templates/component/index.ts.hbs',
      },
    ],
  });
}
