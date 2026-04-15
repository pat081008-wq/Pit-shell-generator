// ═══════════════════════════════════════════════════════════
//  MREC Pit Shell Generator — User Credentials
//  Edit this file to manage authorised users.
//  Each entry requires a username and password.
// ═══════════════════════════════════════════════════════════

const USERS = [
  { username: "admin",   password: "mrec2024"    },
  { username: "patrick", password: "changeme"    },
];

// Do not modify below this line
function checkCredentials(username, password) {
  return USERS.some(
    u => u.username.toLowerCase() === username.toLowerCase() && u.password === password
  );
}
