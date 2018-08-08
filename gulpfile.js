const gulp = require("gulp");

const imagemin = require("gulp-imagemin");
const htmlmin = require("gulp-htmlmin");
const fileInline = require("gulp-file-inline");
const javascriptObfuscator = require("gulp-javascript-obfuscator");


// 图片部署自动化压缩优化
gulp.task("imagemin", function (cb) {
    gulp.src(["./build/web-mobile/**/*.png"])
        .pipe(imagemin([
            imagemin.gifsicle({interlaced: true}),
            imagemin.jpegtran({progressive: true}),
            imagemin.optipng({optimizationLevel: 5})
        ]))
        .pipe(gulp.dest("./build/web-mobile/"))
        .on("end", cb);
});


gulp.task("htmlmin", ["imagemin"], function (cb) {
    gulp.src("./build/web-mobile/*.html")
        .pipe(fileInline())
        .pipe(htmlmin({
            collapseWhitespace: true,
            removeComments: true,
            minifyCSS: true
        }))
        .pipe(gulp.dest("./build/web-mobile/")
            .on("end", cb));
});


gulp.task("obfuscator", ["htmlmin"], function (cb) {
    gulp.src(["./build/web-mobile/project.js"])
        .pipe(javascriptObfuscator({
            compact: true,
            domainLock: [".zz-game.com"],
            mangle: true,
            rotateStringArray: true,
            selfDefending: true,
            stringArray: true,
            target: "browser"
        }))
        .pipe(gulp.dest("./build/web-mobile")
            .on("end", cb));
});

gulp.task('pull', function(){
    git.pull('origin', ['master'], function (err) {
       if (err) throw err;
    });
});
