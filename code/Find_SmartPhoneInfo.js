module.exports.function = function find_SmartPhoneInfo (comp, name, os) {
  const SmartPhoneData = require("./data/SmartPhone_Data.js");
  
  const Comp = require("./data/PhoneData/SmartPhone_Spec/Comp.js")
  
  // Samsugn SmartPhone 모음.
  const Samsung_Galaxy_S = require("./data/PhoneData/SmartPhone/Samsung/Galaxy_S.js")  // Galaxy S Series File
  const Samsung_Galaxy_Note = require("./data/PhoneData/SmartPhone/Samsung/Galaxy_Note.js")  // Galaxy Note Series File
  const Samsung_Galaxy_Fold = require("./data/PhoneData/SmartPhone/Samsung/Galaxy_Fold.js")  // Galaxy Fold Series File
  const Samsung_Galaxy_A = require("./data/PhoneData/SmartPhone/Samsung/Galaxy_A.js")  // Galaxy A Series File
  const Smasung_Galaxy_M = require("./data/PhoneData/SmartPhone/Samsung/Galaxy_M.js")  // Galaxy M Series File
  
  // LG전자 SmartPhone 모음.
  const Lg_G = require("./data/PhoneData/SmartPhone/LG/G_Series.js") // LG G Series File
  const Lg_Pro = require("./data/PhoneData/SmartPhone/LG/Pro_Series.js")  // LG Pro Seires File
  const Lg_V = require("./data/PhoneData/SmartPhone/LG/V_Series")  // LG Pro Series File
  
  // Google SmartPhone 모음
  const Google_Pixel = require(".data/PhoneData/SmartPhoneData/Google/Pixel.js")  // Google Pixel Series File
  
  const console = require("console");
  
  var Samsung = "삼성전자";
  var LG = "LG";
  var Google = "구글"
  
  var PhoneData = null;

  // 제조사의 이름과 모델을 알고 있을 경우.
  if(String(comp) =! null && String(name)  =! null && String(os) == null){
    if(Samsung_Galaxy_S[0].comp == String(comp)) {
      for(let i = 0; i < Samsung_Galaxy_S.length; i++) {  // Galaxy S Series들의 비교
        if(Samsung_Galaxy_S[i].name == String(name)) {
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
  }
  else if(Lg_G[0].comp == String(comp)) {
    
  }
  else if(Google_Pixel[0].com == String(comp)) {
    
  }
  
  // 스마트폰 이름만 알고 있는 경우.
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
