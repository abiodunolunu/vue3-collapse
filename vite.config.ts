import terser from "@rollup/plugin-terser";
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    dts({
      insertTypesEntry: true
    })
  ],

  build: {
    lib: {
      entry: resolve(__dirname, 'src/lib/main.ts'),
      name: 'Vue3Collapse',
      fileName: 'vue3-collapse',
      formats: ['es', 'umd', 'iife']
    },
    // target: ['es6'],

    // target: ['es6'],
    minify: 'terser',
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue'
        },
      },
      plugins: [terser()],
    },
  }
})
