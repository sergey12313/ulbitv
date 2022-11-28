import {ModuleOptions} from "webpack";

export const buildLoaders = (): ModuleOptions => {
    return {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    }
}