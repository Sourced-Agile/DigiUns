// plus iconu click
$(document).on('click', '.tablePlusIcon', function () {
    
    $(this).closest('.tableCon').find('.addInput').last().toggleClass('d-none');
    $(this).toggleClass('tablePlusIconclick')
})
// add descriptiom
$(document).on('change', '.tableEndInp', function () {
    var text = $(this).val();
    var table = $(this).closest('.tableCon').find('table tbody').last();

    table.append(`
     <tr>
      <td>
        <div class="titleTbody">
         <div class="titleTbodyCheck dFlex">
           <input type="checkbox">
         </div>
         <div class="descSortArrow">
            <i class="far fa-expand-arrows"></i>
         </div>
         <div class="titleTbodyText">- ${text}</div>
           </td>
     </tr>
    `);
    $(this).val('');
})