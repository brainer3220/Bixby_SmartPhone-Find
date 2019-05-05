module.exports.function = function ComponyOfSmartPhone (comp) {
  const SmartPhoneData = require("./data/SmartPhone_Data.js");
  const console = require("console");

  const Samsung_Galaxy_S = require("./data/PhoneData/SmartPhone/Samsung/Galaxy_S.js")  // Galaxy S Series File
  const Samsung_Galaxy_Note = require("./data/PhoneData/SmartPhone/Samsung/Galaxy_Note.js")  // Galaxy Note Series File
  const Samsung_Galaxy_Fold = require("./data/PhoneData/SmartPhone/Samsung/Galaxy_Fold.js")  // Galaxy Fold Series File
  const Samsung_Galaxy_A = require("./data/PhoneData/SmartPhone/Samsung/Galaxy_A.js")  // Galaxy A Series File
  const Smasung_Galaxy_M = require("./data/PhoneData/SmartPhone/Samsung/Galaxy_M.js")  // Galaxy M Series File
  
  var PhoneData = new Array;
  let lent = 0;
  
  if(String(comp) =! null){
    if(Samsung_Galaxy_S[0].comp == String(comp))  {         // Samsung SmartPhone Search
      for(let i = 0; i < Samsung_Galaxy_S.length; i++)  {   // Galaxy S Series Array Add
        PhoneData[i] = Samsung_Galaxy_S[i].name;
      }
      for(let i = 0; i < Samsung_Galaxy_Note.length; i++) { // Galaxy Note Series Array Add
        PhoneData.push(Samsung_Galaxy_Note[i].name)
      }
      for(let i = 0; i < Samsung_Galaxy_Fold.length; i++) { // Galaxy Fold Series Array Add
        PhoneData.push(Samsung_Galaxy_Fold[i].name)
      }
      for(let i = 0; i < Samsung_Galaxy_A.length; i++)  {
        PhoneData.push(Samsung_Galaxy_A[i].name)
      }
    }
    else if()
  }
  
  console.log(lent)

  console.log(PhoneData[0], PhoneData[1], PhoneData[2])
  // return Phonedata;
  return [PhoneData[0], PhoneData[1], PhoneData[2]];
}