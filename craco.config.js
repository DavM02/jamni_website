const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    webpack: {
        plugins: {
            add: [
                new MiniCssExtractPlugin({
                    filename: "static/css/[name].[contenthash].css",
                    chunkFilename: "static/css/[name].[contenthash].chunk.css",
                }),
            ],
        },
        configure: (webpackConfig) => {
             const updatedConfig = { ...webpackConfig };

            updatedConfig.optimization.splitChunks = {
                cacheGroups: {
                    sharedStyles: {
                        name: "shared-styles",
                        test: /src\/(components\/(ui|sections\/(moreproducts|about|projects|news\/newsItem)|cart\/.*|infiniteslider)\/.*\.css)$/i,  // Обновленное регулярное выражение
                        chunks: "all", 
                        enforce: true,
                    },
                },
            };

             return updatedConfig;
        },
    },
};
