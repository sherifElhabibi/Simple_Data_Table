function Employee(name,id,position,office,age,start){
  this.name = name;
  this.id = id;
  this.position = position;
  this.office = office;
  this.age=age;
  this.start=start;
}

var arr = [
  new Employee("Sherif",1,"Development","Cairo",25,"12-12-2022"),
  new Employee("Ahmed",2,"Security","New Capita",26,"12-08-2021"),
  new Employee("Yasser",3,"Flutter","Alex",27,"12-05-2022"),
  new Employee("Mohamed",4,"OS","Mansoura",28,"07-11-2006"),
  new Employee("Nabil",5,"EL","Assiut",29,"02-12-2012"),
  new Employee("Moamen",6,"VFX","Sohag",23,"01-12-2016"),
]
var table = document.getElementsByTagName("table")[0];
var tbody=document.getElementsByTagName("tbody")[0];

creation(arr);

var nameClick = document.getElementsByClassName("name")[0]
var idClick = document.getElementsByClassName("id")[0]
var positionClick = document.getElementsByClassName("position")[0]
var officeClick = document.getElementsByClassName("office")[0]
var ageClick = document.getElementsByClassName("age")[0]
var dateClick = document.getElementsByClassName("start")[0]

var search = document.getElementsByClassName("search")[0]

nameClick.addEventListener("click",function(){
    deletion();
    if(ageClick.classList.contains("asc"))
    {
        arr.sort(compareDscName);
        creation(arr);
        ageClick.classList.remove("asc")
        ageClick.classList.add("dsc")
  
    }
    else
    {
        arr.sort(compareAscName);
        creation(arr);
        ageClick.classList.add("asc")
        ageClick.classList.remove("dsc")
  
    }
    
})

idClick.addEventListener("click",function(){
  deletion();
  if(idClick.classList.contains("asc"))
  {
      arr.sort(compareDscID);
      creation(arr);
      idClick.classList.remove("asc")
      idClick.classList.add("dsc")

  }
  else
  {
      arr.sort(compareAscID);
      creation(arr);
      idClick.classList.add("asc")
      idClick.classList.remove("dsc")

  }
 
  })


positionClick.addEventListener("click",function(){
    deletion();
    if(ageClick.classList.contains("asc"))
    {
        arr.sort(compareDscPosition);
        creation(arr);
        ageClick.classList.remove("asc")
        ageClick.classList.add("dsc")

    }
    else
    {
        arr.sort(compareAscPosition);
        creation(arr);
        ageClick.classList.add("asc")
        ageClick.classList.remove("dsc")

    }
    
})
officeClick.addEventListener("click",function(){
    deletion();
    if(ageClick.classList.contains("asc"))
    {
        arr.sort(compareDscOffice);
        creation(arr);
        ageClick.classList.remove("asc")
        ageClick.classList.add("dsc")

    }
    else
    {
        arr.sort(compareAscOffice);
        creation(arr);
        ageClick.classList.add("asc")
        ageClick.classList.remove("dsc")

    }
    
})

ageClick.addEventListener("click",function(){
    deletion();
    if(ageClick.classList.contains("asc"))
    {
        arr.sort(compareDscAge);
        creation(arr);
        ageClick.classList.remove("asc")
        ageClick.classList.add("dsc")

    }
    else
    {
        arr.sort(compareAscAge);
        creation(arr);
        ageClick.classList.add("asc")
        ageClick.classList.remove("dsc")

    }
   
    })


function creation(newArr){   
    for(var i = 0;i<arr.length;i++)
    {
        var tr = document.createElement("tr");
        deleteIcon = document.createElement("img");
        deleteIcon.setAttribute("src","delete.png")
        deleteIcon.style.width="50px"
        deleteIcon.style.cursor="pointer"
        
        for(var value in newArr[i]) {
          var td = document.createElement("td");
          td.innerHTML=newArr[i][value];
          tr.appendChild(td);
          tr.appendChild(deleteIcon)
        }
        tbody.appendChild(tr)

        deleteRows();
      }

    
    
}

function deleteRows() { 
  deleteIcon.addEventListener("click",function(e){
    var id=e.target.parentElement.children[1].innerText
    var index = -1;
    for(var i = 0;i<arr.length;i++)
    {
      if(arr[i].id==id)
      {
        index=i;
        break;
      }
    }
    if(index!=-1)
    {
      arr.splice(index,1);

    }
    e.target.parentElement.remove()

  }) 
 }

function compareAscAge(a,b){
    return a.age-b.age
}
function compareDscAge(a,b){
    return b.age-a.age
}
function compareAscID(a,b){
  return a.id-b.id
}
function compareDscID(a,b){
  return b.id-a.id
}

function compareAscName(a,b){
    var nameA = a.name.toUpperCase(); 
    var nameB = b.name.toUpperCase(); 
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
}
function compareDscName(a,b){
    var nameA = a.name.toUpperCase(); 
    var nameB = b.name.toUpperCase(); 
  if (nameA > nameB) {
    return -1;
  }
  if (nameA < nameB) {
    return 1;
  }
}
function compareAscPosition(a,b){
    var nameA = a.position.toUpperCase(); 
    var nameB = b.position.toUpperCase(); 
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
}
function compareDscPosition(a,b){
    var nameA = a.position.toUpperCase(); 
    var nameB = b.position.toUpperCase(); 
  if (nameA > nameB) {
    return -1;
  }
  if (nameA < nameB) {
    return 1;
  }
}
function compareAscOffice(a,b){
    var nameA = a.office.toUpperCase(); 
    var nameB = b.office.toUpperCase(); 
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
}
function compareDscOffice(a,b){
    var nameA = a.office.toUpperCase(); 
    var nameB = b.office.toUpperCase(); 
  if (nameA > nameB) {
    return -1;
  }
  if (nameA < nameB) {
    return 1;
  }
}

function deletion(){
    var rows=document.querySelectorAll("tr")
    for(var i=1;i<rows.length;i++)
    {
        rows[i].remove();
    }
}


search.addEventListener("keyup",function(){
  var new_arr=arr.filter(function(e){
    return e.name.toLowerCase().includes(search.value.toLowerCase())
  })
  deletion();
  creation(new_arr);
})


///GARBAGE///
        // var newDataName = document.createElement("td");
        // var newDataID = document.createElement("td");
        // var newDataPostion = document.createElement("td");
        // var newDataOffice = document.createElement("td");
        // var newDataAge = document.createElement("td");
        // var newDataDate = document.createElement("td");

        //     newDataID.innerHTML=newArr[i].id;
        //     newDataPostion.innerHTML=newArr[i].position;
        //     newDataOffice.innerHTML=newArr[i].office;
        //     newDataAge.innerHTML=newArr[i].age;
        //     newDataDate.innerHTML=newArr[i].date;
        
        
        // newRow.appendChild(newDataName)
        // newRow.appendChild(newDataID)
        // newRow.appendChild(newDataPostion)
        // newRow.appendChild(newDataOffice)
        // newRow.appendChild(newDataAge)
        // newRow.appendChild(newDataDate)
        // newRow.appendChild(deleteIcon)
///GARBAGE///



// var obj = {
//   Id:3,
//   Name:"sherif",
//   Age:25
// }

// for(var i in obj)
// {
//   console.log(obj[i])
// }