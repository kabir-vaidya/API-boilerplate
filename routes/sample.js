const router = require('express').Router();
const {sampleGet, samplePost} = require("../controllers/sample");

router.get("/", sampleGet)
      .post("/", samplePost);

module.exports = router;