//var Main = {};
//Main.Account = function(name, currentGpa)
//{
    //build this object from json?
//    this.Name = name;
//    this.CurrentGPA = currentGpa);
//}
///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////

function BuildAccountBox1()
{
    // *** stub ***       
    // change this to use same code as login and pass textString and boxname='account' or 'login'
    var contentBox2 = $(".contentBox2");
    
    var textString="New users, please create a new acccount by ";
    textString += "providing us with some basic information.";

    createDiv(contentBox2, textString, "accountBox1");//create account box 1 and populate contents
    createDiv(contentBox2,"","accountBox2");//create account box 2
    populateAccountBox2();
}
///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////

function populateAccountBox2()
{
    // *** stub ***
    // duplicate code from login function here
    //
}
///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////

function buildLoginBox()
{   
    var contentBox1 = $(".contentBox1");
    
    var textString="Already have an account with us?";
    textString += "Returning users may log in by entering their site username and password.";

    createDiv(contentBox1, textString, "loginBox1");
    createDiv(contentBox1, "", "loginBox2");
    populateLoginBox2();
}

function populateLoginBox2()
{
  var loginBox2 = $(".loginBox2");

  createRow(loginBox2,"Username", 0);
  createRow(loginBox2,"Password", 1);
  createRow(loginBox2,"", 2);
}

function createRow(parent, rowType, i)
{

    createDiv(parent, "", "row");
    var row = $('.row');
    createDiv($(row[i]),rowType, "col1");
    createDiv($(row[i]), "", "col2");
    var col2 = $('.col2');

    if (rowType == "")
    {
        createButton("loginButton", $(col2[i]));
    }
    else
    {
        createTextbox(rowType, $(col2[i]));
    }
}

function createTextbox(fieldName, parent)
{
    $('<input/>').attr({
        type: "Text",
        class: "textbox",
        name: fieldName
    }).appendTo(parent);
}
function createButton(className, parent)
{
    var button = $('<button/>').attr({
        type: "button",
        class: className
    }).appendTo(parent);
    button.text("Log In");
}
function buildCreateAccountBox()
{ 
        // copy code from build login box and add event handler for button
} 
///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////

function createDiv(parent, textString, className)
{
    var element = $("<div></div").text(textString).addClass(className);
    parent.append(element);
}

$(document).ready(function()
{

// this will only be executed once. Build the login screen here. 

    buildLoginBox();
    buildCreateAccountBox();

//   $(".loginButton").click(function()
//   {
//       //login button event handler will call service to validate and read account
//   });
//
//    $(".createAccountButton").click(function()
//    {
//        //will call service to validate and create account 
//   });
//
});