$(function(){

  var sample_url = "https://docs.google.com/spreadsheet/pub?key=0AsMGn_2Fl4CEdG1sQ1VtemtnZHRDT3pna1RzR0R6Q3c&output=csv";

  var buildFirst;
  var buildSecond;

  var successOne = function(){
    console.log(googleSpreadsheet);
    console.log(googleSpreadsheet.rows);
    buildFirst = true;
  };
  var successTwo = function(){
    console.log(googleSpreadsheet);
    console.log(googleSpreadsheet.rows);
    buildFirst = true;
  };
  var fail = function(){
    console.log("fail");
  };

  window.isDone = function(){
    if(buildFirst && buildSecond){
      return true;
    } else {
      return false;
    }

  };

  window.googleSpreadsheet = new GoogleSpreadsheet(sample_url, successOne, fail);



});