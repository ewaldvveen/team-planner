const gulp = require('gulp'),
watch = require('gulp-watch');

// Default task
gulp.task('default', function() {
    console.log('Nice work!');
});

// Dummy html task
gulp.task('html', function() {
    console.log('html task!');
});

// CSS tasks
gulp.task('styles', function() {
   return gulp.src('./styles/styles.css').pipe(gulp.dest('.temp/styles'));
});

// Task watching the changes in various files
gulp.task('watch', function() {
    watch('./index.html', function() {
        gulp.start('html');
    });

    watch('./styles/**/*.css', function() {
        gulp.start('styles');
    })
});