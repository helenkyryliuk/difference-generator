install: 
	npm install
start:
    npm run babel-node -- src/bin/gendiff.js
lint:
	npm run eslint -- src
publish:
	npm publish
test:
	npm test -s
