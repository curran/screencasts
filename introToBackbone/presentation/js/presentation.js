// This service is responsible for loading and querying `presentation.json`
app.factory('presentation', function($http){

  // Stores the cached JSON data.
  var cachedConfig,

      // Maps slide names to their configurations.
      slidesByName = {}

  function getConfig(callback){
    if(cachedConfig) {
      callback(cachedConfig);
    } else {
      $http.get('presentation.json').success(function(config){

        config.slides.forEach(function(slide, index){

          // Add indices to the slides for use in nextSlide() and previousSlide().
          slide.index = index;

          // Store each slide by its name for use in the find() function.
          slidesByName[slide.name] = slide;
        });

        cachedConfig = config;
        callback(config);
      });
    }
  }

  return {
    // Returns the JSON data from `presentation.json`
    getConfig: getConfig,

    // Returns the slide entry in the JSON file by slide name.
    getSlide: function(name, callback){
      getConfig(function(config) {
        callback(slidesByName[name]);
      });
    }
  };
});
