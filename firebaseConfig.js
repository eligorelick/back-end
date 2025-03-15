const admin = require("firebase-admin");

// Import Firebase Admin SDK credentials
const serviceAccount = require("./serviceAccountKey.json");  // Load the JSON key file

// Initialize Firebase Admin SDK
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();
const auth = admin.auth();

module.exports = { db, auth };
