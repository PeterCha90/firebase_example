import { initializeApp } from 'firebase/app';
import { getMessaging } from 'firebase/messaging';

const firebaseConfig = {
    apiKey: "****",
    authDomain: "****",
    projectId: "****",
    storageBucket: "****",
    messagingSenderId: "****",
    appId: "****",
    measurementId: "****"
  };

const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);


const TOKEN_REGISTER_URL: string = import.meta.env.VITE_TOKEN_REGISTER_URL || "";

export const sendTokenToServer = async (token: string) => {
  try {
    await fetch(TOKEN_REGISTER_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ token }),
    });
    console.log('Token sent to FastAPI');
  } catch (err) {
    console.error('Error sending token:', err);
  }
};


export { messaging };