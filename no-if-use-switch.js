module.exports = {
  meta: {
    type: 'suggest',
    docs: {
      category: 'Stylistic Issues',
      recommended: true,
    },
    fixable: false,
    schema: [],
    messages: {
      errorIfOperator: 'Prefer using switch statement over if statement',
      errorTernaryOperator: 'Prefer using switch statement over ternary operator'
    }
  },

  create(context) {
    return {
      IfStatement(node) {
        context.report({
          node: node,
          messageId: 'errorIfOperator',
        });
      },
      ConditionalExpression(node) {
        context.report({
          node: node,
          messageId: 'errorTernaryOperator',
        });
      },
    };
  },
};
