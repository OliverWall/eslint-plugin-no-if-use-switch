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
      errorIfOperator: 'Нельзя использовать if, используйте switch',
      errorTernaryOperator: 'Нельзя использовать тернарный оператор, используйте switch',
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
