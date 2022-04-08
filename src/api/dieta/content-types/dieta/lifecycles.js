const slugify = require("slugify");

module.exports = {
  beforeCreate(event) {
    const { data, where, select, populate } = event.params;
    // if (result.nombre && result.calorias) {
    data.slug = slugify(data.nombre + "-" + data.calorias, { lower: true });
    // }
    // do something to the result;
  },
  beforeUpdate(event) {
    const { data, where, select, populate } = event.params;
    // if (result.nombre && result.calorias) {
    data.slug = slugify(data.nombre + "-" + data.calorias, { lower: true });
    // }
    // do something to the result;
  },
};
