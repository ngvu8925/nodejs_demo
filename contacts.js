const fs = require("fs");
const file = "contacts.json";

function loadContacts() {
  if (!fs.existsSync(file)) return [];
  return JSON.parse(fs.readFileSync(file));
}

function saveContacts(contacts) {
  fs.writeFileSync(file, JSON.stringify(contacts, null, 2));
}

function addContact(name, phone) {
  const contacts = loadContacts();
  contacts.push({ name, phone });
  saveContacts(contacts);
  console.log(`Đã thêm liên hệ: ${name} - ${phone}`);
}

function listContacts() {
  const contacts = loadContacts();
  console.log("\nDanh bạ:");
  contacts.forEach((c, i) => console.log(`${i + 1}. ${c.name} - ${c.phone}`));
}

// Demo
addContact("Nam", "0123456789");
addContact("Hoa", "0987654321");
listContacts();
