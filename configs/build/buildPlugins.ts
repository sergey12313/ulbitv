import webpack, {  WebpackPluginInstance } from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import {BuildOptions} from "./types/configs";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export const buildPlugins = ({paths}: BuildOptions): Array<WebpackPluginInstance> => {
    return  [
        new webpack.ProgressPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:].css',
            chunkFilename: 'css/[name].[contenthash:].css',
        }),
        new HtmlWebpackPlugin({ template:  paths.html}),
    ]
}