$('#new-track-button').on('click',function(event){


});




$(document).not('#new-track-form').on('click', function(event){
    if (!$('#new-track-form').hasClass('hidden'))
        $('#new-track-form').addClass('hidden');
};