

//============close Button=====================//
let closeButton = document.getElementsByClassName("closed");



//===================function to add list==============//
function createNewElement(){
  let li = document.createElement("li");
  let theInputValue = document.getElementById("the-input").value;
  let textNode = document.createTextNode(theInputValue);

  li.appendChild(textNode);

  if (theInputValue ==="") {
    alert("Please check the input....")
  }else{
    document.getElementById("the-ul").appendChild(li);
  }

  document.getElementById("the-input").value = "";


//=============adding closeButton==================//
  let thePanTag = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  thePanTag.className = "close";
  thePanTag.appendChild(txt);
  li.appendChild(thePanTag);

  let close = document.getElementsByClassName("close");
  for( let i = 0; i< close.length; i++){
    close[i].onclick = function(){
      let theDiv = this.parentElement;
      theDiv.style.display = "none";
    }
  }

}

//==================adding check mark=======//
let ulList = document.querySelector('ul');
ulList.addEventListener("click", function(event){
  if(event.target.tagName === "LI"){
    event.target.classList.toggle("checked")
  }
},false);
