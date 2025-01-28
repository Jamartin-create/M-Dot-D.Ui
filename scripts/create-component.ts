#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { program } from 'commander';
import inquirer from 'inquirer';

interface ComponentLibrary {
    name: string;
    path: string;
    themes: string[];
}

const COMPONENT_LIBRARIES: ComponentLibrary[] = [
    {
        name: 'vue-story',
        path: 'apps/vue-story',
        themes: ['default'],
    },
    // Add more component libraries here as needed
];

program
    .name('create-component')
    .description('Create a new component with Storybook setup')
    .argument('<name>', 'Component name (e.g., Button)')
    .parse();

const rawComponentName: string = program.args[0];
const componentName: string = toPascalCase(rawComponentName);

function toPascalCase(input: string): string {
    return input
        .replace(/[^a-zA-Z0-9]+(.)/g, (_, chr) => chr.toUpperCase()) // 去除特殊符号并将后续字符大写
        .replace(/^[a-z]/, (chr) => chr.toUpperCase()); // 确保首字母大写
}

async function main() {
    const { library } = await inquirer.prompt([
        {
            type: 'list',
            name: 'library',
            message: 'Select the component library:',
            choices: COMPONENT_LIBRARIES.map((lib) => ({
                name: lib.name,
                value: lib,
            })),
        },
    ]);

    const { theme } = await inquirer.prompt([
        {
            type: 'list',
            name: 'theme',
            message: 'Select the theme:',
            choices: library.themes,
        },
    ]);

    const { category } = await inquirer.prompt([
        {
            type: 'input',
            name: 'category',
            message: 'Enter the component category (e.g., components, layout):',
            default: 'components',
        },
    ]);

    const BASE_DIR: string = path.join(
        process.cwd(),
        library.path,
        'src/style',
        theme,
        category,
        rawComponentName,
    );

    // Create component directory
    fs.mkdirSync(BASE_DIR, { recursive: true });

    // Component Template (.tsx)
    const componentTemplate: string = `import { defineComponent, CSSProperties } from 'vue';

const ${componentName.toLowerCase()}Style: CSSProperties = {
    // Add your component styles here
};

export default defineComponent({
    name: '${componentName}',
    props: {
        // Define your props here
    },
    setup(props) {
        return () => (
            <div style={${componentName.toLowerCase()}Style}>
                {/* Add your component content here */}
            </div>
        );
    },
});
`;

    // Stories Template (.stories.tsx)
    const storiesTemplate: string = `import ${componentName} from '.';

export default {
    title: '${category}/${componentName}',
    component: ${componentName},
    tags: ['autodocs'],
    argTypes: {
        // Define your component's props here
    },
};

export const Basic = {
    render: (args) => ({
        components: { ${componentName} },
        setup() {
            return () => (
                <${componentName} {...args}>
                    Basic ${componentName}
                </${componentName}>
            );
        },
    }),
    args: {
        // Add default prop values here
    },
};
`;

    // Documentation Template (.mdx)
    const docsTemplate: string = `import { Meta, Canvas, Controls, Primary, Source } from '@storybook/blocks';
import * as ${componentName}Stories from './index.stories';

<Meta of={${componentName}Stories} />

# ${componentName}

${componentName} is a Vue component that...

## Features

- Feature 1
- Feature 2
- Feature 3

## Basic Usage

<Primary />

<Controls />

## Examples

### Basic Example

<Canvas of={${componentName}Stories.Basic} />

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| prop1 | string | - | Description of prop1 |

## Code Example

<Source
  language="tsx"
  dark
  code={\`
<${componentName}>
  Content
</${componentName}>
  \`}
/>

## Notes

- Add any important notes about the component here
`;

    // Write files
    fs.writeFileSync(path.join(BASE_DIR, 'index.tsx'), componentTemplate);
    fs.writeFileSync(path.join(BASE_DIR, 'index.stories.tsx'), storiesTemplate);
    fs.writeFileSync(path.join(BASE_DIR, 'index.mdx'), docsTemplate);

    console.log(`✨ Component ${componentName} created successfully in ${BASE_DIR}`);
}

main().catch(console.error);
