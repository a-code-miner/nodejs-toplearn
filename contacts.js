import { readFileSync } from 'fs'
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
        console.log(chalk.green.bold('Contact added successfully!'))
    }
}

const loadContacts = () => {
    try {
        const dataBuffer = readFileSync('contacts.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (error) {
        console.log(chalk.red.bold('Error loading contacts:', error.message))
        return []
    }
}

export default {
    addContact,
}


