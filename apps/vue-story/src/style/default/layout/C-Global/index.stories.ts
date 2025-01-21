import Global from '.';

export default {
    title: 'Layout/C/Global',
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
