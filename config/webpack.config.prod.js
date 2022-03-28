const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = {
    mode: 'production',
    entry: {
        main: './src/index.js',
    },
    output: {
        filename: 'js/index.js',
        path: path.resolve(__dirname, '../', 'dist'),
        publicPath: "/FormValidation/",
    },
    module: {
        rules: [
            {
                test: /\.txt$/,
                use: 'raw-loader',
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },
            {
                test: /\.(sass|scss)$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
            },
            {
                test: /\.(jpg|svg|png|gif|jpeg)$/,
                type: 'asset/resource',
                generator: {
                    filename: 'images/[name]-[contenthash:6][ext][query]'
                },
                use: [{
                    loader: 'image-webpack-loader',
                    options: {
                        mozjpeg: {
                            quality: 70,
                            progressive: true
                        }
                    }
                }],
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    presets: [
                        ["@babel/preset-env", {
                            useBuiltIns: 'usage',
                            corejs: "2.0.0"
                        }],
                    ],
                    plugins: ["@babel/plugin-proposal-class-properties"]
                }
            },
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: "Form Validation",
            template: "index.html",
        }),
        new MiniCssExtractPlugin({
            filename: 'css/[name]-[contenthash:6].css',
        }),


    ]
}