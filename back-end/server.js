const app = require('./app.js');

// CONFIGURAATION
require('dotenv').config();

const PORT = process.env.PORT;

// LISTEN
app.listen(PORT, () => {
  console.log(`Posts loading on port ${PORT} 💅`);
});
