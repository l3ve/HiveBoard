module.exports = {
    modules: {
        nameCleaner: (path) => path.replace(/^views\//, ''), //src/enter
        autoRequire: {
            'app.js': ['brunch', 'build.jsx']  //启动app文件里面的brunch
        }
    },
    paths: {
        public: 'dist',
        watched: ['views']
    },
    files: {
        javascripts: {
            joinTo: 'app.js'
            // entryPoints: {
            //     'views/brunch.js': 'app1.js'
            // }
        },
        stylesheets: { joinTo:
            // {'app.css':/\css\/*.(css|less)/}
            'app.css'
        }
    },
    plugins: {
        uglify: {
            mangle: true,
            compress: true
        },
        postcss: {
            processors: [
                require('postcss-cssnext')(),//包括了autoprefixer
                // require('csswring')
            ]
        },
        babel: {
            pattern: /\.(js|jsx)$/
        }
    }
};
