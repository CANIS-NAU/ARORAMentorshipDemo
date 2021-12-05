React-Native Setup Instructions (That I can remember):

Install chocolatey, node js

##Run these in Powershell (some may need to be run as admin)##

npm install --global create-react-native-app

Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass

npm install --global expo-cli

npm install --force

npm install --global @react-navigation/native

npm install --global react-navigation

npm install @react-navigation/native-stack

npm install react-native-screens react-native-safe-area-context   (not sure if works)

expo install react-native-screens react-native-safe-area-context
##



##Creating and running the project##

cd to project folder (may have to reopen PS not as admin)

create-react-native-app MyReactNativeApp



##Following must be run once per time PowerShell is opened:##

Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass

##Getting the app to run:##

expo start

##Browser will open, choose to run in mobile emulator (if connected) or in browser##

npm install --global @react-navigation/native
