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

var $form = $('form.form.survey'),
    url = 'https://script.google.com/macros/u/0/s/AKfycbyrpzzGxUtD0eQYJGmhOVMBMsjAl-ONMWDN3I907o62J8HrEkY/exec'

$('#submit-form').on('click', function(e) {
  e.preventDefault()
  var jqxhr = $.ajax({
    url: url,
    method: "GET",
    dataType: "json",
    data: $form.serialize()
  }).success(
    // do something
  )
})
