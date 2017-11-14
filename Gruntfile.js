module.exports = function (grunt) {
	grunt.initConfig({
		jekyll: {                             // Task
			options: {                          // Universal options
				bundleExec: true,
				limit_posts: 15,                 // Limit / posts
				verbose: 'true'
			},
			dist: {                             // Target
				options: {
					config: '_config.yml'
				}
			},
			serve: {                            // Another target
				options: {
					serve: true,
					dest: '.jekyll',
					drafts: true,
					future: true
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-jekyll');

	grunt.registerTask('default', ['jekyll']);
};
