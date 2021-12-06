import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    flexDirection: "column",

  },
  screencontent: {
    flex: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },

  navigationbar: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "grey",
    justifyContent: "space-evenly",
  },

  navigationbutton: {
    margin: 10,
    alignSelf: "center",
    width: "auto",
    height: "auto",
  },

  navigationbuttonicon: {
    width: 30,
    height: 30,
  },

  navbuttontext: {
    fontSize: "100%",
    alignSelf: "center",
  },

  loginoptions: {
    flexDirection: "row",
  },

  logininput: {
    margin: 3,
    backgroundColor: "#ffffff",
  },

  loginoption: {
    margin: 5,
  },

  loginoptiontext: {
    fontSize: 8,
  },

  loginbutton: {
    padding: 3,
    backgroundColor: "#dddddd"
  },

  homescreen: {
    justifyContent: "center",
    alignitems: "center",
  },

  homescreenmentee: {
    flexDirection: "row",
    alignItems: "center",
  },

  homescreenmenteeicons: {
    width: 15,
    height: 15,
  },

  menteescreen: {
    margin: 10,
  },

  moodreportlist: {
    justifyContent: "flex-start",
    alignItems: "stretch",
  },

  moodreport: {
    flex: 1,
    backgroundColor: "grey",
    marginTop: 5,
    marginBottom: 5,
    padding: 10,
  },

  menteescreencontact: {
    flexDirection: "row",
    justifyContent: "center",

  },

  menteeicons: {
    width: 50,
    height: 50,
  },

  menteescreenbuttons: {
    flexDirection: "row",
    justifyContent: "space-around",
  },

  menteebuttonsection:
  {
    flexDirection: "row",
    alignItems: "left",
  },

  menteebutton: {
    flex: 1,
    margin: 5,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },

  menteecurrentrisk: {
    flexDirection: "row",
    jusifyContent: "center",
    alignItems: "center",
  },

})

export {styles}
