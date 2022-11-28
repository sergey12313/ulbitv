import {BuildOptions} from "./types/configs";
import webpack from "webpack";
import {buildLoaders} from "./buildLoaders";
import {buildPlugins} from "./buildPlugins";
import {buildResolvers} from "./buildResolvers";
import {buildDevServer} from "./buildDevServer";


export const buildWebpackConfig = (options: BuildOptions): webpack.Configuration => {
    const {mode, paths, isDev}= options
    return {
        mode,
        entry: paths.entry,
        output: {
            path: paths.build,
            filename: '[name].[contenthash].js',
            clean: true
        },
        devtool: isDev ? 'inline-source-map': false,
        devServer: isDev? buildDevServer(options) : undefined,
        module: buildLoaders(options),
        plugins: buildPlugins(options),
        resolve: buildResolvers()

}}