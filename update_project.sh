cordova plugin remove com.apptentive.cordova
cordova plugin remove apptentive-cordova
cordova platform remove android
cordova platform remove ios
cordova platform add android@7.1.1
cordova platform add ios@4.5.4
cordova plugin add apptentive-cordova --variable ANDROID_APP_KEY="ANDROID-POC-CORDOVA-ANDROID" --variable ANDROID_APP_SIGNATURE="564fb485ad6f0c216dc6fa258f9f75ce" --variable IOS_APP_KEY="IOS-POC-CORDOVA-IOS-77305432f2c1" --variable IOS_APP_SIGNATURE="8f643e7cdf64c70d6fb57002cf8bafe1"