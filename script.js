const dragArea = document.querySelector('.drag-area');

// when file is inside the drag area


dragArea.addEventListener('dragover', (event) =>{
    console.log('File is inside the drag area');
});

// when file leaves the drag area

dragArea.addEventListener('dragleave', () => {
    console.log('File left the drag area');
});
// when the file is drop in the drag area
dragArea.addEventListener('drop', (event)=>{
    console.log('The file is dropped in drag area');
});