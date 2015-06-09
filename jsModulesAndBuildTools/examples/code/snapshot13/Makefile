GENERATED_FILES = \
	main-bundle.js

all: $(GENERATED_FILES)

.PHONY: clean all

clean:
	rm -f -- $(GENERATED_FILES)


# Depends on having browserify command installed, with the command:
# npm install browserify -g

# Also depends on having deamdify installed locally
# npm install deamdify

main-bundle.js: main.js
	browserify -t deamdify $^ -o $@
