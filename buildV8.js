var fs = require("fs");
var path = require("path");
var os = require("os");
var cp = require("child_process");

process.env.PYTHONPATH = path.join(__dirname, "/node_modules/node-gyp/gyp/pylib");

var buildV8WithMSBuild = function() {
	var slnPath = path.join(__dirname, "v8/3.29/v8/tools/gyp/v8.sln");

	var arch = os.arch();
	if (arch == "ia32")
		arch = "Win32";
	
	console.log("Building v8 with msbuild...");
	var child = cp.exec('"C:\\Program Files (x86)\\MSBuild\\12.0\\bin\\MSBuild.exe" /p:Configuration=release /p:Platform=' + arch + ' /t:v8 "' + slnPath + '" >build.log');
	child.stdout.pipe(process.stdout);
	child.stderr.pipe(process.stderr);
	child.on('exit', function(code) {
		if (code == 0)
			console.log("msbuild has completed successfully.");
		else
			console.log("msbuild reported an error occurred while building v8.");
		process.exit(code);
	});
};

var child = cp.exec('python v8/3.29/v8/build/gyp_v8 -Dtarget_arch=' + os.arch() + ' -Dcomponent=shared_library -Dv8_use_snapshot=false -Dv8_enable_i18n_support=0 >gyp.log');
child.stdout.pipe(process.stdout);
child.stderr.pipe(process.stderr);
child.on('exit', function() {

	if (os.type() == "Windows_NT") {
		buildV8WithMSBuild();
	} else if (os.type() == "Darwin") { //OSX
		buildV8WithXCode();
	} else { //Fall back to Make...
		buildV8WithMake();
	}
});

//console.log(JSON.stringify(process.env, null, 2));