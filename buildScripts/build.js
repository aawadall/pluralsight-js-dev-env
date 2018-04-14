/* eslint-disable no-console */
import webpack from 'webpack';
import webpackConfig from '../webpack.config.prod';
import chalk from 'chalk';

process.env.NODE_ENV = 'production';

console.log(chalk.blue('Generating minified bundle for production.'));
console.log(chalk.blue('This will take a moment...'));


webpack(webpackConfig).run((err, stats) => {
   if (err) { // Fatal Error, Stop here
       console.log(chalk.red(err));
       return 1;
   }

    const jsonStats = stats.toJson();

    if(jsonStats.hasErrors) {
        return jsonStats.errors.map(error => console.log(chalk.red(error)));
    }

    if (jsonStats.hasWarnings) {
        console.log(chalk.yellow('webpack generated the following warning(s):'));
        jsonStats.warnings.map(warning => console.log(chalk.yellow(warning)));
    }

    console.log(`Webpack Stats: ${stats}`);

    // If we have reached here then it should be a success
    console.log(chalk.green('Application built for production and and written to /dist'));

    return 0;
});