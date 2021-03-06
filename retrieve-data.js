// This JavaScript script loads the Low, Regular, and Children's transplant center location data from the Google Spreadsheet. The data is stored in global arrays.
// OrganJet 2013

$(function(){
  // URL's of 
  var urlLow = "https://docs.google.com/spreadsheet/pub?key=AIzaSyD4wPuoiB2LcNIlFG6ozwEvpNAL6BQRm9c&single=true&gid=2&output=csv";
  var urlAll = "https://docs.google.com/spreadsheet/pub?key=AIzaSyD4wPuoiB2LcNIlFG6ozwEvpNAL6BQRm9c&single=true&gid=0&output=csv";
  var urlKid = "https://docs.google.com/spreadsheet/pub?key=AIzaSyD4wPuoiB2LcNIlFG6ozwEvpNAL6BQRm9c&single=true&gid=1&output=csv";
  
  // boolean variables to control when webpage can be executed;
  var buildLow;
  var buildAll;
  var buildKid;
  
  // declaring global arrays
  window.ListLow = [];
  window.ListAll = [];
  window.ListKid = [];
  
  // when the google spreadsheet API is called, these functions are executed.
  var successLow = function(){
    var rows = 0;
    rows = googleSpreadsheetLow.rows.length;
    for (i = 0; i < rows; i++) {
      var tmp=new Object();
      tmp.name= googleSpreadsheetLow.rows[i][0];
      tmp.add = googleSpreadsheetLow.rows[i][1]+", "+googleSpreadsheetLow.rows[i][2]+", "+googleSpreadsheetLow.rows[i][3]+" "+googleSpreadsheetLow.rows[i][4];
      tmp.lng = googleSpreadsheetLow.rows[i][5]
      tmp.lat = googleSpreadsheetLow.rows[i][6]
      tmp.web = googleSpreadsheetLow.rows[i][7]
      ListLow.push(tmp);
    };
    buildLow = true;
    // console.log(ListLow);
  };
  var successAll = function(){
    var rows = 0;
    rows = googleSpreadsheetAll.rows.length;
    for (i = 0; i < rows; i++) {
      var tmp=new Object();
      tmp.name= googleSpreadsheetAll.rows[i][0];
      tmp.add = googleSpreadsheetAll.rows[i][1]+", "+googleSpreadsheetAll.rows[i][2]+", "+googleSpreadsheetAll.rows[i][3]+" "+googleSpreadsheetAll.rows[i][4];
      tmp.lng = googleSpreadsheetAll.rows[i][5]
      tmp.lat = googleSpreadsheetAll.rows[i][6]
      tmp.web = googleSpreadsheetAll.rows[i][7]
      ListAll.push(tmp);
    };
    buildAll = true;
    // console.log(ListAll);
  };
  var successKid = function(){
    var rows = 0;
    rows = googleSpreadsheetKid.rows.length;
    for (i = 0; i < rows; i++) {
      var tmp=new Object();
      tmp.name= googleSpreadsheetKid.rows[i][0];
      tmp.add = googleSpreadsheetKid.rows[i][1]+", "+googleSpreadsheetKid.rows[i][2]+", "+googleSpreadsheetKid.rows[i][3]+" "+googleSpreadsheetKid.rows[i][4];
      tmp.lng = googleSpreadsheetKid.rows[i][5]
      tmp.lat = googleSpreadsheetKid.rows[i][6]
      tmp.web = googleSpreadsheetKid.rows[i][7]
      ListKid.push(tmp);
    };
    buildKid = true;
  };

  // this function controls when the form can be submitted.
  window.isDone = function(){
    if(buildLow && buildAll && buildKid){
      return true;
    } else {
      return false;
    }
  };

  // making calls to google spreadsheets API
  window.googleSpreadsheetLow = new GoogleSpreadsheet(urlLow, successLow, setHardCodedListLow);
  window.googleSpreadsheetAll = new GoogleSpreadsheet(urlAll, successAll, setHardCodedListAll);
  window.googleSpreadsheetKid = new GoogleSpreadsheet(urlKid, successKid, setHardCodedListKid);

});
