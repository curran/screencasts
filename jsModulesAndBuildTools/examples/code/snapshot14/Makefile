GENERATED_FILES = \
	main-bundle.js

all: $(GENERATED_FILES)

.PHONY: clean all

clean:
	rm -f -- $(GENERATED_FILES)

# Depends on having browserify command installed, with the command:
# npm install browserify -g

# Also depends on having babelify installed locally
# npm install babelify
main-bundle.js: main.js
	browserify -t babelify $^ -o $@
