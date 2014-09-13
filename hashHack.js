// short engineering challenge from tech company

var hashHack = function(str, email){
  var hash = CryptoJS.MD5("Message");
  var alphanumericChar = [];
  alphanumericChar = addChar(alphanumericChar, 97, 122);
  alphanumericChar = addChar(alphanumericChar, 65, 90);
  alphanumericChar = addChar(alphanumericChar, 46);
  alphanumericChar = addChar(alphanumericChar, 48, 57);
  alphanumericChar = addChar(alphanumericChar, 95);
  alphanumericChar = addChar(alphanumericChar, 64);
  alphanumericChar = addChar(alphanumericChar, 43);
  var charLen = alphanumericChar.length;
  var count = 0;
  var findChar = function(address, count){
    for(var i = 0; i < charLen; i++){
      for(var j = 0; j < charLen; j++){
        if(count === 28){
          return address;
        }
        var hashInput = address + alphanumericChar[i] + alphanumericChar[j];
        var output = CryptoJS.MD5(CryptoJS.MD5(email).toString() + hashInput + CryptoJS.MD5(hashInput).toString()).toString();
        if(output === str.slice(32 * count, 32 * (count + 1))){
          return findChar(hashInput, ++count);
        }
      }    
    }  
  };
  return findChar('', 0);
};

var addChar = function(arr, num1, num2){
  if(num2 === undefined){
    arr.push(String.fromCharCode(num1));
  }else{
    for(var i = num1; i <= num2; i++){
      arr.push(String.fromCharCode(i));
    }
  }
  return arr;
}

