function buttoninput(val)
{
    document.getElementById("screen").value= document.getElementById("screen").value+val;
    
}
function clearcontent()
{
    document.getElementById("screen").value="";
}
function deletecontent()
{
    var str=document.getElementById("screen").value;
    str=str.substr(0,str.length-1);
    document.getElementById("screen").value=str;
}
function result()
{
    var x=document.getElementById("screen").value;
    y=eval(x);
    document.getElementById("screen").value=y;
}