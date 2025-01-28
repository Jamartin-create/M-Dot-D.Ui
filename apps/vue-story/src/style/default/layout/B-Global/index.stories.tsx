import Layout, { Header, Sidebar, Content, Footer } from '.';

export default {
    title: 'Layout/B/Global',
    component: Layout,
    tags: ['autodocs'],
    argTypes: {
        headerHeight: {
            control: 'number',
            description: '头部高度',
            defaultValue: 60,
        },
        sidebarWidth: {
            control: 'number',
            description: '侧边栏宽度',
            defaultValue: 240,
        },
        contentMinHeight: {
            control: 'number',
            description: '内容区最小高度',
            defaultValue: 500,
        },
        footerHeight: {
            control: 'number',
            description: '底部高度',
            defaultValue: 60,
        },
    },
};

export const Basic = {
    render: (args) => ({
        components: { Layout, Header, Sidebar, Content, Footer },
        setup() {
            return () => (
                <Layout>
                    {{
                        header: () => <Header height={args.headerHeight}>顶部导航区域</Header>,
                        sidebar: () => <Sidebar width={args.sidebarWidth}>侧边栏内容</Sidebar>,
                        content: () => <Content minHeight={args.contentMinHeight}>主要内容区域</Content>,
                        footer: () => <Footer height={args.footerHeight}>底部版权信息</Footer>,
                    }}
                </Layout>
            );
        },
    }),
    args: {
        headerHeight: 60,
        sidebarWidth: 240,
        contentMinHeight: 500,
        footerHeight: 60,
    },
};

export const WithoutHeader = {
    render: (args) => ({
        components: { Layout, Sidebar, Content, Footer },
        setup() {
            return () => (
                <Layout>
                    {{
                        sidebar: () => <Sidebar>侧边栏内容</Sidebar>,
                        content: () => <Content>无顶部导航的布局</Content>,
                        footer: () => <Footer>底部版权信息</Footer>,
                    }}
                </Layout>
            );
        },
    }),
};

export const WithoutFooter = {
    render: (args) => ({
        components: { Layout, Header, Sidebar, Content },
        setup() {
            return () => (
                <Layout>
                    {{
                        header: () => <Header>顶部导航区域</Header>,
                        sidebar: () => <Sidebar>侧边栏内容</Sidebar>,
                        content: () => <Content>无底部区域的布局</Content>,
                    }}
                </Layout>
            );
        },
    }),
};

export const OnlyContent = {
    render: (args) => ({
        components: { Layout, Content },
        setup() {
            return () => (
                <Layout>
                    {{
                        content: () => <Content>仅展示内容区域的布局</Content>,
                    }}
                </Layout>
            );
        },
    }),
};
