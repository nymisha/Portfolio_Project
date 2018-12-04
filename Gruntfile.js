module.exports = function(grunt) {
  grunt.initConfig({
    responsive_images: {
      dev: {
        options: {
         ngine: 'gm',
          sizes: [
            { 
                width: 600 ,
             suffix: '_2x',
            quality: 60 }
          ]
        },
        files: [
          {
            expand: true,
            src: ['*.{jpg,png}'],
            cwd: 'images_src/',
            dest: 'images/'
          }
          ]
      }
    }
  });
grunt.loadNpmTasks('grunt-responsive-images');
  grunt.registerTask('default', ['responsive_images']);
};