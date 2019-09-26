odoo.define('sh_shop_qty.website_sale', function (require) {
'use strict';

var sAnimations = require('website.content.snippets.animation');


sAnimations.registry.WebsiteSale.include({
    events: ({

        'change input[name="add_qty"]': '_onChangeAddQuantityCustom',   
    
    }),
    
    
	//--------------------------------------------------------------------------
    // Handlers
    //--------------------------------------------------------------------------

    /**
     * @private
     * @param {MouseEvent} ev
     */
    _onClickAddCartJSON: function (ev){
        
    
        ev.preventDefault();
        var $link = $(ev.currentTarget);

        var $input = $link.closest('.input-group').find("input");
        var min = parseFloat($input.data("min") || 0);
        var setqty = parseFloat($input.data("setqty") || 1);
        var max = parseFloat($input.data("max") || Infinity);
        var quantity = ($link.has(".fa-minus").length ? -setqty : setqty) + parseFloat($input.val() || 0, 10);
        var newQty = quantity > min ? (quantity < max ? quantity : max) : min;

        $input.val(newQty);
        return false;    	
  
    },    
    
    _onChangeAddQuantityCustom:function(ev){
    	
        //ev.preventDefault();    	
    	
    	var data = $('input[name="add_qty"]').val();
    	var default_value = $('input[name="add_qty"]').data('setqty');
    	if(parseInt(data) < parseInt(default_value)){
    		var set_data = default_value;
    		//document.getElementById("qty_id").value = set_data;
    		$('input[name="add_qty"]').val(set_data);
    	}
    	else if(parseInt(data) > parseInt(default_value)){
    		var divided_value = Math.ceil(parseInt(data)/parseInt(default_value));
    		var set_data = divided_value * parseInt(default_value);
    		//document.getElementById("qty_id").value = String(set_data);
    		$('input[name="add_qty"]').val(set_data);
    	}
        return false;      	
    },    
       
    
});

});
