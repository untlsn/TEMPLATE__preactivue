import { defineConfig } from 'vite';
import preact from '@preact/preset-vite';
import winidcss from 'vite-plugin-windicss';
import autoImport from 'unplugin-auto-import/vite';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    preact(),
    winidcss(),
    autoImport({
      imports: [
        'react',
        'react-router-dom',
        {
          'mobx-react-lite': [
            'useLocalStore',
            'observer',
          ],
          '~/helpers/useSignal': [
            ['default', 'useSignal'],
          ],
        },
      ],
      dts: 'src/auto-imports.d.ts',
    }),
  ],
  resolve: {
    alias: {
      '~/': `${resolve('./src')}/`,
    },
  },
});
