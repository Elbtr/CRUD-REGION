1.  tahap pertam install package yang ada di packag.json
    - npm install
2.  buat file .sequelizerc untuk melakukan initialisasi sequelizerc
3.  buat seperti ini didalam file .sequelizerc

        const path = require("path");

        module.exports = {
        config: path.resolve("src/config", "database.js"),
        "models-path": path.resolve("src/models", "models"),
        "seeders-path": path.resolve("src/models", "seeders"),
        "migrations-path": path.resolve("src/models", "migrations"),
        };

4.  ketik di terminal
    - npx sequelizer-cli init
5.  hubungkan ke data base seperti mysql
