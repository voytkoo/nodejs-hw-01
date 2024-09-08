import { writeContacts } from '../utils/writeContacts';

export const removeAllContacts = async () => {
  try {
    await writeContacts([]);
    console.log('All contacts have been removed');
  } catch (err) {
    console.error('Error removing all contacts', err);
  }
};

removeAllContacts();
