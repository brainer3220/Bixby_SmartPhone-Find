module.exports.function = function find_SmartPhoneInfo (comp, name, os) {
  const SmartPhoneData = require("./data/SmartPhone_Data.js");
  const Samsung_Galaxy_S = require("./data/PhoneData/SmartPhone/Samsung/Galaxy_S.js")  // Galaxy S Series File
  const Samsung_Galaxy_Note = require("./data/PhoneData/SmartPhone/Samsung/Galaxy_Note.js")  // Galaxy Note Series File
  const Samsung_Galaxy_Fold = require("./data/PhoneData/SmartPhone/Samsung/Galaxy_Fold.js")  // Galaxy Fold Series File
  const Samsung_Galaxy_A = require("./data/PhoneData/SmartPhone/Samsung/Galaxy_A.js")  // Galaxy A Series File
  const Smasung_Galaxy_M = require("./data/PhoneData/SmartPhone/Samsung/Galaxy_M.js")  // Galaxy M Series File
  
  const console = require("console");
  
  var Samsung = "삼성전자";
  var LG = "LG";
  var Google = "구글"
  
  var PhoneData = null;

  // 제조사와 기기의 이름을 알고있을 경우 빠르게 SmartPhone_Data를 찾는다.
  if(String(comp) =! null && String(name) =! null)  {
    if(String(comp) == Samsung_Galaxy_S.comp) { // Samsung SmartPhone 비교
      for(let i = 0; i < Samsung_Galaxy_S.length; i++) {  // Galaxy S Series들의 비교
        if(Samsung_Galaxy_S.name == String(name)) {
          PhoneData = Samsung_Galaxy_S[i];
          return PhoneData;
          break;
        }
      }
      for(let i = 0; i < Samsung_Galaxy_Note.length; i++) { // Galaxy Note Series들의 비교
        if(Samsung_Galaxy_Note.name == String(name))  {
          PhoneData = Samsung_Galaxy_Note[i];
          break;
        }
      }
      for(let i = 0; i < Samsung_Galaxy_A; i++) { // Galaxy A Series들의 비교
        if(Samsung_Galaxy_A.name == String(name)) {
          Phonedata = Samsung_Galaxy_A[i];
          break;
        }
      }
    }
    else if(String(comp) == LG) {
      
    }
    else if(String(comp) == Google) {
      
    }
  }
  
  // 스마트폰 이름만 으로 찾기.
  if(SmartPhoneData[i].name == String(name) && String(comp) == null && String(os) == null) {
      for(let i = 0; i < Samsung_Galaxy_S.length; i++) {  // Galaxy S Series들의 비교
        if(Samsung_Galaxy_S.name == String(name)) {
          PhoneData = Samsung_Galaxy_S[i];
          return PhoneData;
          break;
        }
      }
      for(let i = 0; i < Samsung_Galaxy_Note.length; i++) { // Galaxy Note Series들의 비교
        if(Samsung_Galaxy_Note.name == String(name))  {
          PhoneData = Samsung_Galaxy_Note[i];
          break;
        }
      }
      for(let i = 0; i < Samsung_Galaxy_A; i++) { // Galaxy A Series들의 비교
        if(Samsung_Galaxy_A.name == String(name)) {
          Phonedata = Samsung_Galaxy_A[i];
          break;
        }
      }
  }
    PhoneData[PhoneData.length] = SmartPhoneData[i];
    return PhoneData
  
  // for(let i = 0; i < SmartPhoneData.length; i++) {
  //   if(SmartPhoneData.length == lent)  {
  //     break;
  //   }
  //   else if(SmartPhoneData.comp == String(comp) && SmartPhoneData.os == String(os))  {
  //       var lent = 0;
  //       PhoneData[PhoneData.length] = SmartPhoneData[i];
  //       lent++;
  //     }
  //   else if(SmartPhoneData[i].name == String(name) && String(comp) == null && String(os) == null) {
  //     PhoneData[PhoneData.length] = SmartPhoneData[i];
  //     return PhoneData
  //     break;
  //   }
  // }
  
  console.debug
  console.log(SmartPhoneData);
  
  // if(PhoneData.length >= 3) {
  //   return [PhoneData[0], PhoneData[1], PhoneData[2]];
  // }
  // else if(PhoneData.length == 2)  {
  //   return [PhoneData[0], PhoneData[1]];
  // }
  // else if(PhoneData.length == 1)  {
  //   return PhoneData[0];
  // }
}
