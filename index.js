const { Sequelize, DataTypes } = require('sequelize');
const database = 'sakila';
const username = 'root';
const password = '12345678';
const sequelize = new Sequelize(database, username, password, {
    host: 'localhost',
    port: 3306,
    dialect: 'mysql',
});

const Country = sequelize.define('Country', {
    // Model attributes are defined here
    country_id: {
      type: DataTypes.NUMBER,
      primaryKey: true,
    },
    country: {
      type: DataTypes.STRING
      // allowNull defaults to true
    },
    last_update: {
      type: DataTypes.DATE
      // allowNull defaults to true
    }
}, {
    freezeTableName: true,
    tableName: 'country',
    // don't add the timestamp attributes (updatedAt, createdAt)
    timestamps: false,

  });
  
  // `sequelize.define` also returns the model
  console.log(Country === sequelize.models.Country); // true

connect()

async function connect() {

    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');

        // Find all countries

        const countries = await Country.findAll();
        console.log('country_id            country                last_update');

        for (country of countries) {
           console.log(country.country_id+'            '+country.country+'                '+country.last_update);
        }

      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
}


