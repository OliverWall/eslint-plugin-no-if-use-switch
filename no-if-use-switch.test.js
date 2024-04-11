const { RuleTester } = require('eslint');
const rule = require('./no-if-use-switch');

const ruleTester = new RuleTester();

const errorMessageSwitch = { messageId: 'errorIfOperator' };
const errorMessageTernary = { messageId: 'errorTernaryOperator' };

ruleTester.run('no-if-use-switch', rule, {
  valid: [
    {
      code: 'switch (variable) { case 1: break; default: break; }',
    },
    {
      code: 'switch (variable) { case 1: case 2: break; default: break; }',
    },
    {
      code: 'switch (variable) { case 1: console.log("Case 1"); break; default: console.log("Default case"); break; }',
    },
  ],
  invalid: [
    {
      code: 'if (condition) { console.log("If statement"); }',
      errors: [errorMessageSwitch],
    },
    {
      code: 'if (condition) { console.log("If statement"); } else if (condition) { console.log("Else if statement"); }',
      errors: [errorMessageSwitch, errorMessageSwitch],
    },
    {
      code: 'if (condition) { console.log("If statement"); } else { console.log("Else statement"); }',
      errors: [errorMessageSwitch],
    },
    {
      code: 'const result = condition ? "true" : "false";',
      errors: [errorMessageTernary],
    },
    {
      code: 'function foo() { return condition ? value1 : value2; }',
      errors: [errorMessageTernary],
    },
    {
      code: 'if (condition) { a = 2 ? true : false }',
      errors: [errorMessageSwitch, errorMessageTernary],
    },
  ],
});
