"use strict";

module.exports = function(grunt) {
    require("grunt-config-dir")(grunt, {
        configDir: require("path").resolve("tasks")
    });

    grunt.loadNpmTasks("grunt-makara-amdify");

    // Register group tasks
    grunt.registerTask("build", [
        "eslint",
        "eslint",
        "dustjs",
        "makara-amdify",
        "less",
        "requirejs",
        "copyto"
    ]);

    grunt.registerTask("test", ["eslint", "mochacli"]);
};
