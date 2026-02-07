//package.json configuration explanation :
//- we cannot place comment in .json, that's why we place it here
//- this -> "type": "module", (only exist if we wanna use ESM syntax). If not, then just delete it
//- for CJS syntax we set the "test": "jest" as usual
//- we set "test": "node --experimental-vm-modules node_modules/jest/bin/jest.js" only for ESM syntax
//- run the unit test code with "npm test", it will run jest package

//why we need to setup like that for ESM (ES Module) syntax? 
//- jest runs test files inside its own VM sandbox
//- that sandbox is CommonJS-first, unless you explicitly tell Node to enable ESM VM support.
//- so when Jest executes this: import sum from '../src/js-dsa-practice-1.mjs';
//- the VM says: “I’m still a CommonJS VM — what is import?”
//- that's why we got this error -> SyntaxError: Cannot use import statement outside a module
//- to run native ESM inside Jest’s VM, node must be started with: --experimental-vm-modules

//how is adding --experimental-vm-modules work? (as a started of node)
//- we do "test": "node --experimental-vm-modules node_modules/jest/bin/jest.js" in package.json
//- it means we change to this way to run jest -> node --experimental-vm-modules jest
//- we tells node: “Allow ES Modules inside vm.Script” (because jest internally uses vm.Script to run test files)
//- without this flag: .mjs is parsed, but executed as CommonJS ❌
//- with this flag: .mjs is parsed and executed as ESM ✅

//the basic model is like this: 
//- node supports ESM, 
//- jest parses ESM, 
//- but jest does NOT execute ESM unless VM modules are enabled


//ESM (ES Module) syntax
/*
import sum from '../src/js-dsa-practice-1.js';
*/
import {sum, substraction} from '../src/js-dsa-practice-1.js';

test('should add two numbers correctly:', () => {
    expect(sum(2, 3)).toBe(5);
    expect(sum(8, 15)).toBe(23);
});
test('should substract two numbers correctly:', () => {
    expect(substraction(5, 4)).toBe(1);
    expect(substraction(7, 21)).toBe(-14);
})
test('this is the third test:', () => {
    expect(sum(8, 15)).toBe(23);
    expect(substraction(7, 21)).toBe(-14);
})

//CJS (Common JS) syntax
/*
const jsDSAPractice1 = require('../src/js-dsa-practice-1.js');

test('should add two numbers correctly:', () => {
    expect(jsDSAPractice1.sum(2, 3)).toBe(5);
});
*/
