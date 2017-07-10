const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const OpenBrowserPlugin = require("open-browser-webpack-plugin");

module.exports = {
    entry: ["./index.js", "./styles/main.scss"],
    output: {
        path: path.resolve("dist"),
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ["babel-loader"]
            },
            {
                test: /\.(sass|scss)$/,
                exclude: /node_modules/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: ["css-loader", "sass-loader"]
                })
            },
            {
                test: /\.(jpg|png|gif)$/,
                use: "file-loader"
            },
            {
                test: /\.(woff|woff2|eot|ttf|svg)$/,
                use: {
                    loader: "url-loader",
                    options: {
                        limit: 100000
                    }
                }
            }
        ]
    },
    devtool: "eval-source-map",

    resolve: {
        extensions: [".js", ".jsx"]
    },
    plugins: [
        new ExtractTextPlugin("style.css"),
        new OpenBrowserPlugin({ url: "http://localhost:8080" })
    ]
};
