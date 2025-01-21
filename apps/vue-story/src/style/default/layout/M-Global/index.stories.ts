import Global from '.';

export default {
    title: 'Layout/Mobile/Global',
    component: Global,
    tags: ['autodocs'],
    argTypes: {
        padding: { control: 'number' },
    },
};

export const HasPadding = {
    args: {
        padding: 20,
    },
};
