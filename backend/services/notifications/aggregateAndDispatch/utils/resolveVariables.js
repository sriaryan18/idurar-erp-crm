const resolveVariables = (template, data) => {
  const { variables } = template;
  const context = variables.reduce((acc, item) => {
    acc[item] = data?.variables[item] ?? '';
    return acc;
  }, {});
  return context;
};

module.exports = resolveVariables;
