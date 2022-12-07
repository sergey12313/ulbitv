import {BuildOptions} from "./types/configs";
import type {Configuration as DevServerConfiguration} from "webpack-dev-server";

export const buildDevServer = ({paths, port}: BuildOptions): DevServerConfiguration => {
    return {
        static: paths.public,
        open: true,
        historyApiFallback: true,
        hot: true,
        port,
    }
}