
var list = document.getElementById("list")

// add item function

function addItem () {
    
    //create lists
    var todo_item = document.getElementById("todo-list")
    var li = document.createElement('li')
    var liText = document.createTextNode(todo_item.value)
    var input = document.createElement("input")
    li.classList.add("todoitem")
    
    li.appendChild(liText)
    list.appendChild(li)

    //create delete button
    var delbtn = document.createElement("button")
    var delbtnText = document.createTextNode("DELETE")
    delbtn.classList.add("delbtn")
    delbtn.setAttribute("onclick", "deleteItem(this)")
    delbtn.appendChild(delbtnText)

    
    //create edit button 
    var editbtn = document.createElement("button")
    var editbtnText = document.createTextNode("EDIT")
    editbtn.setAttribute("class","editbtn")
    editbtn.appendChild(editbtnText)
    editbtn.setAttribute("onclick","editItem(this)")

    li.appendChild(editbtn)
    li.appendChild(delbtn)
    console.log(li)
}

// delete button function
function deleteItem(e) {
    e.parentNode.remove()
}

// delete all button\
function deleteAll() {
    list.innerHTML = ""
}  

//Edit an existing task
function editItem(e) {
    var val = e.parentNode.firstChild.nodeValue;
    var editValue = prompt ("Enter edit Value", val)
    val = editValue

}
