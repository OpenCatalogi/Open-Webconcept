(self.webpackChunkskeleton_pip=self.webpackChunkskeleton_pip||[]).push([[678],{5441:function(e,n,t){var o;e.exports=(o=t(7294),function(e){var n={};function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}return t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:o})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)t.d(o,r,function(n){return e[n]}.bind(null,r));return o},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=4)}([function(e,n,t){e.exports=t(2)()},function(e,n){e.exports=o},function(e,n,t){"use strict";var o=t(3);function r(){}function i(){}i.resetWarningCache=r,e.exports=function(){function e(e,n,t,r,i,s){if(s!==o){var a=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function n(){return e}e.isRequired=e;var t={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:n,element:e,elementType:e,instanceOf:n,node:e,objectOf:n,oneOf:n,oneOfType:n,shape:n,exact:n,checkPropTypes:i,resetWarningCache:r};return t.PropTypes=t,t}},function(e,n,t){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,n,t){"use strict";t.r(n);var o=t(1),r=t.n(o),i=t(0),s=t.n(i),a=function(e){return 0!==e};function l(){return(l=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e}).apply(this,arguments)}function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function d(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function u(e,n){return(u=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,n){return e.__proto__=n,e})(e,n)}function p(e){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,o=h(e);if(n){var r=h(this).constructor;t=Reflect.construct(o,arguments,r)}else t=o.apply(this,arguments);return g(this,t)}}function g(e,n){if(n&&("object"===c(n)||"function"==typeof n))return n;if(void 0!==n)throw new TypeError("Derived constructors may only return object or undefined");return m(e)}function m(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var b=function(e){!function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),n&&u(e,n)}(s,e);var n,t,o,i=p(s);function s(e){var n;return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,s),f(m(n=i.call(this,e)),"continueOpenCollapsible",(function(){var e=m(n).innerRef;n.setState({height:e.scrollHeight,transition:"height ".concat(n.props.transitionTime,"ms ").concat(n.props.easing),isClosed:!1,hasBeenOpened:!0,inTransition:a(e.scrollHeight),shouldOpenOnNextCycle:!1})})),f(m(n),"handleTriggerClick",(function(e){n.props.triggerDisabled||n.state.inTransition||(e.preventDefault(),n.props.handleTriggerClick?n.props.handleTriggerClick(n.props.accordionPosition):!0===n.state.isClosed?(n.openCollapsible(),n.props.onOpening(),n.props.onTriggerOpening()):(n.closeCollapsible(),n.props.onClosing(),n.props.onTriggerClosing()))})),f(m(n),"handleTransitionEnd",(function(e){e.target===n.innerRef&&(n.state.isClosed?(n.setState({inTransition:!1}),n.props.onClose()):(n.setState({height:"auto",overflow:n.props.overflowWhenOpen,inTransition:!1}),n.props.onOpen()))})),f(m(n),"setInnerRef",(function(e){return n.innerRef=e})),n.timeout=void 0,n.contentId=e.contentElementId||"collapsible-content-".concat(Date.now()),n.triggerId=e.triggerElementProps.id||"collapsible-trigger-".concat(Date.now()),e.open?n.state={isClosed:!1,shouldSwitchAutoOnNextCycle:!1,height:"auto",transition:"none",hasBeenOpened:!0,overflow:e.overflowWhenOpen,inTransition:!1}:n.state={isClosed:!0,shouldSwitchAutoOnNextCycle:!1,height:0,transition:"height ".concat(e.transitionTime,"ms ").concat(e.easing),hasBeenOpened:!1,overflow:"hidden",inTransition:!1},n}return n=s,(t=[{key:"componentDidUpdate",value:function(e,n){var t=this;this.state.shouldOpenOnNextCycle&&this.continueOpenCollapsible(),"auto"!==n.height&&0!==n.height||!0!==this.state.shouldSwitchAutoOnNextCycle||(window.clearTimeout(this.timeout),this.timeout=window.setTimeout((function(){t.setState({height:0,overflow:"hidden",isClosed:!0,shouldSwitchAutoOnNextCycle:!1})}),50)),e.open!==this.props.open&&(!0===this.props.open?(this.openCollapsible(),this.props.onOpening()):(this.closeCollapsible(),this.props.onClosing()))}},{key:"componentWillUnmount",value:function(){window.clearTimeout(this.timeout)}},{key:"closeCollapsible",value:function(){var e=this.innerRef;this.setState({shouldSwitchAutoOnNextCycle:!0,height:e.scrollHeight,transition:"height ".concat(this.props.transitionCloseTime?this.props.transitionCloseTime:this.props.transitionTime,"ms ").concat(this.props.easing),inTransition:a(e.scrollHeight)})}},{key:"openCollapsible",value:function(){this.setState({inTransition:a(this.innerRef.scrollHeight),shouldOpenOnNextCycle:!0})}},{key:"renderNonClickableTriggerElement",value:function(){var e=this.props,n=e.triggerSibling,t=e.classParentString;if(!n)return null;switch(c(n)){case"string":return r.a.createElement("span",{className:"".concat(t,"__trigger-sibling")},n);case"function":return n();case"object":return n;default:return null}}},{key:"render",value:function(){var e=this,n={height:this.state.height,WebkitTransition:this.state.transition,msTransition:this.state.transition,transition:this.state.transition,overflow:this.state.overflow},t=this.state.isClosed?"is-closed":"is-open",o=this.props.triggerDisabled?"is-disabled":"",i=!1===this.state.isClosed&&void 0!==this.props.triggerWhenOpen?this.props.triggerWhenOpen:this.props.trigger,s=this.props.contentContainerTagName,a=this.props.triggerTagName,c=this.props.lazyRender&&!this.state.hasBeenOpened&&this.state.isClosed&&!this.state.inTransition?null:this.props.children,d=this.props,u=d.classParentString,p=d.contentOuterClassName,g=d.contentInnerClassName,m="".concat(u,"__trigger ").concat(t," ").concat(o," ").concat(this.state.isClosed?this.props.triggerClassName:this.props.triggerOpenedClassName),h="".concat(u," ").concat(this.state.isClosed?this.props.className:this.props.openedClassName),f="".concat(u,"__contentOuter ").concat(p),b="".concat(u,"__contentInner ").concat(g);return r.a.createElement(s,l({className:h.trim()},this.props.containerElementProps),r.a.createElement(a,l({id:this.triggerId,className:m.trim(),onClick:this.handleTriggerClick,style:this.props.triggerStyle&&this.props.triggerStyle,onKeyPress:function(n){var t=n.key;(" "===t&&"button"!==e.props.triggerTagName.toLowerCase()||"Enter"===t)&&e.handleTriggerClick(n)},tabIndex:this.props.tabIndex&&this.props.tabIndex,"aria-expanded":!this.state.isClosed,"aria-disabled":this.props.triggerDisabled,"aria-controls":this.contentId,role:"button"},this.props.triggerElementProps),i),this.renderNonClickableTriggerElement(),r.a.createElement("div",{id:this.contentId,className:f.trim(),style:n,onTransitionEnd:this.handleTransitionEnd,ref:this.setInnerRef,hidden:this.props.contentHiddenWhenClosed&&this.state.isClosed&&!this.state.inTransition,role:"region","aria-labelledby":this.triggerId},r.a.createElement("div",{className:b.trim()},c)))}}])&&d(n.prototype,t),o&&d(n,o),Object.defineProperty(n,"prototype",{writable:!1}),s}(o.Component);b.propTypes={transitionTime:s.a.number,transitionCloseTime:s.a.number,triggerTagName:s.a.string,easing:s.a.string,open:s.a.bool,containerElementProps:s.a.object,triggerElementProps:s.a.object,contentElementId:s.a.string,classParentString:s.a.string,className:s.a.string,openedClassName:s.a.string,triggerStyle:s.a.object,triggerClassName:s.a.string,triggerOpenedClassName:s.a.string,contentOuterClassName:s.a.string,contentInnerClassName:s.a.string,accordionPosition:s.a.oneOfType([s.a.string,s.a.number]),handleTriggerClick:s.a.func,onOpen:s.a.func,onClose:s.a.func,onOpening:s.a.func,onClosing:s.a.func,onTriggerOpening:s.a.func,onTriggerClosing:s.a.func,trigger:s.a.oneOfType([s.a.string,s.a.element]),triggerWhenOpen:s.a.oneOfType([s.a.string,s.a.element]),triggerDisabled:s.a.bool,lazyRender:s.a.bool,overflowWhenOpen:s.a.oneOf(["hidden","visible","auto","scroll","inherit","initial","unset"]),contentHiddenWhenClosed:s.a.bool,triggerSibling:s.a.oneOfType([s.a.string,s.a.element,s.a.func]),tabIndex:s.a.number,contentContainerTagName:s.a.string,children:s.a.oneOfType([s.a.string,s.a.element])},b.defaultProps={transitionTime:400,transitionCloseTime:null,triggerTagName:"span",easing:"linear",open:!1,classParentString:"Collapsible",triggerDisabled:!1,lazyRender:!1,overflowWhenOpen:"hidden",contentHiddenWhenClosed:!1,openedClassName:"",triggerStyle:null,triggerClassName:"",triggerOpenedClassName:"",contentOuterClassName:"",contentInnerClassName:"",className:"",triggerSibling:null,onOpen:function(){},onClose:function(){},onOpening:function(){},onClosing:function(){},onTriggerOpening:function(){},onTriggerClosing:function(){},tabIndex:null,contentContainerTagName:"div",triggerElementProps:{}},n.default=b}]))},5587:function(e,n,t){"use strict";t.d(n,{Z:function(){return a}});var o=t(7294);const r=o.createContext({}),i=!0;function s(e){let{baseColor:n,highlightColor:t,width:o,height:r,borderRadius:s,circle:a,direction:l,duration:c,enableAnimation:d=i}=e;const u={};return"rtl"===l&&(u["--animation-direction"]="reverse"),"number"==typeof c&&(u["--animation-duration"]="".concat(c,"s")),d||(u["--pseudo-element-display"]="none"),"string"!=typeof o&&"number"!=typeof o||(u.width=o),"string"!=typeof r&&"number"!=typeof r||(u.height=r),"string"!=typeof s&&"number"!=typeof s||(u.borderRadius=s),a&&(u.borderRadius="50%"),void 0!==n&&(u["--base-color"]=n),void 0!==t&&(u["--highlight-color"]=t),u}function a(e){let{count:n=1,wrapper:t,className:a,containerClassName:l,containerTestId:c,circle:d=!1,style:u,...p}=e;var g,m,h;const f=o.useContext(r),b={...p};for(const[o,r]of Object.entries(p))void 0===r&&delete b[o];const v={...f,...b,circle:d},y={...u,...s(v)};let C="react-loading-skeleton";a&&(C+=" ".concat(a));const O=null!==(g=v.inline)&&void 0!==g&&g,T=[],x=Math.ceil(n);for(let r=0;r<x;r++){let e=y;if(x>n&&r===x-1){const t=null!==(m=e.width)&&void 0!==m?m:"100%",o=n%1,r="number"==typeof t?t*o:"calc(".concat(t," * ").concat(o,")");e={...e,width:r}}const t=o.createElement("span",{className:C,style:e,key:r},"‌");O?T.push(t):T.push(o.createElement(o.Fragment,{key:r},t,o.createElement("br",null)))}return o.createElement("span",{className:l,"data-testid":c,"aria-live":"polite","aria-busy":null!==(h=v.enableAnimation)&&void 0!==h?h:i},t?T.map(((e,n)=>o.createElement(t,{key:n},e))):T)}},8272:function(e,n,t){"use strict";t.d(n,{W:function(){return o}});const o=e=>getComputedStyle(document.documentElement).getPropertyValue(e)},3760:function(e,n,t){"use strict";t.d(n,{A:function(){return G}});var o={};t.r(o),t.d(o,{active:function(){return O},badge:function(){return T},container:function(){return x},content:function(){return j},dataBadge:function(){return N},disabled:function(){return w},integrationBadge:function(){return k},interactionBadge:function(){return S},layerIcon:function(){return P},maxNumber:function(){return E},processBadge:function(){return I},servicesBadge:function(){return _},title:function(){return W},toggleIcon:function(){return A},unknownBadge:function(){return B}});var r=t(1700),i=t.n(r),s="ComponentCardsAccordionTemplate-module--LayerFilter--6b8af",a="--web-app-layer-color-data",l="--web-app-color-background-light",c="--web-app-layer-color-integration",d="--web-app-layer-color-interaction",u="--web-app-layer-color-process",p="--web-app-layer-color-services",g="--web-app-layer-color-unknown",m=t(8272),h=t(4327),f=t(2962),b=t(8929),v=t.n(b),y=t(9833),C=t.n(y),O="ComponentCardsAccordionHeaderTemplate-module--active--d84b0",T="ComponentCardsAccordionHeaderTemplate-module--badge--83619",x="ComponentCardsAccordionHeaderTemplate-module--container--c6d09",j="ComponentCardsAccordionHeaderTemplate-module--content--7aee0",N="ComponentCardsAccordionHeaderTemplate-module--dataBadge--d71da",w="ComponentCardsAccordionHeaderTemplate-module--disabled--03d0b",k="ComponentCardsAccordionHeaderTemplate-module--integrationBadge--73313",S="ComponentCardsAccordionHeaderTemplate-module--interactionBadge--04770",P="ComponentCardsAccordionHeaderTemplate-module--layerIcon--4b6ce",E="ComponentCardsAccordionHeaderTemplate-module--maxNumber--bd71f",I="ComponentCardsAccordionHeaderTemplate-module--processBadge--6e780",_="ComponentCardsAccordionHeaderTemplate-module--servicesBadge--20d9f",W="ComponentCardsAccordionHeaderTemplate-module--title--6c56d",A="ComponentCardsAccordionHeaderTemplate-module--toggleIcon--c46d3",B="ComponentCardsAccordionHeaderTemplate-module--unknownBadge--c8de9",R=t(3168),H=t(7606),D=t(5505),Z=t(5019),z=t(8610),L=t(1800),U=t(5893);const F=e=>{let{title:n,active:t,badgeNumber:r}=e;const{t:i}=(0,Z.$)(),s=r>0,a=r<100?C()(r):"99+",l=r>100;return(0,U.jsxs)("div",{className:(0,D.Z)(x,t&&O,!s&&w),children:[(0,U.jsxs)("div",{className:j,children:[(0,U.jsx)(H.G,{className:P,icon:R.Krp}),(0,U.jsx)("span",{className:(0,D.Z)(o[v()(n+" badge")],T,l&&E),children:(0,U.jsx)(z.Ro,{number:a,children:(0,U.jsx)(L.X6,{level:3,className:W,children:i(n)})})}),(0,U.jsx)(H.G,{className:(0,D.Z)(A,t&&O),icon:R._tD})]}),(0,U.jsx)(L.Z0,{})]})};var M=t(1391);const G=e=>{let{components:n}=e;const t=f.Z.accordion,o=f.Z.controller,{t:r}=(0,Z.$)(),{open:h,setOpen:b}=o(),{open:v,setOpen:y}=o(),{open:C,setOpen:O}=o(),{open:T,setOpen:x}=o(),{open:j,setOpen:N}=o(),{open:w,setOpen:k}=o(),S=n.filter((e=>{var n,t,o,r;return"Interface"===i()(null==e||null===(n=e.embedded)||void 0===n||null===(t=n.nl)||void 0===t||null===(o=t.embedded)||void 0===o||null===(r=o.commonground)||void 0===r?void 0:r.layerType)})),P=n.filter((e=>{var n,t,o,r;return"Process"===i()(null==e||null===(n=e.embedded)||void 0===n||null===(t=n.nl)||void 0===t||null===(o=t.embedded)||void 0===o||null===(r=o.commonground)||void 0===r?void 0:r.layerType)})),E=n.filter((e=>{var n,t,o,r;return"Integration"===i()(null==e||null===(n=e.embedded)||void 0===n||null===(t=n.nl)||void 0===t||null===(o=t.embedded)||void 0===o||null===(r=o.commonground)||void 0===r?void 0:r.layerType)})),I=n.filter((e=>{var n,t,o,r;return"Service"===i()(null==e||null===(n=e.embedded)||void 0===n||null===(t=n.nl)||void 0===t||null===(o=t.embedded)||void 0===o||null===(r=o.commonground)||void 0===r?void 0:r.layerType)})),_=n.filter((e=>{var n,t,o,r;return"Data"===i()(null==e||null===(n=e.embedded)||void 0===n||null===(t=n.nl)||void 0===t||null===(o=t.embedded)||void 0===o||null===(r=o.commonground)||void 0===r?void 0:r.layerType)})),W=n.filter((e=>{var n,t,o,r;return void 0===(null==e||null===(n=e.embedded)||void 0===n||null===(t=n.nl)||void 0===t||null===(o=t.embedded)||void 0===o||null===(r=o.commonground)||void 0===r?void 0:r.layerType)}));return n.length?(0,U.jsxs)(U.Fragment,{children:[(0,U.jsxs)(M.hE,{children:[(0,U.jsxs)(M.zx,{appearance:"subtle-button",className:(0,D.Z)(s),disabled:0===S.length,onClick:()=>{b(!h)},pressed:h,children:[(0,U.jsx)(M.B6,{color:0===S.length?(0,m.W)(l):(0,m.W)(d)}),r("Interaction")]}),(0,U.jsxs)(M.zx,{className:(0,D.Z)(s),appearance:"subtle-button",disabled:0===P.length,onClick:()=>{y(!v)},pressed:v,children:[(0,U.jsx)(M.B6,{color:0===P.length?(0,m.W)(l):(0,m.W)(u)}),r("Process")]}),(0,U.jsxs)(M.zx,{className:(0,D.Z)(s),appearance:"subtle-button",disabled:0===E.length,onClick:()=>{O(!C)},pressed:C,children:[(0,U.jsx)(M.B6,{color:0===E.length?(0,m.W)(l):(0,m.W)(c)}),r("Integration")]}),(0,U.jsxs)(M.zx,{className:(0,D.Z)(s),appearance:"subtle-button",disabled:0===I.length,onClick:()=>{x(!T)},pressed:T,children:[(0,U.jsx)(M.B6,{color:0===I.length?(0,m.W)(l):(0,m.W)(p)}),r("Service")]}),(0,U.jsxs)(M.zx,{className:(0,D.Z)(s),appearance:"subtle-button",disabled:0===_.length,onClick:()=>{N(!j)},pressed:j,children:[(0,U.jsx)(M.B6,{color:0===_.length?(0,m.W)(l):(0,m.W)(a)}),r("Data")]}),(0,U.jsxs)(M.zx,{className:(0,D.Z)(s),appearance:"subtle-button",disabled:0===W.length,onClick:()=>{k(!w)},pressed:w,children:[(0,U.jsx)(M.B6,{color:0===W.length?(0,m.W)(l):(0,m.W)(g)}),r("Unknown")]})]}),(0,U.jsx)(t,{open:h,setOpen:b,color:(0,m.W)(d),disabled:!S.length,header:(0,U.jsx)(F,{title:"Interaction",active:h,badgeNumber:S.length}),children:(0,U.jsx)(q,{components:S})}),(0,U.jsx)(t,{open:v,setOpen:y,color:(0,m.W)(u),disabled:!P.length,header:(0,U.jsx)(F,{title:"Process",active:v,badgeNumber:P.length}),children:(0,U.jsx)(q,{components:P})}),(0,U.jsx)(t,{open:C,setOpen:O,color:(0,m.W)(c),disabled:!E.length,header:(0,U.jsx)(F,{title:"Integration",active:C,badgeNumber:E.length}),children:(0,U.jsx)(q,{components:E})}),(0,U.jsx)(t,{open:T,setOpen:x,color:(0,m.W)(p),disabled:!I.length,header:(0,U.jsx)(F,{title:"Services",active:T,badgeNumber:I.length}),children:(0,U.jsx)(q,{components:I})}),(0,U.jsx)(t,{open:j,setOpen:N,color:(0,m.W)(a),disabled:!_.length,header:(0,U.jsx)(F,{title:"Data",active:j,badgeNumber:_.length}),children:(0,U.jsx)(q,{components:_})}),(0,U.jsx)(t,{open:w,setOpen:k,color:(0,m.W)(g),disabled:!W.length,header:(0,U.jsx)(F,{title:"Unknown",active:w,badgeNumber:W.length}),children:(0,U.jsx)(q,{components:W})})]}):(0,U.jsx)(U.Fragment,{children:"Geen resultaten gevonden."})},q=e=>{let{components:n}=e;return(0,U.jsx)("div",{className:"ComponentCardsAccordionTemplate-module--ComponentsGrid--ae575",children:n.map((e=>{var n,t,o,r,i,s,a,l,c,d,u,p,g,m,f,b,v,y,C,O,T,x;return(0,U.jsx)(h.L,{title:{label:e.name,href:"/components/"+(null!==(n=e.id)&&void 0!==n?n:e._self.id)},description:null===(t=e.embedded)||void 0===t||null===(o=t.description)||void 0===o?void 0:o.shortDescription,layer:null!==(r=null===(i=e.embedded)||void 0===i||null===(s=i.nl)||void 0===s||null===(a=s.embedded)||void 0===a||null===(l=a.commonground)||void 0===l?void 0:l.layerType)&&void 0!==r?r:"Unknown",categories:e.categories,tags:{status:e.developmentStatus,installations:null!==(c=null===(d=e.usedBy)||void 0===d?void 0:d.length.toString())&&void 0!==c?c:"0",organization:{name:null===(u=e.embedded)||void 0===u||null===(p=u.url)||void 0===p||null===(g=p.embedded)||void 0===g||null===(m=g.organisation)||void 0===m?void 0:m.name,website:null===(f=e.embedded)||void 0===f||null===(b=f.url)||void 0===b||null===(v=b.embedded)||void 0===v||null===(y=v.organisation)||void 0===y?void 0:y.website},licence:null===(C=e.embedded)||void 0===C||null===(O=C.legal)||void 0===O?void 0:O.license,githubLink:null===(T=e.embedded)||void 0===T||null===(x=T.url)||void 0===x?void 0:x.url}},e.id)}))})}},2962:function(e,n,t){"use strict";t.d(n,{Z:function(){return l}});var o=t(7294),r=t(8610),i=t(5441),s=t.n(i),a=t(5893);const l={accordion:e=>{let{open:n,setOpen:t,color:o,children:i,header:l,disabled:c}=e;return(0,a.jsx)("div",{className:n?"":"LayerAccordionTemplate-module--containerInactive--5d339",children:(0,a.jsx)(r.uq,{borderColor:c?"":o,children:(0,a.jsx)(s(),{triggerDisabled:c,trigger:l,open:n,transitionTime:200,onOpening:()=>t(!0),onClosing:()=>t(!1),children:i})})})},controller:()=>{const[e,n]=o.useState(!0);return{open:e,setOpen:n}}}}}]);
//# sourceMappingURL=27ee0ea651a0aec07e2949642ecacc9914727092-8c4510eb0761887c6c7d.js.map