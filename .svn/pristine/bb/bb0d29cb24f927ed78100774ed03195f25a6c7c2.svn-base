var gulp = require('gulp')
var extender = require('gulp-html-extend')
var runSequence = require('gulp-run-sequence'); 
var htmlmin = require('gulp-htmlmin');
var replace = require('gulp-replace');
var data = require('./replacement.js');

gulp.task('extend', function () {
    gulp.src('./html/**/*.html')
        .pipe(extender({annotations:true,verbose:false})) // default options
        .pipe(gulp.dest('./output'))
})

gulp.task('extend-dev', function () {
    gulp.src('./html/**/*.html')
        .pipe(extender({annotations:true,verbose:false})) // default options
        .pipe(replace(/\{[A-Z_0123456789]+\}/ig, function(m, code, source) {
            var attr = m.substr(1, m.length - 2)
            if(data[attr] !== undefined) {
                return typeof data[attr] === 'object' 
                    ? JSON.stringify(data[attr])
                    : data[attr];
            }
        }, {
            skipBinary: true
        }))
        /* 加上 autoloader */
        .pipe(replace('<!-- dev tools -->', '<script src="/AutoReloader.js"></script><script src="/dev.js"></script>'))
        .pipe(gulp.dest('./output'))

})



gulp.task('watch', ['extend-dev'], function () {
    gulp.watch(['./output/**/*.html'], ['minify'])
    gulp.watch(['./html/**/*.html'], ['extend-dev'])
})

gulp.task('default', ['extend'], function () {
    setTimeout(function () {
        gulp.src('./output/**/*.html')
        .pipe(htmlmin({
            collapseBooleanAttributes:true,
            collapseWhitespace:true,
            decodeEntities:true,
            html5:true,
            // lint:true,
            minifyCSS:true,
            minifyJS:true,
            processConditionalComments:true,
            removeAttributeQuotes:true,
            removeComments:true,
            removeEmptyAttributes:true,
            removeOptionalTags:true,
            removeRedundantAttributes:true,
            removeScriptTypeAttributes:true,
            removeStyleLinkTypeAttributes:true,
            removeTagWhitespace:true,
            sortAttributes:true,
            sortClassName:true,
            useShortDoctype:true
        }))
        .pipe(gulp.dest('./production'))
    }, 400)
})

gulp.task('minify', function() {
  return gulp.src('./output/**/*.html')
    .pipe(htmlmin({
        collapseBooleanAttributes:true,
        collapseWhitespace:true,
        decodeEntities:true,
        html5:true,
        // lint:true,
        minifyCSS:true,
        minifyJS:true,
        processConditionalComments:true,
        removeAttributeQuotes:true,
        removeComments:true,
        removeEmptyAttributes:true,
        removeOptionalTags:true,
        removeRedundantAttributes:true,
        removeScriptTypeAttributes:true,
        removeStyleLinkTypeAttributes:true,
        removeTagWhitespace:true,
        sortAttributes:true,
        sortClassName:true,
        useShortDoctype:true
    }))
    .pipe(gulp.dest('./dist'))
});