install:
	npm install

	echo "Pon tus credenciales en el archivo credentials.js para poder acceder"
	cp credentials-dev.js credentials.js

up:
	npx cypress open