(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[919],{8682:function(e,r,t){"use strict";t.d(r,{Z:function(){return k}});var a=t(791),o=t(3428),l=t(2265),n=t(7042),i=t(5600),s=t(8702),c=t(5843),d=t(3292),u=t(9592),p=t(6659),m=t(6520),h=t(5702);function Z(e){return(0,h.ZP)("PrivateSwitchBase",e)}(0,m.Z)("PrivateSwitchBase",["root","checked","disabled","input","edgeStart","edgeEnd"]);var b=t(7437);let v=["autoFocus","checked","checkedIcon","className","defaultChecked","disabled","disableFocusRipple","edge","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"],f=e=>{let{classes:r,checked:t,disabled:a,edge:o}=e,l={root:["root",t&&"checked",a&&"disabled",o&&`edge${(0,s.Z)(o)}`],input:["input"]};return(0,i.Z)(l,Z,r)},x=(0,c.ZP)(p.Z)(({ownerState:e})=>(0,o.Z)({padding:9,borderRadius:"50%"},"start"===e.edge&&{marginLeft:"small"===e.size?-3:-12},"end"===e.edge&&{marginRight:"small"===e.size?-3:-12})),g=(0,c.ZP)("input")({cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}),j=l.forwardRef(function(e,r){let{autoFocus:t,checked:l,checkedIcon:i,className:s,defaultChecked:c,disabled:p,disableFocusRipple:m=!1,edge:h=!1,icon:Z,id:j,inputProps:k,inputRef:C,name:y,onBlur:P,onChange:w,onFocus:S,readOnly:R,required:F=!1,tabIndex:M,type:z,value:N}=e,$=(0,a.Z)(e,v),[I,B]=(0,d.Z)({controlled:l,default:!!c,name:"SwitchBase",state:"checked"}),O=(0,u.Z)(),E=p;O&&void 0===E&&(E=O.disabled);let L="checkbox"===z||"radio"===z,q=(0,o.Z)({},e,{checked:I,disabled:E,disableFocusRipple:m,edge:h}),V=f(q);return(0,b.jsxs)(x,(0,o.Z)({component:"span",className:(0,n.Z)(V.root,s),centerRipple:!0,focusRipple:!m,disabled:E,tabIndex:null,role:void 0,onFocus:e=>{S&&S(e),O&&O.onFocus&&O.onFocus(e)},onBlur:e=>{P&&P(e),O&&O.onBlur&&O.onBlur(e)},ownerState:q,ref:r},$,{children:[(0,b.jsx)(g,(0,o.Z)({autoFocus:t,checked:l,defaultChecked:c,className:V.input,disabled:E,id:L?j:void 0,name:y,onChange:e=>{if(e.nativeEvent.defaultPrevented)return;let r=e.target.checked;B(r),w&&w(e,r)},readOnly:R,ref:C,required:F,ownerState:q,tabIndex:M,type:z},"checkbox"===z&&void 0===N?{}:{value:N},k)),I?i:Z]}))});var k=j},419:function(e,r,t){"use strict";var a=t(3449);r.Z=a.Z},6768:function(e,r,t){Promise.resolve().then(t.bind(t,5985))},8312:function(e,r,t){"use strict";var a=t(7437);t(2265);var o=t(5133),l=t(8469),n=t(3226),i=t(3457),s=t(6507);r.Z=e=>{let{title:r,subtitle:t,children:c,action:d,footer:u,cardheading:p,headtitle:m,headsubtitle:h,middlecontent:Z}=e;return(0,a.jsxs)(o.Z,{sx:{padding:0},elevation:9,variant:void 0,children:[p?(0,a.jsxs)(l.Z,{children:[(0,a.jsx)(n.Z,{variant:"h4",children:m}),(0,a.jsx)(n.Z,{variant:"subtitle2",color:"textSecondary",children:h})]}):(0,a.jsxs)(l.Z,{sx:{p:"30px"},children:[r?(0,a.jsxs)(i.Z,{direction:"row",spacing:2,justifyContent:"space-between",alignItems:"center",mb:3,children:[(0,a.jsxs)(s.Z,{children:[r?(0,a.jsx)(n.Z,{variant:"h4",children:r}):"",t?(0,a.jsx)(n.Z,{variant:"subtitle2",color:"textSecondary",children:t}):""]}),d]}):null,c]}),Z,u]})}},5985:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return eg}});var a=t(7437),o=t(9872),l=t(8874),n=t(3457),i=t(886),s=t(791),c=t(3428),d=t(2265),u=t(7042),p=t(5600),m=t(5843),h=t(7927),Z=t(6520),b=t(5702);function v(e){return(0,b.ZP)("MuiFormGroup",e)}(0,Z.Z)("MuiFormGroup",["root","row","error"]);var f=t(9592),x=t(4379);let g=["className","row"],j=e=>{let{classes:r,row:t,error:a}=e;return(0,p.Z)({root:["root",t&&"row",a&&"error"]},v,r)},k=(0,m.ZP)("div",{name:"MuiFormGroup",slot:"Root",overridesResolver:(e,r)=>{let{ownerState:t}=e;return[r.root,t.row&&r.row]}})(({ownerState:e})=>(0,c.Z)({display:"flex",flexDirection:"column",flexWrap:"wrap"},e.row&&{flexDirection:"row"})),C=d.forwardRef(function(e,r){let t=(0,h.Z)({props:e,name:"MuiFormGroup"}),{className:o,row:l=!1}=t,n=(0,s.Z)(t,g),i=(0,f.Z)(),d=(0,x.Z)({props:t,muiFormControl:i,states:["error"]}),p=(0,c.Z)({},t,{row:l,error:d.error}),m=j(p);return(0,a.jsx)(k,(0,c.Z)({className:(0,u.Z)(m.root,o),ownerState:p,ref:r},n))});var y=t(3226),P=t(8702);function w(e){return(0,b.ZP)("MuiFormControlLabel",e)}let S=(0,Z.Z)("MuiFormControlLabel",["root","labelPlacementStart","labelPlacementTop","labelPlacementBottom","disabled","label","error","required","asterisk"]),R=["checked","className","componentsProps","control","disabled","disableTypography","inputRef","label","labelPlacement","name","onChange","required","slotProps","value"],F=e=>{let{classes:r,disabled:t,labelPlacement:a,error:o,required:l}=e,n={root:["root",t&&"disabled",`labelPlacement${(0,P.Z)(a)}`,o&&"error",l&&"required"],label:["label",t&&"disabled"],asterisk:["asterisk",o&&"error"]};return(0,p.Z)(n,w,r)},M=(0,m.ZP)("label",{name:"MuiFormControlLabel",slot:"Root",overridesResolver:(e,r)=>{let{ownerState:t}=e;return[{[`& .${S.label}`]:r.label},r.root,r[`labelPlacement${(0,P.Z)(t.labelPlacement)}`]]}})(({theme:e,ownerState:r})=>(0,c.Z)({display:"inline-flex",alignItems:"center",cursor:"pointer",verticalAlign:"middle",WebkitTapHighlightColor:"transparent",marginLeft:-11,marginRight:16,[`&.${S.disabled}`]:{cursor:"default"}},"start"===r.labelPlacement&&{flexDirection:"row-reverse",marginLeft:16,marginRight:-11},"top"===r.labelPlacement&&{flexDirection:"column-reverse",marginLeft:16},"bottom"===r.labelPlacement&&{flexDirection:"column",marginLeft:16},{[`& .${S.label}`]:{[`&.${S.disabled}`]:{color:(e.vars||e).palette.text.disabled}}})),z=(0,m.ZP)("span",{name:"MuiFormControlLabel",slot:"Asterisk",overridesResolver:(e,r)=>r.asterisk})(({theme:e})=>({[`&.${S.error}`]:{color:(e.vars||e).palette.error.main}})),N=d.forwardRef(function(e,r){var t,o;let l=(0,h.Z)({props:e,name:"MuiFormControlLabel"}),{className:i,componentsProps:p={},control:m,disabled:Z,disableTypography:b,label:v,labelPlacement:g="end",required:j,slotProps:k={}}=l,C=(0,s.Z)(l,R),P=(0,f.Z)(),w=null!=(t=null!=Z?Z:m.props.disabled)?t:null==P?void 0:P.disabled,S=null!=j?j:m.props.required,N={disabled:w,required:S};["checked","name","onChange","value","inputRef"].forEach(e=>{void 0===m.props[e]&&void 0!==l[e]&&(N[e]=l[e])});let $=(0,x.Z)({props:l,muiFormControl:P,states:["error"]}),I=(0,c.Z)({},l,{disabled:w,labelPlacement:g,required:S,error:$.error}),B=F(I),O=null!=(o=k.typography)?o:p.typography,E=v;return null==E||E.type===y.Z||b||(E=(0,a.jsx)(y.Z,(0,c.Z)({component:"span"},O,{className:(0,u.Z)(B.label,null==O?void 0:O.className),children:E}))),(0,a.jsxs)(M,(0,c.Z)({className:(0,u.Z)(B.root,i),ownerState:I,ref:r},C,{children:[d.cloneElement(m,N),S?(0,a.jsxs)(n.Z,{direction:"row",alignItems:"center",children:[E,(0,a.jsxs)(z,{ownerState:I,"aria-hidden":!0,className:B.asterisk,children:[" ","*"]})]}):E]}))});var $=t(2810),I=t(8682),B=t(9782),O=(0,B.Z)((0,a.jsx)("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),E=(0,B.Z)((0,a.jsx)("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),L=(0,B.Z)((0,a.jsx)("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox");function q(e){return(0,b.ZP)("MuiCheckbox",e)}let V=(0,Z.Z)("MuiCheckbox",["root","checked","disabled","indeterminate","colorPrimary","colorSecondary"]),D=["checkedIcon","color","icon","indeterminate","indeterminateIcon","inputProps","size","className"],H=e=>{let{classes:r,indeterminate:t,color:a}=e,o={root:["root",t&&"indeterminate",`color${(0,P.Z)(a)}`]},l=(0,p.Z)(o,q,r);return(0,c.Z)({},r,l)},G=(0,m.ZP)(I.Z,{shouldForwardProp:e=>(0,m.FO)(e)||"classes"===e,name:"MuiCheckbox",slot:"Root",overridesResolver:(e,r)=>{let{ownerState:t}=e;return[r.root,t.indeterminate&&r.indeterminate,"default"!==t.color&&r[`color${(0,P.Z)(t.color)}`]]}})(({theme:e,ownerState:r})=>(0,c.Z)({color:(e.vars||e).palette.text.secondary},!r.disableRipple&&{"&:hover":{backgroundColor:e.vars?`rgba(${"default"===r.color?e.vars.palette.action.activeChannel:e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,$.Fq)("default"===r.color?e.palette.action.active:e.palette[r.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"default"!==r.color&&{[`&.${V.checked}, &.${V.indeterminate}`]:{color:(e.vars||e).palette[r.color].main},[`&.${V.disabled}`]:{color:(e.vars||e).palette.action.disabled}})),T=(0,a.jsx)(E,{}),_=(0,a.jsx)(O,{}),A=(0,a.jsx)(L,{}),W=d.forwardRef(function(e,r){var t,o;let l=(0,h.Z)({props:e,name:"MuiCheckbox"}),{checkedIcon:n=T,color:i="primary",icon:p=_,indeterminate:m=!1,indeterminateIcon:Z=A,inputProps:b,size:v="medium",className:f}=l,x=(0,s.Z)(l,D),g=m?Z:p,j=m?Z:n,k=(0,c.Z)({},l,{color:i,indeterminate:m,size:v}),C=H(k);return(0,a.jsx)(G,(0,c.Z)({type:"checkbox",inputProps:(0,c.Z)({"data-indeterminate":m},b),icon:d.cloneElement(g,{fontSize:null!=(t=g.props.fontSize)?t:v}),checkedIcon:d.cloneElement(j,{fontSize:null!=(o=j.props.fontSize)?o:v}),ownerState:k,ref:r,className:(0,u.Z)(C.root,f)},x,{classes:C}))});var J=t(4081),U=t(4172),K=t(7663),Q=t(3292);let X=d.createContext(void 0);var Y=t(419);let ee=["actions","children","defaultValue","name","onChange","value"],er=d.forwardRef(function(e,r){let{actions:t,children:o,defaultValue:l,name:n,onChange:i,value:u}=e,p=(0,s.Z)(e,ee),m=d.useRef(null),[h,Z]=(0,Q.Z)({controlled:u,default:l,name:"RadioGroup"});d.useImperativeHandle(t,()=>({focus:()=>{let e=m.current.querySelector("input:not(:disabled):checked");e||(e=m.current.querySelector("input:not(:disabled)")),e&&e.focus()}}),[]);let b=(0,K.Z)(r,m),v=(0,Y.Z)(n),f=d.useMemo(()=>({name:v,onChange(e){Z(e.target.value),i&&i(e,e.target.value)},value:h}),[v,i,Z,h]);return(0,a.jsx)(X.Provider,{value:f,children:(0,a.jsx)(C,(0,c.Z)({role:"radiogroup",ref:b},p,{children:o}))})});var et=(0,B.Z)((0,a.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"RadioButtonUnchecked"),ea=(0,B.Z)((0,a.jsx)("path",{d:"M8.465 8.465C9.37 7.56 10.62 7 12 7C14.76 7 17 9.24 17 12C17 13.38 16.44 14.63 15.535 15.535C14.63 16.44 13.38 17 12 17C9.24 17 7 14.76 7 12C7 10.62 7.56 9.37 8.465 8.465Z"}),"RadioButtonChecked");let eo=(0,m.ZP)("span")({position:"relative",display:"flex"}),el=(0,m.ZP)(et)({transform:"scale(1)"}),en=(0,m.ZP)(ea)(({theme:e,ownerState:r})=>(0,c.Z)({left:0,position:"absolute",transform:"scale(0)",transition:e.transitions.create("transform",{easing:e.transitions.easing.easeIn,duration:e.transitions.duration.shortest})},r.checked&&{transform:"scale(1)",transition:e.transitions.create("transform",{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.shortest})}));var ei=function(e){let{checked:r=!1,classes:t={},fontSize:o}=e,l=(0,c.Z)({},e,{checked:r});return(0,a.jsxs)(eo,{className:t.root,ownerState:l,children:[(0,a.jsx)(el,{fontSize:o,className:t.background,ownerState:l}),(0,a.jsx)(en,{fontSize:o,className:t.dot,ownerState:l})]})},es=t(3243).Z;function ec(e){return(0,b.ZP)("MuiRadio",e)}let ed=(0,Z.Z)("MuiRadio",["root","checked","disabled","colorPrimary","colorSecondary"]),eu=["checked","checkedIcon","color","icon","name","onChange","size","className"],ep=e=>{let{classes:r,color:t}=e,a={root:["root",`color${(0,P.Z)(t)}`]};return(0,c.Z)({},r,(0,p.Z)(a,ec,r))},em=(0,m.ZP)(I.Z,{shouldForwardProp:e=>(0,m.FO)(e)||"classes"===e,name:"MuiRadio",slot:"Root",overridesResolver:(e,r)=>{let{ownerState:t}=e;return[r.root,r[`color${(0,P.Z)(t.color)}`]]}})(({theme:e,ownerState:r})=>(0,c.Z)({color:(e.vars||e).palette.text.secondary},!r.disableRipple&&{"&:hover":{backgroundColor:e.vars?`rgba(${"default"===r.color?e.vars.palette.action.activeChannel:e.vars.palette[r.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,$.Fq)("default"===r.color?e.palette.action.active:e.palette[r.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"default"!==r.color&&{[`&.${ed.checked}`]:{color:(e.vars||e).palette[r.color].main}},{[`&.${ed.disabled}`]:{color:(e.vars||e).palette.action.disabled}})),eh=(0,a.jsx)(ei,{checked:!0}),eZ=(0,a.jsx)(ei,{}),eb=d.forwardRef(function(e,r){var t,o,l,n;let i=(0,h.Z)({props:e,name:"MuiRadio"}),{checked:p,checkedIcon:m=eh,color:Z="primary",icon:b=eZ,name:v,onChange:f,size:x="medium",className:g}=i,j=(0,s.Z)(i,eu),k=(0,c.Z)({},i,{color:Z,size:x}),C=ep(k),y=d.useContext(X),P=p,w=es(f,y&&y.onChange),S=v;return y&&(void 0===P&&(l=y.value,P="object"==typeof(n=i.value)&&null!==n?l===n:String(l)===String(n)),void 0===S&&(S=y.name)),(0,a.jsx)(em,(0,c.Z)({type:"radio",icon:d.cloneElement(b,{fontSize:null!=(t=eZ.props.fontSize)?t:x}),checkedIcon:d.cloneElement(m,{fontSize:null!=(o=eh.props.fontSize)?o:x}),ownerState:k,classes:C,name:S,checked:P,onChange:w,ref:r,className:(0,u.Z)(C.root,g)},j))});var ev=t(3724),ef=t(8312),ex=t(8595);(0,m.ZP)(o.Z)(e=>{let{theme:r}=e;return{...r.typography.body1,textAlign:"center",color:r.palette.text.secondary,height:60,lineHeight:"60px"}}),(0,ex.Z)({palette:{mode:"dark"}}),(0,ex.Z)({palette:{mode:"light"}});var eg=()=>(0,a.jsxs)(l.ZP,{container:!0,spacing:3,children:[(0,a.jsx)(l.ZP,{item:!0,xs:12,lg:12,children:(0,a.jsx)(ef.Z,{title:"Form Layout",children:(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.Z,{spacing:3,children:[(0,a.jsx)(i.Z,{id:"name-basic",label:"Name",variant:"outlined",defaultValue:"Nirav Joshi"}),(0,a.jsx)(i.Z,{id:"email-basic",label:"Email",variant:"outlined"}),(0,a.jsx)(i.Z,{id:"pass-basic",label:"Password",type:"password",variant:"outlined"}),(0,a.jsx)(i.Z,{id:"outlined-multiline-static",label:"Text Area",multiline:!0,rows:4,defaultValue:"Default Value"}),(0,a.jsx)(i.Z,{error:!0,id:"er-basic",label:"Error",defaultValue:"ad1avi",variant:"outlined"}),(0,a.jsxs)(C,{children:[(0,a.jsx)(N,{control:(0,a.jsx)(W,{defaultChecked:!0}),label:"Terms & Condition"}),(0,a.jsx)(N,{disabled:!0,control:(0,a.jsx)(W,{}),label:"Disabled"})]}),(0,a.jsxs)(J.Z,{children:[(0,a.jsx)(U.Z,{id:"demo-radio-buttons-group-label",children:"Gender"}),(0,a.jsxs)(er,{"aria-labelledby":"demo-radio-buttons-group-label",defaultValue:"female",name:"radio-buttons-group",children:[(0,a.jsx)(N,{value:"female",control:(0,a.jsx)(eb,{}),label:"Female"}),(0,a.jsx)(N,{value:"male",control:(0,a.jsx)(eb,{}),label:"Male"}),(0,a.jsx)(N,{value:"other",control:(0,a.jsx)(eb,{}),label:"Other"})]})]})]}),(0,a.jsx)("br",{}),(0,a.jsx)(ev.Z,{children:"Submit"})]})})}),(0,a.jsx)(l.ZP,{item:!0,xs:12,lg:12,children:(0,a.jsx)(ef.Z,{title:"Form Design Type",children:(0,a.jsxs)(n.Z,{spacing:3,direction:"row",children:[(0,a.jsx)(i.Z,{id:"outlined-basic",label:"Outlined",variant:"outlined"}),(0,a.jsx)(i.Z,{id:"filled-basic",label:"Filled",variant:"filled"}),(0,a.jsx)(i.Z,{id:"standard-basic",label:"Standard",variant:"standard"})]})})})]})}},function(e){e.O(0,[370,468,238,937,116,810,80,886,971,596,744],function(){return e(e.s=6768)}),_N_E=e.O()}]);