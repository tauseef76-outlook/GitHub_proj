let tasker = {
  selecElements: function(){
    this.taskInput = document.getElementById("input-task");
    this.taskList = document.getElementById("tasks");
    this.taskListChildren = this.taskList.children;
    this.addButton = document.getElementById('add-task-btn');
    this.errorMessage = document.getElementById("error");
  },
  buildTask: function(){
    let taskListItem, taskCheckBox, taskValue, taskButton, taskTrash;
    taskListItem = document.createElement("li");
    taskListItem.setAttribute("class", "task");
    //checkbox
    taskCheckBox = document.createElement('input');
    taskCheckBox.setAttribute("type","checkbox");
    //task Value
    taskValue = document.createElement(this.taskInput.value);
    //delete button
    taskButton = document.createElement("button");
    //trash icon
    taskTrash = document.createElement("i");
    taskTrash.setAttribute("class","fa fa-trash");
    //insert trash can icon into button
    taskButton.appendChild(taskTrash);

    //append elements to taskList
    taskListItem.appendChild(taskCheckBox);
    taskListItem.appendChild(taskValue);
    taskListItem.appendChild(taskButton);

    // add task to tasklist

    this.taskList.appendChild(taskListItem);
  },

  error : function(){
    this.errorMessage.style.display = "block";
  },

  addTask: function(){
    let taskValue = this.taskInput.value;
    this.errorMessage.style.display = "none";

    if(taskValue == ""){
      this.error();
    }
    else{
      this.buildTask();
      this.taskInput.value = "";
      this.scanTaskList();
    }
  },
  enterKey: function(event){
    if(event.keyCode == 13 || event.which == 13){
      this.addTask();
    }
  },

  bindEvents: fucntion(){
    //add click event on button
    this.addButton.onclick = this.addTask.bind(this);

    //add the enter key to task textbox
    this.taskInput.onkeypress = this.enterKey.bind(this);
  }
};
