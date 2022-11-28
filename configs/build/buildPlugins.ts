import webpack, {  WebpackPluginInstance } from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import {BuildPath} from "./types/configs";

export const buildPlugins = (paths: BuildPath): Array<WebpackPluginInstance> => {
    return  [
        new webpack.ProgressPlugin(),
        new HtmlWebpackPlugin({ template:  paths.html}),
    ]
}