import  path  from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin'
import webpack  from 'webpack';

const config: webpack.Configuration =  {
    mode: 'development',
    entry: path.resolve(__dirname, 'src', 'index.ts'),
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: '[name].[contenthash].js',
        clean: true
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    plugins: [
        new webpack.ProgressPlugin(),
        new HtmlWebpackPlugin({ template:  path.resolve('public', 'index.html')}),
    ],
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
};
export default config