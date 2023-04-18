// sets our server & tells it where to listen
require("dotenv").config();
const app = require("./app");
const PORT = process.env.port || 3333;
app.listen(PORT, () => {
  console.log(`Sever is listening on port ${port}`);
});
