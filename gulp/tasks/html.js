module.exports = () =>
  $.gulp.task("html", () =>
    $.gulp
      .src($.path.src.html)
      .pipe($.gp.plumber())
      .pipe($.gp.pug())
      .pipe($.gulp.dest($.path.dist.html))
      .on("end", $.bs.reload)
  );
