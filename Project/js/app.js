let input=document.getElementById("Input")
let from=document.getElementById("From");
let to=document.getElementById("To");
let Result=document.getElementById("result")
let tableresult=document.getElementById("table4")

function createOption(x,y,z) {
    let o=document.createElement("option");
    let t=document.createTextNode(x);
    o.setAttribute("value",ToNo(z))
    o.appendChild(t);
    y.appendChild(o);

}

function ToNo(q) {
    return Number(q.replace(",",""))

}

for (x in data.rates){
    createOption(x,from,data.rates[x])
    createOption(x,to,data.rates[x])
    // console.log(x,data.rates[x])
}
function createtable(y) {
    let rowspacer=document.getElementById("rowspacer")
    if(rowspacer){
        rowspacer.remove();
    }
    let tr=document.createElement("tr");
    tableresult.appendChild(tr);
    y.map(function (el) {
    let td=document.createElement("td");
    tr.appendChild(td);
    let text=document.createTextNode(el)
     td.appendChild(text);
   })
}
function stored() {
    localStorage.setItem("record",tableresult.innerHTML);
    
}

document.getElementById("input2").addEventListener("submit",function (e) {
   e.preventDefault();
    //set data
    let x=input.value;
    let y=from.value;
    let z=to.value;
   //process
    let first=x*y;
    let second=first/z;
    let result=second.toFixed(2)+to.options[to.selectedIndex].innerHTML  ;
    let fromcontent=x+from.options[from.selectedIndex].innerHTML;
    
    let totext=result+to.options[to.selectedIndex].innerHTML;
    let date=new Date().toLocaleString();
    
    let arr=[date,fromcontent,totext,result];
    createtable(arr);
    stored();
    //getData
    Result.innerHTML=result;
    input.value="";
    input.focus();
    from.value="";
     
  
    
        
});
    (function () {
        if(localStorage.getItem("record")){
            tableresult.innerHTML=localStorage.getItem("record")
        }else{
            tableresult.innerHTML=`<tr id="rowspacer" >
            <td colspan=4 >There is no result</td>
            </tr>`
        }
    })()
     
   function darkmode() {
       document.body.classList.toggle("mod-chg")
   }
    

