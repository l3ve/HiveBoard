const webpack = require('webpack'),
    path = require('path'),
    fs = require('fs');
var plugins = [];
var nodeModules = {};
fs.readdirSync('node_modules')
    .filter(function (x) {
        return ['.bin'].indexOf(x) === -1;
    })
    .forEach(function (mod) {
        nodeModules[mod] = 'commonjs ' + mod;
    });

module.exports = {
    entry: {
        'dist': ['build'],
        'base.style': ['css/animation', 'css/normalize']
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
        modules: [path.join(__dirname, 'views'), path.join(__dirname, 'node_modules')],
        alias: {
            'react': path.join(__dirname, '/node_modules/react/dist/react.min'),
            'react-dom': path.join(__dirname, '/node_modules/react-dom/dist/react-dom.min')
        },
        //自动补全后缀
        extensions: [".js", ".jsx", ".css", ".less", ".png", ".jpg"]
    },
    externals: { electron: 'commonjs electron'},
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
                test: /\.(css|less)$/,
                use: ['style-loader', 'css-loader?importLoaders=1', 'postcss-loader']
            }, {
                include: [path.resolve(__dirname, "views")],
                exclude: [path.resolve(__dirname, "node_modules")],
                test: /\.(png|jpg|gif)$/,
                use: 'url-loader?limit=8192'
            }, {
                test: require.resolve("fetch"),
                loader: "expose-loader?fetch"
            }
        ]
    }
}