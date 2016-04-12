var webpack = require('webpack'),
    path = require('path'),
    debug = JSON.stringify(JSON.parse(process.env.BUILD_DEV || 'true')),
    plugin = [];
if (debug) {
    plugin = [
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.NoErrorsPlugin(),
        new webpack.ProvidePlugin({
            'fetch': 'imports?this=>global!exports?global.fetch!whatwg-fetch'
        })
    ]
} else {
    plugin = [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.NoErrorsPlugin(),
        new webpack.ProvidePlugin({
            'fetch': 'imports?this=>global!exports?global.fetch!whatwg-fetch'
        })
    ]
}
module.exports = {
    //入口文件
    entry: {
        base: ['css/reset.css','css/animation.less','css/style.less'],
        first: [
            'js/first'
        ],
        second: [
            'js/second'
        ]
    },
    //输出
    output: {
        path: 'assets',
        publicPath: 'assets',
        libraryTarget: 'umd',  //打包成模块(库),可加装
        umdNamedDefine: true,  //同上
        filename: "[name].js"
    },
    plugins: plugin,
    resolve: {
        //根目录遍历
        root: [process.cwd() + '/src', process.cwd() + '/node_modules'],
        alias: {
            'react' : path.join(__dirname,'/node_modules/react/dist/react.min'),
            'react-dom' : path.join(__dirname,'/node_modules/react-dom/dist/react-dom.min'),
            'react-redux' : path.join(__dirname,'/node_modules/react-redux/dist/react-redux.min')
        },
        //自动补全后缀
        extensions: ['', '.js', '.jsx', '.css', '.less', '.png', '.jpg']
    },
    module: {
        //减少依赖的查找
        noParse: [
            path.join(__dirname,'/node_modules/react/dist/react.min')
        ],
        loaders: [
        {
            test: /\.(js|jsx)$/,
            loaders: ['babel?optional=runtime'],
            exclude: /(node_modules)/,
            include: path.join(__dirname, 'src')
        },{
            test: /\.(less|css)$/,
            exclude: /(node_modules)/,
            loader: 'style!css!autoprefixer!less'
        },{
            test: /\.(png|jpg|gif)$/,
            exclude: /(node_modules)/,
            loader: 'url?limit=8192'
        }
    ]
    }
};
