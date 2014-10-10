{
	'targets': [
	{
		'target_name': 'v8_node',
		
		"include_dirs": [
			"v8/3.29/v8/build/Release",
			"v8/3.29/v8/build/Release/lib",
			"v8/3.29/v8/src",
			"src"
		],
		"sources": [ 
			"src/v8_node_main.cpp"
		],
		'conditions': [
			["OS=='linux'", {
				"cflags": [
					"-O2",
					"-std=c++0x",
					"-pedantic-errors",
					"-Wall",
					"-fstrict-aliasing",
					"-fomit-frame-pointer"
				]
			}]
		]
	}]
}
