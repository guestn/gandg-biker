const gulp = require('gulp');
const concat = require('gulp-concat');
const sass = require('gulp-sass');
const child = require('child_process');
const gutil = require('gulp-util');
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const merge = require('merge-stream');
const order = require('gulp-order');
const stripdebug = require('gulp-strip-debug');
const autoprefixer = require('gulp-autoprefixer');





//const cssFiles = './css/**/*.?(s)css';
const cssFiles = './_css/**/*.scss'


gulp.task('css', () => {
  gulp.src('./_css/main.scss')
    .pipe(plumber({
      errorHandler: reportError
    }))
    .pipe(sass())
    .pipe(concat('styles.css'))
    .pipe(autoprefixer({
       cascade: false
     }))
    .pipe(gulp.dest('assets'));
});

const jsFiles = [
  'js/three.min.js',
	'js/OBJLoader.min.js',
	'js/RoadShader.js',
	'js/perlin.js',
	'js/EffectComposer.js',
	'js/RenderPass.js',
	'js/ShaderPass.js',
	'js/SavePass.js',
	'js/CopyShader.js',
	'js/VignetteShader.js',
	'js/NGGrainShader.js',
	'js/NGGrainPass.js',
	'js/anime.min.js',
  'js/homepage.js',
  'js/aboutus.js',
  'js/menu.js',
  'js/sendmail.js',
	'js/jquery-ajax.min.js'
];
const jsDest = 'dist/scripts';


gulp.task('scripts', function() {
    gulp.src(jsFiles)
    .pipe(order(jsFiles, { base: './' }))
    .pipe(concat('scripts.js'))
    // .pipe(stripdebug()) // ----> remove console.logs

    .pipe(gulp.dest(jsDest))

    .pipe(rename('scripts.min.js'))

    .pipe(uglify())
    .pipe(gulp.dest(jsDest));
});

  // gulp.task('scripts', function() {
  //     return gulp.src(jsFiles)
  //         .pipe(concat('scripts.js'))
  //         .pipe(gulp.dest(jsDest))
  //         .pipe(rename('scripts.min.js'))
  //         .pipe(uglify())
  //         .pipe(gulp.dest(jsDest));
  // });

gulp.task('compress', function() {
 gulp.src('./js/*.js')
   .pipe(minify({
       ext:{
           src:'-debug.js',
           min:'.min.js'
       },
       //exclude: ['tasks'],
       //ignoreFiles: ['.combo.js', '-min.js']
   }))
   .pipe(gulp.dest('dist'))
});


gulp.task('jekyll', () => {
  const jekyll = child.spawn('jekyll', 
  	['build',
    '--watch',
    '--incremental',
    'bundle exec'
  ]);

  const jekyllLogger = (buffer) => {
    buffer.toString()
      .split(/\n/)
      .forEach((message) => gutil.log('Jekyll: ' + message));
  };

  jekyll.stdout.on('data', jekyllLogger);
  jekyll.stderr.on('data', jekyllLogger);
});



const browserSync = require('browser-sync').create();

const siteRoot = '_site';

gulp.task('serve', () => {
  browserSync.init({
    files: [siteRoot + '/**'],
    port: 3000,
    server: {
      baseDir: siteRoot
    }
  });
  gulp.watch(cssFiles, ['css'])
  gulp.watch(jsFiles, ['scripts'])

});


gulp.task('default', ['css', 'scripts', 'jekyll', 'serve'])

function reportError(error) {
    notify({
        title: 'Gulp Task Error',
        message: 'Check the console.'
    }).write(error);

    console.log(error.toString());

    this.emit('end');
}
