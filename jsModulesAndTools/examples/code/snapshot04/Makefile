GENERATED_FILES = \
	functional-utils-bundle.js

all: $(GENERATED_FILES)

.PHONY: clean all

clean:
	rm -f -- $(GENERATED_FILES)

functional-utils-bundle.js: functional-utils.js
	cat functional-utils.js add.js reduce.js sum.js > functional-utils-bundle.js
