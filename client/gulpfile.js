var gulp = require('gulp');
var less = require('gulp-less');
var babel = require('gulp-babel');
var react = require('gulp-react');
var eslint = require('gulp-eslint');
var sourcemaps = require("gulp-sourcemaps");
var concat = require("gulp-concat");


gulp.task('less',function() {
    return gulp.src('src/css/*.less')
        .pipe(less({}))
        .pipe(gulp.dest('dist/css'));
})
gulp.task('eslint', function () {
    return gulp.src(['src/js/*.jsx', '!node_modules/**'])
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
});

gulp.task('jsx', ['eslint'], function () {
    return gulp.src(['src/js/*.jsx', , '!node_modules/**'])
        .pipe(sourcemaps.init())
        .pipe(babel({
            presets: ['es2015', 'react']
        }))
        .pipe(sourcemaps.write("."))
        .pipe(gulp.dest('dist/js'));
});
gulp.task('watch', ['jsx','less'], function () {
    gulp.watch('src/js/*.jsx', ['jsx']);
    gulp.watch('src/css/*.less', ['less']);
})

gulp.task('default', ['watch']);