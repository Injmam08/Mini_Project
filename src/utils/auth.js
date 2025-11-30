export function saveUser(user) {
  localStorage.setItem('safarnama_user', JSON.stringify(user));
}

export function getUser() {
  const raw = localStorage.getItem('safarnama_user');
  return raw ? JSON.parse(raw) : null;
}

export function clearUser() {
  localStorage.removeItem('safarnama_user');
}

/* registered users list (for demo only) */
const USERS_KEY = 'safarnama_users';

function readRegisteredUsers() {
  const raw = localStorage.getItem(USERS_KEY);
  return raw ? JSON.parse(raw) : [];
}

function writeRegisteredUsers(list) {
  localStorage.setItem(USERS_KEY, JSON.stringify(list));
}

/* register a new user (returns { ok, message, user }) */
export function registerUser({ name, email, password }) {
  const users = readRegisteredUsers();
  if (users.find(u => u.email === email)) {
    return { ok: false, message: 'Email already registered' };
  }
  // NOTE: storing password in localStorage is only for demo / local testing.
  const newUser = { name, email, password };
  users.push(newUser);
  writeRegisteredUsers(users);
  return { ok: true, user: { name, email } };
}

/* authenticate user (returns user without password or null) */
export function authenticateUser(email, password) {
  const users = readRegisteredUsers();
  const found = users.find(u => u.email === email && u.password === password);
  if (!found) return null;
  return { name: found.name, email: found.email };
}

export function getRegisteredUsers() {
  return readRegisteredUsers();
}