const mainbody=document.getElementById("maintbody");
const malebody=document.getElementById("maletbody");
const femalebody=document.getElementById("femaletbody")
// console.log(mainbody,femalebody,malebody);// To check i have access it properly or not that's all

let students=[];

fetch("https://gist.githubusercontent.com/harsh3195/b441881e0020817b84e34d27ba448418/raw/c4fde6f42310987a54ae1bc3d9b8bfbafac15617/demo-json-data.json").
then((response)=>response.json())
.then((data)=>{
    students=data;
    displaydata(students,mainbody);
   
});

function displaydata(students,inwhichtable)
{   
   
    inwhichtable.innerHTML="";
    let n=students.length;
    for(let i=0;i<n;i++)
    {
        let student=students[i];
        let newElement=document.createElement("tr");
        newElement.innerHTML=`<td>${student.id}</td>
        <td><img src="${student.img_src}"></td>
        <td>${student.first_name}" "${student.last_name}</td>
        <td>${student.email}</td>
        <td>${student.gender}</td>
        <td>${student.marks}</td>
        <td>${student.city}</td>`
        inwhichtable.appendChild(newElement);
    }
}

function search()
{   
    let newarray=[];
    let searchelement=document.getElementById("input").value.toLowerCase();
    for(let i=0;i<students.length;i++)
    {
        let x=students[i];
        if(x.first_name.toLowerCase().includes(searchelement))
        {
           newarray.push(x);
        }
    }   
  displaydata(newarray,mainbody);
}
function sortAz(){
    console.log("inside the sort");
    students.sort((a,b)=>a.first_name.localeCompare(b.first_name));
    displaydata(students,mainbody);
}

function sortZa(){
    console.log("inside the sort");
    students.sort((a,b)=>b.first_name.localeCompare(a.first_name));
    displaydata(students,mainbody);
}

function sortMarks(){
    console.log("inside the sort");
    students.sort((a,b)=>a.marks-(b.marks));
    displaydata(students,mainbody);
}
function sortPassing(){
    let passed=[];
    let failed=[];

    for(let i=0;i<students.length;i++)
    {
        if(students[i].passing == true)
        {
            passed.push(students[i]);
        }else
        {
             failed.push(students[i]);
        }
    }
    let concated=passed.concat(failed);
    displaydata(concated,mainbody);
}
function sortBy()
{   console.log("inside gender ")
    let male=[];
    let females=[];
        // console.log("inside gender ")
    for(let i=0;i<students.length;i++)
    {
        if(students[i].gender == "Female")
        {
            females.push(students[i]);
        }else
        {
             male.push(students[i]);
        }
    }
    mainbody.style.display="none";
    mainbody.parentNode.style.display="none";
    displaydata(male,malebody);
    displaydata(females,femalebody);
}