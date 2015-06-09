GENERATED_FILES = \
	main-bundle.js

all: $(GENERATED_FILES)

.PHONY: clean all

clean:
	rm -f -- $(GENERATED_FILES)

# Depends on having esperanto command installed, with the command:
# npm install esperanto -g
main-bundle.js: main.js
	esperanto --type umd --name main --input $^ --output $@ --bundle
