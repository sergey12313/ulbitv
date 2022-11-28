import webpack, {  WebpackPluginInstance } from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import {BuildOptions} from "./types/configs";

export const buildPlugins = ({paths}: BuildOptions): Array<WebpackPluginInstance> => {
    return  [
        new webpack.ProgressPlugin(),
        new HtmlWebpackPlugin({ template:  paths.html}),
    ]
}