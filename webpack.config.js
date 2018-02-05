const webpack = require("webpack")

module.exports = {
    entry: {
        main: "./src/index.tsx",
    },
    output: {
        path: __dirname+"/public/resources/webpack",
        filename: "[name].bundle.js",
        publicPath: "/resources/webpack/",
    },
    devServer: {
        contentBase: __dirname+"/public"
    },
    plugins: [

    ],
    module: {
        loaders: [
            { test: /\.tsx?$/, exclude: /node_modules/, loader: 'ts-loader' },
            { test: /\.less$/, loader: 'style-loader!css-loader!less-loader' },
        ]
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js"]
    },
    devtool: "inline-source-map",
}