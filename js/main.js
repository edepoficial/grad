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
    var elem = document.createElement('input')
    elem.setAttribute('type', 'date')

    if ( elem.type === 'text' ) {
        $('#birthday').datepicker()
    }
})
