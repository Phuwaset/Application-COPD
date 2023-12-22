
// ********************************************************************************************

// App Script

// ***********************************************************************************************


function doGet() {
    return HtmlService.createTemplateFromFile('index')
    .evaluate()
    .addMetaTag('viewport', 'width=device-width, initial-scale=1')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL)
  }
  function submitData(first_name) {
    var ss = SpreadsheetApp.openById("1JPt4rgWrW36_N7cSq3INYW-4UOGYU-OofI4F86HQs3A");
    var sheet = ss.getSheetByName("formdata");
    var flag = 1;
  
    // Get the data range excluding the header row
    var dataRange = sheet.getRange(2, 1, sheet.getLastRow() - 1, sheet.getLastColumn());
    var data = dataRange.getValues();
  
    for (var i = 0; i < data.length; i++) {
      var name = data[i][1]; // Assuming the first name is in the second column
      if (name == first_name) {
        flag = 0;
        var id = data[i][0];
        var colB = data[i][1];
        var colC = data[i][2];
        var colD = data[i][3];
        var colE = data[i][4];
        var colF = data[i][5];
        var colG = data[i][6];
        var colH = data[i][7];
  
        var htmlOutput = "<table><tr><th colspan=2>ข้อมูลส่วนตัว.</th></tr><tr><td>ไอดี:</td><td>" +
          id + "</td> </tr><tr> <td>ชื่อ สกุล:</td><td>" + colB + " &nbsp; " + colC + "</td> </tr><tr> <td>วันเกิด:</td><td>" +
          colD + "</td></tr> <tr><td>เพศ:</td><td>" + colE + "</td></tr> <tr><td>ค่าความดันโลหิต:</td><td>" + colF +
          "</td></tr> <tr><td>ระดับนํ้าตาลในเลือด:</td><td>" + colG + "</td></tr> <tr><td>ค่าน้ำตาลเฉลี่ยสะสมในเลือด:</td><td>" + colH + "</td></tr> </table>";
        return htmlOutput;
      }
    }
  
    if (flag == 1) {
      var notFoundMessage = "ไม่พบข้อมูล.";
      return notFoundMessage;
    }
  };

//   <!DOCTYPE html>
//   <html>
  
//   <head>
//     <base target="_top" />
//     <h2>โปรดกรอกชื่อของคุณกับระบบค้นหาข้อมูล</h2>
//     <style>
//       input {
//         width: 40%;
//         padding: 12px 20px;
//         margin: 8px 0;
//         display: inline-block;
//         border: 1px solid #ccc;
//         border-radius: 4px;
//         box-sizing: border-box;
//       }
  
//       table {
//         font-family: times;
//         border-collapse: collapse;
//         width: 50%;
//       }
  
//       td,
//       th {
//         border: 1px solid #dddddd;
//         text-align: left;
//         padding: 8px;
//       }
  
//       tr:nth-child(even) {
//         background-color: #dddddd;
//       }
//     </style>
//   </head>
  
//   <body align="center">
//     <input type="text" id="first_name" placeholder="พิมพ์ชื่อ"/>
//     <br>
//     <input type="submit" value="ค้นหา" onclick="info()"/>
//     <hr>
//     <center>
//       <div id="result"></div>
//     </center>
//     <script>
//       function info() {
//     let firstName = document.querySelector('#first_name').value; // เปลี่ยนจาก '#id' เป็น '#first_name'
//     let updateLocation = document.querySelector('#result');
//     updateLocation.innerHTML = "กำลังค้นหา...";
  
//     function onFailure(error){
//       let warning = "<span style='color:red'>"+error+"</span>";
//       updateLocation.innerHTML = warning;
//     };
    
//     function onSuccess(response){
//       let result ="<span style='color:blue'>"+response+"</span>";
//       updateLocation.innerHTML = result;
//     };
//     google.script.run.withFailureHandler(onFailure)
//                      .withSuccessHandler(onSuccess)
//                      .submitData(firstName); // เปลี่ยนจาก 'obj' เป็น 'firstName'
//   };
  
//     </script>
//   </body>
  
//   </html>