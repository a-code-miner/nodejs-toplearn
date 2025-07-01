import { readFileSync, writeFileSync, existsSync } from 'fs'
import chalk from 'chalk'

const addContact = (fullname, phone, email) => {
    const contacts = loadContacts()
    const duplicateContacts = contacts.filter(contact => contact.fullname === fullname)
    if (duplicateContacts.length > 0) {
        console.log(chalk.red.bold('Contact already exists!'))
        return
    } else {
        contacts.push({
            fullname,
            phone,
            email
        })
        saveContacts(contacts)
        console.log(chalk.green.bold('Contact added successfully!'))
    }
}

const loadContacts = () => {
    if (!existsSync('contacts.json')) {
        return []
    } else {
        try {
            const dataBuffer = readFileSync('contacts.json')
            const dataJSON = dataBuffer.toString()
            return JSON.parse(dataJSON)
        } catch (error) {
            console.log(chalk.red.bold('Error loading contacts:', error.message))
            return []
        }
    }
}

const saveContacts = (contacts) => {
    const data = JSON.stringify(contacts)
    writeFileSync('contacts.json', data)
}

const listContacts = () => {
    try {
        const contacts = loadContacts()
        if (contacts.length === 0) {
            console.log(chalk.yellow.bold('No contacts found!'))
            return []
        } else {
            console.log(chalk.blue.bold('Contacts List:'))
            console.table(contacts.map(contact => ({
                Fullname: contact.fullname,
                Phone: contact.phone,
                Email: contact.email || 'N/A'
            })))
            // contacts.forEach(contact => {
            //     console.log(`\t${chalk.green('Fullname')}: ${contact.fullname}`)
            //     console.log(`\t${chalk.green('Phone')}: ${contact.phone}`)
            //     console.log(`\t${chalk.green('Email')}: ${contact.email || 'N/A'}`)
            //     console.log(chalk.red('\t------------------------------'))
            // })
            return contacts
        }
    } catch (error) {
        console.log(chalk.red.bold('Error listing contacts:', error.message))
        return []
    }
}

const removeContact = (fullname) => {
    const contacts = loadContacts()
    const filteredContacts = contacts.filter(contact => contact.fullname !== fullname)
    if (filteredContacts.length === contacts.length) {
        console.log(chalk.red.bold('Contact not found!'))
    } else {
        saveContacts(filteredContacts)
        console.log(chalk.green.bold('Contact removed successfully!'))
    }
}

export default {
    addContact,
    listContacts,
    removeContact,
}


