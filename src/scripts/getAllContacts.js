import { readContacts } from '../utils/readContacts';

export const getAllContacts = async () => {
  try {
    const contacts = await readContacts();
    return contacts;
  } catch (err) {
    console.error('Failed to get contacts', err);
    return [];
  }
};

console.log(await getAllContacts());
