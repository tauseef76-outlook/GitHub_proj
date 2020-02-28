let totalBudget = 0;
let obj = {};

function sub(){
  event.preventDefault();
  totalBudget = Number(document.getElementById('totalBudget').value);
  document.getElementById('totalBudget').disabled = true;
  document.getElementById('submit').disabled = true;
  //console.log(totalBudget,typeof(totalBudget));
}

function add(){
  event.preventDefault();
  if(!totalBudget || totalBudget < 0){
    alert("Please check the budget. If budget is ok, please press submit first..");
  }
  else{
    obj.work = document.getElementById('detail').value;
    obj.expense = Number(document.getElementById('expense').value);

    if(obj.expense <= 0 || obj.work == ""){
      alert("Please check data");
    }else{
      totalBudget -= obj. expense;

      if(totalBudget < expense || totalBudget < 0){
        alert("Cannot spend more!!!!");

      }
      else{
        let today = new Date();
        let dt = (today.getDate()+"/"+today.getMonth()+"/"+today.getFullYear());
        let x = dt+" ------ "+obj.work+" ------ "+obj.expense+" ------ "+totalBudget

        var ul = document.getElementById("list");
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(x));
        ul.appendChild(li);
      }
    }
  }
}


function rst(){
//  event.preventDefault();
  document.getElementById('myForm').reset();
}
