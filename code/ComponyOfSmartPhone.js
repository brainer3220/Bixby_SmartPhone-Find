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
  
  for(let i = 0; i < SmartPhoneData.length; i++) {
    if(SmartPhoneData[i].comp == String(comp)) {
      PhoneData[lent] = SmartPhoneData[i];
      lent++;
    }
  }
  
  console.log(lent)
  // for(let i = 0; i < lent; i++){
  //   if(PhoneData.length =! i) {
  //     return PhoneData[i];
  //     console.log(i)
  //   }
  // }
  console.log(PhoneData[0], PhoneData[1], PhoneData[2])
  // return Phonedata;
  return [PhoneData[0], PhoneData[1], PhoneData[2]];
}
