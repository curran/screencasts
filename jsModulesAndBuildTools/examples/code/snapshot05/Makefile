GENERATED_FILES = \
	functional-utils-bundle.js \
	functional-utils-bundle-min.js

all: $(GENERATED_FILES)

.PHONY: clean all

clean:
	rm -f -- $(GENERATED_FILES)

functional-utils-bundle.js: functional-utils.js
	cat functional-utils.js add.js reduce.js sum.js > functional-utils-bundle.js

# Depends on having uglifyjs command installed, with the command:
# npm install uglifyjs -g
functional-utils-bundle-min.js: functional-utils-bundle.js
	uglifyjs $^ --compress --mangle --output $@
