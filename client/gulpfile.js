var gulp = require('gulp');
var babel = require('gulp-babel');
var react = require('gulp-react');
var eslint = require('gulp-eslint');
var sourcemaps = require("gulp-sourcemaps");
var concat = require("gulp-concat");



gulp.task('eslint', function () {
    return gulp.src(['src/js/*.jsx', '!node_modules/**'])
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
});

gulp.task('build', ['eslint'], function () {
    return gulp.src(['src/js/*.jsx', , '!node_modules/**'])
        .pipe(sourcemaps.init())
        .pipe(babel({
            presets: ['es2015', 'react']
        }))
        .pipe(sourcemaps.write("."))
        .pipe(gulp.dest('dist'));
});
gulp.task('watch', ['build'], function () {
    gulp.watch('src/js/*.jsx', ['build']);
})

gulp.task('default', ['watch']);