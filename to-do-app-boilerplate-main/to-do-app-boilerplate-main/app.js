var listOfActivities=[];
var input=document.getElementById("input");
var todolist=document.getElementById("todolist");
document.getElementById("button").onclick=click;
function click(){
    listOfActivities.push(input.value);
    input.value="";
    showList();
}
function showList(){
    todolist.innerHTML=" ";
    listOfActivities.forEach(function(n,i){
        todolist.innerHTML +=
      "<li>" +
      n +
      "<a onclick='editItem(" +
      i +
      ")'>Edit</a>" +
      "<a onclick='deleteItem(" +
      i +
      ")'>&times | </a></li>";
  });
}
function deleteItem(i){
    listOfActivities.splice(i,1);
    showList();
}
function editItem(){
    var newValue=prompt("Enter Your new Value");
    listOfActivities.splice(i,1,newValue);
    showList();
}