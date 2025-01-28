import { defineComponent, CSSProperties } from 'vue';

const layoutStyle: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    gap: '16px',
    background: '#f5f7fa',
    padding: '16px',
};

const mainAreaStyle: CSSProperties = {
    display: 'flex',
    flex: 1,
    gap: '16px',
};

const commonStyle: CSSProperties = {
    padding: '24px',
    background: '#fff',
    borderRadius: '8px',
    boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
    transition: 'all 0.3s ease',
};

const headerStyle: CSSProperties = {
    ...commonStyle,
    position: 'sticky',
    top: '16px',
    zIndex: 10,
};

const sidebarStyle: CSSProperties = {
    ...commonStyle,
    width: '240px',
    flexShrink: 0,
    overflowY: 'auto',
    maxHeight: 'calc(100vh - 32px)',
};

const contentStyle: CSSProperties = {
    ...commonStyle,
    flex: 1,
    minHeight: '500px',
};

const footerStyle: CSSProperties = {
    ...commonStyle,
    textAlign: 'center',
    color: '#718096',
};

export const Header = defineComponent({
    name: 'Header',
    props: {
        height: {
            type: Number,
            default: 60,
        },
    },
    setup(props) {
        return () => (
            <header
                style={{
                    ...headerStyle,
                    height: `${props.height}px`,
                }}
            >
                <slot>顶部导航</slot>
            </header>
        );
    },
});

export const Sidebar = defineComponent({
    name: 'Sidebar',
    props: {
        width: {
            type: Number,
            default: 240,
        },
    },
    setup(props) {
        return () => (
            <aside
                style={{
                    ...sidebarStyle,
                    width: `${props.width}px`,
                }}
            >
                <slot>侧边栏</slot>
            </aside>
        );
    },
});

export const Content = defineComponent({
    name: 'Content',
    props: {
        minHeight: {
            type: Number,
            default: 500,
        },
    },
    setup(props) {
        return () => (
            <main
                style={{
                    ...contentStyle,
                    minHeight: `${props.minHeight}px`,
                }}
            >
                <slot>主要内容区</slot>
            </main>
        );
    },
});

export const Footer = defineComponent({
    name: 'Footer',
    props: {
        height: {
            type: Number,
            default: 60,
        },
    },
    setup(props) {
        return () => (
            <footer
                style={{
                    ...footerStyle,
                    height: `${props.height}px`,
                }}
            >
                <slot>底部区域</slot>
            </footer>
        );
    },
});

export default defineComponent({
    name: 'Layout',
    setup(_, { slots }) {
        return () => (
            <div style={layoutStyle}>
                {slots.header?.()}
                <div style={mainAreaStyle}>
                    {slots.sidebar?.()}
                    {slots.content?.()}
                </div>
                {slots.footer?.()}
            </div>
        );
    },
});
