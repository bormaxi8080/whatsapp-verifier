const chalk = require("chalk");
const log = console.log;
const checkNumbersBulk = require("./utils/checkNumbersBulk");

(async () => {
	if (process.argv.length < 3) {
		log(chalk.red.bold("No phone numbers has been passed"));
		log(chalk.blue("Example: npm run checkbulk 919898989898 919898989898"));
		process.exit(0);
	}
	const phoneNumbers = process.argv.splice(0, 2);
	log(chalk.blue(`Checking for existence numbers...`));
	const numbersExists = await checkNumbersBulk(phoneNumbers);
	log(chalk.green.bold(numbersExists));
	process.exit(0);
})();
