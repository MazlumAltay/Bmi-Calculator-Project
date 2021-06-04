const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');

const entryFile = './src/styles/App.css';
const outputFile = './src/styles/main';
const autoprefixerOptions = {
    browsers: ['last 5 versions', '> 5%', 'last 2 Chrome versions']
};

gulp.task('autoprefixer', () => {
    return gulp.src(entryFile)
        .pipe(autoprefixer(autoprefixerOptions))
        .pipe(gulp.dest(outputFile))
});

gulp.task('watch', () => {
    gulp.watch(entryFile, ['autoprefixer']);
});

gulp.task('default', ['autoprefixer', 'watch']);