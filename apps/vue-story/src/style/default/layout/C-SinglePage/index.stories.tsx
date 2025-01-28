import SinglePage from '.';

export default {
    title: 'layout/C/SinglePage',
    component: SinglePage,
    tags: ['autodocs'],
    argTypes: {
        // Define your component's props here
    },
};

export const Basic = {
    render: (args) => ({
        components: { SinglePage },
        setup() {
            return () => <SinglePage {...args}>Basic SinglePage</SinglePage>;
        },
    }),
    args: {
        // Add default prop values here
    },
};
