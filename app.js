const SqlGeneratorClass = {
    loader: function () {      
       
    },
    genBlock: function (params) {
        return `                
                `
    },
    genHeader: function () {
        return `
                <div class="cardheader">
                    <div class="cardTitle">
                        NEWS PAGE
                    </div>
                    <div class="titleAcar">
                        <i class="far fa-wrench"></i>

                    </div>
                </div>    
        `
    },
    genPhotoContainer: function () {
        return `
               
        `
    },
    genCartContainer: function () {
        `

        `
    },
    genAddDescSection: function () {
        ` `
    },
    genNewDescbody: function (text) {
        return `
              <div class="descBodyrow">
                    <div class="descSortArrow">
                        <i class="far fa-ellipsis-v"></i>
                        <i class="far fa-ellipsis-v"></i>
                    </div>
                    <div class="titlebodyCheck dFlex">
                        <input type="checkbox">
                    </div>
                    <div class="titlebodyText">
                        ${text}
                    </div>
                   
                          <div class="dropdown dropdowndesc">
                                <button class="btnMEnuAcan" type="" id="dropdownMenuButton" data-toggle="dropdown"
                                    aria-haspopup="true" aria-expanded="false">
                                    <i class="far fa-ellipsis-h"></i>
                                </button>
                                <div class="dropdown-menu btnMEnuAcanselectUcun"
                                    aria-labelledby="dropdownMenuButton">
                                    <a class="dropdown-item dropFontSize" href="#">Edit </a>
                                    <a class="dropdown-item dropFontSize" href="#">Add to Task</a>
                                    <a class="dropdown-item dropFontSize" href="#">Oranged </a>
                                    <a class="dropdown-item dropFontSize" href="#">Blued</a>
                                    <a class="dropdown-item dropFontSize" href="#">Greened</a>
                                    <a class="dropdown-item dropFontSize" href="#">Whited</a>
                                    <a class="dropdown-item dropFontSize" onclick='SqlGeneratorClass.deleteThisRov(this)' href="#">Delete</a>                                                                 
                                </div>
                            </div>      
                    
                     </div>
        `
    },
    genDropMenu: function () {
        return `
        <div class="dropdown">
           <button class="btnMEnuAcan" type="" id="dropdownMenuButton" data-toggle="dropdown"
               aria-haspopup="true" aria-expanded="false">
               <i class="fal fa-ellipsis-v text-light"></i>
           </button>
           <div class="dropdown-menu btnMEnuAcanselectUcun"
               aria-labelledby="dropdownMenuButton">
               <a class="dropdown-item dropFontSize" href="#">Add Descriptions </a>
               <a class="dropdown-item dropFontSize" href="#">Set as Output</a>
               <a class="dropdown-item dropFontSize" href="#">Add to Task </a>
               <a class="dropdown-item dropFontSize" href="#">Add to Task Events</a>
               <a class="dropdown-item dropFontSize" href="#">Copy/Move</a>
               <a class="dropdown-item dropFontSize" href="#">Delete</a>
               <hr style="margin:3px 0px;">
               <a class="dropdown-item dropFontSize" href="#">Add Fields of Table as Input</a>
               <a class="dropdown-item dropFontSize" href="#">Add Input of Story Card As</a>                                
           </div>
      </div>                        
        `
    },
    genNewDesc: function (text) {
        return `<!-- desc title  -->
            <div class="pb-2 mr-2 descCont bgF7F7F7">

                <div class="d-flex" style="position:relative;">
                       <div class="descSortArrowTitle bg59">
                        <i class="far fa-ellipsis-v text-light"></i>
                        <i class="far fa-ellipsis-v text-light"></i>
                        </div>

                    <div class="descTitle_sira dFlex text-light">                        
                        <span class="title">1</span>
                    </div>
                    <div class="descTitle_title dFlex">                             
                        <div class="text-light title">${text}</div>
                         <!-- drop -->
                         <div class="dropdown">
                                    <button class="btnMEnuAcan" type="" id="dropdownMenuButton" data-toggle="dropdown"
                                        aria-haspopup="true" aria-expanded="false">
                                        <i class="fal fa-ellipsis-v text-light"></i>
                                    </button>
                                    <div class="dropdown-menu btnMEnuAcanselectUcun"
                                        aria-labelledby="dropdownMenuButton">
                                        <a class="dropdown-item dropFontSize" href="#">Add Descriptions </a>
                                        <a class="dropdown-item dropFontSize" href="#">Set as Output</a>
                                        <a class="dropdown-item dropFontSize" href="#">Add to Task </a>
                                        <a class="dropdown-item dropFontSize" href="#">Add to Task Events</a>
                                        <a class="dropdown-item dropFontSize" href="#">Copy/Move</a>
                                        <a class="dropdown-item dropFontSize" onclick='SqlGeneratorClass.deleteDescRov(this)' href="#">Delete</a>
                                        <hr style="margin:3px 0px;">
                                        <a class="dropdown-item dropFontSize" href="#">Add Fields of Table as Input</a>
                                        <a class="dropdown-item dropFontSize" href="#">Add Input of Story Card As</a>                                     

                                    </div>
                        </div>                         
                        <input type="checkbox" style="width: 14px;margin-left: 5px;">
                    </div>
                    <div class="dFlex">
                        <button class="descPlusIcon">
                            <i class="far fa-plus"></i>
                        </button>
                    </div>
                </div>
                 <div class="desctBodyContAddUcun">
                     
                </div>              

                <div class="d-flex justify-content-end bodyEndInpDiv">
                    <input class="bodyEndInp addInput d-none" placeholder="Title" type="text">
                </div>
            </div>`
    },
    genDescForIpsum: function (text) {
        return ` <div class="ipsumContaineriAddUcun descCont bgF7F7F7">

                            <div class="d-flex" style="position:relative;">
                                <div class="descSortArrowTitle bg59">
                                    <i class="far fa-ellipsis-v text-light"></i>
                                    <i class="far fa-ellipsis-v text-light"></i>
                                    </div>

                                <div class="descTitle_sira dFlex text-light">                        
                                    <span class="titleNomre">1</span>
                                </div>
                                <div class="descTitle_title dFlex">                             
                                    <div class="text-light title">${text}</div>
                                    <!-- drop -->
                                    <div class="dropdown">
                                                <button class="btnMEnuAcan" type="" id="dropdownMenuButton" data-toggle="dropdown"
                                                    aria-haspopup="true" aria-expanded="false">
                                                    <i class="fal fa-ellipsis-v text-light"></i>
                                                </button>
                                                <div class="dropdown-menu btnMEnuAcanselectUcun"
                                                    aria-labelledby="dropdownMenuButton">
                                                    <a class="dropdown-item dropFontSize" href="#">Add Descriptions </a>
                                                    <a class="dropdown-item dropFontSize" href="#">Set as Output</a>
                                                    <a class="dropdown-item dropFontSize" href="#">Add to Task </a>
                                                    <a class="dropdown-item dropFontSize" href="#">Add to Task Events</a>
                                                    <a class="dropdown-item dropFontSize" href="#">Copy/Move</a>
                                                    <a class="dropdown-item dropFontSize" href="#">Delete</a>
                                                    <hr style="margin:3px 0px;">
                                                    <a class="dropdown-item dropFontSize" href="#">Add Fields of Table as Input</a>
                                                    <a class="dropdown-item dropFontSize" href="#">Add Input of Story Card As</a>                                     

                                                </div>
                                    </div>                         
                                    <input type="checkbox" style="width: 14px;margin-left: 5px;">
                                </div>
                                <div class="dFlex">
                                    <button class="descPlusIcon">
                                        <i class="far fa-plus"></i>
                                    </button>
                                </div>
                            </div>
                            <div class="desctBodyContAddUcun">
                                
                            </div>              

                            <div class="d-flex justify-content-end bodyEndInpDiv">
                                <input class="bodyEndInp addInput d-none" placeholder="Title" type="text">
                            </div>
                        </div>`
    },
    deleteThisRov(e) {
        $(e).closest('.descBodyrow').remove();
    },
    deleteDescRov(e) {
        $(e).closest('.descCont').remove();
    }

}


