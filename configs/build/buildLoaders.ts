import {ModuleOptions} from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {BuildOptions} from "./types/configs";
export const buildLoaders = ({isDev}: BuildOptions): ModuleOptions => {
    const tsLoader  =  {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/,
        };
    const stylesLoader =  {
            test: /\.s[ac]ss$/i,
            use: [
                isDev? "style-loader" : MiniCssExtractPlugin.loader,
                {
                    loader: 'css-loader',
                    options: {
                        modules: {
                            auto: (resPath: string) => Boolean(resPath.includes('.module')),
                            localIdentName: isDev ? '[path][name]__[local]--[hash:base64:5]' : '[hash:base64:8]'
                        },

                    }
                }
                ,
                "sass-loader",
            ],
        };
    const babelLoader =   {
        test: /\.(js|tsx|jsx)$/,
        exclude: /node_modules/,
        use: {
            loader: "babel-loader",
            options: {
                presets: ['@babel/preset-env'],
                plugins: [
                   [ "i18next-extract", {"nsSeparator": "˜", locales: ["ru", "en"], keyAsDefaultValue: true}]
                ]
            }
        }
    };
    const fileLoader =   {
            test: /\.(png|jpe?g|gif)$/i,
            use: [
                {
                    loader: 'file-loader',
                },
            ],
        };
    const svgLoader =     {
            test: /\.svg$/,
            use: ['@svgr/webpack'],
        };


    return {rules: [
            fileLoader,
            svgLoader,
            babelLoader,
        tsLoader,
           stylesLoader,
        ],
    }
}