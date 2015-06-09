// This is the configuration file for r.js
({
    baseUrl: ".",
    include: "main",
    out: "main-bundle.js",

    // Trigger Almond to be included in the bundle.
    name: "almond",

		// Turn off minification so we can see the bundle structure.
		optimize: "none",

    // Wrap the entire bundle in an IIFE.
		wrap: true
})
