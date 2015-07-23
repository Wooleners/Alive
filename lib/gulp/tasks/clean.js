var gulp = require('gulp'),
    del = require('del');

gulp.task('clean:app',function(callback){
  del([
    'app/*'
  ], callback);
});
