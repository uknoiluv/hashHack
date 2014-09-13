// short engineering challenge from tech company

var hashHack = function(str, email){
  var hash = CryptoJS.MD5("Message");
  var alphanumericChar = [];
  var charCode = [[97, 122], [65, 90], [46], [48,57], [95], [64], [43]];
  for(var k = 0; k < charCode.length; k++){
    alphanumericChar = addChar.apply(null, [alphanumericChar].concat(charCode[k]));
  }
  var charLen = alphanumericChar.length;
  var count = 0;
  var strLen = str.length / 32;
  var findChar = function(address, count){
    for(var i = 0; i < charLen; i++){
      for(var j = 0; j < charLen; j++){
        if(count === strLen){
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

