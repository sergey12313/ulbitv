
import webpack  from 'webpack';

import {buildWebpackConfig} from "./configs/build/buildWebpackConfig";
import {BuildEnv, BuildMode, BuildPath} from "./configs/build/types/configs";
import path from "path";



export default (env: BuildEnv) => {
    let mode: BuildMode = 'development'

    if (env.mode && env.mode === 'development '|| env.mode === "production") {
        mode = env.mode as BuildMode
    }
    const port  = !!(env.port) ? parseInt(env.port, 10) : 3000

    const isDev = mode === 'development'

    const paths: BuildPath = {
        entry: path.resolve(__dirname, 'src', 'index.ts'),
        build: path.resolve(__dirname, 'build'),
        html: path.resolve('public', 'index.html')
    }




    const config: webpack.Configuration =  buildWebpackConfig({
        mode,
        paths,
        isDev,
        port
    })
    return config
}