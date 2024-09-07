import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const writeContacts = (async (updatedContacts) => {
  try {
    const data = JSON.stringify(updatedContacts);
    await fs.writeContacts(PATH_DB, data, 'utf8');
  } catch (error) {
    console.error('Error reading contacts', err);
  }
})();
