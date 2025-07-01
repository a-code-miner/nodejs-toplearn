import yargs from 'yargs/yargs';
import { hideBin } from 'yargs/helpers';
import contacts from './contacts.js';

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
        handler: function ({ fullname, phone, email }) {
            // console.log("Creating contact with name:", argv.fullname);
            // console.log("Creating contact with phone:", argv.phone);
            // console.log("Creating contact with email:", argv.email);
            contacts.addContact(fullname, phone, email)
        },
    })
    .parse(); // <-- بدون این خط دستورات اجرا نمی‌شوند
