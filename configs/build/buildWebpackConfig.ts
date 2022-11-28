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
        devtool: 'inline-source-map',
        output: {
            path: paths.build,
            filename: '[name].[contenthash].js',
            clean: true
        },
        devServer: isDev? buildDevServer(options) : undefined,
        module: buildLoaders(),
        plugins: buildPlugins(options),
        resolve: buildResolvers()

}}