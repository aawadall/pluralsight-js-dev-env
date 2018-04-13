import 'whatwg-fetch';
import getBaseUrl from './baseUrl';
import chalk from 'chalk';

const baseUrl = getBaseUrl();

export function getUsers() {
    return get('users');
}

export function deleteUser(id) {
    return del(`users/${id}`);
    
}
function get(url) {
    return fetch(baseUrl + url).then(onSuccess, onError);
}

function del(url) {
    console.log(chalk.yellow(`deleting user ${url}`)); // eslint-disable-line no-console
    const request = new Request(baseUrl + url, {
        method: 'DELETE'
    });
    return fetch(request).then(onSuccess, onError);
}
function onSuccess(response) {
    return response.json();
}

function onError(error) {
    console.log(chalk.red(error)); //eslint-disable-line no-console
}