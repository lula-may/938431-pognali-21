const gulp = require("gulp");
const del = require("del");
const plumber = require("gulp-plumber");
const sourcemap = require("gulp-sourcemaps");
const sass = require("gulp-sass");
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const csso = require("postcss-csso");
const htmlmin = require("gulp-htmlmin");
const imagemin = require("gulp-imagemin");
const terser = require("gulp-terser");
const webp = require("gulp-webp");
const svgstore = require("gulp-svgstore");
const rename = require("gulp-rename");
const sync = require("browser-sync").create();

// Clean

const clean = () => {
  return del("build");
};

exports.clean = clean;

// Copy

const copy = () => {
  return gulp.src([
    "source/fonts/*.{woff,woff2}",
    "source/img/**/*.{jpg,png,svg}",
    "source/js/**/*.js"
  ],
  {
    base: "source"
  })
  .pipe(gulp.dest("build"));
};

exports.copy = copy;

// HTML

const html = () => {
  return gulp.src("source/*.html")
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest("build"))
    .pipe(sync.stream());
};

exports.html = html;

// Styles

const styles = () => {
  return gulp.src("source/sass/style.scss")
    .pipe(plumber())
    .pipe(sourcemap.init())
    .pipe(sass())
    .pipe(postcss([
      autoprefixer()
      // csso()
    ]))
    // .pipe(rename("style.min.css"))
    .pipe(sourcemap.write("."))
    .pipe(gulp.dest("build/css"))
    .pipe(sync.stream());
};

exports.styles = styles;

// JS

const js = () => {
  return gulp.src("build/js/**/*.js")
    .pipe(terser())
    .pipe(rename({
      suffix: ".min"
    }))
    .pipe(gulp.dest("build/js"))
    .pipe(sync.stream());
};

exports.js = js;

// Images

const images = () => {
  return gulp.src("build/img/**/*.{jpg,png,svg}")
    .pipe(imagemin([
      imagemin.mozjpeg({progressive: true}),
      imagemin.optipng({optimizationLevel: 3}),
      imagemin.svgo({
        plugins: [
          {removeViewBox: false}
        ]})
    ]))
    .pipe(gulp.dest("build/img"));
};

exports.images = images;

// WebP

const createWebp = () => {
  return gulp.src("build/img/*.{jpg,png}")
    .pipe(webp({quality: 90}))
    .pipe(gulp.dest("build/img"));
};

exports.createWebp = createWebp;

// Sprite

const sprite = () => {
  return gulp.src("build/img/icons/*.svg")
    .pipe(svgstore())
    .pipe(rename("sprite.svg"))
    .pipe(gulp.dest("build/img"));
};

exports.sprite = sprite;

// Server
const server = (done) => {
  sync.init({
    server: {
      baseDir: "build"
    },
    cors: true,
    notify: false,
    ui: false,
  });
  done();
};

exports.server = server;

// Watcher

const watcher = () => {
  gulp.watch("source/sass/**/*.scss", gulp.series("styles"));
  gulp.watch("source/*.html", gulp.series("html"));
  gulp.watch("source/js/**/*.js", gulp.series("js"));
};

// Build

const build = gulp.series(
  clean,
  copy,
  gulp.parallel(
    html,
    styles,
    js,
    images,
    createWebp
  ),
  sprite
);

exports.build = build;

// Default

exports.default = gulp.series(
  clean,
  copy,
  gulp.parallel(
    html,
    styles,
    sprite,
    createWebp
  ),
    gulp.series(
      server, watcher
    )
);
