function parseScores(scoresString) {
   // completed
   console.log(scoresString.split(" "));
   return (scoresString.split(" "));
  
}

function buildDistributionArray(scoresArray) {
   // TODO: Compete the function
   let grades = [0, 0, 0, 0, 0];

   for (i = 0; i < scoresArray.length; i++) {
      //let score = scoresArray[i];
      if (scoresArray[i] >= 90) {
            // A grade
            grades[0] += 1;
         }
      else if (scoresArray[i] >= 80 && scoresArray[i] <= 89) {
            // B grade
            grades[1] += 1;
         }
      else if (scoresArray[i] >=70 && scoresArray[i] <= 79) {
         // C grade
         grades[2] += 1;
         }
      else if (scoresArray[i] >= 60 && scoresArray[i] <= 69) {
         //D grade
         grades[3] += 1;
         }
      else if (scoresArray[i] <= 59) {
         // F grade
         grades[4] += 1;
         }
      }
   
   console.log(grades);
   if (scoresArray.length == 0) {
      return grades;
   }
   else {
      return grades;
   }
   
}

function setTableContent(userInput) {
   // TODO: Compete the function
   let firstRow;
   firstRow = document.getElementById("firstRow");
   let thirdRow;
   thirdRow = document.getElementById("thirdRow");
   let parsedScores = parseScores(userInput);
   let distArray = buildDistributionArray(parsedScores);
   

   // set first row
   for (i = 0; i < distArray.length; i++) {
      let td = document.createElement("td");
      //td.appendChild(document.createTextNode('<div style="height:'+ (distArray[i] * 10) +'px" class="bar' + i + '"></div>'));
      //let div = document.createElement("div");
      let div = '<div style="height:'+ (distArray[i] * 10) +'px" class="bar' + i + '"></div';
      //div.innerHTML = 'style="height:'+ (distArray[i] * 10) +'px" class="bar' + i + '"';
      td.innerHTML = div;
      firstRow.appendChild(td);
   }

   for (i = 0; i < distArray.length; i++) {
      let td = document.createElement("td");
      td.innerHTML = '<p>' + distArray[i] + '</p>';
      thirdRow.appendChild(td);
   }
}

// The argument can be changed for testing purposes
setTableContent("45 78 98 83 86 99 90 59");