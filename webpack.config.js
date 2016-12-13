const webpack = require('webpack'),
    path = require('path');
var plugins = [];
module.exports = {
    entry: {
        'dist': ['build.jsx'],
        'base.style': ['css/animation','css/normalize']
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        // publicPath: '/dist/',
        library: 'umd',
        filename: '[name].js'
    },
    plugins: plugins,
    resolve: {
        //根目录遍历
        modules: [path.resolve(__dirname, 'views'), 'node_modules', __dirname],
        alias: {
            'react': path.join(__dirname, '/node_modules/react/dist/react.min'),
            'react-dom': path.join(__dirname, '/node_modules/react-dom/dist/react-dom.min')
        },
        //自动补全后缀
        extensions: [".js", ".jsx", ".css", ".less", ".png", ".jpg"]
    },
    module: {
        //减少依赖的查找
        noParse: [
            /react\.min/
        ],
        rules: [
            {
                include: [path.resolve(__dirname, "views")],
                exclude: [path.resolve(__dirname, "node_modules")],
                test: /\.(js|jsx)$/,
                use: 'babel-loader'
            }, {
                include: [path.resolve(__dirname, "views")],
                exclude: [path.resolve(__dirname, "node_modules")],
                test: /\.(css)$/,
                use: ['style-loader', 'css-loader?importLoaders=1', 'postcss-loader']
            }, {
                include: [path.resolve(__dirname, "views")],
                exclude: [path.resolve(__dirname, "node_modules")],
                test: /\.(png|jpg|gif)$/,
                use: 'url-loader?limit=8192'
            }, { test: require.resolve("fetch"), loader: "expose-loader?fetch" }
        ]
    }
}