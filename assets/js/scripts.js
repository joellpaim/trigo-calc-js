function pravTrojuhelnik() {
    var stranaA = eval(document.pTrojuhelnik.stranaA.value.replace(",",".").replace(/ /g,""));
    var stranaB = eval(document.pTrojuhelnik.stranaB.value.replace(",",".").replace(/ /g,""));
    var stranaC = eval(document.pTrojuhelnik.stranaC.value.replace(",",".").replace(/ /g,""));
    var alfa = eval(document.pTrojuhelnik.alfa.value.replace(",",".").replace(/ /g,""));
    var beta = eval(document.pTrojuhelnik.beta.value.replace(",",".").replace(/ /g,""));
    var jednotkaU = document.pTrojuhelnik.jednotkaU.value;
    var obsah;
    var objem;
    var desMistaL = document.pTrojuhelnik.desMistaL.value; 
    
    if ((document.pTrojuhelnik.stranaA.value != "")&&(document.pTrojuhelnik.stranaB.value != "")) { //a,b   
       // document.getElementById("latex").src = "form/script/pt/1.svg";
    } else if ((document.pTrojuhelnik.stranaA.value != "")&&(document.pTrojuhelnik.stranaC.value != "")) { //a,c
      if (stranaA > stranaC) {  //test prepony
       document.pTrojuhelnik.stranaC.value = "ERROR: a > c";
       return;
      } else {
       stranaB = Math.sqrt(stranaC*stranaC - stranaA*stranaA); 
       // document.getElementById("latex").src = "form/script/pt/2.svg";
      }
    } else if ((document.pTrojuhelnik.stranaA.value != "")&&(document.pTrojuhelnik.alfa.value != "")) { //a, alfa
     if (document.pTrojuhelnik.jednotkaU.value != "rad") {
      alfa =  alfa * Math.PI / 180;
     }
     stranaB = stranaA / Math.tan(alfa); 
     // document.getElementById("latex").src = "form/script/pt/3.svg";
    } else if ((document.pTrojuhelnik.stranaA.value != "")&&(document.pTrojuhelnik.beta.value != "")) { //a,beta
     if (document.pTrojuhelnik.jednotkaU.value != "rad") {
      beta =  beta * Math.PI / 180;
     }
     stranaB = stranaA * Math.tan(beta);
     // document.getElementById("latex").src = "form/script/pt/4.svg";
    } else if ((document.pTrojuhelnik.stranaB.value != "")&&(document.pTrojuhelnik.stranaC.value != "")) { //b,c
      if (stranaB > stranaC) {  //test prepony
       document.pTrojuhelnik.stranaC.value = "ERROR: b > c";
       return;
      } else {
       stranaA = Math.sqrt(stranaC*stranaC - stranaB*stranaB);  
       // document.getElementById("latex").src = "form/script/pt/5.svg";
      }
    } else if ((document.pTrojuhelnik.stranaB.value != "")&&(document.pTrojuhelnik.alfa.value != "")) {  //b,alfa
     if (document.pTrojuhelnik.jednotkaU.value != "rad") {
      alfa =  alfa * Math.PI / 180;
     }
     stranaA = stranaB * Math.tan(alfa); 
     // document.getElementById("latex").src = "form/script/pt/6.svg";
    } else if ((document.pTrojuhelnik.stranaB.value != "")&&(document.pTrojuhelnik.beta.value != "")) {  //b, beta
     if (document.pTrojuhelnik.jednotkaU.value != "rad") {
      beta =  beta * Math.PI / 180;
     }
     stranaA = stranaB / Math.tan(beta); 
     // document.getElementById("latex").src = "form/script/pt/7.svg";
    } else if ((document.pTrojuhelnik.stranaC.value != "")&&(document.pTrojuhelnik.alfa.value != "")) { //c,alfa
     if (document.pTrojuhelnik.jednotkaU.value != "rad") {
      alfa =  alfa * Math.PI / 180;
     }
     stranaA = stranaC * Math.sin(alfa);
     stranaB = stranaC * Math.cos(alfa);   
     // document.getElementById("latex").src = "form/script/pt/8.svg";
    } else if ((document.pTrojuhelnik.stranaC.value != "")&&(document.pTrojuhelnik.beta.value != "")) { //c, beta
     if (document.pTrojuhelnik.jednotkaU.value != "rad") {
      beta =  beta * Math.PI / 180;
     }
     stranaA = stranaC * Math.cos(beta);
     stranaB = stranaC * Math.sin(beta);  
     // document.getElementById("latex").src = "form/script/pt/9.svg";
    } else {
     error1.style.color = "#cf000f";
     error1.style.fontWeight = "bold";  
     location.href = "#error1";
     return;
    }
   
   stranaC = Math.sqrt(stranaA*stranaA + stranaB*stranaB); 
   alfa = Math.asin(stranaA/stranaC);
   beta = Math.asin(stranaB/stranaC);
   if (jednotkaU != "rad") {
    alfa = alfa * 180 / Math.PI;
    beta = beta * 180 / Math.PI;
    }
   document.pTrojuhelnik.alfa.value = ((alfa.toFixed(4)).toString()).replace(".",",");
   document.pTrojuhelnik.beta.value = ((beta.toFixed(4)).toString()).replace(".",",");
   
   obsah = stranaA * stranaB / 2;
   document.pTrojuhelnik.obsah.value = ((obsah.toFixed(desMistaL)).toString()).replace(/\B(?=(?:\d{3})+(?!\d))/g, " ").replace(".",",");
   
   obvod = stranaA + stranaB + stranaC;
   document.pTrojuhelnik.obvod.value = ((obvod.toFixed(desMistaL)).toString()).replace(/\B(?=(?:\d{3})+(?!\d))/g, " ").replace(".",",");
   
   document.pTrojuhelnik.stranaA.value = ((stranaA.toFixed(desMistaL)).toString()).replace(/\B(?=(?:\d{3})+(?!\d))/g, " ").replace(".",",");
   document.pTrojuhelnik.stranaB.value = ((stranaB.toFixed(desMistaL)).toString()).replace(/\B(?=(?:\d{3})+(?!\d))/g, " ").replace(".",",");
   document.pTrojuhelnik.stranaC.value = ((stranaC.toFixed(desMistaL)).toString()).replace(/\B(?=(?:\d{3})+(?!\d))/g, " ").replace(".",","); 
   
   document.pTrojuhelnik.obsah.style.borderBottom = document.pTrojuhelnik.obvod.style.borderBottom = "3px double #666666";
   }
    
  function uvolniDML() {
  if (document.pTrojuhelnik.desMistaL.value == "2") {
    document.pTrojuhelnik.desMistaL.value = "";
  }
 }
 function zaplnDML() {
  if (document.pTrojuhelnik.desMistaL.value == "") {
    document.pTrojuhelnik.desMistaL.value = "2";
  }
 }
 