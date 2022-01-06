const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json());

// Utils
const checkNumber = require("./utils/checkNumber");
const checkNumbersBulk = require("./utils/checkNumbersBulk");

// Check Single Number
app.get("/checknumber", async (req, res) => {
	const { phoneNumber } = req.query;
	const exists = await checkNumber(phoneNumber);
	return res.json({ phoneNumber, exists });
});

// Check Multiple Numbers
app.post("/checkbulk", async (req, res) => {
	const { phoneNumbers } = req.body;
	const result = await checkNumbersBulk(phoneNumbers);
	return res.json({ phoneNumbers, result });
});

app.listen(process.env.PORT || 3000, () => {
	console.log(`Started Server on port ${process.env.PORT || 3000}`);
});
