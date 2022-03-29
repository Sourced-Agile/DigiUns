const SqlGeneratorClass = {
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
                    <div class="section_box1Dbb">
                    <!-- head -->
                    <div class="inputContainerDbb">
                        <div class="cs-input-boxDbb">
                            <span>Database Name</span>
                            <select class="selectpicker select" multiple id="" data-live-search="true" data-size="6"
                                data-show-subtext="true">
                        
                            </select>
                        </div>
                        <div class="cs-input-boxDbb">
                            <span>Table Name</span>
                            <select class="selectpicker select" multiple id="" data-live-search="true" data-size="6"
                                data-show-subtext="true">

                            </select>
                        </div>
                        <div class="cs-input-boxDbb">
                            <span>Field Name</span>
                            <select class="selectpicker select" multiple id="" data-live-search="true" data-size="6"
                                data-show-subtext="true">

                            </select>
                        </div>
                        <div class="cs-input-boxDbb">
                            <button class="headBtnDbb"><i class="fas fa-plus"></i></button>
                        </div>
                    </div>
                    <!-- body -->
                    <div class="tableBodyDb">
                        <table class="table table-hover table-striped">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Database</th>
                                    <th scope="col">Table</th>
                                    <th scope="col">Field</th>
                                    <th scope="col"></th>
                                </tr>
                            </thead>
                            <tbody>                   
                            
                            </tbody>
                        </table>
                    </div>
                    </div>
        `
    },
    genSection2: function () {
        return `
             <div class="section_box2Dbb">
                    <!-- head -->
                    <div class="inputContainerDbb">
                        <div class="cs-input-boxDbb">
                            <span>Database Name</span>
                            <select class="selectpicker select" multiple id="" data-live-search="true" data-size="6"
                                data-show-subtext="true">
                        
                            </select>
                        </div>
                        <div class="cs-input-boxDbb">
                            <span>Table Name</span>
                            <select class="selectpicker select" multiple id="" data-live-search="true" data-size="6"
                                data-show-subtext="true">

                            </select>
                        </div>            
                        <div class="cs-input-boxDbb">
                            <button class="headBtnDbb"><i class="fas fa-plus"></i></button>
                        </div>
                    </div>
                    <!-- body -->
                    <div class="tableBodyDb">
                        <table class="table table-hover table-striped">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Database</th>
                                    <th scope="col">Table</th>                      
                                    <th scope="col"></th>
                                </tr>
                            </thead>
                            <tbody>                  
                            
                            </tbody>
                        </table>
                    </div>

        </div>

        `
    }

}


// $(document).ready(function () {
//     SqlGeneratorClass.loader();
// })


    

  
