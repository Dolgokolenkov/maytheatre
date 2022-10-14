const {src,dest,watch,parallel,series}=require('gulp');
const scss=require('gulp-sass')(require('sass'));
const concat=require('gulp-concat');
const autoprefixer=require('gulp-autoprefixer');
const uglify=require('gulp-uglify');
const del=require('del');
const browserSync=require('browser-sync').create();
function browsersync(){
    browserSync.init({
        server:{
            baseDir:'app/'
        },
        notify:false
    })
}
function images(){
    return src('app/images/**/*.*')
    .pipe(dest('dist/images'))
}
function cleanDist(){
    return del('dist')
}
function styles(){
    return src('app/scss/**/**.scss')
    .pipe(scss({outputStyle:"compressed"}))
    .pipe(concat('style.min.css'))
    .pipe(autoprefixer({
       overrideBrowserslist: ["last 10 versions"],
       grid:true
    }))
    .pipe(dest('app/css'))
    .pipe(browserSync.stream())
}

function scripts(){
    return src([
        'node_modules/jquery/dist/jquery.js',
        'app/js/main.js',
        'app/js/mixitup.min.js',
        'app/js/slick.min.js'
    ])
    .pipe(concat('main.min.js'))
    .pipe(uglify())
    .pipe(dest('app/js'))
    .pipe(browserSync.stream())
}

function watching(){
    watch(['app/scss/**/*.scss'], styles);
    watch(['app/js/**/*.js','!app/js/main.min.js'],scripts);
    watch(['app/*.html']).on('change', browserSync.reload);
}
function build(){
    return src([
        'app/**/*.html',
        'app/css/style.min.css',
        'app/js/main.min.js',
        'app/css/reset.css',
        'app/css/slick.css',
        'app/js/mixitup.min.js',
        'app/js/slick.min.js',
        'app/js/main.js'
    ],{base:'app'})
    .pipe(dest('dist'))
}

exports.styles=styles;
exports.scripts=scripts;
exports.browsersync=browsersync;
exports.build=series(cleanDist,images,build);
exports.watching=watching;
exports.cleanDist=cleanDist;

exports.default=parallel(styles,scripts,browsersync,watching);