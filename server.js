// ========================================================
// vvv   Setup   vvv
// ========================================================
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
require("dotenv").config();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const port = process.env.PORT || 3000;

// ========================================================
// vvv   Routes for API   vvv
// ========================================================
const router = express.Router();

router.get("/", (req, res) => res.json({ message: "welcome to my api" }));

// ========================================================
// vvv   Prefix routes with /api   vvv
// ========================================================
app.use("/api", router);

// ========================================================
// vvv   Start the server   vvv
// ========================================================
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
