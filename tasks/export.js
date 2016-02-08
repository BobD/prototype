module.exports = function(grunt) {
	var config = grunt.file.readJSON('config.json');
	var localPath = config.distribute.local;

	grunt.registerTask('export', 'Copy the production files to the proper location for further testing', function(target) {

		grunt.config('copy.export.files', [
			{expand: true, cwd: 'dist/' + target , src: ['**/*.*', '**/.*'], dest: localPath, filter: 'isFile'},
		]);

		grunt.task.run([target, 'requirejs:' + target, 'copy:dist', 'copy:export']);
	});

	grunt.registerTask('ftp', 'Copy the production files to the proper location for further testing', function(target) {
		grunt.config('copy.export.files', [
			{expand: true, cwd: 'build/' + target , src: ['**/*.*', '**/.*'], dest: localPath, filter: 'isFile'},
		]);

		grunt.task.run([target, 'ftp_push:desktop']);
	});

}