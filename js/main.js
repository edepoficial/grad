var input = null
window.onload = function(){
    input = document.getElementById('recojo-u-input')
}

function ShowInput(){
    input.style.display = 'block'
}
function HideInput(){
    input.style.display = 'none'
}

$(function(){
    $('#birthday').datepicker()
    $('#recojo-u-input input').datetimepicker()
})

