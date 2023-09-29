function ValidateEmail(inputText)
{
if(inputText.value==""||inputText.value==null)
{alert("enter an email");
return true;
}
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(inputText.value.match(mailformat))
{
    password();
}
else
{
alert("You have entered an invalid email address!");
return false;
}
}