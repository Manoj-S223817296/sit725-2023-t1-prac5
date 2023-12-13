let express = require("express");
let app = express();

require("./dbConnection");
let router = require("./routers/router");

let port = process.env.port || 3000;
let http = require("http").createServer(app);

app.use(express.static(__dirname + "/public"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api/cat", router);

http.listen(port, () => {
  console.log("Server started");
});
