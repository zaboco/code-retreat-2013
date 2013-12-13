module.exports = function(grunt) {
  grunt.loadNpmTasks("grunt-mocha-test");
  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks("grunt-livescript");

  var lsc = "grunt-livescript/node_modules/LiveScript"
  grunt.initConfig({
    watch: {
      spec: { files: ["spec/*-spec.*", "src/*.*"] }
    },
    mochaTest: {
      options: { require: lsc },
      test: { src: "spec/*.ls"},
      spec: { options: {reporter: "spec"}, src: "spec/*.ls" },
      testjs: { src: "spec/*.js" }
    },
  });

  grunt.event.on('watch', function(action, filepath, target) {
    specPath = filepath.replace(/src([\/\\].*)\.[lj]s/, 'spec$1-spec.ls');
    grunt.log.ok('________________________________________');
    grunt.util.spawn({
      cmd: 'mocha',
      args: ['--compilers', 'ls:' + lsc, '-R', 'min', specPath],
      opts: {stdio: 'inherit'}
    }, function done() {
      grunt.log.ok('========================================');
    });
  });

  grunt.task.registerTask('test', ['mochaTest:test']);
  grunt.task.registerTask('testjs', ['mochaTest:testjs']);
  grunt.task.registerTask('spec', ['mochaTest:spec']);
  grunt.task.registerTask('default', ['watch']);
}
