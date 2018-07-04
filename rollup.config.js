import includePaths from 'rollup-plugin-includepaths';
import typescript from 'rollup-plugin-typescript2'

import pkg from './package.json'

export default {
  input: 'src/index.tsx',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
    },
    {
      file: pkg.module,
      format: 'es',
    },
  ],
  external: [
    ...Object.keys(pkg.dependencies || {}),
    ...Object.keys(pkg.peerDependencies || {}),
  ],

  plugins: [
    includePaths({
      files: ['.ts', '.tsx'],
      paths: ['src'],
    }),
    typescript({
      typescript: require('typescript'),
    }),
  ],
}
