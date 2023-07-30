const express = require("express");
const router = express.Router();
const { getContact } = require('../controllers/contactController')


router.route("/").get(getContact);

router.route("/").get();

router.route("/").post();

router.route("/:id").put();

router.route("/:id").delete();

module.exports = router;
