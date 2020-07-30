import { Config } from 'bili';

const config: Config = {
  banner: true,
  input: 'src/index.ts',
  output: {
    format: [
      'es',
      'cjs',
      'umd',
      'umd-min'
    ],
    moduleName: 'Contexts Wrapper',
  },
  plugins: {
    'typescript2': {
      clean:true,
      tsconfig: './tsconfig.build.json',
      useTsconfigDeclarationDir: true,
    }
  }
}
export default config;