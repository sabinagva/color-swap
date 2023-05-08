$(document).ready(onReady);

function onReady() {
    $('#generate-btn').on('click', generateHandle);
    $('.div-gen').append('<button>Delete</button><button>Yellow</button>')
    $('#yellow-btn').on('click',colorChange);
    $('#delete-btn').on('click',deleteHandle);
    
}
let divCounter = 1;


function generateHandle() {
    
   
    $('#blockContainer').append('<div class="div-gen"><p><span class="div-count">1</span></p><button id="delete-btn">Delete</button><button id="yellow-btn">Yellow</button></div>');
    divCounter+=1;
    
    $('.div-count').text(divCounter)
   
 
}
function colorChange() {
    //$('.div-gen').css('background-color','yellow');
    $('.div-gen').addClass('yellow-background')
}
function deleteHandle() {
    $(this).parent().parent().remove();
}