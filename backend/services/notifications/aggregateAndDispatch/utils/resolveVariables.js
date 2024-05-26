const resolveVariables = (template, data) => {
  const { variables } = template;
  const context = variables.reduce((acc, item) => {
    acc[item] = 'dummyData'; // TODO: this has to be fetched from DB
    return acc;
  }, {});
  return context;
};

module.exports = resolveVariables;
