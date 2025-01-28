import { Preview, setup } from '@storybook/vue3';

setup((app) => {});

const preview: Preview = {
    tags: ['autodocs'],
    parameters: {
        options: {
            storySort: {
                order: ['Layout/Intro', '*'], // 将 'Layout/Intro' 放在第一个
            },
        },
    },
};

export default preview;
