import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const writeContacts = async (contacts) => {
  try {
    const data = JSON.stringify(contacts, null, 2);
    await fs.writeFile(PATH_DB, data, 'utf8');
    console.log('Контакти успішно записані у файл.');
  } catch (err) {
    console.error('Помилка запису у файл:', err.message);
  }
};
