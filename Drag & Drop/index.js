const DragArea = document.querySelector(".AppBody"),
DragText = DragArea.querySelector("h3"),
button = DragArea.querySelector("button"),
input = DragArea.querySelector("input");

let myFile;

button.onclick = () => {
    input.click()
  }
  input.addEventListener("change", function(){
    myFile = this.files[0];
    DragArea.classList.add("active");
    ShowMe();
  })

  DragArea.addEventListener("dragover", (e)=>{
    e.preventDefault();
    DragArea.classList.add("active");
    DragText.textContent = "Relase to Upload File";
  })

  DragArea.addEventListener("dragleave", ()=>{
    DragArea.classList.remove("active");
    DragText.textContent = "Drag & Drop";
  })

  DragArea.addEventListener("drop", (e) => {
    e.preventDefault();
    myFile = e.dataTransfer.files[0]; // Corrected typo here
    ShowMe();
})


  function ShowMe(){
    let fileType = myFile.type;
    let valiEx = ["image/jpeg", "image/jpg", "image/png"];
    if(valiEx.includes(fileType)){
      let fileReader = new FileReader();
      fileReader.onload = ()=>{
        let imgURL = fileReader.result;
        let img = `<img src="${imgURL}" alt="">`;
        DragArea.innerHTML = img;
      }
      fileReader.readAsDataURL(myFile);
    }else{
      alert("This File is Not Valid");
      DragArea.classList.remove("active");
      DragArea.textContent = "Drag & Drop";
    }
  }

