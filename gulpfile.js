const gulp = require('gulp'),
watch = require('gulp-watch'),
postcss = require('gulp-postcss'),
autoprefixer = require('autoprefixer'),
cssvars = require('postcss-simple-vars'),
nested = require('postcss-nested');

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
   return gulp.src('./styles/styles.css')
    .pipe(postcss([cssvars, nested, autoprefixer]))
    .pipe(gulp.dest('temp/styles'));
});

// Task watching changes in various files
gulp.task('watch', function() {
    watch('./index.html', function() {
        gulp.start('html');
    });

    watch('./styles/**/*.css', function() {
        gulp.start('styles');
    })
});