const miniStoryCard = {
    loader: function () {      
        $('body').html(this.genBlock());
         $('.selectpicker').selectpicker('refresh')
    },
    genBlock: function (params) {
        return `
                <div class="containerDbb"> 
                   ${this.genSection1()}
                   ${this.genSection2()}
                </div> 
                `
    },
    genSection1: function () {
        return `
                  
        `
    },
    genSection2: function () {
        return `
             

        `
    }

}



    //ipsum plus click
$(document).on('click', '#plusAddIpsum', function() {
        $(this).find('i').toggleClass('fa-times fa-plus')
        $('#addIpsumInputt').toggleClass('d-none')
    })
    //ipsum add
$(document).on('change', '#addIpsumInputt', function() {
        v = $(this).val();
        miniStoryCard.addIpsum(this, v)
    })
   // add descriptiom change
$(document).on('change', '.tableEndInp', function() {
        miniStoryCard.addNewDesc(this)
    })
    //menu bar
$(document).on('click', '#ipsumCartmenuIcon', function() {
    $(this).toggleClass('ipsumMwnuIconactive ipsumMwnuIcon');
    $(this).find('i').toggleClass('fa-angle-double-up fa-angle-double-down')
    $('.ipsumContaineriAddUcun').toggleClass('d-none')

});



$(document).on('click', '.cardHeaderPlus', function() {
    $(this).toggleClass('cardHeaderPlusToggle');
    $(this).find('i').toggleClass('fa-times fa-plus');
    $('#addInput').toggleClass('headAddNewInp width0');

})

$(document).on('click', '.btnMEnuAcanselectUcun', function(event) {
    event.stopPropagation();
})

$(document).ready(function () {
    SqlGeneratorClass.loader();
})


    

  
