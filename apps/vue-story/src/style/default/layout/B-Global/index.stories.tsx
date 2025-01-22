import type { StoryObj } from '@storybook/vue3';
import Global, { SideBar } from '.';

export default {
    title: 'Layout/B/Global',
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

export const SideBarDemo: StoryObj<typeof Global> = {
    render: (args) => ({
        components: { Global, SideBar },
        setup() {
            console.log(args, '---');
            return () => (
                <Global padding={args.padding}>
                    {{
                        sidebar: () => <SideBar />,
                    }}
                </Global>
            );
        },
    }),
    args: {
        padding: 20,
    },
};
