import Button from './Button.vue';

export default {
    title: 'Button',
    component: Button,
    tags: ['autodocs'],
    argTypes: {
        size: { control: 'select', options: ['small', 'medium', 'large'] },
        label: { control: 'text' },
        type: { control: 'select', options: ['primary', 'secondary', 'normal'] },
    },
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary = {
    args: {
        type: 'primary',
        label: 'Button',
    },
};

export const Secondary = {
    args: {
        type: 'primary',
        label: 'Button',
    },
};

export const Large = {
    args: {
        size: 'large',
        label: 'Button',
    },
};

export const Small = {
    args: {
        size: 'small',
        label: 'Button',
    },
};

export const MArTin = {
    args: {
        type: "secondary",
        label: "Button"
    }
};
