let previewContainer=document.querySelector('.products-preview');
let previewBox=previewContainer.querySelectorAll('.preview');

document.querySelectorAll('.items-container .item .button').forEach(button =>{
    button.onclick = () =>{
        previewContainer.style.display= 'flex';
        let name = button.getAttribute('data-name');
        previewBox.forEach(preview =>{
        let target = preview.getAttribute('data-target');
            if(name == target){
                preview.classList.add('active');
            }
        });
    };
});
previewBox.forEach(close =>{
    close.querySelector('.fa-times').onclick = () =>{
     close.classList.remove('active');
     previewContainer.style.display='none';
    };
});