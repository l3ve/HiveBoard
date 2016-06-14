var webpack = require('webpack'),
    path = require('path'),
    fs = require('fs'),
    precss = require('precss'),
    autoprefixer = require('autoprefixer'),
    plugin = plugin = [
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.NoErrorsPlugin(),
        new webpack.ProvidePlugin({
            'fetch': 'imports?this=>global!exports?global.fetch!whatwg-fetch'
        })
    ];

var nodeModules = {};
fs.readdirSync('node_modules')
    .filter(function (x) {
        return ['.bin'].indexOf(x) === -1;
    })
    .forEach(function (mod) {
        nodeModules[mod] = 'commonjs ' + mod;
    });
module.exports = {
    //入口文件
    entry: {
        base: ['css/animation', 'css/actrace'],
        enter: [
            'js/enter'
        ]
    },
    target: 'node',
    //输出
    output: {
        path: 'assets',
        publicPath: 'assets',
        libraryTarget: 'umd',  //打包成模块(库),可加装
        umdNamedDefine: true,  //同上
        filename: "[name].js"
    },
    externals: nodeModules,
    plugins: plugin,
    resolve: {
        //根目录遍历
        root: [process.cwd() + '/src', process.cwd() + '/node_modules'],
        alias: {
            'react': path.join(__dirname, '/node_modules/react/dist/react.min'),
            'react-dom': path.join(__dirname, '/node_modules/react-dom/dist/react-dom.min'),
            'react-redux': path.join(__dirname, '/node_modules/react-redux/dist/react-redux.min')
        },
        //自动补全后缀
        extensions: ['', '.js', '.jsx', '.css', '.less', '.png', '.jpg']
    },
    postcss: function () {
        return [precss, autoprefixer];
    },
    module: {
        //语法检查
        preLoaders: [
            {
                test: /\.(js|jsx?)$/,
                exclude: /node_modules/,
                loader: 'eslint-loader'
            },
        ],
        //减少依赖的查找
        noParse: [
            path.join(__dirname, '/node_modules/react/dist/react.min')
        ],
        loaders: [
            {
                test: /\.json$/,
                loader: 'json'
            },
            {
                test: /\.(js|jsx)$/,
                loaders: ['babel'],
                exclude: /(node_modules)/,
                include: path.join(__dirname, 'src')
            }, {
                test: /\.(less|css)$/,
                exclude: /(node_modules)/,
                loader: 'style!css!postcss'
            }, {
                test: /\.(png|jpg|gif)$/,
                exclude: /(node_modules)/,
                loader: 'url?limit=8192'
            }
        ]
    }
};