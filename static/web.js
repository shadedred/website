webpackJsonp([3],{316:function(t,e,i){"use strict";i(26),i(25),i(41),i(74),i(76),i(75)},74:function(t,e){},75:function(t,e,i){(function(t){(function(){"use strict";var e=i(0),s=function(t){return t&&t.__esModule?t:{default:t}}(e),n={height:500,width:420,scrollbars:0,toolbar:0,location:0,status:"no",menubar:0,resizable:0,dependent:0},a=function(e){return e=e?t.extend({},n,e):n,Object.keys(e).map(function(t){return t+"="+e[t]}).join(",")};t(function(){var e=t("body");t("body#bigscreen").each(function(){var e=t("#chat-panel"),i=t("#stream-panel"),s=t("iframe#chat-frame"),n=t('<div class="overlay" />');s.on("load",function(){var s=this.contentWindow;s&&t("#chat-panel-tools").each(function(){t(this).on("click","#popout",function(){return window.open("/embed/chat","_blank",a()),t("body").addClass("nochat"),e.remove(),i.removeAttr("style"),!1}),t(this).on("click","#refresh",function(){return s.location.reload(),!1}),t(this).on("click","#close",function(){return t("body").addClass("nochat"),e.remove(),i.removeAttr("style"),!1}),t(this).on("click","#swap",function(){return e.toggleClass("left").toggleClass("right"),i.toggleClass("left").toggleClass("right"),localStorage.setItem("bigscreen.orientation",i.hasClass("left")?0:1),!1})})}),t("#chat-panel-resize-bar").each(function(){var s=t(this),a=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,n=0;n=null===t?e.hasClass("left")?s.offset().left:e.offset().left+e.outerWidth()-s.offset().left:t,s.css("left",""),n=Math.max(n,320),i.css("width","-moz-calc(100% - "+n+"px)"),i.css("width","-webkit-calc(100% - "+n+"px)"),i.css("width","-o-calc(100% - "+n+"px)"),i.css("width","calc(100% - "+n+"px)"),e.css("width",n),localStorage.setItem("bigscreen.chat.width",n)};s.on("mousedown.chatresize",function(e){e.preventDefault(),s.addClass("active"),n.appendTo("body");var i=e.clientX,r=s.position().left;t(document).on("mouseup.chatresize",function(e){e.preventDefault(),s.removeClass("active"),n.remove(),s.css("left",r+(e.clientX-i)),t(document).unbind("mousemove.chatresize"),t(document).unbind("mouseup.chatresize"),a()}),t(document).on("mousemove.chatresize",function(t){t.preventDefault(),s.css("left",r+(t.clientX-i))})}),t(window).on("resize.chatresize",function(){t(window).width()<=768&&(i.removeAttr("style"),e.removeAttr("style"))});var r=parseInt(localStorage.getItem("bigscreen.chat.width"));r>320&&t(window).width()>768&&a(r);var o=localStorage.getItem("bigscreen.orientation")||-1;switch(parseInt(o)){case 0:i.removeClass("right").addClass("left"),e.removeClass("left").addClass("right");break;case 1:i.removeClass("left").addClass("right"),e.removeClass("right").addClass("left")}})}),t(".btn-show-all").on("click",function(e){e.preventDefault(),t(".collapse").collapse("show")}),""!==location.hash&&t('a[href="'+location.hash+'"]').tab("show"),t('.navbar a[rel="'+e.attr("id")+'"]').closest("li").addClass("active"),t('.navbar a[rel="'+e.attr("class")+'"]').closest("li").addClass("active"),t(document).find("img[data-src]").each(function(){var e=t(this),i=e.data("src");if(""!==i&&null!==i){var s=e.clone();s.one("load",function(){e.replaceWith(s)}),s.removeClass("img_320x240 img_64x64").removeAttr("data-src").attr("src",i)}}),e.on("click","a.popup",function(e){var i=t(this);return i.data("popup",window.open(i.attr("href"),"_blank",a(i.data("options")))),e.preventDefault(),!0}),t(this).find('[data-toggle="tooltip"]').tooltip()}),function(){var e=function(e){var i=t(e),n=i.data("format")||"MMMM Do, h:mm:ss a",a=i.data("datetime")||i.attr("datetime")||i.text();!0===a&&(a=i.attr("title")),i.data("moment-fromnow")?(i.addClass("moment-update"),i.html((0,s.default)(a).fromNow())):i.data("moment-calendar")?(i.addClass("moment-update"),i.html((0,s.default)(a).calendar())):i.html((0,s.default)(a).format(n)),i.data("datetime",a).addClass("moment-set")};window.setInterval(function(){t("time.moment-update").each(function(){e(this)})},3e4),t('time[data-moment="true"]:not(.moment-set)').each(function(){e(this)})}(),function(){var e=t("#userSearchModal"),i=e.find("input#userSearchInput"),s=e.find("button#userSearchSelect"),n=e.find("form#userSearchForm"),a=e.find("textarea#giftmessage"),r=!1,o="",l=function(e,i){t.ajax({url:"/api/info/giftcheck",data:{s:e},type:"GET",success:function(t){i.call(this,t)},error:function(){d("Error looking up user. Try again")}})},d=function(t){r=!0,s.button("reset").attr("disabled",!0),e.find("label.error").text(t).removeClass("hidden")},u=function(){e.modal("hide"),i.val(""),a.val(""),t("#subscriptionGiftUsername").text(""),t("#giftSubscriptionConfirm").addClass("hidden"),t("#giftSubscriptionSelect").removeClass("hidden"),t('input[name="gift"]').val(""),t('input[name="gift-message"]').val("")},h=function(t){s.button("loading"),l(t,function(e){e.valid&&e.cangift?(o=t,""===a.val()?a.focus():n.submit(),s.button("reset").attr("disabled",!1),r=!1):e.valid?e.cangift||d("This user is not eligible for a gift."):d("This user was not found. Try again.")})};i.on("keydown change",function(){s.attr("disabled",""===t(this).val()),e.find("label.error").addClass("hidden")}),n.on("submit",function(){return e.find("label.error").addClass("hidden"),o!==i.val()?h(i.val()):(t("#subscriptionGiftUsername").text(i.val()),t("#giftSubscriptionConfirm").removeClass("hidden"),t("#giftSubscriptionSelect").addClass("hidden"),t('input[name="gift"]').val(i.val()),t('input[name="gift-message"]').val(a.val()),e.modal("hide")),!1}),e.on("shown.bs.modal",function(t){i.focus()}),e.on("hidden.bs.modal",function(t){r&&(r=!1,o="",i.val(""),a.val(""),e.find("label.error").addClass("hidden"))}),t("#cancelGiftSubscription").on("click",function(){return e.find("label.error").addClass("hidden"),u(),!1}),t("form.validate").validate({highlight:function(e){t(e).closest(".form-group").addClass("error")},unhighlight:function(e){t(e).closest(".form-group").removeClass("error")}})}(),t(function(){t("#stream-status").each(function(){var e=t(this),i=e.find("#stream-status-preview > a"),n=e.find("#stream-status-end"),a=e.find("#stream-status-start"),r=e.find("#stream-status-host"),o={live:!1,game:null,preview:"",animated_preview:"",status_text:"",started_at:null,ended_at:"",duration:0,viewers:0,host:{}},l=function(t){var o=t.host&&void 0!==t.host.id?"hosting":t.live?"online":"offline";e.removeClass("online offline hosting").addClass(o),n.text((0,s.default)(t.ended_at).fromNow()),a.text((0,s.default)(t.started_at).fromNow()),i.data("animated",t.animated_preview).css("background-image",t.preview),"hosting"===o&&(r.text(t.host.display_name),r.attr("href",t.host.url))};setInterval(function(){t.ajax({url:"/api/info/stream",type:"GET",success:function(e){try{null!==e&&void 0!==e&&l(t.extend(o,e))}catch(t){}}})},6e4),i.src=i.css("background-image"),i.animated="url("+i.data("animated")+")",i.on("mouseover",function(){i.css("background-image",i.animated)}).on("mouseout",function(){i.css("background-image",i.src)})})})}).call(window)}).call(e,i(3))},76:function(t,e,i){var s,n,a;(function(){/*!
 * jQuery Validation Plugin v1.16.0
 *
 * http://jqueryvalidation.org/
 *
 * Copyright (c) 2016 Jörn Zaefferer
 * Released under the MIT license
 */
!function(r){n=[i(3)],s=r,void 0!==(a="function"==typeof s?s.apply(e,n):s)&&(t.exports=a)}(function(t){t.extend(t.fn,{validate:function(e){if(!this.length)return void(e&&e.debug&&window.console&&console.warn("Nothing selected, can't validate, returning nothing."));var i=t.data(this[0],"validator");return i||(this.attr("novalidate","novalidate"),i=new t.validator(e,this[0]),t.data(this[0],"validator",i),i.settings.onsubmit&&(this.on("click.validate",":submit",function(e){i.settings.submitHandler&&(i.submitButton=e.target),t(this).hasClass("cancel")&&(i.cancelSubmit=!0),void 0!==t(this).attr("formnovalidate")&&(i.cancelSubmit=!0)}),this.on("submit.validate",function(e){function s(){var s,n;return!i.settings.submitHandler||(i.submitButton&&(s=t("<input type='hidden'/>").attr("name",i.submitButton.name).val(t(i.submitButton).val()).appendTo(i.currentForm)),n=i.settings.submitHandler.call(i,i.currentForm,e),i.submitButton&&s.remove(),void 0!==n&&n)}return i.settings.debug&&e.preventDefault(),i.cancelSubmit?(i.cancelSubmit=!1,s()):i.form()?i.pendingRequest?(i.formSubmitted=!0,!1):s():(i.focusInvalid(),!1)})),i)},valid:function(){var e,i,s;return t(this[0]).is("form")?e=this.validate().form():(s=[],e=!0,i=t(this[0].form).validate(),this.each(function(){(e=i.element(this)&&e)||(s=s.concat(i.errorList))}),i.errorList=s),e},rules:function(e,i){var s,n,a,r,o,l,d=this[0];if(null!=d&&null!=d.form){if(e)switch(s=t.data(d.form,"validator").settings,n=s.rules,a=t.validator.staticRules(d),e){case"add":t.extend(a,t.validator.normalizeRule(i)),delete a.messages,n[d.name]=a,i.messages&&(s.messages[d.name]=t.extend(s.messages[d.name],i.messages));break;case"remove":return i?(l={},t.each(i.split(/\s/),function(e,i){l[i]=a[i],delete a[i],"required"===i&&t(d).removeAttr("aria-required")}),l):(delete n[d.name],a)}return r=t.validator.normalizeRules(t.extend({},t.validator.classRules(d),t.validator.attributeRules(d),t.validator.dataRules(d),t.validator.staticRules(d)),d),r.required&&(o=r.required,delete r.required,r=t.extend({required:o},r),t(d).attr("aria-required","true")),r.remote&&(o=r.remote,delete r.remote,r=t.extend(r,{remote:o})),r}}}),t.extend(t.expr.pseudos||t.expr[":"],{blank:function(e){return!t.trim(""+t(e).val())},filled:function(e){var i=t(e).val();return null!==i&&!!t.trim(""+i)},unchecked:function(e){return!t(e).prop("checked")}}),t.validator=function(e,i){this.settings=t.extend(!0,{},t.validator.defaults,e),this.currentForm=i,this.init()},t.validator.format=function(e,i){return 1===arguments.length?function(){var i=t.makeArray(arguments);return i.unshift(e),t.validator.format.apply(this,i)}:void 0===i?e:(arguments.length>2&&i.constructor!==Array&&(i=t.makeArray(arguments).slice(1)),i.constructor!==Array&&(i=[i]),t.each(i,function(t,i){e=e.replace(new RegExp("\\{"+t+"\\}","g"),function(){return i})}),e)},t.extend(t.validator,{defaults:{messages:{},groups:{},rules:{},errorClass:"error",pendingClass:"pending",validClass:"valid",errorElement:"label",focusCleanup:!1,focusInvalid:!0,errorContainer:t([]),errorLabelContainer:t([]),onsubmit:!0,ignore:":hidden",ignoreTitle:!1,onfocusin:function(t){this.lastActive=t,this.settings.focusCleanup&&(this.settings.unhighlight&&this.settings.unhighlight.call(this,t,this.settings.errorClass,this.settings.validClass),this.hideThese(this.errorsFor(t)))},onfocusout:function(t){this.checkable(t)||!(t.name in this.submitted)&&this.optional(t)||this.element(t)},onkeyup:function(e,i){var s=[16,17,18,20,35,36,37,38,39,40,45,144,225];9===i.which&&""===this.elementValue(e)||-1!==t.inArray(i.keyCode,s)||(e.name in this.submitted||e.name in this.invalid)&&this.element(e)},onclick:function(t){t.name in this.submitted?this.element(t):t.parentNode.name in this.submitted&&this.element(t.parentNode)},highlight:function(e,i,s){"radio"===e.type?this.findByName(e.name).addClass(i).removeClass(s):t(e).addClass(i).removeClass(s)},unhighlight:function(e,i,s){"radio"===e.type?this.findByName(e.name).removeClass(i).addClass(s):t(e).removeClass(i).addClass(s)}},setDefaults:function(e){t.extend(t.validator.defaults,e)},messages:{required:"This field is required.",remote:"Please fix this field.",email:"Please enter a valid email address.",url:"Please enter a valid URL.",date:"Please enter a valid date.",dateISO:"Please enter a valid date (ISO).",number:"Please enter a valid number.",digits:"Please enter only digits.",equalTo:"Please enter the same value again.",maxlength:t.validator.format("Please enter no more than {0} characters."),minlength:t.validator.format("Please enter at least {0} characters."),rangelength:t.validator.format("Please enter a value between {0} and {1} characters long."),range:t.validator.format("Please enter a value between {0} and {1}."),max:t.validator.format("Please enter a value less than or equal to {0}."),min:t.validator.format("Please enter a value greater than or equal to {0}."),step:t.validator.format("Please enter a multiple of {0}.")},autoCreateRanges:!1,prototype:{init:function(){function e(e){!this.form&&this.hasAttribute("contenteditable")&&(this.form=t(this).closest("form")[0]);var i=t.data(this.form,"validator"),s="on"+e.type.replace(/^validate/,""),n=i.settings;n[s]&&!t(this).is(n.ignore)&&n[s].call(i,this,e)}this.labelContainer=t(this.settings.errorLabelContainer),this.errorContext=this.labelContainer.length&&this.labelContainer||t(this.currentForm),this.containers=t(this.settings.errorContainer).add(this.settings.errorLabelContainer),this.submitted={},this.valueCache={},this.pendingRequest=0,this.pending={},this.invalid={},this.reset();var i,s=this.groups={};t.each(this.settings.groups,function(e,i){"string"==typeof i&&(i=i.split(/\s/)),t.each(i,function(t,i){s[i]=e})}),i=this.settings.rules,t.each(i,function(e,s){i[e]=t.validator.normalizeRule(s)}),t(this.currentForm).on("focusin.validate focusout.validate keyup.validate",":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'], [type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], [type='radio'], [type='checkbox'], [contenteditable], [type='button']",e).on("click.validate","select, option, [type='radio'], [type='checkbox']",e),this.settings.invalidHandler&&t(this.currentForm).on("invalid-form.validate",this.settings.invalidHandler),t(this.currentForm).find("[required], [data-rule-required], .required").attr("aria-required","true")},form:function(){return this.checkForm(),t.extend(this.submitted,this.errorMap),this.invalid=t.extend({},this.errorMap),this.valid()||t(this.currentForm).triggerHandler("invalid-form",[this]),this.showErrors(),this.valid()},checkForm:function(){this.prepareForm();for(var t=0,e=this.currentElements=this.elements();e[t];t++)this.check(e[t]);return this.valid()},element:function(e){var i,s,n=this.clean(e),a=this.validationTargetFor(n),r=this,o=!0;return void 0===a?delete this.invalid[n.name]:(this.prepareElement(a),this.currentElements=t(a),s=this.groups[a.name],s&&t.each(this.groups,function(t,e){e===s&&t!==a.name&&(n=r.validationTargetFor(r.clean(r.findByName(t))))&&n.name in r.invalid&&(r.currentElements.push(n),o=r.check(n)&&o)}),i=!1!==this.check(a),o=o&&i,this.invalid[a.name]=!i,this.numberOfInvalids()||(this.toHide=this.toHide.add(this.containers)),this.showErrors(),t(e).attr("aria-invalid",!i)),o},showErrors:function(e){if(e){var i=this;t.extend(this.errorMap,e),this.errorList=t.map(this.errorMap,function(t,e){return{message:t,element:i.findByName(e)[0]}}),this.successList=t.grep(this.successList,function(t){return!(t.name in e)})}this.settings.showErrors?this.settings.showErrors.call(this,this.errorMap,this.errorList):this.defaultShowErrors()},resetForm:function(){t.fn.resetForm&&t(this.currentForm).resetForm(),this.invalid={},this.submitted={},this.prepareForm(),this.hideErrors();var e=this.elements().removeData("previousValue").removeAttr("aria-invalid");this.resetElements(e)},resetElements:function(t){var e;if(this.settings.unhighlight)for(e=0;t[e];e++)this.settings.unhighlight.call(this,t[e],this.settings.errorClass,""),this.findByName(t[e].name).removeClass(this.settings.validClass);else t.removeClass(this.settings.errorClass).removeClass(this.settings.validClass)},numberOfInvalids:function(){return this.objectLength(this.invalid)},objectLength:function(t){var e,i=0;for(e in t)t[e]&&i++;return i},hideErrors:function(){this.hideThese(this.toHide)},hideThese:function(t){t.not(this.containers).text(""),this.addWrapper(t).hide()},valid:function(){return 0===this.size()},size:function(){return this.errorList.length},focusInvalid:function(){if(this.settings.focusInvalid)try{t(this.findLastActive()||this.errorList.length&&this.errorList[0].element||[]).filter(":visible").focus().trigger("focusin")}catch(t){}},findLastActive:function(){var e=this.lastActive;return e&&1===t.grep(this.errorList,function(t){return t.element.name===e.name}).length&&e},elements:function(){var e=this,i={};return t(this.currentForm).find("input, select, textarea, [contenteditable]").not(":submit, :reset, :image, :disabled").not(this.settings.ignore).filter(function(){var s=this.name||t(this).attr("name");return!s&&e.settings.debug&&window.console&&console.error("%o has no name assigned",this),this.hasAttribute("contenteditable")&&(this.form=t(this).closest("form")[0]),!(s in i||!e.objectLength(t(this).rules()))&&(i[s]=!0,!0)})},clean:function(e){return t(e)[0]},errors:function(){var e=this.settings.errorClass.split(" ").join(".");return t(this.settings.errorElement+"."+e,this.errorContext)},resetInternals:function(){this.successList=[],this.errorList=[],this.errorMap={},this.toShow=t([]),this.toHide=t([])},reset:function(){this.resetInternals(),this.currentElements=t([])},prepareForm:function(){this.reset(),this.toHide=this.errors().add(this.containers)},prepareElement:function(t){this.reset(),this.toHide=this.errorsFor(t)},elementValue:function(e){var i,s,n=t(e),a=e.type;return"radio"===a||"checkbox"===a?this.findByName(e.name).filter(":checked").val():"number"===a&&void 0!==e.validity?e.validity.badInput?"NaN":n.val():(i=e.hasAttribute("contenteditable")?n.text():n.val(),"file"===a?"C:\\fakepath\\"===i.substr(0,12)?i.substr(12):(s=i.lastIndexOf("/"))>=0?i.substr(s+1):(s=i.lastIndexOf("\\"),s>=0?i.substr(s+1):i):"string"==typeof i?i.replace(/\r/g,""):i)},check:function(e){e=this.validationTargetFor(this.clean(e));var i,s,n,a=t(e).rules(),r=t.map(a,function(t,e){return e}).length,o=!1,l=this.elementValue(e);if("function"==typeof a.normalizer){if("string"!=typeof(l=a.normalizer.call(e,l)))throw new TypeError("The normalizer should return a string value.");delete a.normalizer}for(s in a){n={method:s,parameters:a[s]};try{if("dependency-mismatch"===(i=t.validator.methods[s].call(this,l,e,n.parameters))&&1===r){o=!0;continue}if(o=!1,"pending"===i)return void(this.toHide=this.toHide.not(this.errorsFor(e)));if(!i)return this.formatAndAdd(e,n),!1}catch(t){throw this.settings.debug&&window.console&&console.log("Exception occurred when checking element "+e.id+", check the '"+n.method+"' method.",t),t instanceof TypeError&&(t.message+=".  Exception occurred when checking element "+e.id+", check the '"+n.method+"' method."),t}}if(!o)return this.objectLength(a)&&this.successList.push(e),!0},customDataMessage:function(e,i){return t(e).data("msg"+i.charAt(0).toUpperCase()+i.substring(1).toLowerCase())||t(e).data("msg")},customMessage:function(t,e){var i=this.settings.messages[t];return i&&(i.constructor===String?i:i[e])},findDefined:function(){for(var t=0;t<arguments.length;t++)if(void 0!==arguments[t])return arguments[t]},defaultMessage:function(e,i){"string"==typeof i&&(i={method:i});var s=this.findDefined(this.customMessage(e.name,i.method),this.customDataMessage(e,i.method),!this.settings.ignoreTitle&&e.title||void 0,t.validator.messages[i.method],"<strong>Warning: No message defined for "+e.name+"</strong>"),n=/\$?\{(\d+)\}/g;return"function"==typeof s?s=s.call(this,i.parameters,e):n.test(s)&&(s=t.validator.format(s.replace(n,"{$1}"),i.parameters)),s},formatAndAdd:function(t,e){var i=this.defaultMessage(t,e);this.errorList.push({message:i,element:t,method:e.method}),this.errorMap[t.name]=i,this.submitted[t.name]=i},addWrapper:function(t){return this.settings.wrapper&&(t=t.add(t.parent(this.settings.wrapper))),t},defaultShowErrors:function(){var t,e,i;for(t=0;this.errorList[t];t++)i=this.errorList[t],this.settings.highlight&&this.settings.highlight.call(this,i.element,this.settings.errorClass,this.settings.validClass),this.showLabel(i.element,i.message);if(this.errorList.length&&(this.toShow=this.toShow.add(this.containers)),this.settings.success)for(t=0;this.successList[t];t++)this.showLabel(this.successList[t]);if(this.settings.unhighlight)for(t=0,e=this.validElements();e[t];t++)this.settings.unhighlight.call(this,e[t],this.settings.errorClass,this.settings.validClass);this.toHide=this.toHide.not(this.toShow),this.hideErrors(),this.addWrapper(this.toShow).show()},validElements:function(){return this.currentElements.not(this.invalidElements())},invalidElements:function(){return t(this.errorList).map(function(){return this.element})},showLabel:function(e,i){var s,n,a,r,o=this.errorsFor(e),l=this.idOrName(e),d=t(e).attr("aria-describedby");o.length?(o.removeClass(this.settings.validClass).addClass(this.settings.errorClass),o.html(i)):(o=t("<"+this.settings.errorElement+">").attr("id",l+"-error").addClass(this.settings.errorClass).html(i||""),s=o,this.settings.wrapper&&(s=o.hide().show().wrap("<"+this.settings.wrapper+"/>").parent()),this.labelContainer.length?this.labelContainer.append(s):this.settings.errorPlacement?this.settings.errorPlacement.call(this,s,t(e)):s.insertAfter(e),o.is("label")?o.attr("for",l):0===o.parents("label[for='"+this.escapeCssMeta(l)+"']").length&&(a=o.attr("id"),d?d.match(new RegExp("\\b"+this.escapeCssMeta(a)+"\\b"))||(d+=" "+a):d=a,t(e).attr("aria-describedby",d),(n=this.groups[e.name])&&(r=this,t.each(r.groups,function(e,i){i===n&&t("[name='"+r.escapeCssMeta(e)+"']",r.currentForm).attr("aria-describedby",o.attr("id"))})))),!i&&this.settings.success&&(o.text(""),"string"==typeof this.settings.success?o.addClass(this.settings.success):this.settings.success(o,e)),this.toShow=this.toShow.add(o)},errorsFor:function(e){var i=this.escapeCssMeta(this.idOrName(e)),s=t(e).attr("aria-describedby"),n="label[for='"+i+"'], label[for='"+i+"'] *";return s&&(n=n+", #"+this.escapeCssMeta(s).replace(/\s+/g,", #")),this.errors().filter(n)},escapeCssMeta:function(t){return t.replace(/([\\!"#$%&'()*+,.\/:;<=>?@\[\]^`{|}~])/g,"\\$1")},idOrName:function(t){return this.groups[t.name]||(this.checkable(t)?t.name:t.id||t.name)},validationTargetFor:function(e){return this.checkable(e)&&(e=this.findByName(e.name)),t(e).not(this.settings.ignore)[0]},checkable:function(t){return/radio|checkbox/i.test(t.type)},findByName:function(e){return t(this.currentForm).find("[name='"+this.escapeCssMeta(e)+"']")},getLength:function(e,i){switch(i.nodeName.toLowerCase()){case"select":return t("option:selected",i).length;case"input":if(this.checkable(i))return this.findByName(i.name).filter(":checked").length}return e.length},depend:function(t,e){return!this.dependTypes[typeof t]||this.dependTypes[typeof t](t,e)},dependTypes:{boolean:function(t){return t},string:function(e,i){return!!t(e,i.form).length},function:function(t,e){return t(e)}},optional:function(e){var i=this.elementValue(e);return!t.validator.methods.required.call(this,i,e)&&"dependency-mismatch"},startRequest:function(e){this.pending[e.name]||(this.pendingRequest++,t(e).addClass(this.settings.pendingClass),this.pending[e.name]=!0)},stopRequest:function(e,i){this.pendingRequest--,this.pendingRequest<0&&(this.pendingRequest=0),delete this.pending[e.name],t(e).removeClass(this.settings.pendingClass),i&&0===this.pendingRequest&&this.formSubmitted&&this.form()?(t(this.currentForm).submit(),this.formSubmitted=!1):!i&&0===this.pendingRequest&&this.formSubmitted&&(t(this.currentForm).triggerHandler("invalid-form",[this]),this.formSubmitted=!1)},previousValue:function(e,i){return i="string"==typeof i&&i||"remote",t.data(e,"previousValue")||t.data(e,"previousValue",{old:null,valid:!0,message:this.defaultMessage(e,{method:i})})},destroy:function(){this.resetForm(),t(this.currentForm).off(".validate").removeData("validator").find(".validate-equalTo-blur").off(".validate-equalTo").removeClass("validate-equalTo-blur")}},classRuleSettings:{required:{required:!0},email:{email:!0},url:{url:!0},date:{date:!0},dateISO:{dateISO:!0},number:{number:!0},digits:{digits:!0},creditcard:{creditcard:!0}},addClassRules:function(e,i){e.constructor===String?this.classRuleSettings[e]=i:t.extend(this.classRuleSettings,e)},classRules:function(e){var i={},s=t(e).attr("class");return s&&t.each(s.split(" "),function(){this in t.validator.classRuleSettings&&t.extend(i,t.validator.classRuleSettings[this])}),i},normalizeAttributeRule:function(t,e,i,s){/min|max|step/.test(i)&&(null===e||/number|range|text/.test(e))&&(s=Number(s),isNaN(s)&&(s=void 0)),s||0===s?t[i]=s:e===i&&"range"!==e&&(t[i]=!0)},attributeRules:function(e){var i,s,n={},a=t(e),r=e.getAttribute("type");for(i in t.validator.methods)"required"===i?(s=e.getAttribute(i),""===s&&(s=!0),s=!!s):s=a.attr(i),this.normalizeAttributeRule(n,r,i,s);return n.maxlength&&/-1|2147483647|524288/.test(n.maxlength)&&delete n.maxlength,n},dataRules:function(e){var i,s,n={},a=t(e),r=e.getAttribute("type");for(i in t.validator.methods)s=a.data("rule"+i.charAt(0).toUpperCase()+i.substring(1).toLowerCase()),this.normalizeAttributeRule(n,r,i,s);return n},staticRules:function(e){var i={},s=t.data(e.form,"validator");return s.settings.rules&&(i=t.validator.normalizeRule(s.settings.rules[e.name])||{}),i},normalizeRules:function(e,i){return t.each(e,function(s,n){if(!1===n)return void delete e[s];if(n.param||n.depends){var a=!0;switch(typeof n.depends){case"string":a=!!t(n.depends,i.form).length;break;case"function":a=n.depends.call(i,i)}a?e[s]=void 0===n.param||n.param:(t.data(i.form,"validator").resetElements(t(i)),delete e[s])}}),t.each(e,function(s,n){e[s]=t.isFunction(n)&&"normalizer"!==s?n(i):n}),t.each(["minlength","maxlength"],function(){e[this]&&(e[this]=Number(e[this]))}),t.each(["rangelength","range"],function(){var i;e[this]&&(t.isArray(e[this])?e[this]=[Number(e[this][0]),Number(e[this][1])]:"string"==typeof e[this]&&(i=e[this].replace(/[\[\]]/g,"").split(/[\s,]+/),e[this]=[Number(i[0]),Number(i[1])]))}),t.validator.autoCreateRanges&&(null!=e.min&&null!=e.max&&(e.range=[e.min,e.max],delete e.min,delete e.max),null!=e.minlength&&null!=e.maxlength&&(e.rangelength=[e.minlength,e.maxlength],delete e.minlength,delete e.maxlength)),e},normalizeRule:function(e){if("string"==typeof e){var i={};t.each(e.split(/\s/),function(){i[this]=!0}),e=i}return e},addMethod:function(e,i,s){t.validator.methods[e]=i,t.validator.messages[e]=void 0!==s?s:t.validator.messages[e],i.length<3&&t.validator.addClassRules(e,t.validator.normalizeRule(e))},methods:{required:function(e,i,s){if(!this.depend(s,i))return"dependency-mismatch";if("select"===i.nodeName.toLowerCase()){var n=t(i).val();return n&&n.length>0}return this.checkable(i)?this.getLength(e,i)>0:e.length>0},email:function(t,e){return this.optional(e)||/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(t)},url:function(t,e){return this.optional(e)||/^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[\/?#]\S*)?$/i.test(t)},date:function(t,e){return this.optional(e)||!/Invalid|NaN/.test(new Date(t).toString())},dateISO:function(t,e){return this.optional(e)||/^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(t)},number:function(t,e){return this.optional(e)||/^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(t)},digits:function(t,e){return this.optional(e)||/^\d+$/.test(t)},minlength:function(e,i,s){var n=t.isArray(e)?e.length:this.getLength(e,i);return this.optional(i)||n>=s},maxlength:function(e,i,s){var n=t.isArray(e)?e.length:this.getLength(e,i);return this.optional(i)||n<=s},rangelength:function(e,i,s){var n=t.isArray(e)?e.length:this.getLength(e,i);return this.optional(i)||n>=s[0]&&n<=s[1]},min:function(t,e,i){return this.optional(e)||t>=i},max:function(t,e,i){return this.optional(e)||t<=i},range:function(t,e,i){return this.optional(e)||t>=i[0]&&t<=i[1]},step:function(e,i,s){var n,a=t(i).attr("type"),r="Step attribute on input type "+a+" is not supported.",o=["text","number","range"],l=new RegExp("\\b"+a+"\\b"),d=a&&!l.test(o.join()),u=function(t){var e=(""+t).match(/(?:\.(\d+))?$/);return e&&e[1]?e[1].length:0},h=function(t){return Math.round(t*Math.pow(10,n))},c=!0;if(d)throw new Error(r);return n=u(s),(u(e)>n||h(e)%h(s)!=0)&&(c=!1),this.optional(i)||c},equalTo:function(e,i,s){var n=t(s);return this.settings.onfocusout&&n.not(".validate-equalTo-blur").length&&n.addClass("validate-equalTo-blur").on("blur.validate-equalTo",function(){t(i).valid()}),e===n.val()},remote:function(e,i,s,n){if(this.optional(i))return"dependency-mismatch";n="string"==typeof n&&n||"remote";var a,r,o,l=this.previousValue(i,n);return this.settings.messages[i.name]||(this.settings.messages[i.name]={}),l.originalMessage=l.originalMessage||this.settings.messages[i.name][n],this.settings.messages[i.name][n]=l.message,s="string"==typeof s&&{url:s}||s,o=t.param(t.extend({data:e},s.data)),l.old===o?l.valid:(l.old=o,a=this,this.startRequest(i),r={},r[i.name]=e,t.ajax(t.extend(!0,{mode:"abort",port:"validate"+i.name,dataType:"json",data:r,context:a.currentForm,success:function(t){var s,r,o,d=!0===t||"true"===t;a.settings.messages[i.name][n]=l.originalMessage,d?(o=a.formSubmitted,a.resetInternals(),a.toHide=a.errorsFor(i),a.formSubmitted=o,a.successList.push(i),a.invalid[i.name]=!1,a.showErrors()):(s={},r=t||a.defaultMessage(i,{method:n,parameters:e}),s[i.name]=l.message=r,a.invalid[i.name]=!0,a.showErrors(s)),l.valid=d,a.stopRequest(i,d)}},s)),"pending")}}});var e,i={};return t.ajaxPrefilter?t.ajaxPrefilter(function(t,e,s){var n=t.port;"abort"===t.mode&&(i[n]&&i[n].abort(),i[n]=s)}):(e=t.ajax,t.ajax=function(s){var n=("mode"in s?s:t.ajaxSettings).mode,a=("port"in s?s:t.ajaxSettings).port;return"abort"===n?(i[a]&&i[a].abort(),i[a]=e.apply(this,arguments),i[a]):e.apply(this,arguments)}),t})}).call(window)}},[316]);