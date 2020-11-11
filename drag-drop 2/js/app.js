const dragArea = document.querySelector("#DragImage .drag-content")
dragArea.addEventListener("dragover",function (e){
    e.preventDefault()
    dragArea.classList.add("active")
})
dragArea.addEventListener("dragleave",function(){
    dragArea.classList.remove("active")
})
dragArea.addEventListener("drop",function(e){
e.preventDefault()
dragArea.classList.remove("active")
var imgFile =e.dataTransfer.files
for(let img of imgFile){
    if(img.type.match("image*")){
        const tr =document.createElement("td")
     var reader= new FileReader();
     reader.onload=function(read){
       const td=document.createElement("td")
        const myImg = document.createElement("img")
        myImg.src =read.target.result;
        myImg.width =200;
        myImg.heigh=200;
        td.appendChild(myImg)
        tr.insertBefore(td,tr.firstChild);
        document.querySelector("#DropTable tbody").appendChild(tr)
     } 
     reader.readAsDataURL(img);
    }
}
})