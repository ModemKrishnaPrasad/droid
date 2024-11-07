# droid
This project is a React Native mobile application that integrates Firebase for backend services and uses Fastlane for automating the build and distribution process. It aims to streamline app development, testing, and deployment, making it easier to manage both staging and production environments for Android applications.





### Project Name: Your React Native App with Firebase and Fastlane Integration
This project integrates Firebase for backend services and uses Fastlane for automated Android build and distribution. Follow the steps below to set up the development environment, Firebase services, and Fastlane for streamlined deployments.

Table of Contents
Project Setup
Setting Up Firebase
React Native Firebase Configuration
Setting Up Fastlane for Android App Distribution
1. Project Setup
Prerequisites
Node.js installed (recommended version: latest LTS)
React Native CLI installed
Android Studio set up with Android SDK and emulator
A Firebase account and a project created
Steps
Clone the repository:


git clone https://github.com/your-repo/your-project.git
cd your-project
Install dependencies:


npm install
2. Setting Up Firebase
Create a Firebase Project:

Go to the Firebase Console.
Click on Add Project and follow the setup wizard.
Add an Android App to Firebase:

In the Firebase Console, select Project Settings > General > Your Apps.
Click on Add App and select Android.
Enter the package name of your Android app (e.g., com.example.app), and click Register App.
Download google-services.json:

After registering, download the google-services.json file.
Move this file into your React Native project at android/app/.
Enable Required Firebase Services:

Enable services such as Authentication, Firestore, etc., based on your app’s requirements.
3. React Native Firebase Configuration
Step 1: Install Firebase Packages
In your React Native project, install the Firebase core package and other modules you need:


npm install @react-native-firebase/app
npm install @react-native-firebase/auth # Example for Authentication
Step 2: Update android/build.gradle
In your project’s root-level build.gradle file (located in android/build.gradle), add the Google services classpath:

gradle
Copy code
buildscript {
    dependencies {
        classpath 'com.google.gms:google-services:4.3.15'  // Check Firebase for latest version
    }
}
Step 3: Update android/app/build.gradle
In the app-level build.gradle file (located in android/app/build.gradle), add the Google services plugin and Firebase SDKs:

gradle
Copy code
apply plugin: 'com.google.gms.google-services' // At the end of the file

android {
    defaultConfig {
        multiDexEnabled true
    }
}

dependencies {
    implementation platform('com.google.firebase:firebase-bom:32.1.1') // Firebase BOM for SDK version management
    implementation 'com.google.firebase:firebase-analytics'            // Analytics SDK

    // Example: Add other Firebase services as needed
    // implementation 'com.google.firebase:firebase-auth'
}
Step 4: Initialize Firebase in Your App
In your main JavaScript file (e.g., App.js), initialize Firebase:

javascript
Copy code
import firebase from '@react-native-firebase/app';

function App() {
  // Your App code here
}

export default App;
Step 5: Run the App
Run the app to verify the Firebase setup:


npx react-native run-android
4. Setting Up Fastlane for Android App Distribution
Step 1: Install Fastlane
Install Fastlane using RubyGems (ensure Ruby is installed):


sudo gem install fastlane -NV
Navigate to your project’s Android directory:


cd android
Initialize Fastlane:


fastlane init
Step 2: Configure Fastlane for Firebase Distribution
In android/fastlane/Fastfile, set up lanes for staging and production builds with Firebase App Distribution:

ruby
Copy code
require 'dotenv/load' # Load environment variables from .env

platform :android do
  desc "Build and distribute the staging app"
  lane :stage do
    # Set environment variables
    app_id = ENV["STAGE_APP_ID"]
    version_code = ENV["STAGE_VERSION_CODE"]
    version_name = ENV["STAGE_VERSION_NAME"]
    firebase_app_id = ENV["STAGE_FIREBASE_APP_ID"]

    gradle(
      task: "clean assembleStagingRelease",
      project_dir: "./android"
    )

    # Rename and distribute APK via Firebase
    sh "mv ../android/app/build/outputs/apk/staging/release/app-staging-release.apk ../android/app/build/outputs/apk/staging/release/droid-stage.apk"

    firebase_app_distribution(
      firebase_cli_token: ENV["FIREBASE_CLI_TOKEN"],
      app: firebase_app_id,
      testers: ENV["STAGE_TESTERS"],
      release_notes: "Staging build",
      android_artifact_path: "./android/app/build/outputs/apk/staging/release/droid-stage.apk"
    )
  end

  desc "Build and distribute the production app"
  lane :live do
    # Set environment variables
    app_id = ENV["PROD_APP_ID"]
    version_code = ENV["PROD_VERSION_CODE"]
    version_name = ENV["PROD_VERSION_NAME"]
    firebase_app_id = ENV["PROD_FIREBASE_APP_ID"]

    gradle(
      task: "clean assembleProductionRelease",
      project_dir: "./android"
    )

    # Rename and distribute APK via Firebase
    sh "mv ../android/app/build/outputs/apk/production/release/app-production-release.apk ../android/app/build/outputs/apk/production/release/droid-live.apk"

    firebase_app_distribution(
      firebase_cli_token: ENV["FIREBASE_CLI_TOKEN"],
      app: firebase_app_id,
      testers: ENV["PROD_TESTERS"],
      release_notes: "Production build",
      android_artifact_path: "./android/app/build/outputs/apk/production/release/droid-live.apk"
    )
  end
end
Step 3: Configure Environment Variables
In the project root, create a .env file with the following details:

plaintext
Copy code
STAGE_APP_ID="your.staging.package.name"
STAGE_VERSION_CODE="1"
STAGE_VERSION_NAME="1.0"
STAGE_FIREBASE_APP_ID="your-firebase-staging-app-id"
STAGE_TESTERS="testers-emails-for-staging"

PROD_APP_ID="your.production.package.name"
PROD_VERSION_CODE="2"
PROD_VERSION_NAME="2.0"
PROD_FIREBASE_APP_ID="your-firebase-production-app-id"
PROD_TESTERS="testers-emails-for-production"

FIREBASE_CLI_TOKEN="your-firebase-cli-token"
Step 4: Run Fastlane Lanes
To build and distribute the app, run the following commands:

For staging:


fastlane android stage
For production:


fastlane android live
Final Notes
Ensure your Firebase Console shows the distribution releases, and testers receive emails for testing. With these steps, you’ve configured Firebase and Fastlane for Android distribution in a React Native project.

