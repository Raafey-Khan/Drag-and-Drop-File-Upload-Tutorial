const dragArea = document.querySelector('.drag-area');
const dragText = document.querySelector('.header');

let file;
// when file is inside the drag area


dragArea.addEventListener('dragover',(event) => {
    event.preventDefault();
    dragText.textContent = 'Release to Upload';
    dragArea.classList.add('active');
    //console.log('File is inside the drag area');

});


// when file leaves the drag area

dragArea.addEventListener('dragleave', () => {
    dragText.textContent = 'Drag & Drop';
    dragArea.classList.add('active');
    //console.log('File left the drag area');
});

// when the file is dropped in the drag area
dragArea.addEventListener('drop', (event) => {
    event.preventDefault();

    file = event.dataTransfer.files[0];

    let fileType = file.type;
    //console.log(fileType);
    //console.log(file)
    //console.log('The file is dropped in drag area');

    let validExtensions = ['image/jpeg','image/jpg','image/png','image/pdf'];
    if(validExtensions.includes(fileType)){
        let fileReader = new FileReader();

        fileReader.onload = () => {
            let fileURL = fileReader.result;
            //console.log(fileURL);
            let imgTag = `<img src="${fileURL}" alt=""`;
            dragArea.innerHTML = imgTag;
        };
        fileReader.readAsDataURL(file);
    } else {
        alert('This file is not an Image')
    }
});

