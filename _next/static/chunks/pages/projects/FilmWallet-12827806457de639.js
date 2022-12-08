(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[990],{7140:function(__unused_webpack_module,__unused_webpack_exports,__webpack_require__){(window.__NEXT_P=window.__NEXT_P||[]).push(["/projects/FilmWallet",function(){return __webpack_require__(7912)}])},7817:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{Z:function(){return components_FooterLink}});var jsx_runtime=__webpack_require__(5893),index_esm=__webpack_require__(4902),react=__webpack_require__(7294),dist_index_esm=__webpack_require__(7277),styled_system_dist_index_esm=__webpack_require__(4520),react_context_dist_index_esm=__webpack_require__(8387),spinner_dist_index_esm=__webpack_require__(5610),cx=(...classNames)=>classNames.filter(Boolean).join(" "),dataAttr=condition=>condition?"":void 0,[ButtonGroupProvider,useButtonGroup]=(0,react_context_dist_index_esm.k)({strict:!1,name:"ButtonGroupContext"});function ButtonIcon(props){let{children,className,...rest}=props,_children=(0,react.isValidElement)(children)?(0,react.cloneElement)(children,{"aria-hidden":!0,focusable:!1}):children,_className=cx("chakra-button__icon",className);return react.createElement(dist_index_esm.m$.span,{display:"inline-flex",alignSelf:"center",flexShrink:0,...rest,className:_className},_children)}function ButtonSpinner(props){let{label,placement,spacing="0.5rem",children=react.createElement(spinner_dist_index_esm.$,{color:"currentColor",width:"1em",height:"1em"}),className,__css,...rest}=props,_className=cx("chakra-button__spinner",className),marginProp="start"===placement?"marginEnd":"marginStart",spinnerStyles=(0,react.useMemo)(()=>({display:"flex",alignItems:"center",position:label?"relative":"absolute",[marginProp]:label?spacing:0,fontSize:"1em",lineHeight:"normal",...__css}),[__css,label,marginProp,spacing]);return react.createElement(dist_index_esm.m$.div,{className:_className,...rest,__css:spinnerStyles},children)}ButtonIcon.displayName="ButtonIcon",ButtonSpinner.displayName="ButtonSpinner";var Button=(0,dist_index_esm.Gp)((props,ref)=>{let group=useButtonGroup(),styles=(0,dist_index_esm.mq)("Button",{...group,...props}),{isDisabled=null==group?void 0:group.isDisabled,isLoading,isActive,children,leftIcon,rightIcon,loadingText,iconSpacing="0.5rem",type,spinner,spinnerPlacement="start",className,as,...rest}=(0,styled_system_dist_index_esm.Lr)(props),buttonStyles=(0,react.useMemo)(()=>{let _focus={...null==styles?void 0:styles._focus,zIndex:1};return{display:"inline-flex",appearance:"none",alignItems:"center",justifyContent:"center",userSelect:"none",position:"relative",whiteSpace:"nowrap",verticalAlign:"middle",outline:"none",...styles,...!!group&&{_focus}}},[styles,group]),{ref:_ref,type:defaultType}=function(value){let[isButton,setIsButton]=(0,react.useState)(!value),refCallback=(0,react.useCallback)(node=>{node&&setIsButton("BUTTON"===node.tagName)},[]);return{ref:refCallback,type:isButton?"button":void 0}}(as),contentProps={rightIcon,leftIcon,iconSpacing,children};return react.createElement(dist_index_esm.m$.button,{disabled:isDisabled||isLoading,ref:function(...refs){return(0,react.useMemo)(()=>(function(...refs){return node=>{refs.forEach(ref=>{!function(ref,value){if(null!=ref){if("function"==typeof ref){ref(value);return}try{ref.current=value}catch(error){throw Error(`Cannot assign value '${value}' to ref '${ref}'`)}}}(ref,node)})}})(...refs),refs)}(ref,_ref),as,type:type??defaultType,"data-active":dataAttr(isActive),"data-loading":dataAttr(isLoading),__css:buttonStyles,className:cx("chakra-button",className),...rest},isLoading&&"start"===spinnerPlacement&&react.createElement(ButtonSpinner,{className:"chakra-button__spinner--start",label:loadingText,placement:"start",spacing:iconSpacing},spinner),isLoading?loadingText||react.createElement(dist_index_esm.m$.span,{opacity:0},react.createElement(ButtonContent,{...contentProps})):react.createElement(ButtonContent,{...contentProps}),isLoading&&"end"===spinnerPlacement&&react.createElement(ButtonSpinner,{className:"chakra-button__spinner--end",label:loadingText,placement:"end",spacing:iconSpacing},spinner))});function ButtonContent(props){let{leftIcon,rightIcon,children,iconSpacing}=props;return react.createElement(react.Fragment,null,leftIcon&&react.createElement(ButtonIcon,{marginEnd:iconSpacing},leftIcon),children,rightIcon&&react.createElement(ButtonIcon,{marginStart:iconSpacing},rightIcon))}Button.displayName="Button",(0,dist_index_esm.Gp)(function(props,ref){let{size,colorScheme,variant,className,spacing="0.5rem",isAttached,isDisabled,...rest}=props,_className=cx("chakra-button__group",className),context=(0,react.useMemo)(()=>({size,colorScheme,variant,isDisabled}),[size,colorScheme,variant,isDisabled]),groupStyles={display:"inline-flex"};return groupStyles=isAttached?{...groupStyles,"> *:first-of-type:not(:last-of-type)":{borderEndRadius:0},"> *:not(:first-of-type):not(:last-of-type)":{borderRadius:0},"> *:not(:first-of-type):last-of-type":{borderStartRadius:0}}:{...groupStyles,"& > *:not(style) ~ *:not(style)":{marginStart:spacing}},react.createElement(ButtonGroupProvider,{value:context},react.createElement(dist_index_esm.m$.div,{ref,role:"group",__css:groupStyles,className:_className,"data-attached":isAttached?"":void 0,...rest}))}).displayName="ButtonGroup",(0,dist_index_esm.Gp)((props,ref)=>{let{icon,children,isRound,"aria-label":ariaLabel,...rest}=props,element=icon||children,_children=(0,react.isValidElement)(element)?(0,react.cloneElement)(element,{"aria-hidden":!0,focusable:!1}):null;return react.createElement(Button,{padding:"0",borderRadius:isRound?"full":void 0,ref,"aria-label":ariaLabel,...rest},_children)}).displayName="IconButton";let FooterLink=param=>{let{postLink,postLinkTitle}=param;return(0,jsx_runtime.jsx)(index_esm.Ug,{paddingTop:"5%",children:(0,jsx_runtime.jsx)(index_esm.rU,{href:postLink,_hover:{textDecoration:"none"},children:(0,jsx_runtime.jsx)(Button,{color:"whatsapp.400",variant:"outline",borderColor:"whatsapp.400",_hover:{backgroundColor:"whatsapp.400",color:"white"},children:postLinkTitle})})})};var components_FooterLink=FooterLink},8110:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(5893),_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(4902),next_head__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(9008),next_head__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);let PageLayout=param=>{let{children,pageTitle}=param;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(next_head__WEBPACK_IMPORTED_MODULE_1___default(),{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("title",{children:pageTitle})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.xu,{padding:"5%",backgroundColor:"#646d7d",w:"80vw",h:"100vh",overflowY:"scroll",children:children})]})};__webpack_exports__.Z=PageLayout},7912:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(5893),_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(4902),_components_FooterLink__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(7817),_components_layout_PageLeyout__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(8110);let FilmWallet=()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_layout_PageLeyout__WEBPACK_IMPORTED_MODULE_2__.Z,{pageTitle:"Film Walet",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.gC,{color:"white",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.xv,{fontSize:"xx-large",children:"Film Wallet"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.xv,{fontSize:"large",textAlign:"justify",children:"You can't remember when you started watching your TV show, let alone what is on your list? You need a solution to organize and keep track of everything you watch. And you can't do it without a Movie Wallet! It's the perfect tool to help you track your favorite movies and TV shows. You'll never miss out on the latest releases again!"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_FooterLink__WEBPACK_IMPORTED_MODULE_1__.Z,{postLink:"https://github.com/mertsabinov/film-wallet",postLinkTitle:"GitHub Film Wallet"})]})});__webpack_exports__.default=FilmWallet}},function(__webpack_require__){__webpack_require__.O(0,[774,888,179],function(){return __webpack_require__(__webpack_require__.s=7140)}),_N_E=__webpack_require__.O()}]);