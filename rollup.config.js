import resolve from 'rollup-plugin-node-resolve';

export default {
    input: './index.js',
    output: {
        file: './dist/rollup-index.js',
        format: 'esm'
    },
    plugins: [
        resolve()
    ]
};