//**start dependencies */
const express = require("express");
const app = express();
const logger = require("morgan");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3000;

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

require("./routes/htmlRoutes")(app);
require("./routes/apiRoutes")(app);

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workoutDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});
//**end dependencies */

app.listen(PORT, () => {
  console.log(`At least the app is listening on port: ${PORT}`);
});
