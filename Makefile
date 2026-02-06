DIR_NAME := $(shell read -p "Enter directory name: " name; echo $$name)
CAPITALIZED_DIR_NAME := $(shell echo $(DIR_NAME) | sed 's/.*/\u&/')
SRC_DIR := templates/component-route

# Prompt user for destination folder choice
DEST_TYPE := $(shell read -p "Choose destination (1 Components, 2 Routes): " choice; \
	if [ "$$choice" = "1" ]; then echo "components"; else echo "routes"; fi)

DEST_DIR := src/$(DEST_TYPE)/$(DIR_NAME)

.PHONY: all clean

create-component: create_dir copy_files replace_component

create_dir:
	@mkdir -p $(DEST_DIR)

copy_files: create_dir
	@cp $(SRC_DIR)/Component.jsx $(DEST_DIR)/$(CAPITALIZED_DIR_NAME).jsx
	@cp $(SRC_DIR)/Component.module.js $(DEST_DIR)/$(CAPITALIZED_DIR_NAME).module.js
	@cp $(SRC_DIR)/Component.module.scss $(DEST_DIR)/$(CAPITALIZED_DIR_NAME).module.scss

replace_component: copy_files
	@sed -i 's/Component/$(CAPITALIZED_DIR_NAME)/g' $(DEST_DIR)/*

clean:
	rm -rf $(DEST_DIR)
