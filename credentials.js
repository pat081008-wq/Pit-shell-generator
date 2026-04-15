// ═══════════════════════════════════════════════════════════
//  MREC Pit Shell Generator — User Credentials
// ═══════════════════════════════════════════════════════════
//  Edit the USERS list below to manage access.
//
//  Format:   { username: "name", password: "password" }
//
//  Add a user:    add a new line in the same format
//  Remove a user: delete their line
//  Change password: edit the password value
//
//  ⚠ Usernames are NOT case-sensitive (patrick = Patrick = PATRICK)
//  ⚠ Passwords ARE case-sensitive
//  ⚠ Usernames must not contain spaces — use a single word or dot notation
//     e.g. "patrick" or "patrick.richards"
// ═══════════════════════════════════════════════════════════

const USERS = [
  { username: "patrick",          password: "rT4*U5xMmX"  },
  { username: "dean",             password: "gF^s$%p3mV"  },
  { username: "admin",            password: "mrec2024"     },
];

// ── Do not modify below this line ──
function checkCredentials(username, password) {
  if (!Array.isArray(USERS)) {
    console.error('credentials.js: USERS must be an array.');
    return false;
  }
  return USERS.some(function(u) {
    return u.username.toLowerCase() === username.toLowerCase().trim()
        && u.password === password;
  });
}
