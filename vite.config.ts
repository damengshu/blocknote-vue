import { defineConfig } from 'vite'
// If mode cjs(vite.config.cjs), should use `veaury/vite/cjs/index.cjs`
// If mode esm(vite.config.mjs), should use `veaury/vite/esm/index.mjs`
// If the configuration file of vite has a `.js` suffix(vite.config.js), it is recommended to import it in the following way.
import veauryVitePlugins from 'veaury/vite/index'
import { copyPackageJsonPlugin } from './vite-plugins/copy.plugin'
import dts from 'vite-plugin-dts'

export default defineConfig({
  server: {
    port: 8008
  },
  plugins: [
    dts({
      entryRoot: 'packages',
      outDir: ['dist/es', 'dist/lib'],
    }),
    // Turn off vue and vuejsx plugins
    // vue(),
    // vueJsx(),
    // When the type of veauryVitePlugins is set to vue,
    // only jsx in files in the directory named 'react_app' will be parsed with react jsx,
    // and jsx in other files will be parsed with vue jsx
    veauryVitePlugins({
      type: 'vue',
      // Configuration of @vitejs/plugin-vue
      // vueOptions: {...},
      // Configuration of @vitejs/plugin-react
      // reactOptions: {...},
      // Configuration of @vitejs/plugin-vue-jsx
      vueJsxOptions: {
      }
    }),
    copyPackageJsonPlugin(),
  ],
  build: {
    sourcemap: true,
    cssMinify: 'esbuild',
    lib: {
      entry: 'packages/index.ts',
      name: 'block-note-vue'
    },
    rollupOptions: {
      external: ['vue'],
      output: [
        {
          globals: {
            vue: 'Vue',
          },
          // 打包格式
          format: 'es',
          // 打包后文件名
          entryFileNames: '[name].mjs',
          // 让打包目录和我们目录对应
          preserveModules: true,
          exports: 'auto',
          // 配置打包根目录
          dir: './dist/es'
        },
        {
          globals: {
            vue: 'Vue',
          },
          // 打包格式
          format: 'cjs',
          // 打包后文件名
          entryFileNames: '[name].js',
          // 让打包目录和我们目录对应
          preserveModules: true,
          exports: 'auto',
          // 配置打包根目录
          dir: './dist/lib'
        }
      ]
    }
  }
})
