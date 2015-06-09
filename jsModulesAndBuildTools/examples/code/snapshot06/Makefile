GENERATED_FILES = \
	main-bundle.js \
	main-bundle-min.js

all: $(GENERATED_FILES)

.PHONY: clean all

clean:
	rm -f -- $(GENERATED_FILES)

# Depends on having browserify command installed, with the command:
# npm install browserify -g
main-bundle.js: main.js
	browserify $^ -o $@

# Depends on having uglifyjs command installed, with the command:
# npm install uglifyjs -g
main-bundle-min.js: main-bundle.js
	uglifyjs $^ --compress --mangle -o $@
