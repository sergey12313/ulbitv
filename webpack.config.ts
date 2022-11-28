
import webpack  from 'webpack';

import {buildWebpackConfig} from "./configs/build/buildWebpackConfig";
import {BuildMode, BuildPath} from "./configs/build/types/configs";
import path from "path";


const paths: BuildPath = {
    entry: path.resolve(__dirname, 'src', 'index.ts'),
    build: path.resolve(__dirname, 'build'),
    html: path.resolve('public', 'index.html')
}

const mode: BuildMode ='development'
const isDev = mode === 'development'

const config: webpack.Configuration =  buildWebpackConfig({
    mode: 'development',
    paths,
    isDev
})
export default config