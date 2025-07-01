#!/usr/bin/env node

import yargs from 'yargs/yargs';
import { hideBin } from 'yargs/helpers';
import contacts from './contacts.js';
import chalk from 'chalk';

const y = yargs(hideBin(process.argv))


y
    .scriptName(`${chalk.yellow('contacts-cli')}`) // ✅ برای نمایش نام اسکریپت در خروجی
    .usage(`$0 ${chalk.redBright('<command>')} ${chalk.greenBright('[options]')}`) // ✅ برای نمایش راهنمای کلی
    .version('1.0.0') // ✅ برای نمایش نسخه
    .alias('v', 'version')
    .command({
        command: 'create',
        aliases: ['c'],
        describe: `${chalk.green('[create new contact]')}`,
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
        handler: ({ fullname, phone, email }) => {
            contacts.addContact(fullname, phone, email)
        }
    })
    .command({
        command: 'list',
        aliases: ['l'],
        describe: `${chalk.green('[list all contacts]')}`,
        handler: () => {
            contacts.listContacts()
        }
    })
    .command({
        command: 'remove',
        aliases: ['r'],
        describe: `${chalk.green('[remove a contact]')}`,
        builder: {
            fullname: {
                alias: 'f',
                describe: 'Full name of the contact to remove',
                demandOption: true,
                type: 'string',
            }
        },
        handler: ({ fullname }) => {
            contacts.removeContact(fullname)
        }
    })
    .parse(); // ✅ فقط یک بار در آخر
