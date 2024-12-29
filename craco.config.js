const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
    webpack: {
        plugins: {
            add: [
                new CleanWebpackPlugin(),
                new MiniCssExtractPlugin({
                    filename: "static/css/[name].[contenthash].css",
                    chunkFilename: "static/css/[name].[contenthash].chunk.css",
                }),
            ],
        },
        configure: (webpackConfig) => {
            webpackConfig.optimization.splitChunks = {
                cacheGroups: {
                    default: {
                        reuseExistingChunk: true,
                    },
                    sharedStyles: {
                        name: "shared-styles",  
                        test: /src\/(components\/(ui|sections\/(moreproducts|about|projects|news\/newsItem)|cart\/.*|infiniteslider)\/.*\.css)$/i,  // Обновленное регулярное выражение
                        enforce: true,  
                    },
                },
            };

            return webpackConfig;
        },
    },
};
