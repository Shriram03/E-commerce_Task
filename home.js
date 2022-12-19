var productlist=[];
function showQuantity4(){
     document.getElementById("Quantity").style.display="block";
    var name=document.getElementById("bill4").textContent;
     productlist.push(name);
}
function showQuantity3(){
    document.getElementById("qUantity").style.display="block";
    var name=document.getElementById("bill3").textContent;
     productlist.push(name);
}
function showQuantity2(){
    document.getElementById("quAntity").style.display="block";
    var name=document.getElementById("bill2").textContent;
     productlist.push(name);
}

function showQuantity1(){
    document.getElementById("quaNtity").style.display="block";
    var name=document.getElementById("bill1").textContent;
     productlist.push(name);
}



function show(){
let text = "<ul>";
productlist.forEach(myFunction);
text += "</ul>";
document.getElementById("demo").innerHTML = text;

function myFunction(value) {
  text += "<li>" + value + "</li>";}
}

     var p1=290;
     var p2=230;
     var p3=190;
     var p4=150;
     
     
     
     

function checkout(){
     var total=0;
     for(let i=0;i<productlist.length;i++){
          if(productlist[i]=="Vaseline Moisturizer"){
               var qua1=document.getElementById("one").value;
               total+=(p1*qua1);
          }
          else if(productlist[i]=="Dove Shampoo"){
               var qua2=document.getElementById("two").value;
               total+=(p2*qua2);
          }
          else if(productlist[i]==" Axe Deodrant"){
               var a=document.getElementById("three").value;
               total+=(a*p3);
          }
          else if(productlist[i]==" Himalayas"){
               // var qua4=document.getElementById("four").value;
               total+=(p4*(document.getElementById("four").value));
          }
          else{
               document.getElementById("billll").innerHTML="Enter Items first "    
          }
     }
     document.getElementById("billll").innerHTML="The bill amt is "+total;
}