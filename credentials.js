// ═══════════════════════════════════════════════════════════
//  MREC Pit Shell Generator — User Credentials
//  Edit this file to manage authorised users.
//  Each entry requires a username and password.
// ═══════════════════════════════════════════════════════════

const USERS = [
  { username: "Patrick Richards",   password: "rT4*U5xMmX"    },
  { username: "Dean Richards", password: "gF^s$%p3mV"    },
];

// Do not modify below this line
function checkCredentials(username, password) {
  return USERS.some(
    u => u.username.toLowerCase() === username.toLowerCase() && u.password === password
  );
}
