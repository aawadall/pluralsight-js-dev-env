/* eslint-disable no-console */
import chalk from 'chalk';
export default function getBaseUrl() {
    return getQueryStringParameterByName('useMockApi') ? 'http://localhost:3001/' : '/';
}

function getQueryStringParameterByName(name, url) {
    console.log(chalk.blue(`inside getQueryStringParameterByName`));
    console.log(chalk.blue(`name: ${name}`));
    console.log(chalk.blue(`url: ${url}`));
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    console.log(chalk.blue(`name replaced to: ${name}`));
    const regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    console.log(chalk.blue(`results set to: ${results}`));
    if (!results) return null;
    if (!results[2]) return '';

    const decodedURI =  decodeURIComponent(results[2].replace(/\+/g, " "));
    console.log(chalk.blue(`decoded URI: ${decodedURI}`));
    return decodedURI;
}