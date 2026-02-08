# Prompt per il nome della directory
DIR_NAME := $(shell read -p "Enter directory name: " name; echo $$name)
# Capitalizzazione
CAPITALIZED_DIR_NAME := $(shell echo $(DIR_NAME) | sed 's/.*/\u&/')
SRC_DIR := templates/component-route

# Prompt per la destinazione
DEST_TYPE := $(shell read -p "Choose destination (1 Components, 2 Routes, 3 Layouts): " choice; \
	if [ "$$choice" = "1" ]; then \
		echo "components"; \
	elif [ "$$choice" = "2" ]; then \
		echo "routes"; \
	elif [ "$$choice" = "3" ]; then \
		echo "layouts"; \
	else \
		echo "unknown"; \
	fi)

DEST_DIR := src/$(DEST_TYPE)/$(DIR_NAME)

.PHONY: all clean create-resource check-dest

create-resource: check-dest create_dir copy_files replace_component
	@echo "✅ Resource $(CAPITALIZED_DIR_NAME) created in $(DEST_DIR)"

# Validazione
check-dest:
	@if [ "$(DEST_TYPE)" = "unknown" ]; then \
		echo "❌ Error: Invalid choice. Please enter 1, 2, or 3."; \
		exit 1; \
	fi

create_dir:
	@mkdir -p $(DEST_DIR)

copy_files:
	@cp $(SRC_DIR)/Component.jsx $(DEST_DIR)/$(CAPITALIZED_DIR_NAME).jsx
	@cp $(SRC_DIR)/Component.module.js $(DEST_DIR)/$(CAPITALIZED_DIR_NAME).module.js
	@cp $(SRC_DIR)/Component.module.scss $(DEST_DIR)/$(CAPITALIZED_DIR_NAME).module.scss

replace_component:
	@# Utilizzo di sed per sostituire "Component" con il nome scelto
	@sed -i 's/Component/$(CAPITALIZED_DIR_NAME)/g' $(DEST_DIR)/$(CAPITALIZED_DIR_NAME).jsx
	@sed -i 's/Component/$(CAPITALIZED_DIR_NAME)/g' $(DEST_DIR)/$(CAPITALIZED_DIR_NAME).module.js
	@# Aggiorno anche il riferimento al CSS Module all'interno del file JSX
	@sed -i "s/Component.module/$(CAPITALIZED_DIR_NAME).module/g" $(DEST_DIR)/$(CAPITALIZED_DIR_NAME).jsx

clean:
	rm -rf $(DEST_DIR)
