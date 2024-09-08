import { readContacts } from '../utils/readContacts';
import { writeContacts } from '../utils/writeContacts';

export const removeLastContact = async () => {
  try {
    const contacts = await readContacts();
    if (contacts.length > 0) {
      contacts.pop();
      await writeContacts(contacts);
      console.log('Last contact has been removed');
    } else {
      console.log('No contacts to remove');
    }
  } catch (err) {
    console.error('Error removing the last contact', err);
  }
};

removeLastContact();
