install: 
	npm install
start:
	# npm run babel-node -- src/bin/gendiff.js "__tests__/__fixtures__/beforeTree.json" "__tests__/__fixtures__/afterTree.json" "plain"
    npm run babel-node -- src/bin/gendiff.js
lint:
	npm run eslint .
publish:
	npm publish
test:
	npm test -s
