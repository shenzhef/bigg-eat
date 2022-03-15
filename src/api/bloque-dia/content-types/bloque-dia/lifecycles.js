const moment = require("moment");
moment.locale("es");

module.exports = {
  beforeCreate(event) {
    const { data, where, select, populate } = event.params;
    // if (result.nombre && result.calorias) {
    if (data.fecha) {
      console.log("dia", moment(data).format("dddd"));
      data.dia = moment(data.fecha).format("dddd");
      data.semana = moment(data).week();
    }
    // data.slug = slugify(data.nombre + "-" + data.calorias, { lower: true });
    // }
    // do something to the result;
  },
  beforeUpdate(event) {
    const { data, where, select, populate } = event.params;
    // if (result.nombre && result.calorias) {
    if (data.fecha) {
      console.log("dia", moment(data).format("dddd"));
      data.dia = moment(data.fecha).format("dddd");
      data.semana = moment(data).week();
    }
    // data.slug = slugify(data.nombre + "-" + data.calorias, { lower: true });
    // }
    // do something to the result;
  },
};
