const rule = require("./sort-vars")
const RuleTester = require("eslint").RuleTester;

const ruleTester = new RuleTester();

const expectedError = {
  messageId: "sortVars",
  type: "VariableDeclarator"
}

ruleTester.run("sort-vars", rule, {
  valid: [
    "var a=10, b=4, c='abc'",
    "var a, b, c, d",
    "var b; var a; var d;",
    "var _a, a",
    "var A, a",
    "var A, b",
  ],
  invalid: [
    {
      code: "var b, a",
      output: "var a, b",
      errors: [expectedError]
    },
    {
      code: "var b , a",
      output: "var a , b",
      errors: [expectedError]
    },
    {
      code: [
        "var b,",
        "    a;"
      ].join("\n"),
      output: [
        "var a,",
        "    b;"
      ].join("\n"),
      errors: [expectedError]
    },
    {
      code: "var b=10, a=20;",
      output: "var a=20, b=10;",
      errors: [expectedError]
    },
    {
      code: "var b=10, a=20, c=30;",
      output: "var a=20, b=10, c=30;",
      errors: [expectedError]
    },
    {
      code: "var all=10, a = 1",
      output: "var a = 1, all=10",
      errors: [expectedError]
    },
    {
      code: "var b, c, a, d",
      output: "var a, b, c, d",
      errors: [expectedError]
    },
    {
      code: "var c, d, a, b",
      output: "var a, b, c, d",
      errors: 2
    },
    {
      code: "var a, A;",
      output: "var A, a;",
      errors: [expectedError]
    },
    {
      code: "var a, B;",
      output: "var B, a;",
      errors: [expectedError]
    },
    {
      code: "var a, B, c;",
      output: "var B, a, c;",
      errors: [expectedError]
    },
  ]
});
