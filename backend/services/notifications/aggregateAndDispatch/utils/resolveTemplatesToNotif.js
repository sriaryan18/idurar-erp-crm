const Handlebars = require('handlebars');
const resolveTemplateToNotif = (templateStr, context) => {
  const compiledStr = Handlebars.compile(templateStr);
  return compiledStr(context);
};

module.exports = resolveTemplateToNotif;
