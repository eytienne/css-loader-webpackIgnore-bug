import * as path from 'path';
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { Configuration } from 'webpack';

// wrapping style with an id to avoid conflict with wordpress stylesheets
// and generating spritesheet
module.exports = {
    entry: './src/main.css',
    output: {
        pathinfo: false,
        path: path.join(__dirname, 'build')
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader
                    },
                    {
                        loader: "css-loader",
                    },
                    {
						loader: 'postcss-loader',
					},
                ]
            },
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "main.css"
        }),
    ],
    resolve: {
        extensions: ['.css'],
    }
} as Configuration
