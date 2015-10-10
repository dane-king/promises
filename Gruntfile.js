module.exports=function(grunt){
	grunt.initConfig({
		jshint: {
			all: ['src/**/*.js', 'test/**/*.js'],
			options: {
				globals: {
					jasmine:false,
					describe:false,
					expect:false,
					it:false,
					xit:false,
					beforeEach:false,
					afterEach:false,
				},
				browser: true,
				devel: true
			}
		},
		testem:{
			unit:{
				options:{
					framework:'jasmine2',
					//launch_in_dev:['PhantomJS'],
					launch_in_dev:['Chrome'],
					before_tests:'grunt jshint',
					serve_files:[
						'node_modules/q/q.js',
						'src/**/*.js',
						'test/**/*.js'
					],
					watch_files:[
						'src/**/*.js',
						'test/**/*.js'
					]
				}
			}
		}
	});
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-testem');
	grunt.registerTask('default',['testem:run:unit']);
};