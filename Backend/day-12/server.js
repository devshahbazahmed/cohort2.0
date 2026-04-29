const app = require("./src/app.js");
const connectDB = require("./src/config.js/db.js");

connectDB();

app.listen(3000, () => console.log("Server is running on port 3000"));
