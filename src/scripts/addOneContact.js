import { createFakeContact } from '../utils/createFakeContact';
import { readContacts } from '../utils/readContacts';
import { writeContacts } from '../utils/writeContacts';

export const addOneContact = async () => {
  try {
    const contacts = await readContacts();
    contacts.push(createFakeContact());
    await writeContacts(contacts);
    console.log('Contact added successfully');
  } catch (err) {
    console.error('Error adding contact', err);
  }
};

addOneContact();
