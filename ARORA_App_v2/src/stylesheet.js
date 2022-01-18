import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    flexDirection: "column",

  },
  screencontent: {
    flex: 8,
  },
  navbaricons: {
    width: 10,
    height: 10,
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
    margin: 20,
    justifyContent: "flex-start",
    alignItems: "flex-start",
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
    width: 30,
    height: 30,
  },

  menteescreenbuttons: {
    flexDirection: "row",
    justifyContent: "space-around",
  },

  menteebuttonsection:
  {
    flexDirection: "row",
    alignItems: "flex-start",
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
    justifyContent: "center",
    alignItems: "center",
  },

  question: {
    padding: 10,
    marginBottom: 10,
    flexDirection: "column",
    justifyContent: "left",
    alignItems: "center",
    backgroundColor: "#dddddd"
  }

})

export {styles}
