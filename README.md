# ARORAMentorshipDemo
Team Shining Sky's Demo for ARORA Mentorship APP

React-Native Setup Instructions (That I can remember):

Install chocolatey, node js

##Run these in Powershell (some may need to be run as admin)##
npm install --global create-react-native-app
Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
npm install --global expo-cli
npm install --force
##

##Creating and running the project##
cd to project folder (may have to reopen PS not as admin)
create-react-native-app MyReactNativeApp
npm run android
##If the above fails once browser runs (prob bc no android emu) then##
expo start
##Browser will open, choose to run in mobile emulator (if connected) or in browser##
