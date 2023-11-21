function phonenumber()
{
  var phoneno = /^[0-9]{3}[-][0-9]{3}[-][0-9]{4}$/;
  if(document.forms[0].myPhone.value.match(phoneno))
        {
      return true;
        }
      else
        {
        alert("Invalid format; please use the format xxx-xxx-xxxx");
        return false;
        }
}
