import bigg from "./extensions/bigg.png";

export default {
  config: {
    locales: ["es-AR", "es"],
    head: {
      favicon: bigg,
      title: "BIGG EAT",
    },
    menu: {
      logo: bigg,
    },
    translations: {
      es: {
        "Auth.form.email.label": "test",
        Users: "Utilisateurs",
        City: "CITY (FRENCH)",
        // Customize the label of the Content Manager table.
        Id: "ID french",
      },
    },
    tutorials: false,
  },
  bootstrap(app) {
    console.log(app);
  },
};
