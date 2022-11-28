import {BuildOptions} from "./types/configs";
import webpack from "webpack";
import {buildLoaders} from "./buildLoaders";
import {buildPlugins} from "./buildPlugins";
import {buildResolvers} from "./buildResolvers";

export const buildWebpackConfig = ({mode, paths}: BuildOptions): webpack.Configuration => {
    return {
        mode,
        entry: paths.entry,
        output: {
            path: paths.build,
            filename: '[name].[contenthash].js',
            clean: true
        },
        module: buildLoaders(),
        plugins: buildPlugins(paths),
        resolve: buildResolvers()

}}