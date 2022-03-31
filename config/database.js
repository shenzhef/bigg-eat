const path = require("path");

module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      port: env.int("DATABASE_PORT", 25060),
      database: env("DATABASE_NAME", "db-eat"),
      user: env("DATABASE_USERNAME", "db-eat"),
      password: env("DATABASE_PASSWORD", "kAXUIS8DOkzvvHSE"),
      host: env(
        "DATABASE_HOST",
        "app-146eac7f-6ccc-492f-a220-59f2b43bd15b-do-user-11248998-0.b.db.ondigitalocean.com"
      ),
      ssl: {
        rejectUnauthorized: env.bool("DATABASE_SSL_SELF", false), // For self-signed certificates
      },
      // filename: path.join(
      //   __dirname,
      //   "..",
      //   env("DATABASE_FILENAME", "./tmp/data.db")
      // ),
    },
    useNullAsDefault: true,
  },
});
