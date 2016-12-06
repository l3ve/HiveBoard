module.exports = {
    modules: {
        nameCleaner: (path) => path.replace(/^views\//, ''),
        autoRequire: {
            'app.js': ['build.jsx']  //启动app文件里面的brunch
        }
    },
    paths: {
        public: 'dist',
        watched: ['views']
    },
    files: {
        javascripts: {
            joinTo: 'app.js'
        },
        stylesheets: {
            joinTo:
            // {'app.css':/^views\/css\/*\.(css|less)/}
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
                require('precss')(), //编译less和sass的各种特效
                require('csswring')
            ]
        },
        babel: {
            pattern: /\.(js|jsx)$/
        }
    }
};
