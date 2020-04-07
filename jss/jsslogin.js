var modal = document.getElementById('id01');
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
function loginpage()
{ 
if(document.myform.dropdown.value == "student" && document.myform.uid.value == "student@123" && document.myform.pd.value == 123)
{
alert("WELCOME  STUDENT");
window.location="student.html";
}
else if(document.myform.dropdown.value == "teacher" && document.myform.uid.value == "admin@123" && document.myform.pd.value == 123)
{ 
alert(" WELCOME TEACHER ");
window.location="js.html";
}
else{
alert(" ENTER CORRECT USERNAME AND PASSWORD ");
alert("USERNAME AND PASSWORD ARE GIVEN IN REPORT");
}

}
function welcome()
{alert("LEAVE LOGIN PAGE");
window.location="http://www.lpu.in";
}
function student1()
{alert("CONTINUE WITHOUT LOGIN");
window.location="subm.html";
}
function test()
{alert("LOGIN AS TEACHER TO UPLOAD TEST");
}
