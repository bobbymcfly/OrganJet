$(function(){

  var sample_url = "https://docs.google.com/spreadsheet/pub?key=0AsMGn_2Fl4CEdG1sQ1VtemtnZHRDT3pna1RzR0R6Q3c&output=csv";

  var success = function(){
    console.log(googleSpreadsheet);
    console.log(googleSpreadsheet.rows);
  };
  var fail = function(){
    console.log("fail");
  };

  var googleSpreadsheet = new GoogleSpreadsheet(sample_url, success, fail);
  // googleSpreadsheet.url(sample_url);
  // listLow = [];
  // googleSpreadsheet.load(function(result) {
  //   console.log(result);
  //   listLow.push({ })
  //   // $('#results').html(JSON.stringify(result).replace(/,/g,",\n"));
  // });



});