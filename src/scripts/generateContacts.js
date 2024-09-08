import { createFakeContact } from '../utils/createFakeContact';
import { readContacts } from '../utils/readContactsContacts';
import { writeContacts } from '../utils/writeContacts';

const generateContacts = async (number) => {
  try {
    const contacts = await readContacts();
    for (let i = 0; i < number; i++) {
      contacts.push(createFakeContact());
    }
    await writeContacts(contacts);
    console.log(`${number} contacts have been generated`);
  } catch (err) {
    console.error('Error generated contacts', err);
  }
};

generateContacts(5);
