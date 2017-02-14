var gulp = require('gulp');

var sass = require('gulp-sass');

gulp.task('sass', function(){
  return gulp.src('assets/development/scss/*.scss')
    .pipe(sass({
      outputStyle: 'compressed',
      includePaths: [].concat(
        'node_modules/susy/sass',
        'node_modules/node-normalize-scss'
      ),
    }).on('error', sass.logError))
    .pipe(gulp.dest('assets/production/css/'))
});
