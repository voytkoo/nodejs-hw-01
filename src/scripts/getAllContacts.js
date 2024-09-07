import { readContacts } from '../utils/readContacts';

export const getAllContacts = (async () => {
  const contacts = await readContacts();

  console.log(contacts);
})();

console.log(await getAllContacts());
