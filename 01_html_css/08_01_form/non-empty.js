function required()
{
var empt = document.forms["form1"]["text1"].value;
if (empt == "")
{
alert("Please input a Value");
return false;
}
else 
{
alert('Welcome to ISS');
return true; 
}
}