var gulp = require('gulp');
var babel = require('gulp-babel');
var sourcemaps = require("gulp-sourcemaps");
var concat = require("gulp-concat");


gulp.task('default',function() {
    return gulp.src('src/js/actrace.jsx')
        .pipe(sourcemaps.init())
        .pipe(babel())
        .pipe(sourcemaps.write("."))
        .pipe(gulp.dest('dist'));
});