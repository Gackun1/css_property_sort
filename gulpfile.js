const { src, dest, watch, series } = require("gulp");
const csscomb = require("gulp-csscomb");

const css = {
  src: "./src/*",
  dest: "./dest",
};

const sortProperty = () => {
  return src(css.src).pipe(csscomb()).pipe(dest(css.dest));
};
const watchTask = () => {
  watch(css.src, sortProperty);
};

exports.default = series(sortProperty, watchTask);
