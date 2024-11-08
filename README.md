# Droid - React Native App with Firebase and Fastlane Integration

This project is a React Native mobile application that integrates Firebase for backend services and uses Fastlane for automating the build and distribution process. It aims to streamline app development, testing, and deployment, making it easier to manage both staging and production environments for Android applications.

## Table of Contents
1. [Project Setup](#project-setup)
2. [Setting Up Firebase](#setting-up-firebase)
3. [React Native Firebase Configuration](#react-native-firebase-configuration)
4. [Setting Up Fastlane for Android App Distribution](#setting-up-fastlane-for-android-app-distribution)

---

## 1. Project Setup

### Prerequisites
- Node.js installed (recommended version: latest LTS)
- React Native CLI installed
- Android Studio set up with Android SDK and emulator
- A Firebase account and a project created

### Steps
##    1. Clone the repository:   
   - git clone https://github.com/your-repo/your-project.git
   - cd droid
   - npm install
   - cd android
   - gradle clean 
   - cd ..
   - npx react-native start
   - npx react-native run-android


## 2. Setting Up Firebase
### Create a Firebase Project
1. Go to the Firebase Console.
2. Click on Add Project and follow the setup wizard.
### Add an Android App to Firebase
1. In the Firebase Console, go to Project Settings > General > Your Apps.
2. Click on Add App and select Android.
3. Enter the package name of your Android app (e.g., com.example.app), and click Register App.
### Download google-services.json
1. After registering, download the google-services.json file.
2. Move this file into your React Native project at android/app/.
### Enable Required Firebase Services
1. Enable services such as Authentication, Firestore, etc., based on your app’s requirements in the Firebase console.

