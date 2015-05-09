var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function () {
  gulp.src('./src/app/scss/app.scss')
    .pipe(sass({
      errLogToConsole: true,
      sourceComments: 'normal'
    }))
    .pipe(gulp.dest('./src/app/css/'));
});

gulp.task('watch', function () {
  gulp.start('sass');
  gulp.watch('./src/app/scss/**', function () {
    setTimeout(function () {
      gulp.start('sass');
    }, 200);
  });
});
