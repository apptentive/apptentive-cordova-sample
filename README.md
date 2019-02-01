# Apptentive Cordova Sample App

## Usage

- Clone the repo
- Add `iOS` and `Android` platforms:
  ```
  cordova platform add android
  cordova platform add ios
  ```
- Add `apptentive-cordova` plugin:
  ```
  cordova plugin add apptentive-cordova \
  	--variable ANDROID_APP_KEY="YOUR_ANDROID_KEY" \
  	--variable ANDROID_APP_SIGNATURE="YOUR_ANDROID_SIGNATURE" \
  	--variable IOS_APP_KEY="YOUR_IOS_KEY" \
  	--variable IOS_APP_SIGNATURE="YOUR_IOS_SIGNATURE" \
  	--save
  ```
