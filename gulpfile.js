var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var uglify = require('gulp-uglify');
var webpack = require('webpack-stream');

var inputSass = './assets/scss/**/*.scss';
var outputSass = './assets/css';

var sassOptions = {
  errLogToConsole: true,
  outputStyle: 'expanded'
};
var autoprefixerOptions = {
  browsers: ['last 2 versions', '> 5%', 'Firefox ESR']
};

gulp.task('sass', function () {
  return gulp
    .src(inputSass)
    .pipe(sourcemaps.init())
    .pipe(sass(sassOptions).on('error', sass.logError))
    .pipe(autoprefixer(autoprefixerOptions))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(outputSass));
});

gulp.task('compress', function() {
  return gulp.src('assets/js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist'));
});

gulp.task('webpack', function() {
  return gulp.src('assets/js/main.js')
    .pipe(webpack( require('./webpack.config.js') ))
    .pipe(gulp.dest('assets/js/dist/'));
});


gulp.task('watch', function() {
  gulp
    // Watch the inputSass folder for change,
    // and run `sass` task when something happens
    .watch(inputSass, ['sass'])
    // .watch('assets/js/imports', ['webpack'])
    // When there is a change,
    // log a message in the console
    .on('change', function(event) {
      console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
    });

  gulp
    .watch(['assets/js/imports/**/*', 'assets/js/main.js'], ['webpack'])
    .on('change', function(event) {
      console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
    });
});

gulp.task('default', ['sass', 'webpack', 'watch' /*, possible other tasks... */]);

gulp.task('prod', function () {
  return gulp
    .src(inputSass)
    .pipe(sass({ outputStyle: 'compressed' }))
    .pipe(autoprefixer(autoprefixerOptions))
    .pipe(gulp.dest(outputSass));
});


