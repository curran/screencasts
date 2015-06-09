GENERATED_FILES = \
	main-bundle.js

all: $(GENERATED_FILES)

.PHONY: clean all

clean:
	rm -f -- $(GENERATED_FILES)

# Depends on having jspm command installed, with the command:
# npm install jspm -g
main-bundle.js: main.js
	jspm bundle-sfx main main-bundle.js
