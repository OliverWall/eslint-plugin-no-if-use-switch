module.exports = {
  meta: {
    type: "suggestion",
    schema: [],
    fixable: false,
    messages: {
      sortVars: "Variables within the same declaration block should be sorted alphabetically."
    }
  },

  create(context) {
    return {
      VariableDeclaration(node) {
        const idDeclarations = node.declarations.filter(decl => decl.id.type === "Identifier");
        const getSortableName = decl => decl.id.name;

        idDeclarations.slice(1).reduce((memo, decl) => {
          const lastVariableName = getSortableName(memo);
          const currentVariableName = getSortableName(decl);

          if (currentVariableName < lastVariableName) {
            context.report({
              node: decl,
              messageId: "sortVars",
            });
            return memo;
          }
          return decl;

        }, idDeclarations[0]);
      }
    };
  }
};
