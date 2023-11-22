import { text } from './build/banner.json';
import packageInfo from './package.json';

import vue from 'rollup-plugin-vue';
import node from '@rollup/plugin-node-resolve';
import cjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import { terser } from 'rollup-plugin-terser';
import typescript from 'rollup-plugin-typescript2';
import copy from 'rollup-plugin-copy';

import fs from 'fs';
import path from 'path';

const baseFolderPath = './src/components/'
const banner = text.replace('${version}', packageInfo.version)

const components = fs
  .readdirSync(baseFolderPath)
  .filter((f) =>
    fs.statSync(path.join(baseFolderPath, f)).isDirectory()
  )

const entries = {
  'index': './src/index.ts',
  ...components.reduce((obj, name) => {
    obj[name] = (baseFolderPath + name)
    return obj
  }, {})
}

const babelOptions = {
  babelHelpers: 'bundled'
}

const vuePluginConfig = {
  template: {
    isProduction: true,
    compilerOptions: {
      whitespace: 'condense'
    }
  }
}

const capitalize = (s) => {
  if (typeof s !== 'string') return ''
  return s.charAt(0).toUpperCase() + s.slice(1)
}

export default () => {
  let config = [
    // сборка esm для каждого компонента в библиотеке
    {
      input: entries,
      external: ['vue'],
      output: {
        format: 'esm',
        dir: `dist/esm`,
        entryFileNames: '[name].mjs',
        chunkFileNames: '[name]-[hash].mjs',
      },
      plugins: [
        node({
          extensions: ['.vue', '.ts']
        }),
        typescript({
          typescript: require('typescript')
        }),
        vue(vuePluginConfig),
        babel(babelOptions),
        cjs()
      ],
    },
    // единая сборка esm для всех компонентов
    {
      input: 'src/index.ts',
      external: ['vue'],
      output: {
        format: 'esm',
        file: 'dist/bee-ui-library.mjs',
        banner: banner
      },
      plugins: [
        node({
          extensions: ['.vue', '.ts']
        }),
        typescript({
          typescript: require('typescript')
        }),
        vue(vuePluginConfig),
        babel(babelOptions),
        cjs()
      ]
    },

    // сборка cjs для каждого компонента в библиотеке
    {
      input: entries,
      external: ['vue'],
      output: {
        format: 'cjs',
        dir: 'dist/cjs',
        exports: 'named'
      },
      plugins: [
        node({
          extensions: ['.vue', '.ts']
        }),
        typescript({
          typescript: require('typescript')
        }),
        vue(vuePluginConfig),
        babel(babelOptions),
        cjs()
      ]
    },

    // единая сборка cjs для каждого компонента в библиотеке
    {
      input: 'src/index.ts',
      external: ['vue'],
      output: {
        format: 'umd',
        name: capitalize('bee-ui-library'),
        file: 'dist/bee-ui-library.js',
        exports: 'named',
        banner: banner,
        globals: {
          vue: 'Vue'
        }
      },
      plugins: [
        copy({
          targets: [
            { src: 'src/assets/fonts/**/*', dest: 'dist/assets/fonts' },
            { src: 'src/assets/images/**/*', dest: 'dist/assets/images' }
          ]
        }),
        node({
          extensions: ['.vue', '.ts']
        }),
        typescript({
          typescript: require('typescript')
        }),
        vue(vuePluginConfig),
        babel(babelOptions),
        cjs()
      ]
    },

    // Копируем assets
    // {
    //   input: 'src/index.ts',
    //   output: {
    //     file: 'dist/app.ts',
    //     format: 'cts'
    //   },
    //   plugins: [
    //     // copy({
    //     //   targets: [
    //     //     { src: 'assets/images/**/*', dest: 'dist/public/images' }
    //     //   ]
    //     // })
    //   ]
    // }
  ]

  if (process.env.MINIFY === 'true') {
    config = config.filter((c) => !!c.output.file)
    config.forEach((c) => {
      c.output.file = c.output.file.replace(/.m?js/g, r => `.min${r}`)
      c.plugins.push(terser({
        output: {
          comments: '/^!/'
        }
      }))
    })
  }
  return config
}
