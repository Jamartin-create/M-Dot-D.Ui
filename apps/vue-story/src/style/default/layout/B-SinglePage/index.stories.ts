import SinglePageToB from '.';

export default {
    title: 'Layout/B/SinglePage',
    component: SinglePageToB,
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
