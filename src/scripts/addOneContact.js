import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

const addOneContact = async () => {
  try {
    const contacts = await readContacts();
    const newContact = createFakeContact();

    const updatedContacts = [...contacts, newContact];
    await writeContacts(updatedContacts);

    console.log('Один контакт успішно додано:', newContact);
  } catch (error) {
    console.error('Помилка додавання контакту:', error.message);
  }
};

addOneContact();
