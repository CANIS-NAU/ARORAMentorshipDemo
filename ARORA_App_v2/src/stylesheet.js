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
    paddingTop: 30,
    width: '60%',
    height: '60%',
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

  homescreenmenteelist: {
    alignItems: "stretch"
  },

  homescreenmentee: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    height: 50,
    marginBottom: 3,
    marginTop: 3,
    backgroundColor: "#7897AB"
  },

  homescreenmenteeicons: {
    width: 40,
    height: 15,
    padding: 20,
    marginLeft: 3,
    marginRight: 3
  },

  homescreenmenteeflags: {
    width: 40,
    height: 15,
    padding: 20,
    position: "absolute",
    right: 10
  },

  menteeicontext: {
    width: 15,
    height: 15
  },

  menteescreen: {
    margin: 10,
  },

  moodreportlist: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "stretch",
  },

  moodreport: {
    backgroundColor: "#7897AB",
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
    justifyContent: "space-between",
    padding: 10
  },

  menteeicontext: {
    height: 20,
  },

  menteebutton: {
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
    alignItems: "center",
    backgroundColor: "#dddddd"
  },


})

export {styles}
