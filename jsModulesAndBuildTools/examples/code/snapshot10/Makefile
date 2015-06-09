GENERATED_FILES = \
	main-bundle.js \
	main-bundle-min.js

all: $(GENERATED_FILES)

.PHONY: clean all

clean:
	rm -f -- $(GENERATED_FILES)

# Depends on having r.js command installed, with the command:
# npm install requirejs -g
main-bundle.js: main.js
	r.js -o build.js

# Depends on having uglifyjs command installed, with the command:
# npm install uglifyjs -g
main-bundle-min.js: main-bundle.js
	uglifyjs $^ --compress --mangle -o $@
