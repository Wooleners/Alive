var gulp = require("gulp"),
    config = require("../config"),
    less = require("gulp-less"),
    handleError = require("../handleError"),
    autoprefixer = require("gulp-autoprefixer");

gulp.task("build:less",function () {
  var dest = config.isDeploy ? "app/css/" : "app/";
  return gulp.src("src/modules/index/index.less")
    .pipe(less())
    .pipe(autoprefixer("last 1 version", "> 1%", "ie 8", "ie 7"))
    .on("error", handleError)
    .pipe(gulp.dest(dest))
});
