const { src, dest, watch, series }  = require("gulp");
const sass = require("gulp-sass")(require('sass'));
const csscomb = require("gulp-csscomb");

const scss = {
    src : "./src/scss/*.scss",
    dest: "./dest/scss"
}
const css = {
    dest: "./dest/css"
}

const scssCompile = () => {
    return src(scss.src)
        .pipe(csscomb())
        .pipe(sass())
        .pipe(dest(css.dest));
}
const scssSortProperty = () => {
    return src(scss.src)
        .pipe(csscomb())
        .pipe(dest(scss.dest));
}
const watchTask = () => {
    watch(scss.src, scssCompile);
    watch(scss.src, scssSortProperty);
}

exports.default = series(scssCompile, scssSortProperty, watchTask);