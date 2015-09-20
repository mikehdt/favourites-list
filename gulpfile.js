var gulp       = require('gulp'),
    sourcemaps = require('gulp-sourcemaps'),

    sass         = require('gulp-ruby-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    minifycss    = require('gulp-minify-css'),

    concat = require('gulp-concat'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify');


// Watcher
gulp.task('watch', function () {
    gulp.watch('./style/sass/**/*.scss', ['sass']);
    gulp.watch('./js/app/**/*.js', ['uglify']);
});


// SASS
gulp.task('sass', function () {
    sass('./style/sass/*.scss', {
        sourcemap: true,
        emitCompileError: true
    })

    .on('error', function (err) { console.log(err.message); })

    .pipe(autoprefixer({
        browsers: ['last 2 version']
    }))

    .pipe(minifycss())

    .pipe(sourcemaps.write('.'))

    .pipe(gulp.dest('./style/css/'));

});


// JavaScript
gulp.task('uglify', function () {
    //I gunlguclude these in the order of model, collection, view, so that they are
    // correctly available when they go looking for each other
    gulp.src([
        './js/app/models/**/*.js',
        './js/app/collections/**/*.js',
        './js/app/views/**/*.js',
        './js/app/init.js'
    ], { base: './js/app/' })

    .pipe(sourcemaps.init())

    // Write out uncompressed file
    .pipe(concat('app.js'))

    .pipe(gulp.dest('./js/dist/'))

    // Now prepare the minified version
    .pipe(rename('app.min.js'))

    // Note: I don't drop console here for the example of outputting some
    // useful info...
    .pipe(uglify({
        mangle: true,
        preserveComments: 'some',
        compress: {
            sequences: true,
            dead_code: true,
            conditionals: true,
            booleans: true,
            unused: true,
            if_return: true,
            join_vars: true,
            drop_debugger: true,
            drop_console: false
        }
    }))

    .on('error', function (err) { console.log(err.message, '- on line', err.lineNumber); })

    .pipe(sourcemaps.write('.'))

    .pipe(gulp.dest('./js/dist/'))
});

// Run the initial tasks, then set to watch status
gulp.task('default', ['sass', 'uglify', 'watch']);
