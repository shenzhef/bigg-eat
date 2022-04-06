const moment = require("moment");
moment.locale("es");

module.exports = {
    beforeCreate(event) {
        const { data, where, select, populate } = event.params;
        // if (result.nombre && result.calorias) {
        if (data.fecha) {
     
          data.semana = moment(data.fecha).week();
          data.mes = moment(data.fecha).format('MMMM')
        }
        // data.slug = slugify(data.nombre + "-" + data.calorias, { lower: true });
        // }
        // do something to the result;
      },
beforeUpdate(event) {
    const { data, where, select, populate } = event.params;
    console.log('data',data);
    if (data.fecha) {
        console.log('semana', moment(data.fecha).week());
      data.semana = moment(data.fecha).week();
      data.mes = moment(data.fecha).format('MMMM')
    }
    // data.slug = slugify(data.nombre + "-" + data.calorias, { lower: true });
    // }
    // do something to the result;
  },
}