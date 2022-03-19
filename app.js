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
  addInput:function (el) {
     var ed = $('.tableTitle_sira').last().text();
     var num = parseInt(ed) + 1;
     var nam = $(el).val();     
    $('.cardBody').append(`
                       <div class="mb-2 mr-2 tableCon">
                        <table class="tableTitle">
                            <thead>
                                <tr>
                                    <th style="width:22px w-100">
                                        <div class="d-flex" style="position:relative;">
                                            <div class="tableTitle_sira title dFlex text-light">
                                                ${num}
                                            </div>
                                            <div class="tableTitle_title dFlex">
                                                <a href="#" class="text-light"><i
                                                        class="fal fa-ellipsis-v text-light buttontable"></i></a>

                                                <div class="text-light title">${nam}</div>
                                                <input type="checkbox" style="width: 10px;">
                                            </div>
                                            <div class="dFlex">
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
                            <div class="bgF7F7F7 d-flex justify-content-end ">
                            <input class="tableEndInp addInput d-none" type="text">
                        </div>
                        </table>
                        <div class="bgF7F7F7 d-flex justify-content-end ">
                            <input class="tableEndInp addInput d-none" placeholder="Title" type="text">
                        </div>
                    </div>
  `);
    $(el).val('');
  }

}
miniStoryCard.init();
 

// plus iconu click
$(document).on('click', '.tablePlusIcon', function () {
  miniStoryCard.showInputForDesc(this)
})
// add descriptiom change
$(document).on('change', '.tableEndInp', function () {
  miniStoryCard.addNewDesc(this)
})

$(document).on('change', '#addInput', function () {
 miniStoryCard.addInput(this)
})