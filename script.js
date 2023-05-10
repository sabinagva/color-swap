$(document).ready(onReady);

function onReady() {
    $('#generate-btn').on('click', generateHandle);
    $('.div-gen').append('<button>Delete</button><button>Yellow</button>')
    $('#blockContainer').on('click','#yellow-btn',colorChange);
    $('#blockContainer').on('click','#delete-btn',deleteHandle);
    
}
let divCounter = 1;


function generateHandle() {
    
   
    $('#blockContainer').append(`<div class="div-gen">
                                <p> ${divCounter}</p>
                                <button id="delete-btn">Delete</button>
                                <button id="yellow-btn">Yellow</button>
                                </div>`);
    divCounter+=1;
    
    $('.div-count').text(divCounter)
   
 
}
function colorChange() {
    //$('.div-gen').css('background-color','yellow');
    $(this).parent().addClass('yellow-background')
}
function deleteHandle() {
    $(this).parent().remove();
    divCounter-=1
}