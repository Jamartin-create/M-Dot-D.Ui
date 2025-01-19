<template>
    <div>
        {{ size }}
        {{ type }}
        <button>
            {{ label }}
        </button>
    </div>
</template>

<script setup lang="ts">
type PropsType = {
    type?: 'primary' | 'secondary' | 'normal';
    size?: 'large' | 'small' | 'medium';
    label?: string;
};
defineProps<PropsType>();

defineOptions({
    name: 'Button',
});
</script>

<style scoped></style>
