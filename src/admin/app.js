export default {
  config: {
    locales: ["es-AR", "es"],

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
