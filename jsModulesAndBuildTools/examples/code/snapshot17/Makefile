GENERATED_FILES = \
	main-bundle.js

all: $(GENERATED_FILES)

.PHONY: clean all

clean:
	rm -f -- $(GENERATED_FILES)

# Depends on having rollup command installed, with the command:
# npm install rollup -g
main-bundle.js: main.js
	rollup --format umd --name main --input $^ --output $@
