const app = require("./src/app.js");
const mongoose = require("mongoose");

function connectToDB() {
  mongoose
    .connect("your mongodb url")
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.error("Error in connecting to MongoDB", err));
}

connectToDB();

app.listen(3000, () => {
  console.log("Server started running on port 3000");
});
