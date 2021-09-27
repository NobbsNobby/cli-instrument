import axios from "axios";
import chalk from "chalk";

const url = "https://quotes.rest/qod";

(async () => {
    const res = await axios.get(url)
    const quote = res.data.contents.quotes[0].quote
    const author = res.data.contents.quotes[0].author
    const log = chalk.green(`${quote} - ${author}`)
    console.log(log)
})();
