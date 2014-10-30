var gulp   = require('gulp')
var concat = require('gulp-concat')
var uglify = require('gulp-uglify')
var sass   = require('gulp-sass')
var del    = require('del')

gulp.task('clean', function(cb){
  del(['public/stylesheets', 'public/js'], cb)
})

gulp.task('scripts', ['clean'], function(){
  return gulp.src(['src/javascript/*js'])
    .pipe(uglify())
    .pipe(concat('main.min.js'))
    .pipe(gulp.dest('public/js'))
})

gulp.task('stylesheets', ['clean'], function(){
  return gulp.src('src/stylesheets/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('public/stylesheets'))
})


gulp.task('default', ['scripts', 'stylesheets'])
