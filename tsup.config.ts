import { defineConfig } from 'tsup';

export default defineConfig({
    entry: ['scripts/create-component.ts'],
    format: ['cjs'], // CommonJS 格式
    target: 'node14', // 目标环境
    outDir: 'dist', // 输出目录
    clean: true, // 清理输出目录
    dts: false, // 不生成类型声明文件
    minify: false, // 不压缩
    sourcemap: false, // 不生成 sourcemap
});