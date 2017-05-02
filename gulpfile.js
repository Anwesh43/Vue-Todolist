const gulp = require('gulp')
const browserify = require('browserify')
gulp.task('compileES6',()=>{
    browserify('index.js').transform('babelify',{presets:['es2015']}).bundle().pipe(require('fs').createWriteStream('public/bundle.js'))
})
gulp.task('watchAndCompile',()=>{
    gulp.watch('index.js',['compileES6'])
})
gulp.task('default',['compileES6','watchAndCompile'])
