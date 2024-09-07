import { writeContacts } from '../utils/writeContacts';

export const removeAllContacts = (async () => {
  await writeContacts([]);
  console.log('All contacts have been removed');
})();

removeAllContacts();
