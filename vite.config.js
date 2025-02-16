// import { defineConfig } from 'vite';
// import vue from '@vitejs/plugin-vue';

// // vite.config.js
// export default {
//     resolve: {
//       alias: {
//         vue: '@vue/compat'
//       }
//     },
//     plugins: [
//       vue({
//         template: {
//           compilerOptions: {
//             compatConfig: {
//               MODE: 3
//             }
//           }
//         }
//       })
//     ]
//   }


import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { fileURLToPath } from 'url';
import path from 'path';

const filename = fileURLToPath(import.meta.url);
const pathSegments = path.dirname(filename);

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(pathSegments, './src'),
    },
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json'],
  }
})