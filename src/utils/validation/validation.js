const isValidEmail = function (email) {
    const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email);
  };
  /*at least 1 lowercase, at least 1 uppercase,contain at least 1 numeric character,
        at least one special character, range between 8-15*/
  const passwordVal = function (password) {
    var strongRegex = new RegExp(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*]).{8,15}$/
    );
    return strongRegex.test(password);
  };
  
 
  
  const isValidName = function (name) {
    const nameRegex = /^[a-z A-Z_]{3,20}$/;
    return nameRegex.test(name);
  };
  

  
 
  const isValidString = function (input) {
    if (typeof input == "number" || input == null || input == undefined) {
      return false;
    }
    if (typeof input == "string" && input.trim().length == 0) {
      return false;
    }
    return true;
  };
  const checkFormat=function(input)
  {
    if (!input) return false
    input = input.trim();
    if (input == "") return false;
    else return input
      
}

// image validation
const isValidImage = function (name) {
  const linkRegex =/(.png|.jpg|.jpeg)$/i;
  return linkRegex.test(name);
};
//
const checkObject=(object)=>
{
  if(Object.keys(object).length==0) return false;
  return true;
}
  
  
  
  module.exports = {isValidEmail,passwordVal,isValidName,isValidString,checkFormat,isValidImage,checkObject};