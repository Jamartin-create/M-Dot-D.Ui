import { defineComponent } from 'vue';

export const SideBar = defineComponent({
    name: 'SideBar',
    setup(props: {}) {
        return () => <div>侧边栏</div>;
    },
});

export default defineComponent({
    props: {
        padding: {
            type: Number,
            default: 0,
        },
    },
    setup(props, { slots }) {
        const { sidebar } = slots;
        console.log(props, '---');
        return () => (
            <div>
                内容
                {props.padding}
                {sidebar?.()}
            </div>
        );
    },
});
