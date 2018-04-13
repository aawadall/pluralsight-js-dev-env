import 'whatwg-fetch';
import chalk from 'chalk';
export function getUsers() {
    return get('users');
}

function get(url) {
    return fetch(url).then(onSuccess, onError);
}

function onSuccess(response) {
    return response.json();
}

function onError(error) {
    console.log(chalk.red(error)); //eslint-disable-line no-console
}