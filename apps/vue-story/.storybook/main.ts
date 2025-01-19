import { StorybookConfig } from '@storybook/vue3-vite';
import path from 'path';
import vue from '@vitejs/plugin-vue';
import { mergeConfig } from 'vite';

const config: StorybookConfig = {
    stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-interactions',
        '@storybook/addon-mdx-gfm',
        '@storybook/addon-a11y',
        '@storybook/blocks',
    ],
    framework: {
        name: '@storybook/vue3-vite',
        options: {},
    },
    core: {
        disableTelemetry: true, // 禁止 Telemetry 数据发送
    },
    docs: {},
    features: {},
    viteFinal: async (config) => {
        if (!config.plugins) return config;
        const vueIdx = config.plugins.findIndex((plugin) => plugin?.name === 'vite:vue');
        config.plugins.splice(
            vueIdx,
            1,
            vue({
                template: {
                    transformAssetUrls: {
                        includeAbsolute: false,
                    },
                },
            }),
        );
        return mergeConfig(config, {
            css: {
                preprocessorOptions: {
                    less: {
                        javascriptEnabled: true,
                    },
                },
            },
            optimizeDeps: {
                include: [
                    '@storybook/addon-links',
                    '@storybook/addon-interactions',
                    '@storybook/addon-actions',
                    '@storybook/addon-backgrounds',
                    '@storybook/addon-a11y',
                ],
            },
            resolve: {
                alias: {
                    '~~': path.resolve(path.dirname(__dirname)),
                    '~': path.resolve(path.dirname(__dirname), 'src'),
                    assets: path.resolve(path.dirname(__dirname), 'src/assets'),
                    public: path.resolve(path.dirname(__dirname), 'src/public'),
                },
            },
        });
    },
};

export default config;
