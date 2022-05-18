const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const baseConfig = require('./webpack.config');

const prodConfig = {...baseConfig};

prodConfig.mode = 'production';
prodConfig.output.publicPath = "/FormValidation/";
delete prodConfig.devServer;
prodConfig.module.rules[1] = {
    test: /\.css$/,
    use: [MiniCssExtractPlugin.loader, 'css-loader'],
};
prodConfig.module.rules[2] =  {
    test: /\.(sass|scss)$/,
    use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
};
prodConfig.module.rules[3] =  {
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
};

prodConfig.plugins.push( new MiniCssExtractPlugin({
    filename: 'css/[name]-[contenthash:6].css',
}),);


module.exports = prodConfig;