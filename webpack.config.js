
module.exports = {
    entry: './src/scripts/index.js',

    output: {
        path: __dirname + '/public/',
        publicPath: '/',
        filename: 'bundle.js'
    },

    devServer: {
        inline: true,
        port: 3000,
        contentBase: __dirname + '/public/',
        historyApiFallback: true
    },

    module: {
            loaders: [
                {
                    test: /\.js$/,
                    loader: 'babel-loader',
                    exclude: /node_modules/,
                    query: {
                        cacheDirectory: true,
                        presets: ['es2015', 'react'],
                        plugins: ["transform-object-rest-spread"]
                    }
                },
                {
                    test: /\.scss$/,
                    loader: 'style-loader!css-loader!postcss-loader!sass-loader'
                }
            ]
        }
};
