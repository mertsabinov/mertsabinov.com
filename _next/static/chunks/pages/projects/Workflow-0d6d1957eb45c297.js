(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[675],{3569:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{zx:function(){return Button}});var react=__webpack_require__(7294),index_esm=__webpack_require__(7277),dist_index_esm=__webpack_require__(4520),react_context_dist_index_esm=__webpack_require__(8387),spinner_dist_index_esm=__webpack_require__(5610),cx=(...classNames)=>classNames.filter(Boolean).join(" "),dataAttr=condition=>condition?"":void 0,[ButtonGroupProvider,useButtonGroup]=(0,react_context_dist_index_esm.k)({strict:!1,name:"ButtonGroupContext"});function ButtonIcon(props){let{children,className,...rest}=props,_children=(0,react.isValidElement)(children)?(0,react.cloneElement)(children,{"aria-hidden":!0,focusable:!1}):children,_className=cx("chakra-button__icon",className);return react.createElement(index_esm.m$.span,{display:"inline-flex",alignSelf:"center",flexShrink:0,...rest,className:_className},_children)}function ButtonSpinner(props){let{label,placement,spacing="0.5rem",children=react.createElement(spinner_dist_index_esm.$,{color:"currentColor",width:"1em",height:"1em"}),className,__css,...rest}=props,_className=cx("chakra-button__spinner",className),marginProp="start"===placement?"marginEnd":"marginStart",spinnerStyles=(0,react.useMemo)(()=>({display:"flex",alignItems:"center",position:label?"relative":"absolute",[marginProp]:label?spacing:0,fontSize:"1em",lineHeight:"normal",...__css}),[__css,label,marginProp,spacing]);return react.createElement(index_esm.m$.div,{className:_className,...rest,__css:spinnerStyles},children)}ButtonIcon.displayName="ButtonIcon",ButtonSpinner.displayName="ButtonSpinner";var Button=(0,index_esm.Gp)((props,ref)=>{let group=useButtonGroup(),styles=(0,index_esm.mq)("Button",{...group,...props}),{isDisabled=null==group?void 0:group.isDisabled,isLoading,isActive,children,leftIcon,rightIcon,loadingText,iconSpacing="0.5rem",type,spinner,spinnerPlacement="start",className,as,...rest}=(0,dist_index_esm.Lr)(props),buttonStyles=(0,react.useMemo)(()=>{let _focus={...null==styles?void 0:styles._focus,zIndex:1};return{display:"inline-flex",appearance:"none",alignItems:"center",justifyContent:"center",userSelect:"none",position:"relative",whiteSpace:"nowrap",verticalAlign:"middle",outline:"none",...styles,...!!group&&{_focus}}},[styles,group]),{ref:_ref,type:defaultType}=function(value){let[isButton,setIsButton]=(0,react.useState)(!value),refCallback=(0,react.useCallback)(node=>{node&&setIsButton("BUTTON"===node.tagName)},[]);return{ref:refCallback,type:isButton?"button":void 0}}(as),contentProps={rightIcon,leftIcon,iconSpacing,children};return react.createElement(index_esm.m$.button,{disabled:isDisabled||isLoading,ref:function(...refs){return(0,react.useMemo)(()=>(function(...refs){return node=>{refs.forEach(ref=>{!function(ref,value){if(null!=ref){if("function"==typeof ref){ref(value);return}try{ref.current=value}catch(error){throw Error(`Cannot assign value '${value}' to ref '${ref}'`)}}}(ref,node)})}})(...refs),refs)}(ref,_ref),as,type:type??defaultType,"data-active":dataAttr(isActive),"data-loading":dataAttr(isLoading),__css:buttonStyles,className:cx("chakra-button",className),...rest},isLoading&&"start"===spinnerPlacement&&react.createElement(ButtonSpinner,{className:"chakra-button__spinner--start",label:loadingText,placement:"start",spacing:iconSpacing},spinner),isLoading?loadingText||react.createElement(index_esm.m$.span,{opacity:0},react.createElement(ButtonContent,{...contentProps})):react.createElement(ButtonContent,{...contentProps}),isLoading&&"end"===spinnerPlacement&&react.createElement(ButtonSpinner,{className:"chakra-button__spinner--end",label:loadingText,placement:"end",spacing:iconSpacing},spinner))});function ButtonContent(props){let{leftIcon,rightIcon,children,iconSpacing}=props;return react.createElement(react.Fragment,null,leftIcon&&react.createElement(ButtonIcon,{marginEnd:iconSpacing},leftIcon),children,rightIcon&&react.createElement(ButtonIcon,{marginStart:iconSpacing},rightIcon))}Button.displayName="Button",(0,index_esm.Gp)(function(props,ref){let{size,colorScheme,variant,className,spacing="0.5rem",isAttached,isDisabled,...rest}=props,_className=cx("chakra-button__group",className),context=(0,react.useMemo)(()=>({size,colorScheme,variant,isDisabled}),[size,colorScheme,variant,isDisabled]),groupStyles={display:"inline-flex"};return groupStyles=isAttached?{...groupStyles,"> *:first-of-type:not(:last-of-type)":{borderEndRadius:0},"> *:not(:first-of-type):not(:last-of-type)":{borderRadius:0},"> *:not(:first-of-type):last-of-type":{borderStartRadius:0}}:{...groupStyles,"& > *:not(style) ~ *:not(style)":{marginStart:spacing}},react.createElement(ButtonGroupProvider,{value:context},react.createElement(index_esm.m$.div,{ref,role:"group",__css:groupStyles,className:_className,"data-attached":isAttached?"":void 0,...rest}))}).displayName="ButtonGroup",(0,index_esm.Gp)((props,ref)=>{let{icon,children,isRound,"aria-label":ariaLabel,...rest}=props,element=icon||children,_children=(0,react.isValidElement)(element)?(0,react.cloneElement)(element,{"aria-hidden":!0,focusable:!1}):null;return react.createElement(Button,{padding:"0",borderRadius:isRound?"full":void 0,ref,"aria-label":ariaLabel,...rest},_children)}).displayName="IconButton"},9492:function(__unused_webpack_module,__unused_webpack_exports,__webpack_require__){(window.__NEXT_P=window.__NEXT_P||[]).push(["/projects/Workflow",function(){return __webpack_require__(4510)}])},469:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(5893),_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(4902),_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(3569);let FooterLink=param=>{let{postLink,postLinkTitle}=param;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Ug,{paddingTop:"5%",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.rU,{href:postLink,_hover:{textDecoration:"none"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.zx,{color:"whatsapp.400",variant:"outline",borderColor:"whatsapp.400",_hover:{backgroundColor:"whatsapp.400",color:"white"},children:postLinkTitle})})})};__webpack_exports__.Z=FooterLink},4547:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{Z:function(){return PageLeyout}});var jsx_runtime=__webpack_require__(5893),index_esm=__webpack_require__(4902),head=__webpack_require__(9008),head_default=__webpack_require__.n(head);let Footer=()=>(0,jsx_runtime.jsx)(index_esm.xu,{bgColor:"#414141",borderTopLeftRadius:"20px",borderTopRightRadius:"20px",paddingTop:"2.5%",paddingBottom:"2.5%",children:(0,jsx_runtime.jsxs)(index_esm.Ug,{color:"white",justifyContent:"space-evenly",children:[(0,jsx_runtime.jsx)(index_esm.gC,{children:(0,jsx_runtime.jsx)(index_esm.xv,{children:"Based in Bulgaria"})}),(0,jsx_runtime.jsxs)(index_esm.gC,{children:[(0,jsx_runtime.jsx)(index_esm.xv,{color:"white",fontWeight:"bold",children:"Portfolio"}),(0,jsx_runtime.jsx)(index_esm.rU,{href:"https://github.com/mertsabinov",children:(0,jsx_runtime.jsx)(index_esm.xv,{children:"GitHub"})}),(0,jsx_runtime.jsx)(index_esm.rU,{href:"/projects",children:(0,jsx_runtime.jsx)(index_esm.xv,{children:"Projects"})})]}),(0,jsx_runtime.jsxs)(index_esm.gC,{children:[(0,jsx_runtime.jsx)(index_esm.xv,{color:"white",fontWeight:"bold",children:"Social Media"}),(0,jsx_runtime.jsx)(index_esm.rU,{href:"https://www.reddit.com/user/mertsabinov",children:(0,jsx_runtime.jsx)(index_esm.xv,{children:"Reddit"})}),(0,jsx_runtime.jsx)(index_esm.rU,{href:"https://twitter.com/mertsabinov",children:(0,jsx_runtime.jsx)(index_esm.xv,{children:"Twitter"})}),(0,jsx_runtime.jsx)(index_esm.rU,{href:"https://www.linkedin.com/in/mertsabinov/",children:(0,jsx_runtime.jsx)(index_esm.xv,{children:"Linkedin"})})]})]})}),PageLayout=param=>{let{children,pageTitle}=param;return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(head_default(),{children:(0,jsx_runtime.jsx)("title",{children:pageTitle})}),(0,jsx_runtime.jsx)(index_esm.xu,{h:"100%",padding:"5%",children:(0,jsx_runtime.jsx)(index_esm.xu,{children:children})}),(0,jsx_runtime.jsx)(Footer,{})]})};var PageLeyout=PageLayout},4510:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(5893),_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(4902),_components_FooterLink__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(469),_components_layout_PageLeyout__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(4547);let Workflow=()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_layout_PageLeyout__WEBPACK_IMPORTED_MODULE_2__.Z,{pageTitle:"Workflow Premium",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.gC,{color:"white",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.xv,{fontSize:"xx-large",children:"Workflow Premium"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.xv,{fontSize:"large",textAlign:"justify",children:'"Workflow Premium" is a monthly and daily planner for your business. You will be able to see the salary you have earned during the current month and the money you have already saved. You will also be able to see your daily, weekly and monthly earnings very clearly.'}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.xu,{fontSize:"large",marginTop:"5%",textAlign:"start",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.xv,{children:'See the wage we earned as a result of daily work and save it thanks to the calendar, see your monthly earnings and past earnings automatically, now it is very easy to calculate your salary "Workflow Premium"'}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.xv,{fontWeight:"bold",paddingTop:"2.5%",children:"Workflow Premium Features"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.xv,{children:"- You can use it wherever you want as it does not need internet access."}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.xv,{children:"- You can instantly see the salary total of the current month."}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.xv,{children:"- You can see and list the salary records for the month you want"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.xv,{children:"- Thanks to its customizable features, you can choose the current currency and change your hourly rate as you wish."}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.xv,{children:"Security & Privacy All the information you have entered is stored on your own phone (local storage), so no data is shared with us."})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_FooterLink__WEBPACK_IMPORTED_MODULE_1__.Z,{postLink:"https://play.google.com/store/apps/details?id=mds.workflow",postLinkTitle:"Google Play Store"})]})});__webpack_exports__.default=Workflow}},function(__webpack_require__){__webpack_require__.O(0,[774,888,179],function(){return __webpack_require__(__webpack_require__.s=9492)}),_N_E=__webpack_require__.O()}]);