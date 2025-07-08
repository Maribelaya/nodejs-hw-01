import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

const generateContacts = async (count = 5) => {
  try {
    const contacts = await readContacts();
    const newContacts = Array.from({ length: count }, () =>
      createFakeContact(),
    );
    const updatedContacts = [...contacts, ...newContacts];
    await writeContacts(updatedContacts);
    console.log(`Успішно додано ${count} нових контактів.`);
  } catch (error) {
    console.error('Помилка генерації контактів:', error.message);
  }
};

const args = process.argv.slice(2);
const countArg = parseInt(args[0], 10) || 5;

generateContacts(countArg);
