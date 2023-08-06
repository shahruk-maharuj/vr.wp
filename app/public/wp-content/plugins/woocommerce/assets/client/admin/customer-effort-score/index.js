/*! For license information please see index.js.LICENSE.txt */
(()=>{var e={83849:(e,o)=>{var t;!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var e=[],o=0;o<arguments.length;o++){var t=arguments[o];if(t){var i=typeof t;if("string"===i||"number"===i)e.push(t);else if(Array.isArray(t)){if(t.length){var s=r.apply(null,t);s&&e.push(s)}}else if("object"===i)if(t.toString===Object.prototype.toString)for(var c in t)n.call(t,c)&&t[c]&&e.push(c);else e.push(t.toString())}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(t=function(){return r}.apply(o,[]))||(e.exports=t)}()},31772:(e,o,t)=>{"use strict";var n=t(25148);function r(){}function i(){}i.resetWarningCache=r,e.exports=function(){function e(e,o,t,r,i,s){if(s!==n){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function o(){return e}e.isRequired=e;var t={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:o,element:e,elementType:e,instanceOf:o,node:e,objectOf:o,oneOf:o,oneOfType:o,shape:o,exact:o,checkPropTypes:i,resetWarningCache:r};return t.PropTypes=t,t}},7862:(e,o,t)=>{e.exports=t(31772)()},25148:e=>{"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}},o={};function t(n){var r=o[n];if(void 0!==r)return r.exports;var i=o[n]={exports:{}};return e[n](i,i.exports,t),i.exports}t.n=e=>{var o=e&&e.__esModule?()=>e.default:()=>e;return t.d(o,{a:o}),o},t.d=(e,o)=>{for(var n in o)t.o(o,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:o[n]})},t.o=(e,o)=>Object.prototype.hasOwnProperty.call(e,o),t.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var n={};(()=>{"use strict";t.r(n),t.d(n,{ADMIN_INSTALL_TIMESTAMP_OPTION_NAME:()=>h,ALLOW_TRACKING_OPTION_NAME:()=>b,CustomerEffortScore:()=>w,CustomerEffortScoreModalContainer:()=>ee,CustomerEffortScoreTracks:()=>ne,CustomerEffortScoreTracksContainer:()=>se,CustomerFeedbackModal:()=>m,CustomerFeedbackSimple:()=>ce,FeedbackModal:()=>ue,QUEUE_OPTION_NAME:()=>K,SHOWN_FOR_ACTIONS_OPTION_NAME:()=>S,STORE_KEY:()=>z,addCustomerEffortScoreExitPageListener:()=>T,addExitPage:()=>k,getExitPageData:()=>C,getStoreAgeInWeeks:()=>x,removeCustomerEffortScoreExitPageListener:()=>N,removeExitPage:()=>O,triggerExitPageCesSurvey:()=>M,useCustomerEffortScoreExitPageTracker:()=>me,useCustomerEffortScoreModal:()=>de});var e={};t.r(e),t.d(e,{addCesSurvey:()=>H,addCesSurveyForAnalytics:()=>V,addCesSurveyForCustomerSearch:()=>j,hideCesModal:()=>W,hideProductMVPFeedbackModal:()=>U,setCesSurveyQueue:()=>q,showCesModal:()=>B,showProductMVPFeedbackModal:()=>Y});var o={};t.r(o),t.d(o,{getCesSurveyQueue:()=>G});var r={};t.r(r),t.d(r,{getCesSurveyQueue:()=>J,getVisibleCESModalData:()=>$,isProductMVPFeedbackModalVisible:()=>X});const i=window.wp.element;var s=t(7862),c=t.n(s);const a=window.wp.i18n,l=window.wp.data,u=window.wp.components,d=window.wc.experimental;function m(e){let{recordScoreCallback:o,title:t=(0,a.__)("Please share your feedback","woocommerce"),description:n,showDescription:r=!0,firstQuestion:s,secondQuestion:c,defaultScore:l=NaN,onCloseModal:m,customOptions:p,shouldShowComments:w=((e,o)=>[e,o].some((e=>1===e||2===e))),getExtraFieldsToBeShown:_,validateExtraFields:f}=e;const g=p&&p.length>0?p:[{label:(0,a.__)("Strongly disagree","woocommerce"),value:"1"},{label:(0,a.__)("Disagree","woocommerce"),value:"2"},{label:(0,a.__)("Neutral","woocommerce"),value:"3"},{label:(0,a.__)("Agree","woocommerce"),value:"4"},{label:(0,a.__)("Strongly Agree","woocommerce"),value:"5"}],[h,b]=(0,i.useState)(l||NaN),[S,y]=(0,i.useState)(l||NaN),[v,E]=(0,i.useState)(""),[C,k]=(0,i.useState)(!1),[O,P]=(0,i.useState)(!0),[T,N]=(0,i.useState)({}),[M,x]=(0,i.useState)({}),Q=()=>{P(!1),m&&m()},D=(e,o)=>{const t=parseInt(e,10);o(t),k(!Number.isInteger(t))};return O?(0,i.createElement)(u.Modal,{className:"woocommerce-customer-effort-score",title:t,onRequestClose:Q,shouldCloseOnClickOutside:!1},r&&(0,i.createElement)(d.Text,{variant:"body",as:"p",className:"woocommerce-customer-effort-score__intro",size:14,lineHeight:"20px",marginBottom:"1.5em"},n||(0,a.__)("Your feedback will help create a better experience for thousands of merchants like you. Please tell us to what extent you agree or disagree with the statements below.","woocommerce")),(0,i.createElement)(d.Text,{variant:"subtitle.small",as:"p",weight:"600",size:"14",lineHeight:"20px"},s),(0,i.createElement)("div",{className:"woocommerce-customer-effort-score__selection"},(0,i.createElement)(u.RadioControl,{selected:h.toString(10),options:g,onChange:e=>D(e,b)})),c&&(0,i.createElement)(d.Text,{variant:"subtitle.small",as:"p",weight:"600",size:"14",lineHeight:"20px"},c),c&&(0,i.createElement)("div",{className:"woocommerce-customer-effort-score__selection"},(0,i.createElement)(u.RadioControl,{selected:S.toString(10),options:g,onChange:e=>D(e,y)})),"function"==typeof w&&w(h,S)&&(0,i.createElement)("div",{className:"woocommerce-customer-effort-score__comments"},(0,i.createElement)(u.TextareaControl,{label:(0,a.__)("How is that screen useful to you? What features would you add or change?","woocommerce"),help:(0,a.__)("Your feedback will go to the WooCommerce development team","woocommerce"),value:v,placeholder:(0,a.__)("Optional, but much apprecated. We love reading your feedback!","woocommerce"),onChange:e=>E(e),rows:5})),C&&(0,i.createElement)("div",{className:"woocommerce-customer-effort-score__errors",role:"alert"},(0,i.createElement)(d.Text,{variant:"body",as:"p"},(0,a.__)("Please tell us to what extent you agree or disagree with the statements above.","woocommerce"))),"function"==typeof _&&_(T,N,M),(0,i.createElement)("div",{className:"woocommerce-customer-effort-score__buttons"},(0,i.createElement)(u.Button,{isTertiary:!0,onClick:Q,name:"cancel"},(0,a.__)("Cancel","woocommerce")),(0,i.createElement)(u.Button,{isPrimary:!0,onClick:()=>{const e=!Number.isInteger(h)||c&&!Number.isInteger(S);e&&k(!0);const t="function"==typeof f?f(T):{},n=0===Object.keys(t).length;!e&&n?(P(!1),o(h,S,v,T)):x(t)},name:"send"},(0,a.__)("Share","woocommerce")))):null}m.propTypes={recordScoreCallback:c().func.isRequired,title:c().string,firstQuestion:c().string.isRequired,secondQuestion:c().string,defaultScore:c().number,onCloseModal:c().func,getExtraFieldsToBeShown:c().func,validateExtraFields:c().func};const p=()=>{},w=e=>{let{recordScoreCallback:o,title:t,description:n,showDescription:r=!0,noticeLabel:s,firstQuestion:c,secondQuestion:u,onNoticeShownCallback:d=p,onNoticeDismissedCallback:w=p,onModalShownCallback:_=p,onModalDismissedCallback:f=p,icon:g,shouldShowComments:h=((e,o)=>[e,o].some((e=>1===e||2===e))),getExtraFieldsToBeShown:b,validateExtraFields:S}=e;const[y,v]=(0,i.useState)(!0),[E,C]=(0,i.useState)(!1),{createNotice:k}=(0,l.useDispatch)("core/notices2");return(0,i.useEffect)((()=>{y&&(k("success",s||t,{actions:[{label:(0,a.__)("Give feedback","woocommerce"),onClick:()=>{C(!0),_()}}],icon:g,explicitDismiss:!0,onDismiss:w}),v(!1),d())}),[y]),y?null:E?(0,i.createElement)(m,{title:t,description:n,showDescription:r,firstQuestion:c,secondQuestion:u,recordScoreCallback:o,onCloseModal:f,shouldShowComments:h,getExtraFieldsToBeShown:b,validateExtraFields:S}):null};w.propTypes={recordScoreCallback:c().func.isRequired,title:c().string,onNoticeShownCallback:c().func,onNoticeDismissedCallback:c().func,onModalShownCallback:c().func,icon:c().element,firstQuestion:c().string.isRequired,secondQuestion:c().string,shouldShowComments:c().func};const _=window.wc.data,f=window.wc.tracks,g=window.wc.navigation,h="woocommerce_admin_install_timestamp",b="woocommerce_allow_tracking",S="woocommerce_ces_shown_for_actions",y="customer-effort-score-exit-page";let v=!1;const E=(0,l.resolveSelect)(_.OPTIONS_STORE_NAME).getOption(b).then((e=>{v="yes"===e})),C=()=>{if(!window.localStorage)return[];const e=window.localStorage.getItem(y),o=e?JSON.parse(e):[];return Array.isArray(o)?o:[]},k=async e=>{if(await E,!window.localStorage||!v)return;let o=C();o.find((o=>o===e))||o.push(e),o=o.slice(-10),window.localStorage.setItem(y,JSON.stringify(o))},O=e=>{if(!window.localStorage)return;let o=C();o=o.filter((o=>o!==e)),o=o.slice(-10),window.localStorage.setItem(y,JSON.stringify(o))},P={},T=(e,o)=>{P[e]=()=>{o()&&k(e)},window.addEventListener("unload",P[e])},N=e=>{P[e]&&window.removeEventListener("unload",P[e],{capture:!0})};function M(){var e;const o=C();if(null==o?void 0:o.length){if(!function(e){const o={import_products:()=>"product_importer"!==(0,g.getQuery)().page};return!o[e]||o[e]()}(o[0]))return;const t=function(e){switch(e){case"product_edit_view":case"editing_new_product":return{action:"editing_new_product"===e?"new_product":e,noticeLabel:(0,a.__)("How is your experience with editing products?","woocommerce"),title:(0,a.__)("How's your experience with editing products?","woocommerce"),description:(0,a.__)("We noticed you started editing a product, then left. How was it? Your feedback will help create a better experience for thousands of merchants like you.","woocommerce"),firstQuestion:(0,a.__)("The product editing screen is easy to use","woocommerce"),secondQuestion:(0,a.__)("The product editing screen's functionality meets my needs","woocommerce")};case"product_add_view":case"new_product":return{action:e,noticeLabel:(0,a.__)("How is your experience with creating products?","woocommerce"),title:(0,a.__)("How is your experience with creating products?","woocommerce"),description:(0,a.__)("We noticed you started creating a product, then left. How was it? Your feedback will help create a better experience for thousands of merchants like you.","woocommerce"),firstQuestion:(0,a.__)("The product creation screen is easy to use","woocommerce"),secondQuestion:(0,a.__)("The product creation screen's functionality meets my needs","woocommerce")};case"settings_change":return{action:e,icon:"⚙️",noticeLabel:(0,a.__)("Did you find the right setting?","woocommerce"),title:(0,a.__)("How’s your experience with settings?","woocommerce"),description:(0,a.__)("We noticed you started changing store settings, then left. How was it? Your feedback will help create a better experience for thousands of merchants like you.","woocommerce"),firstQuestion:(0,a.__)("The settings screen is easy to use","woocommerce"),secondQuestion:(0,a.__)("The settings screen's functionality meets my needs","woocommerce")};case"shop_order_update":return{action:e,icon:"📦",noticeLabel:(0,a.__)("How easy or difficult was it to update this order?","woocommerce"),title:(0,a.__)("How's your experience with orders?","woocommerce"),description:(0,a.__)("We noticed you started editing an order, then left. How was it? Your feedback will help create a better experience for thousands of merchants like you.","woocommerce"),firstQuestion:(0,a.__)("The order editing screen is easy to use","woocommerce"),secondQuestion:(0,a.__)("The order details screen's functionality meets my needs","woocommerce")};case"import_products":return{action:e,icon:"🔄",noticeLabel:(0,a.__)("How is your experience with importing products?","woocommerce"),title:(0,a.__)("How's your experience with importing products?","woocommerce"),description:(0,a.__)("We noticed you started importing products, then left. How was it? Your feedback will help create a better experience for thousands of merchants like you.","woocommerce"),firstQuestion:(0,a.__)("The product import screen is easy to use","woocommerce"),secondQuestion:(0,a.__)("The product import screen's functionality meets my needs","woocommerce")};default:return null}}(o[0]);(null===(e=null==t?void 0:t.title)||void 0===e?void 0:e.length)&&(0,l.dispatch)("wc/customer-effort-score").addCesSurvey({...t,pageNow:window.pagenow,adminPage:window.adminpage,props:{ces_location:"outside"}}),O(o[0])}}function x(e){if(0===e)return null;const o=Date.now()-1e3*e;return Math.round(o/_.WEEK)}const Q=window.wp.dataControls,D="SET_CES_SURVEY_QUEUE",L="ADD_CES_SURVEY",A="SHOW_CES_MODAL",F="HIDE_CES_MODAL",R="SHOW_PRODUCT_MVP_FEEDBACK_MODAL",I="HIDE_PRODUCT_MVP_FEEDBACK_MODAL";function q(e){return{type:D,queue:e}}function H(e){let{action:o,title:t,description:n,noticeLabel:r,firstQuestion:i,secondQuestion:s,icon:c,pageNow:a=window.pagenow,adminPage:l=window.adminpage,onsubmitLabel:u,props:d={}}=e;return{type:L,action:o,title:t,description:n,noticeLabel:r,firstQuestion:i,secondQuestion:s,icon:c,pageNow:a,adminPage:l,onsubmit_label:u,props:d}}function B(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};return{type:A,surveyProps:e,onsubmit_label:e.onsubmitLabel||"",props:o,onSubmitNoticeProps:t,tracksProps:n}}function W(){return{type:F}}function V(){return H({action:"analytics_filtered",title:(0,a.__)("How easy was it to filter your store analytics?","woocommerce"),firstQuestion:(0,a.__)("The filters in the analytics screen are easy to use.","woocommerce"),secondQuestion:(0,a.__)("The filters' functionality meets my needs.","woocommerce"),pageNow:"woocommerce_page_wc-admin",adminPage:"woocommerce_page_wc-admin"})}function j(){return H({action:"ces_search",title:(0,a.__)("How easy was it to use search?","woocommerce"),firstQuestion:(0,a.__)("The search feature in WooCommerce is easy to use.","woocommerce"),secondQuestion:(0,a.__)("The search's functionality meets my needs.","woocommerce"),pageNow:"woocommerce_page_wc-admin",adminPage:"woocommerce_page_wc-admin",onsubmit_label:void 0,props:{search_area:"customer"}})}function Y(){return{type:R}}function U(){return{type:I}}const z="wc/customer-effort-score",K="woocommerce_ces_tracks_queue";function*G(){const e=yield(0,Q.apiFetch)({path:`/wc-admin/options?options=${K}`});if(!e)throw new Error;yield q(e[K]||[])}function J(e){return e.queue}function $(e){return e.showCESModal?e.cesModalData:void 0}function X(e){return e.showProductMVPFeedbackModal}const Z={queue:[],cesModalData:void 0,showCESModal:!1,showProductMVPFeedbackModal:!1},ee=((0,l.registerStore)(z,{actions:e,selectors:r,resolvers:o,controls:Q.controls,reducer:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Z,o=arguments.length>1?arguments[1]:void 0;switch(o.type){case D:return{...e,queue:[...e.queue,...o.queue]};case F:return{...e,showCESModal:!1,cesModalData:void 0};case A:const t={action:o.surveyProps.action,showDescription:o.surveyProps.showDescription,title:o.surveyProps.title,onSubmitLabel:o.onSubmitLabel,firstQuestion:o.surveyProps.firstQuestion,secondQuestion:o.surveyProps.secondQuestion,onSubmitNoticeProps:o.onSubmitNoticeProps||{},props:o.props,tracksProps:o.tracksProps,getExtraFieldsToBeShown:o.surveyProps.getExtraFieldsToBeShown,validateExtraFields:o.surveyProps.validateExtraFields};return{...e,showCESModal:!0,cesModalData:t};case L:if(e.queue.filter((e=>e.action===o.action)).length)return e;const n={action:o.action,title:o.title,description:o.description,noticeLabel:o.noticeLabel,firstQuestion:o.firstQuestion,secondQuestion:o.secondQuestion,icon:o.icon,pagenow:o.pageNow,adminpage:o.adminPage,onSubmitLabel:o.onSubmitLabel,props:o.props};return{...e,queue:[...e.queue,n]};case R:return{...e,showProductMVPFeedbackModal:!0};case I:return{...e,showProductMVPFeedbackModal:!1};default:return e}}}),()=>{var e;const{createSuccessNotice:o}=(0,l.useDispatch)("core/notices"),{hideCesModal:t}=(0,l.useDispatch)(z),{storeAgeInWeeks:n,resolving:r,visibleCESModalData:s}=(0,l.useSelect)((e=>{const{getOption:o,hasFinishedResolution:t}=e(_.OPTIONS_STORE_NAME),{getVisibleCESModalData:n}=e(z),r=o(h)||0,i=null===r||!t("getOption",[h]);return{storeAgeInWeeks:x(r),visibleCESModalData:n(),resolving:i}})),c=function(e,t,r){let i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};(0,f.recordEvent)("ces_feedback",{action:s.action,score:e,score_second_question:null!=t?t:null,score_combined:e+(null!=t?t:0),comments:r||"",...i,store_age:n,...s.tracksProps}),o(s.onSubmitLabel||(0,a.__)("Thanks for the feedback. We'll put it to good use!","woocommerce"),s.onSubmitNoticeProps||{})};return!s||r?null:(0,i.createElement)(m,{title:s.title,showDescription:s.showDescription,firstQuestion:s.firstQuestion,secondQuestion:s.secondQuestion,recordScoreCallback:function(){var e,o;c(...arguments),t(),null===(o=null===(e=s.props)||void 0===e?void 0:e.onRecordScore)||void 0===o||o.call(e)},onCloseModal:()=>{var e,o;null===(o=null===(e=s.props)||void 0===e?void 0:e.onCloseModal)||void 0===o||o.call(e),t()},shouldShowComments:null===(e=s.props)||void 0===e?void 0:e.shouldShowComments,getExtraFieldsToBeShown:s.getExtraFieldsToBeShown,validateExtraFields:s.validateExtraFields})}),oe=window.wp.compose;function te(e){let{action:o,trackProps:t,title:n,description:r,noticeLabel:s,firstQuestion:c,secondQuestion:l,icon:u,onSubmitLabel:d=(0,a.__)("Thank you for your feedback!","woocommerce"),cesShownForActions:m,allowTracking:p,resolving:_,storeAgeInWeeks:g,updateOptions:h,createNotice:b}=e;const[y,v]=(0,i.useState)(!1);if(_)return null;if(!p)return null;if(m&&-1!==m.indexOf(o)&&!y)return null;const E=()=>{h({[S]:[o,...m||[]]})};return(0,i.createElement)(w,{recordScoreCallback:(e,n,r)=>{(0,f.recordEvent)("ces_feedback",{action:o,score:e,score_second_question:n,score_combined:e+n,comments:r||"",store_age:g,ces_location:"inside",...t}),b("success",d)},title:n,description:r,noticeLabel:s,firstQuestion:c,secondQuestion:l,onNoticeShownCallback:()=>{(0,f.recordEvent)("ces_snackbar_view",{action:o,store_age:g,ces_location:"inside",...t})},onNoticeDismissedCallback:()=>{(0,f.recordEvent)("ces_snackbar_dismiss",{action:o,store_age:g,ces_location:"inside",...t}),E()},onModalShownCallback:()=>{v(!0),(0,f.recordEvent)("ces_view",{action:o,store_age:g,ces_location:"inside",...t}),E()},onModalDismissedCallback:()=>{(0,f.recordEvent)("ces_view_dismiss",{action:o,store_age:g,ces_location:"inside",...t})},icon:(0,i.createElement)("span",{style:{height:21,width:21},role:"img","aria-label":(0,a.__)("Pencil icon","woocommerce")},u||"✏")})}te.propTypes={action:c().string.isRequired,trackProps:c().object,title:c().string.isRequired,onSubmitLabel:c().string,cesShownForActions:c().arrayOf(c().string),allowTracking:c().bool,resolving:c().bool.isRequired,storeAgeInWeeks:c().number,updateOptions:c().func,createNotice:c().func};const ne=(0,oe.compose)((0,l.withSelect)((e=>{const{getOption:o,hasFinishedResolution:t}=e(_.OPTIONS_STORE_NAME),n=o(S),r=x(o(h)||0);return{cesShownForActions:n,allowTracking:"yes"===(o(b)||"no"),storeAgeInWeeks:r,resolving:!t("getOption",[S])||null===r||!t("getOption",[h])||!t("getOption",[b])}})),(0,l.withDispatch)((e=>{const{updateOptions:o}=e(_.OPTIONS_STORE_NAME),{createNotice:t}=e("core/notices");return{updateOptions:o,createNotice:t}})))(te),re=window.React;function ie(e){let{queue:o,resolving:t,clearQueue:n}=e;const r=o.filter((e=>e.pagenow===window.pagenow&&e.adminpage===window.adminpage));return(0,re.useEffect)((()=>{r.length&&n()}),[r]),t?null:(0,i.createElement)(i.Fragment,null,r.map(((e,o)=>(0,i.createElement)(ne,{key:o,action:e.action,description:e.description,noticeLabel:e.noticeLabel,firstQuestion:e.firstQuestion,secondQuestion:e.secondQuestion,icon:e.icon,title:e.title,onSubmitLabel:e.onsubmit_label,trackProps:e.props||{}}))))}ie.propTypes={queue:c().arrayOf(c().object),resolving:c().bool,clearQueue:c().func};const se=(0,oe.compose)((0,l.withSelect)((e=>{const{getCesSurveyQueue:o,isResolving:t}=e(z);return{queue:o(),resolving:t("getOption",[K])}})),(0,l.withDispatch)((e=>{const{updateOptions:o}=e(_.OPTIONS_STORE_NAME);return{clearQueue:()=>{o({woocommerce_clear_ces_tracks_queue_for_page:{pagenow:window.pagenow,adminpage:window.adminpage}})}}})))(ie),ce=e=>{let{onSelect:o,label:t}=e;const n=[{tooltip:(0,a.__)("Very difficult","woocommerce"),value:1,emoji:"😞"},{tooltip:(0,a.__)("Difficult","woocommerce"),value:2,emoji:"🙁"},{tooltip:(0,a.__)("Neutral","woocommerce"),value:3,emoji:"😑"},{tooltip:(0,a.__)("Good","woocommerce"),value:4,emoji:"🙂"},{tooltip:(0,a.__)("Very good","woocommerce"),value:5,emoji:"😍"}];return(0,i.createElement)("div",{className:"customer-feedback-simple__container"},(0,i.createElement)(d.Text,{variant:"subtitle.small",as:"p",size:"13",lineHeight:"16px"},t),(0,i.createElement)("div",{className:"customer-feedback-simple__selection"},n.map((e=>(0,i.createElement)(u.Tooltip,{text:e.tooltip,key:e.value,position:"top center"},(0,i.createElement)(u.Button,{onClick:()=>{o(e.value)}},e.emoji))))))};ce.propTypes={onSelect:c().func.isRequired,label:c().string.isRequired};var ae=t(83849),le=t.n(ae);function ue(e){let{onSubmit:o,title:t,description:n,onModalClose:r,children:s,isSubmitButtonDisabled:c,submitButtonLabel:a,cancelButtonLabel:l,className:m}=e;const[p,w]=(0,i.useState)(!0),_=()=>{w(!1),r&&r()};return p?(0,i.createElement)(u.Modal,{className:le()("woocommerce-feedback-modal",m),title:t,onRequestClose:_,shouldCloseOnClickOutside:!1},n&&(0,i.createElement)(d.Text,{variant:"body",as:"p",className:"woocommerce-feedback-modal__description",size:14,lineHeight:"20px",marginBottom:"1.5em"},n),s,(0,i.createElement)("div",{className:"woocommerce-feedback-modal__buttons"},(0,i.createElement)(u.Button,{isTertiary:!0,onClick:_,name:"cancel"},l),(0,i.createElement)(u.Button,{isPrimary:!c,isSecondary:c,onClick:()=>{o(),w(!1)},name:"send",disabled:c},a))):null}ue.propTypes={onSubmit:c().func.isRequired,title:c().string,description:c().string,onModalClose:c().func,isSubmitButtonDisabled:c().bool,submitButtonLabel:c().string,cancelButtonLabel:c().string};const de=()=>{const{showCesModal:e,showProductMVPFeedbackModal:o}=(0,l.useDispatch)(z),{updateOptions:t}=(0,l.useDispatch)(_.OPTIONS_STORE_NAME),{wasPreviouslyShown:n,isLoading:r}=(0,l.useSelect)((e=>{const{getOption:o,hasFinishedResolution:t}=e(_.OPTIONS_STORE_NAME),n=o(S)||[];return{wasPreviouslyShown:e=>n.includes(e),isLoading:!t("getOption",[S])}})),i=async e=>{const{getOption:o}=(0,l.resolveSelect)(_.OPTIONS_STORE_NAME),n=await o(S)||[];t({[S]:[e,...n]})};return{wasPreviouslyShown:n,isLoading:r,showCesModal:function(){let o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};e(o,t,n,r),i(o.action)},showProductMVPFeedbackModal:o}},me=(e,o)=>{const t=(0,i.useRef)(o);(0,i.useEffect)((()=>{t.current=o}),[o]),(0,i.useEffect)((()=>()=>{t.current&&k(e)}),[]),(0,i.useEffect)((()=>(T(e,(()=>o)),()=>{N(e)})),[o])}})(),(window.wc=window.wc||{}).customerEffortScore=n})();