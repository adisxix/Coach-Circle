const USERS_KEY = 'cc_users';
const CURRENT_USER_KEY = 'cc_current_user';

function safeParse(jsonValue, fallbackValue) {
  if (!jsonValue) return fallbackValue;

  try {
    return JSON.parse(jsonValue);
  } catch {
    return fallbackValue;
  }
}

export function getStoredUsers() {
  const users = safeParse(localStorage.getItem(USERS_KEY), []);
  return Array.isArray(users) ? users : [];
}

export function saveStoredUsers(users) {
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

export function getCurrentUser() {
  return safeParse(localStorage.getItem(CURRENT_USER_KEY), null);
}

export function setCurrentUser(user) {
  localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(user));
}

export function clearCurrentUser() {
  localStorage.removeItem(CURRENT_USER_KEY);
}

export function registerUser(formData) {
  const users = getStoredUsers();
  const email = formData.email.trim().toLowerCase();

  const newUser = {
    firstName: formData.firstName.trim(),
    lastName: formData.lastName.trim(),
    dob: formData.dob,
    email,
    phone: formData.phone.trim(),
    password: formData.password,
    plan: 'Free Plan',
  };

  const existingIndex = users.findIndex((u) => u.email === email);
  if (existingIndex >= 0) {
    users[existingIndex] = newUser;
  } else {
    users.push(newUser);
  }

  saveStoredUsers(users);
  setCurrentUser(newUser);
  return newUser;
}

export function loginUser(emailInput, passwordInput) {
  const email = emailInput.trim().toLowerCase();
  const users = getStoredUsers();

  const user = users.find((u) => u.email === email && u.password === passwordInput);

  if (!user) {
    return null;
  }

  setCurrentUser(user);
  return user;
}

export function getUserFullName(user) {
  if (!user) return '';
  return `${user.firstName} ${user.lastName}`.trim();
}

export function getUserInitials(user) {
  if (!user) return '';
  const initials = `${user.firstName?.[0] ?? ''}${user.lastName?.[0] ?? ''}`.toUpperCase();
  return initials;
}

export function updateCurrentUserProfile(profileData) {
  const currentUser = getCurrentUser();
  if (!currentUser) {
    return null;
  }

  const users = getStoredUsers();
  const updatedUser = {
    ...currentUser,
    firstName: profileData.firstName,
    lastName: profileData.lastName,
    linkedIn: profileData.linkedIn,
    bio: profileData.bio,
    expertise: profileData.expertise,
    avatarUrl: profileData.avatarUrl ?? currentUser.avatarUrl ?? '',
  };

  const userIndex = users.findIndex((u) => u.email === currentUser.email);
  if (userIndex >= 0) {
    users[userIndex] = updatedUser;
    saveStoredUsers(users);
  }

  setCurrentUser(updatedUser);
  return updatedUser;
}

export function updateCurrentUserPassword(currentPassword, newPassword) {
  const currentUser = getCurrentUser();
  if (!currentUser) {
    return { ok: false, reason: 'No active session found.' };
  }

  if (currentUser.password !== currentPassword) {
    return { ok: false, reason: 'Current password is incorrect.' };
  }

  const users = getStoredUsers();
  const updatedUser = { ...currentUser, password: newPassword };
  const userIndex = users.findIndex((u) => u.email === currentUser.email);

  if (userIndex >= 0) {
    users[userIndex] = updatedUser;
    saveStoredUsers(users);
  }

  setCurrentUser(updatedUser);
  return { ok: true, user: updatedUser };
}
