const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

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
            }
        ]
    },
    devtool: "eval-source-map",
    devServer: {
        open: true
    },
    resolve: {
        extensions: [".js", ".jsx"]
    },
    plugins: [new ExtractTextPlugin("style.css")]
};
