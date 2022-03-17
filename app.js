
$(document).on('click', '.tablePlusIcon', function (ev) {
    console.log('zxz');
    $(this).closest('.tableCon').find('.addInput').toggleClass('d-none');
    $(this).toggleClass('tablePlusIconclick')
})
