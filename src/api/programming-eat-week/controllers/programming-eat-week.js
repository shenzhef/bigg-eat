"use strict";
/**
 *  programming-eat-week controller
 */

const { createCoreController } = require("@strapi/strapi").factories;
const moment = require("moment");

module.exports = createCoreController(
  "api::programming-eat-week.programming-eat-week",
  ({ strapi }) => ({
    async find(ctx) {
      // some custom logic here
      const { query } = ctx;
      const de = [
        "Lunes",
        "Martes",
        "Miercoles",
        "jueves",
        "viernes",
        "sabado",
        "domingo",
      ];
      const capitalize = (s) => {
        return s[0].toUpperCase() + s.slice(1);
      };
      const index = de.indexOf(
        capitalize(moment(query.date).format("dddd"))
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
      );
      // Calling the default core action
      const entity = await strapi.db
        .query("api::programming-eat-week.programming-eat-week")
        .findMany({
          where: {
            fecha: query.date,
          },
          populate: [
            "dieta",
            de[index],
            `${de[index]}.alimentos`,
            `${de[index]}.alimentos.alimento`,
            // "Lunes.alimentos.alimento",
            // "Martes",
            // "Martes.alimentos",
            // "Martes.alimentos.alimento",
            // "Miercoles",
            // "Miercoles.alimentos",
            // "Miercoles.alimentos.alimento",
            // "Jueves",
            // "Jueves.alimentos",
            // "Jueves.alimentos.alimento",
            // "Viernes",
            // "Viernes.alimentos",
            // "Viernes.alimentos.alimento",
            // "Sabado",
            // "Sabado.alimentos",
            // "Sabado.alimentos.alimento",
            // "Domingo",
            // "Domingo.alimentos",
            // "Domingo.alimentos.alimento",
          ],
        });

      const sanitizedEntity = await this.sanitizeOutput(entity, ctx);
      let parsedNutrition = entity.map((diet, i) => ({
        _id: diet.id,
        blocks: diet[de[index]].map((block, i) => ({
          comida: block.comida,
          block_i: i + 1,
          date: moment("2022-04-18").format("YYYY-MM-DD"),
          dieta: diet.dieta,
          alimentos: block.alimentos,
        })),
      }));

      //ASI ES SI QUIERO TRAER TODA LA SEMANA

      // const days = [
      //   "Lunes",
      //   "Martes",
      //   "Miercoles",
      //   "Jueves",
      //   "Viernes",
      //   "Sabado",
      //   "Domingo",
      // ];
      // let daysNutrition = [];
      // console.log('day', entity)

      // days.forEach((day,i) => {
      //   if (sanitizedEntity[0][day]) {
      //     sanitizedEntity[0][day].map((dayBlock, index) => {
      //       daysNutrition.push({
      //         _id: dayBlock.id,
      //         block_i: index,
      //         alimentos: dayBlock.alimentos,
      //         comida: dayBlock.comida,
      //         date:  moment(sanitizedEntity[0].fecha).add(i,'day') ,
      //       });
      //     });
      //   }
      // });

      return parsedNutrition;
    },
  })
);
