import AsyncStorage from '@react-native-async-storage/async-storage';

export async function getAsyncItem(key) {
    try{
      var value = await AsyncStorage.getItem(key);
      //console.log("________________________")
      //var keys = await AsyncStorage.getAllKeys()
      //console.log(keys)
      //console.log("________________________")
      //setMentees(JSON.parse(value))
      return JSON.parse(value);
    }

    catch(err){
      console.log(err);
    }
  }

export async function setAsyncItem(key, value){
    try{
      var value = await AsyncStorage.setItem(key, JSON.stringify(value));
      //console.log("________________________")
      //var item = await AsyncStorage.getItem(key)
      //console.log(item)
      //console.log(item)
      //console.log(keys)
      //console.log("________________________")
    }

    catch(err){
      console.log(err);
    }
}

export async function removeAsyncItem(key){
    try{
      await AsyncStorage.removeItem(key);
      //console.log("________________________")
      //console.log(AsyncStorage.getAllKeys())
      //console.log("________________________")
    }

    catch(err){
      console.log(err);
    }
}

export async function getAsyncKeys(){
  try{
    var result = await AsyncStorage.getAllKeys();
    //console.log("________________________")
    //console.log(AsyncStorage.getAllKeys())
    //console.log("________________________")
  }

  catch(err){
    console.log(err);
  }
}

export async function clearAsyncStorage(){
  try{
    await AsyncStorage.clear();
    //console.log("________________________")
    //console.log(AsyncStorage.getAllKeys())
    //console.log("________________________")
  }

  catch(err){
  }
}

export async function getLogin(inputusername, inputpassword){
  return getAsyncItem("users").then(logins => {
    if (logins == null) return [];
    let success = false;
    let authority = "";
    for (let index = 0; index < logins.length; index++){
      if (logins[index].username == inputusername && logins[index].password == inputpassword){
        success = true;
        authority = logins[index].authority
        break;
      }
    }
    return [success, authority, inputusername];
  })
}

export async function getUser(username){
  return getAsyncItem("users").then(users => {
    if (users == null) return [];
    return users.find(user => user.username == username)
  })
}

export async function getMentors(username){
  return getAsyncItem("users").then(async users => {
    if (users == null) return [];

    return getUser(username).then(supervisor => {
      if (supervisor == null) return null;
      const mentorUsernames = supervisor.mentors;
      const mentors = users.filter(user => mentorUsernames.includes(user.username));
      return mentors;

    })
      
  })
}

export async function getAllUsers(authority){
  return getAsyncItem("users").then(async users => {
    if (users == null) return [];
    const authorityUsers = users.filter(user => user.authority == authority);
    return authorityUsers;

  })
}

export async function getMentees(username){
  return getAsyncItem("mentees").then(async mentees => {
    if (mentees == null) return [];
    return getUser(username).then(user => {
      if (user == null) return null;
      const menteeIds = user.mentees;
      const menteesList = mentees.filter(mentee => menteeIds.includes(mentee.id));
      return menteesList;

    })
      
  })
}

export async function getEvents(username){
  return getUser(username).then(async user => {
    if (user == null) return [];
    return user.events;
  })
}