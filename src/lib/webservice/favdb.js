fav=async()=>{
  let myArray = await AsyncStorage.getItem('favt');
         if (myArray !== null) {
  _fav=JSON.parse(myArray)
}
}
module.exports={fav}
