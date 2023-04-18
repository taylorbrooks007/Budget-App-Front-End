// sets our server & tells it where to listen
require("dotenv").config();
const app = require("./app");
const port = process.env.port;
app.listen(port, () => {
  console.log(`Sever is listening on port ${port}`);
});
