const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');
const { alias } = require('yargs');

yargs(hideBin(process.argv))
    .command({
        command: 'create',
        aliases: ['c'],
        describe: '[create new contact]',
        builder: {
            fullname: {
                alias: 'f',
                describe: 'Full name of the contact',
                demandOption: true,
                type: 'string',
            },
            phone: {
                alias: 'p',
                describe: 'Phone number of the contact',
                demandOption: true,
                type: 'number',
            },
            email: {
                alias: 'e',
                describe: 'Email address of the contact',
                demandOption: false,
                type: 'string',
            }
        },
        handler: function (argv) {
            console.log("Creating contact with name:", argv.fullname);
            console.log("Creating contact with phone:", argv.phone);
            console.log("Creating contact with email:", argv.email);
        },
    })
    .parse(); // <-- بدون این خط دستورات اجرا نمی‌شوند
