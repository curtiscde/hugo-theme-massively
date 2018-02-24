var gulp = require("gulp");
var ghPages = require('gulp-gh-pages');

gulp.task('deploy', function() {
  return gulp.src('./exampleSite/public/**/*')
    .pipe(ghPages({
      "remoteUrl": "git@github.com:curttimson/hugo-theme-massively.git"
    }));
});