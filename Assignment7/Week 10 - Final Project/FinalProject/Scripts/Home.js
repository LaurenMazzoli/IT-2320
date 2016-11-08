var Main = {};

Main.Account = function(name, currentGpa)
{
    //build this object from json?
    this.Name = name;
    this.CurrentGPA = currentGpa);
}

function buildAccountBox1()
{
       
}
function buildAccountBox2()
{
// stub
}
function buildLoginBox()
{
    
    var contentBox1 = document.getElementsByClassName("contentBox1")[0];

    alert("contentBox: "+contentBox1);
    var loginText="Already have an account with us? blah blah blah..."
    new column = createDiv(loginText, "loginBox1");
    contentBox1.appendChild(column);
    column = createDiv("box2","loginBox2");
    contentBox1.appendChild(column);
    // add 3 rows to this new div and an event handler for login button
}
function buildCreateAccountBox()
{ 
        // copy code from build login box and add event handler for button
} 
 ///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////
  
function CreateDiv(text, className)
{

    var newDiv = document.createElement("div");
    
    newDiv.className = className;

    newDiv.innerHTML = text;

    return newDiv;

}

$(document).ready(function()
{
    // ?check to see if logged in somehow. if logged in then call build account else build login

    buildLoginBox();
    buildCreateAccountBox();
    $(".loginButton").click(function()
    {
        //login button event handler will call service
    });

    $(".createAccountButton").click(function()
    {
        // create account event handler will call service
    });
}
}
});