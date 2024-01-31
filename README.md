# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Firebase Configuration

To use this repository with Firebase authentication, follow these steps:

1. Create a file named `firebase.config.js` in the root of your project.

2. Add the following code to `firebase.config.js`:
   
3. Obtain the required values for the apiKey, authDomain, projectId, storageBucket, messagingSenderId, appId, and measurementId from your Firebase project dashboard.

4. Replace the placeholder values in the code above with your actual Firebase project configuration.

```javascript

import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "SENDER_ID",
  appId: "APP_ID",
  measurementId: "MEASUREMENT_ID"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };

```

Now, your Firebase authentication configuration is set up and ready to use.