// add desc inp
$(document).on('change', '.addInput', function () {
    var text = $(this).val();
    var body = $(this).closest('.descCont').find('.desctBodyContAddUcun');
    body.append(SqlGeneratorClass.genNewDescbody(text));
    $(this).val('');
})
// add desc plus icon
$(document).on('click', '.descPlusIcon', function () {
    var el = $(this).closest('.descCont').find('.addInput');
    $(this).toggleClass('descPlusIconclick');
    $(this).find('i').toggleClass('fa-times fa-plus')
    el.toggleClass('d-none');    
})
// add desc
$(document).on('click', '.cardHeaderPlus', function () {
    $(this).toggleClass('cardHeaderPlusToggle');
    $(this).find('i').toggleClass('fa-times fa-plus');
    $('#addInput').toggleClass('headAddNewInp width0');
})

// header add desc
$(document).on('change', '.headAddNewInp', function () {
    var text = $(this).val();
    $('.descBodyForAdd').prepend(SqlGeneratorClass.genNewDesc(text));
    $(this).val('');
    $(".desctBodyContAddUcun").sortable();
    $('.ipsumConForAdd').sortable();
    $('.descBodyForAdd').sortable();

});
//ipsum menu ac
$(document).on('click', '#ipsumCartmenuIcon', function() {
    $(this).toggleClass('ipsumMwnuIconactive ipsumMwnuIcon');
    $(this).find('i').toggleClass('fa-angle-double-up fa-angle-double-down')
    $('.ipsumConForAdd').toggleClass('d-none')
});
// ipsum menu 
$(document).on('click', '.ipsum_title_end_icons', function () {
    $('#ipsumCartmenuIcon').click();
    $('#addIpsumInputt').toggleClass('d-none')
    $(this).find('i').toggleClass('fa-times fa-plus')
   
})
//ipsum ad desc
$(document).on('change', '#addIpsumInputt', function () {
    var text = $(this).val();
    $('.ipsumConForAdd').prepend(SqlGeneratorClass.genDescForIpsum(text));
})
//desc CHILD dbl click
$(document).on('dblclick', '.titlebodyText', function () {
    el = $(this);
    var text = el.text();
    el.text('')
    el.append(`<input id="" class="updateDescInp" value="${text}" type="text">`);
})

// DESC INP CHANGE
$(document).on('change', '.updateDescInp', function () {
    var text = $(this).val();
    $(this).closest('div').append(text)
    $(this).remove();
})

//desc dbl click
$(document).on('dblclick', '.title', function () {
    el = $(this);
    var text = el.text();
    el.text('')
    el.append(`<input id="" class="updateDescInp" value="${text}" type="text">`);
})

$(document).on('click', '.btnMEnuAcanselectUcun', function(event) {
    event.stopPropagation();
})



 


    

  
