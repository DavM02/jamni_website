const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },

    optimization: {
        splitChunks: {
            cacheGroups: {
                // Группа для объединения стилей
                commonStyles: {
                    name: 'common-styles',   // Имя общего файла стилей
                    test: /\.css$/,          // Применяется ко всем .css файлам
                    chunks: 'all',           // Это означает, что стили будут извлекаться из всех чанков
                    enforce: true,           // Принудительно извлекает CSS в отдельный файл
                    minSize: 0,              // Минимальный размер чанка для объединения
                },
            },
        },
    },

    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                ],
            },
        ],
    },

    plugins: [
        new MiniCssExtractPlugin({
            filename: 'common-styles.css',  // Все стили собраны в этот файл
        }),
    ],
};
