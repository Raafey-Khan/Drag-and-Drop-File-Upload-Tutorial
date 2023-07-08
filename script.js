const dragArea = document.querySelector('.drag-area');
const dragText = document.querySelector('.header');

let button = document.querySelector('.button');
let input = document.querySelector('input');

let file;

button.onclick = () => {
    input.click();
};
// when browse
input.addEventListener('change', function(){
    file = this.files[0];
    console.log(file)
})
// When file is inside the drag area
dragArea.addEventListener('dragover', (event) => {
  event.preventDefault();
  dragText.textContent = 'Release to Upload';
  dragArea.classList.add('active');
});

// When file leaves the drag area
dragArea.addEventListener('dragleave', () => {
  dragText.textContent = 'Drag & Drop';
  dragArea.classList.remove('active');
});

// When the file is dropped in the drag area
dragArea.addEventListener('drop', (event) => {
  event.preventDefault();

  file = event.dataTransfer.files[0];
  let fileType = file.type;

  let validExtensions = ['image/jpeg', 'image/jpg', 'image/png', 'application/pdf'];
  if (validExtensions.includes(fileType)) {
    let fileReader = new FileReader();

    fileReader.onload = () => {
      let fileURL = fileReader.result;
      let imgTag = `<img src="${fileURL}" alt="" />`;
      dragArea.innerHTML = imgTag;
    };

    fileReader.readAsDataURL(file);
  } else {
    alert('This file is not an Image or PDF');
  }

  dragText.textContent = 'Drag & Drop';
  dragArea.classList.remove('active');
});