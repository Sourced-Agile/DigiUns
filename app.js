const miniStoryCard = {
  init: function (div, backlogId) {   
    $(div).html(this.genBlock());
    this.load.init(backlogId);
    this.sortableDec();
    
  },
  load:{
        init: function (backlogId) {
          console.log('init')
        }
  },
  update:{
      
  },
  insert:{
      
  },
  delete:{
      
  },
  genBlock:function (params) {
        return `<div class="cartContainer">
                   ${this.genLeftConatiner()}
                   ${this.genRightConatiner()}
                 </div>`
  },
  genLeftConatiner:function (url) {
    return `<div class="photoContainer">
                <img src="${url?url:"image"}" alt="">
            </div>`
  },
  genRightConatiner: function (title) {
    return `<div class="cartContainer">
                <div class="cardheader">
                    <div class="cardTitle">${title?title:"Story Card"}</div>
                </div>
                <div class="cardBody">
                   
                </div>
            </div>`
  },
  showInputForDesc: function (el) {
    $(el).closest('.tableCon').find('.addInput').last().toggleClass('d-none');
    $(el).toggleClass('tablePlusIconclick')
  },
  addNewDesc: function (el) {
    console.log('el')
    var text = $(el).val();
    var table = $(el).closest('.tableCon').find('table tbody').last();

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
    $(el).val('');
  },
  sortableDec: function () {   
    $(".tableTitle tbody").sortable();

  },  
  addIpsum: function (el, val) {
    var dd = $('.ipsumBodyContainer').last().find('.ipsumBodyForOrder').text();
    var a=parseInt(dd)+1
  console.log(dd);
    var com = (`<div class="ipsumBodyContainer">
                                <div class="mb-2 mr-2 mt-1 w-100 tableCon">
                                    <table class="tableTitle">
                                <thead>
                                    <tr>
                                        <th class="w-100">
                                            
                                            <div class="ipsumBodyTitleCh">
                                                 <div class="ipsumBodyTitleChDrag" style="cursor: pointer;">
                                                    <i class="far fa-ellipsis-v"></i>
                                                    <i class="far fa-ellipsis-v"></i>
                                                  </div>
                                                <div class="ipsumBodyTitleChDrag title ipsumBodyForOrder">
                                                    ${a}
                                                </div>
                                                <div class="ipsumBodyTitleChhead">                                                                                                     

                                                    <div class="impsumTitleYazisi title">${val}</div>
                                                     <div class="ipsumCHTitleRight">
                                                       <i class="fal fa-ellipsis-v text-light"></i>
                                                       <input class="" type="checkbox" style="width: 10px;">
                                                    </div> 
                                                   
                                                    </div>
                                                <div class="">                                                    
                                                    <button class="tablePlusIcon">
                                                        <i class="far fa-plus"></i>
                                                    </button>

                                                </div>

                                            </div>
                                        </th>

                                    </tr>
                                </thead>
                                <tbody>
                                    
                                </tbody>
                                    </table>
                                    <div class="bgF7F7F7 d-flex justify-content-end ">
                                    <input class="tableEndInp addInput d-none" placeholder="Title" type="text">
                                    </div>
                                </div>
                                

                            </div>
                    `);
    $('.ipsumContaineriAddUcun').append(com);
  }
   
}

 

// plus iconu click
$(document).on('click', '.tablePlusIcon', function () {
  miniStoryCard.showInputForDesc(this)
})
// ipsum plus click
$(document).on('click', '#plusAddIpsum', function () {
  $(this).find('i').toggleClass('fa-times fa-plus')
  $('#addIpsumInputt').toggleClass('d-none')
})
//ipsum add
$(document).on('change', '#addIpsumInputt', function () {
  v = $(this).val(); 
  miniStoryCard.addIpsum(this,v)
})
// add descriptiom change
$(document).on('change', '.tableEndInp', function () {
  miniStoryCard.addNewDesc(this)
})
//menu bar
$(document).on('click', '#ipsumCartmenuIcon', function () {
  $(this).toggleClass('ipsumMwnuIconactive ipsumMwnuIcon');
  $(this).find('i').toggleClass('fa-angle-double-up fa-angle-double-down')
  $('.ipsumContaineriAddUcun').toggleClass('d-none')  
  	  
  	});



$(document).on('click', '.cardHeaderPlus', function () {
  $(this).toggleClass('cardHeaderPlusToggle');
  $(this).find('i').toggleClass('fa-times fa-plus');
  $('#addInput').toggleClass('headAddNewInp width0');
  
})

$(document).on('click', '.btnMEnuAcanselectUcun', function (event) {
    event.stopPropagation();
})

