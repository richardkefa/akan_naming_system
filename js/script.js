var maleNames=["Kwasi", "Kwadwo", "Kwabena", "Kwatu", "Yaw", "Koh", "Kwame"];
var femaleNames=["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa","Afua", "Ama"];
var daysOfWeek=["Sunday", "Monday", "Tuesday", "Wenesday", "Thursday", "Friday", "Saturday"];

function gettingAkanName(){
  var day=parseInt(document.getElementById("day").value);
  var month=parseInt(document.getElementById("month").value);
  var year=parseInt(document.getElementById("year").value);
  var gender=getSex();
  
  var validDate=(day>0 && day<=31 && month>0 && month<=12 && year>0);
  var validGender=(gender=="male" || gender=="female");
  if (day<0 || day>31){
    alert("Enter valid day");
  }
  else if (month<0 || month>12){
    alert("Enter valid month");
  }
  else if (year<0){
    alert("Enter Valid year");
  }
  else if (validDate==false){
    alert("Field's can't be Empty");
  }
  else if (validGender==false){
    alert("Select gender");
  }
  else {
    var date=new Date(year+"/"+month+"/"+day);
    var birthDay=date.getDay();
  }
  if (gender=="male"){
    alert("You were born on "+daysOfWeek[birthDay]+" Your Akan name is "+maleNames[birthDay]);
  }
  else if (gender=="female"){
    alert("You were born on "+daysOfWeek[birthDay]+" Your Akan name is "+femaleNames[birthDay]);
  }
  function getSex(){
    var gender = document.getElementsByName("gender").value;
    for(x=0; x < gender.length(); x++){
        if (gender[x].checked) {
          return(gender[x].value);
        }
    }
  }
}

