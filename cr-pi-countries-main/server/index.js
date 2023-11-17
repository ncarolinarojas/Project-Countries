const server = require("./src/server");
const { conn } = require('./src/db.js');
const PORT = 3001;
const {getData} = require('./src/controllers/getData.js')

conn.sync({ force: false }).then( async () => {
await getData();
server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
})
}).catch(error => console.error(error))