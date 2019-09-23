odoo.define('website_product_carousel.carousel_editor', function (require) {
    "use strict";

var rpc = require('web.rpc');
var options = require('web_editor.snippets.options');
var ajax = require('web.ajax');
var core = require('web.core');
var website_sale_utils = require('website_sale.utils');
var sAnimation = require('website.content.snippets.animation');

var qweb = core.qweb;
var _t = core._t;
// options.registry.js_get_objects_in_slide=options.Class.extend({start:function(){var t=this;setTimeout(function(){var i=t.$overlay.find(".snippet-option-js_get_objects_in_slide > div");if(t.$target.attr("data-objects_in_slide")){var e=t.$target.attr("data-objects_in_slide");i.find('a[data-objects_in_slide="'+e+'"]').addClass("active")}else i.find('a[data-objects_in_slide="3"]').addClass("active")},100)},objects_in_slide:function(t,i,e){0==t&&(i=parseInt(i),this.$target.attr("data-objects_in_slide",i).data("objects_in_slide",i),setTimeout(function(){e.parent().find("a").removeClass("active"),e.addClass("active")},100)),this.trigger_up("animation_start_demand",{editableMode:!0,$target:this.$target})}}),options.registry.js_get_objects_limit=options.Class.extend({start:function(){var t=this;setTimeout(function(){var i=t.$overlay.find(".snippet-option-js_get_objects_limit > div");if(t.$target.attr("data-objects_limit")){var e=t.$target.attr("data-objects_limit");i.find('a[data-objects_limit="'+e+'"]').addClass("active")}else i.find('a[data-objects_limit="15"]').addClass("active")},100)},objects_limit:function(t,i,e){0==t&&(i=parseInt(i),this.$target.attr("data-objects_limit",i).data("objects_limit",i),setTimeout(function(){e.parent().find("a").removeClass("active"),e.addClass("active")},100)),this.trigger_up("animation_start_demand",{editableMode:!0,$target:this.$target})}}),options.registry.js_get_objects_selectFilter=options.Class.extend({start:function(){this._super();var t=this;rpc.query({model:"website.product.filter",method:"search_read",args:[[["website_filter_published","=",!0],["filter_id.model_id","=","product.template"]],["name","filter_id","id"]]}).then(function(i){t.create_website_filters_List(i)}).fail(function(i){var e=_t("Problem Loading Slider"),a=$("<div contenteditable='false' class='message error text-center'><h2>"+e+"</h2><code>"+i.data.message+"</code></div>");t.$target.append(a)})},create_website_filters_List:function(t){var i=this,e=null;setTimeout(function(){if(e=i.$overlay.find(".snippet-option-js_get_objects_selectFilter > div"),$(t).each(function(){var t=$(this),i=$('<a class="dropdown-item" role="menuitem" data-filter_by_filter_id="'+t[0].id+'">'+t[0].name+"</a>");e.append(i)}),i.$target.attr("data-filter_by_filter_id")){var a=i.$target.attr("data-filter_by_filter_id");e.find("a[data-filter_by_filter_id="+a+"]").addClass("active")}else e.find('a[data-filter_by_filter_id=""]').addClass("active")},100)},filter_by_filter_id:function(t,i,e){0==t&&(e.parent().find("a").removeClass("active"),e.addClass("active"),i=parseInt(i),this.$target.attr("data-filter_by_filter_id",i).data("filter_by_filter_id",i)),this.trigger_up("animation_start_demand",{editableMode:!0,$target:this.$target})},_setActive:function(){this.$el.find("a[data-filter_by_filter_id]").removeClass("active").filter("a[data-filter_by_filter_id="+this.$target.attr("data-filter_by_filter_id")+"]").addClass("active")}}),sAnimation.registry.js_get_objects.include({events:{"click .o_add_wishlist":"wishlistClick"},init:function(){this._super.apply(this,arguments),this.wishlist_product_ids=[]},wishlistClick:function(t){var i=this;$.get("/shop/wishlist",{count:1}).then(function(t){i.wishlist_product_ids=JSON.parse(t)}),this.add_new_products($(t.target).parent(),t)},add_new_products:function(t,i){var e=this,a=void 0===$(i.target).data("product-product-id")?t.data("product-product-id"):$(i.target).data("product-product-id");if(i.currentTarget.classList.contains("o_add_wishlist_dyn")&&(a=parseInt(t.parent().find(".product_id").val())),!_.contains(e.wishlist_product_ids,a))return ajax.jsonRpc("/shop/wishlist/add","call",{product_id:a}).then(function(){e.wishlist_product_ids.push(a),website_sale_utils.animate_clone($("#my_wish"),t.closest("form"),25,40),t.prop("disabled",!0).addClass("disabled"),$("#my_wish").show(),$(".my_wish_quantity").text(e.wishlist_product_ids.length)})}}),options.registry.js_get_objects=options.Class.extend({onBuilt:function(){this._super.apply(this,arguments)},cleanForSave:function(){this._super.apply(this,arguments),this.$target.empty()}});
options.registry.js_get_objects_in_slide=options.Class.extend({start:function(){var t=this;setTimeout(function(){var i=t.$overlay.find(".snippet-option-js_get_objects_in_slide > div");if(t.$target.attr("data-objects_in_slide")){var e=t.$target.attr("data-objects_in_slide");i.find('a[data-objects_in_slide="'+e+'"]').addClass("active")}else i.find('a[data-objects_in_slide="3"]').addClass("active")},100)},objects_in_slide:function(t,i,e){0==t&&(i=parseInt(i),this.$target.attr("data-objects_in_slide",i).data("objects_in_slide",i),setTimeout(function(){e.parent().find("a").removeClass("active"),e.addClass("active")},100)),this.trigger_up("animation_start_demand",{editableMode:!0,$target:this.$target})}}),options.registry.js_get_objects_limit=options.Class.extend({start:function(){var t=this;setTimeout(function(){var i=t.$overlay.find(".snippet-option-js_get_objects_limit > div");if(t.$target.attr("data-objects_limit")){var e=t.$target.attr("data-objects_limit");i.find('a[data-objects_limit="'+e+'"]').addClass("active")}else i.find('a[data-objects_limit="15"]').addClass("active")},100)},objects_limit:function(t,i,e){0==t&&(i=parseInt(i),this.$target.attr("data-objects_limit",i).data("objects_limit",i),setTimeout(function(){e.parent().find("a").removeClass("active"),e.addClass("active")},100)),this.trigger_up("animation_start_demand",{editableMode:!0,$target:this.$target})}}),options.registry.js_get_objects_selectFilter=options.Class.extend({start:function(){this._super();var t=this;rpc.query({model:"website.product.filter",method:"search_read",args:[[["website_filter_published","=",!0],["filter_id.model_id","=","product.template"]],["name","filter_id","id"]]}).then(function(i){t.create_website_filters_List(i)}).fail(function(i){var e=_t("Problem Loading Slider"),a=$("<div contenteditable='false' class='message error text-center'><h2>"+e+"</h2><code>"+i.data.message+"</code></div>");t.$target.append(a)})},create_website_filters_List:function(t){var i=this,e=null;setTimeout(function(){if(e=i.$overlay.find(".snippet-option-js_get_objects_selectFilter > div"),$(t).each(function(){var t=$(this),i=$('<a class="dropdown-item" role="menuitem" data-filter_by_filter_id="'+t[0].id+'">'+t[0].name+"</a>");e.append(i)}),i.$target.attr("data-filter_by_filter_id")){var a=i.$target.attr("data-filter_by_filter_id");e.find("a[data-filter_by_filter_id="+a+"]").addClass("active")}else e.find('a[data-filter_by_filter_id=""]').addClass("active")},100)},filter_by_filter_id:function(t,i,e){0==t&&(e.parent().find("a").removeClass("active"),e.addClass("active"),i=parseInt(i),this.$target.attr("data-filter_by_filter_id",i).data("filter_by_filter_id",i)),this.trigger_up("animation_start_demand",{editableMode:!0,$target:this.$target})},_setActive:function(){this.$el.find("a[data-filter_by_filter_id]").removeClass("active").filter("a[data-filter_by_filter_id="+this.$target.attr("data-filter_by_filter_id")+"]").addClass("active")}}),sAnimation.registry.js_get_objects.include({events:{"click .o_add_wishlist":"wishlistClick"},init:function(){this._super.apply(this,arguments),this.wishlist_product_ids=[]},wishlistClick:function(t){var i=this;$.get("/shop/wishlist",{count:1}).then(function(t){i.wishlist_product_ids=JSON.parse(t)}),this.wishlist_item_add($(t.target).parent(),t)},wishlist_item_add:function(t,i){var e=this,a=void 0===$(i.target).data("product-product-id")?t.data("product-product-id"):$(i.target).data("product-product-id");if(t.prop("disabled",!0).addClass("disabled"),i.currentTarget.classList.contains("o_add_wishlist_dyn")&&(a=parseInt(t.parent().find(".product_id").val())),!_.contains(e.wishlist_product_ids,a))return ajax.jsonRpc("/shop/wishlist/add","call",{product_id:a}).then(function(){e.wishlist_product_ids.push(a),e._updateWishlistView(),website_sale_utils.animateClone($("#my_wish"),t.closest("form"),25,40)}).fail(function(){t.prop("disabled",!1).removeClass("disabled")})},_updateWishlistView:function(){this.wishlist_product_ids.length>0?($("#my_wish").show(),$(".my_wish_quantity").text(this.wishlist_product_ids.length)):$("#my_wish").hide()}}),options.registry.js_get_objects=options.Class.extend({onBuilt:function(){this._super.apply(this,arguments)},cleanForSave:function(){this._super.apply(this,arguments),this.$target.empty()}});
});