# 📖 Ministry Master Cloud

A lightweight, mobile-friendly web application designed to help track ministry hours, student studies, and monthly goals.

## ✨ Features
* **Live Timer:** Start and stop a timer to track your ministry in real-time.
* **Cloud Sync:** Powered by Firebase—log in from any device to see your data.
* **Offline Mode:** Works without an internet connection using a Service Worker.
* **Student Directory:** Manage your list of students and track unique studies.
* **Progress Tracking:** Visual progress bars for your monthly hour goals.
* **Dark Mode:** Easy on the eyes for evening study or early mornings.

## 🚀 How to Use
1.  **Open the App:** Access your live link via GitHub Pages.
2.  **Login/Sign Up:** Create an account to keep your data private and synced.
3.  **Log Hours:** Use the manual entry or the live timer to record your activity.
4.  **Manage Students:** Add names in the "Students" tab to select them when logging work.

## 🛠️ Technology Stack
* **Frontend:** HTML5, CSS3, JavaScript (ES6 Modules)
* **Database/Auth:** Firebase Firestore & Firebase Auth
* **PWA:** Service Worker for offline capabilities

## 🔒 Privacy
Your data is stored securely in Firebase and is only accessible via your unique login credentials.
## ⚙️ Configuration
To get this working, replace the `firebaseConfig` object in `index.html` with your own keys from the Firebase Console and ensure Firestore rules allow read/write for authenticated users.