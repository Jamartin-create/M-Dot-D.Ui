import SinglePageToB from '.';

export default {
    title: 'Layout/SinglePage/ToB',
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
