(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{363:function(l,i,e){},392:function(l,i,e){var r=e(0),t=e(3),a=e(70),n=[].slice,c=function(l){return function(i,e){var r=arguments.length>2,t=r?n.call(arguments,2):void 0;return l(r?function(){("function"==typeof i?i:Function(i)).apply(this,t)}:i,e)}};r({global:!0,bind:!0,forced:/MSIE .\./.test(a)},{setTimeout:c(t.setTimeout),setInterval:c(t.setInterval)})},393:function(l,i,e){"use strict";e(363)},404:function(l,i,e){"use strict";e.r(i);var r=e(47),t=(e(96),e(30),e(173),e(174),e(392),{data:function(){return{icons:["500px","accessible","activity","alarm_fill","alarm","align_center","align_justified","align_left","align_right","arrow_down","arrow_left","arrow_right","arrow_up","attachment","bar_chart","behance","bell_fil","bell","blocks_fill","blocks","bolt_fill","bolt","bookmark_fill","bookmark","briefcase_fill","briefcase","calendar","camera_fill","camera","cart_fill","cart","chat_box_fill","chat_box","chat_bubble_fill","chat_bubble","chat_fill","chat","check_circle_fill","check_circle","check_octagon","check_shield","check_square","check","chevron_down_circle_fill","chevron_down_circle","chevron_down","chevron_left_circle_fill","chevron_left_circle","chevron_left","chevron_right_circle_fill","chevron_right_circle","chevron_right","chevron_up_circle_fill","chevron_up_circle","chevron_up","circle_fill","circle","clipboard_fill","clipboard","code","codepen","collapse","compass_fill","compass","copy_fill","copy","css3","cube","double_chevron_left","double_chevron_right","download","dribbble","drop_fill","drop","edit_fill","edit","ellipsis","email_fill","email_read_fill","email_read","email","etsy","expand","external_link","facebook_fill","facebook_like","facebook","file_fill","file","filter_fill","filter","flag_fill","flag_triangle_fill","flag_triangle","flag","flickr","folder_fill","folder","foursquare","gear_fill","gear","gift","github","globe","grid_fill","grid","heart_fill","heart","hexagon_fill","hexagon","hide","hierarchy_fill","hierarchy","history","home_fill","home","html5","image","info_fill","info","instagram","jsfiddle","kebab","laptop_fill","laptop","lastfm","line_chart","link","linkedin","list_large_fill","list_large","list","location_arrow_fill","location_arrow","location_fill","location","lock_fill","lock","long_arrow_down","long_arrow_left","long_arrow_right","long_arrow_up","map_fill","map","menu","mic_fill","mic","minus_circle_fill","minus_circle","minus_octagon","minus_shield","minus_square","minus","mobile_fill","mobile","monitor_fill","monitor","music_fill","music","next_fill","next","not_allowed","octagon_fill","octagon_warning_fill","octagon","package","pause_fill","pause","paypal","pencil_fill","pencil","phone_fill","phone","pie_chart_fill","pie_chart","pinterest","play_fill","play","plus_circle_fill","plus_circle","plus_octagon","plus_shield","plus_square","plus","power","previous_fill","previous","print_fill","print","question","reddit","redo","refresh","rss","save_fill","save","search","send_fill","send","share_fill","share","shield_fill","shield","sign_in","sign_out","sliders_fill","sliders","snapchat","spotify","square_fill","square","star_fill","star","table","tablet_fill","tablet","tag_fill","tag","tiktok","time_fill","time","times_circle_fill","times_circle","times_octagon","times_shield","times_square","times","trash_fill","trash","triangle_fill","triangle","tripadvisor","tumblr","twitch","twitter","undo","unlock_fill","unlock","up_down","upload","user_fill","user_group_fill","user_group","user","video_fill","video","view","vimeo","warning_circle_fill","warning_circle","warning_fill","warning_octagon","warning_shield","warning_square","warning","whatsapp","wikipedia","yelp","youtube","zoom_in","zoom_out"],iconSearch:""}},computed:{filteredIcons:function(){var l=this;return this.icons.filter((function(i){return i.includes(l.iconSearch)}))}},methods:{copy:function(l){var i=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=i.$el.querySelector("#icon_".concat(l," .icon-name")),e.next=3,navigator.clipboard.writeText(l);case 3:r.innerHTML="Copied!",setTimeout((function(){return r.innerHTML=l}),2e3);case 5:case"end":return e.stop()}}),e)})))()}}}),a=(e(393),e(45)),n=Object(a.a)(t,(function(){var l=this,i=l.$createElement,e=l._self._c||i;return e("div",[e("div",{staticClass:"w-50 md:w-70 sm:w-80 mx-auto"},[e("ks-form-field",{staticClass:"w-100 mb-lg",attrs:{label:"Search Icons",type:"search",icon:"search"},on:{updated:function(i){return l.iconSearch=i.detail.value}}})],1),l._v(" "),e("div",{staticClass:"display-flex align-center space-between flex-wrap"},l._l(l.filteredIcons,(function(i){return e("button",{key:i,staticClass:"text-center my-md",staticStyle:{width:"90px",background:"transparent",border:"0"},attrs:{id:"icon_"+i,title:i,display:"clear"},on:{click:function(e){return l.copy(i)}}},[e("ks-icon",{staticClass:"text-xl",attrs:{icon:i,label:i}}),l._v(" "),e("div",{staticClass:"icon-name text-xxs text-bold"},[l._v(l._s(i))])],1)})),0)])}),[],!1,null,"04ea04e9",null);i.default=n.exports}}]);