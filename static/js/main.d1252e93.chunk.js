(this["webpackJsonpexorior-ui-example"]=this["webpackJsonpexorior-ui-example"]||[]).push([[0],{341:function(e,a,t){e.exports=t(473)},342:function(e,a,t){},374:function(e,a,t){},473:function(e,a,t){"use strict";t.r(a);t(342);var n=t(0),r=t.n(n),l=t(13),i=t.n(l),o=t(157),c=t(5),m=t.n(c),d=t(499),u=t(294),s=t(509),p=t(519),f=t(525),h=t(149),E=t(477),b=(t(528),t(508)),g=t(512),v=t(526),y=t(295),j=t(198),x=t(333),k=t(514),O=t(515),T=t(518),F=t(520),W=t(523),w=t(330),C=(t(527),t(322)),S=t.n(C),B=(t(323),t(510)),N=t(521),I=t(522),z=t(324),H=t.n(z),A=t(213),P=t(22),R=(t(503),t(506),t(217),t(513)),M=t(517),V=t(516),D=(t(491),t(511)),q=(t(524),Object(u.a)((function(){return{root:{paddingTop:9,paddingBottom:9}}}))),L=function(e){var a=e.variant,t=e.color,n=e.onClick,l=e.fullWidth,i=e.disableRipple,o=e.type,c=e.disabled,m=e.style,u=e.id,s=e.className,p=e.children,f=q();return r.a.createElement(d.a,{id:u,className:s,style:m,disabled:c,type:o,variant:a,color:t||"primary",onClick:n,fullWidth:l,disableRipple:i,classes:{root:f.root}},p)};L.propTypes={variant:m.a.oneOf(["contained","outlined","text"]),color:m.a.oneOf(["primary","inherit","default","secondary"]),onClick:m.a.func,fullWidth:m.a.bool,disableRipple:m.a.bool,type:m.a.oneOf(["button","submit","reset"]),disabled:m.a.bool,style:m.a.any,id:m.a.string,className:m.a.string,children:m.a.node};(0,t(70).makeStyles)((function(){return{formFieldPaddingSmaller:{paddingTop:"0.3rem"}}}));function J(){return(J=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function K(e,a){if(null==e)return{};var t,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}var G=Object(u.a)((function(e){return{container:{display:"flex",flexWrap:"wrap"},textField:{}}})),$=(0,t(70).makeStyles)((function(){return{form:{width:"400px"},formFieldPadding:{paddingTop:"1.5rem"},formFieldPaddingTop:{paddingTop:"1.5rem"},formFieldPaddingSmaller:{paddingTop:"0.3rem"},paddingBackButton:{marginRight:"1rem"},dividerMiddle:{color:"#333333"}}})),U=function(e){var a=e.children,t=e.justify,n=e.spacing,l=e.smaller,i=$();return r.a.createElement(s.a,{item:!0,container:!0,justify:t||"flex-start",alignItems:"center",className:l?i.formFieldPaddingSmaller:i.formFieldPadding,spacing:n},a)},X=["label","value","defaultValue","onChange","form","field","formField"],Q=function(e){var a=e.label,t=e.value,n=e.defaultValue,l=e.onChange,i=e.form,o=e.field,c=e.formField,m=K(e,X),d=G(),u=!Object(F.a)(i)&&!Object(F.a)(i.errors)&&!Object(F.a)(o.name)&&i.errors[o.name],s=r.a.createElement(p.a,J({},m,o,{variant:"outlined",id:"date",error:!Object(F.a)(i)&&!Object(F.a)(i.errors)&&!Object(F.a)(o.name)&&i.errors[o.name],helperText:u,label:a,type:"date",onChange:function(e){var a=e.target.value;"function"===typeof l&&l(a),i.setFieldValue(o.name,a)},defaultValue:n,className:d.textField,InputLabelProps:{shrink:!0}})),f=r.a.createElement(p.a,J({},m,o,{variant:"outlined",id:"date",label:a,type:"date",value:t,defaultValue:n,className:d.textField,InputLabelProps:{shrink:!0},onChange:l}));return c&&!Object(F.a)(o)?r.a.createElement(U,null,s):Object(F.a)(o)?c?r.a.createElement(U,null,f):f:s},Y=Object(u.a)((function(){return{root:{marginRight:0}}})),Z=["field","form","label"],_=function(e){var a=e.field,t=e.label,n=K(e,Z),l=Y();return r.a.createElement(S.a,{control:r.a.createElement(f.a,J({color:"primary",checked:a.value},a,n)),label:t,classes:{root:l.root}})};_.propTypes={field:m.a.any,form:m.a.any,label:m.a.string};var ee={h1:"1.5rem",h2:"1.2rem",h3:"1.1rem",p:"1rem"},ae=700,te=700,ne=600,re=400,le=600,ie=Object(u.a)((function(e){return{h1:{fontSize:ee.h1,fontWeight:ae,lineHeight:"1.2"},h2:{fontSize:ee.h2,fontWeight:te,lineHeight:"1.2"},h3:{fontSize:ee.h3,fontWeight:ne,lineHeight:"1.2"},p:{fontSize:ee.p,fontWeight:re,lineHeight:1.75},pBold:{fontSize:ee.p,fontWeight:le,lineHeight:1.75},navText:{color:e.palette.primary.main,fontSize:"1.115rem",fontWeight:500},navTextActive:{color:e.palette.purpleDarkerText.main,fontSize:"1.115rem",fontWeight:500},collapseNavItemText:{color:e.palette.navItemCollapseText.main,fontSize:"1.125rem",fontWeight:400},collapseNavItemTextActive:{color:e.palette.purpleDarkerText.main,fontSize:"1.125rem",fontWeight:400},wrapperHeading:{color:e.palette.purpleDarkerText.main,fontSize:"1.925rem",fontWeight:500},underTableHeading:{color:"#5b5b5b",fontSize:"0.95rem"},cardFormHeading:{color:e.palette.purpleDarkerText.main,fontSize:"1.35rem",fontWeight:500}}})),oe=["children","variant","component","style","color","align"],ce=function(e){var a=e.children,t=e.variant,n=e.component,l=e.style,i=e.color,o=e.align,c=K(e,oe),m=ie();return r.a.createElement(h.a,J({},c,{align:o,color:i,style:l,component:n||"span",className:function(e){return Object(W.a)([[Object(w.a)("h1"),function(){return m.h1}],[Object(w.a)("h2"),function(){return m.h2}],[Object(w.a)("h3"),function(){return m.h3}],[Object(w.a)("p"),function(){return m.p}],[Object(w.a)("pBold"),function(){return m.pBold}],[Object(w.a)("navText"),function(){return m.navText}],[Object(w.a)("navTextActive"),function(){return m.navTextActive}],[Object(w.a)("collapseNavItemText"),function(){return m.collapseNavItemText}],[Object(w.a)("collapseNavItemTextActive"),function(){return m.collapseNavItemTextActive}],[Object(w.a)("wrapperHeading"),function(){return m.wrapperHeading}],[Object(w.a)("underTableHeading"),function(){return m.underTableHeading}],[Object(w.a)("cardFormHeading"),function(){return m.cardFormHeading}]])(e)}(t)}),a)},me=(Object(u.a)((function(){return{fileInput:{visibility:"hidden",position:"absolute",cursor:"pointer"},fileInputLabel:{cursor:"pointer"},relative:{position:"relative"},avatar:{width:"150px",height:"50px"},cancelButton:{position:"absolute",right:0,zIndex:100,transform:"translate(12px, -12px)"},grayScale:{filter:"grayscale(1)"}}})),Object(u.a)((function(){return{root:{minWidth:220},input:{paddingTop:13,paddingBottom:12},formControl:{top:-6},shrink:{top:0},textFieldMargin:{}}}))),de=["type","variant","fullWidth","select","disabled","className","style","shrink","placeholder","withMinWidth","error","helperText"],ue=function(e){var a=e.type,t=e.variant,l=e.fullWidth,i=e.select,o=e.disabled,c=e.className,m=e.style,d=e.shrink,u=e.placeholder,s=e.withMinWidth,f=e.error,h=e.helperText,b=K(e,de),g=me(),v=Object(n.useState)(!1),y=v[0],j=v[1];return r.a.createElement(p.a,J({type:y?"text":a||"text",className:c,style:m,error:f,disabled:o,variant:t,fullWidth:l,select:i,placeholder:u,helperText:h,InputProps:{classes:{root:s?g.root:0,input:g.input},startAdornment:function(e){return"search"===e?r.a.createElement(B.a,{position:"start"},r.a.createElement(H.a,null)):"phone"===e?r.a.createElement(B.a,{position:"start"},"+420"):void 0}(a),endAdornment:"password"===a&&r.a.createElement(B.a,{position:"end"},r.a.createElement(E.a,{onClick:function(){return j(!y)}},y?r.a.createElement(N.a,null):r.a.createElement(I.a,null)))},InputLabelProps:{shrink:d,classes:{formControl:g.formControl,shrink:g.shrink}},classes:{root:g.textFieldMargin}},b))};ue.propTypes={type:m.a.string,variant:m.a.oneOf(["contained","outlined","text"]),fullWidth:m.a.bool,select:m.a.bool,disabled:m.a.bool,className:m.a.string,style:m.a.any};var se=["field","form","onChange","fullWidth"],pe=function(e){var a=e.field,t=e.form,n=t.touched,l=t.errors,i=e.onChange,o=e.fullWidth,c=K(e,se);return r.a.createElement(A.a,{fullWidth:o},r.a.createElement(ue,J({select:!0,variant:"outlined",onChange:i,fullWidth:!0},a,c)),n[a.name]&&l[a.name]&&r.a.createElement("div",{style:{color:"red"}},l[a.name]))};pe.propTypes={field:m.a.any,form:m.a.any,onChange:m.a.func,fullWidth:m.a.bool};var fe=["field","form","fullWidth","type"],he=function(e){var a=e.field,t=e.form,n=t.touched,l=t.errors,i=e.fullWidth,o=e.type,c=K(e,fe);return r.a.createElement(A.a,{fullWidth:i},r.a.createElement(ue,J({type:o||"text",helperText:n[a.name]&&l[a.name]&&l[a.name],error:function(){if(n[a.name]&&l[a.name])return!0}(),variant:"outlined"},a,c)))};he.propTypes={field:m.a.any,form:m.a.any,fullWidth:m.a.bool,type:m.a.string};var Ee,be=Object(u.a)((function(e){return{container:{display:"flex",flexWrap:"wrap"},textField:{}}})),ge=["form","field","formField"],ve=function(e){var a=e.form,t=e.field,n=e.formField,l=K(e,ge),i=be(),o=!Object(F.a)(a)&&!Object(F.a)(a.errors)&&!Object(F.a)(t.name)&&a.errors[t.name],c=r.a.createElement(p.a,J({type:"time",variant:"outlined"},l,t,{error:o,helperText:o,className:i.textField,InputLabelProps:{shrink:!0},inputProps:{step:300}}));return n?r.a.createElement(U,null,c):c},ye=["onChange","label","checked","field","form"],je=function(e){var a=e.onChange,t=e.label,n=e.checked,l=e.field,i=e.form,o=K(e,ye);return l?r.a.createElement(b.a,{style:{width:"100%"},control:r.a.createElement(g.a,J({},o,{checked:l.value,color:"primary",onChange:function(e){i.setFieldValue(l.name,!l.value),i.setFieldTouched(l.name,!0)}})),label:t}):r.a.createElement(g.a,J({color:"primary"},o,{onChange:a,checked:n}))},xe=["field","form","name","options","children","color"],ke=function(e){var a=e.field,t=e.form,n=t.touched,l=t.errors,i=e.name,o=e.options,c=e.children,m=K(e,xe),d=i||a.name;return r.a.createElement(U,null,r.a.createElement(y.a,J({},a,m,{name:d,"aria-label":"position",defaultValue:"top"}),o?function(e){return e.map((function(e){var a=e.label,t=e.value;return r.a.createElement(b.a,{key:t,value:t,control:r.a.createElement(v.a,{color:"primary"}),label:a})}))}(o):c),n[d]&&l[d]&&r.a.createElement(h.a,{component:"span",style:{color:"red",fontFamily:"sans-serif"}},l[d]))},Oe=Object(u.a)((function(){return{wrapper:{padding:"50px"},paddingHeading:{paddingBottom:"30px"}}})),Te=function(e){var a=e.children,t=e.heading,n=e.rightBar,l=e.headingBar,i=e.headingVariant,o=Oe();return r.a.createElement("div",{className:o.wrapper},r.a.createElement(s.a,{container:!0,justify:"space-between",alignItems:"center",className:o.paddingHeading},r.a.createElement(s.a,{item:!0},t&&r.a.createElement(ce,{component:"span",variant:i},t),l&&l),r.a.createElement(s.a,{item:!0},n)),r.a.createElement("div",null,a))},Fe=Object(u.a)((function(e){return{displayFlex:{display:"flex"},arrowBack:{width:"50%",marginRight:"1.115rem"}}})),We=Object(P.d)((function(e){var a=e.children,t=e.to,n=e.goBack,l=e.title,i=e.history,c=Fe(),m=r.a.createElement(ce,{variant:"wrapperHeading"},r.a.createElement(s.a,{container:!0,justify:"center",alignItems:"center",direction:"row"},r.a.createElement(s.a,{item:!0,className:c.displayFlex},r.a.createElement("img",{src:"arrowBack~beHncHej.png",alt:"ArrowBack",className:c.arrowBack})),r.a.createElement(s.a,{item:!0},l))),d=n?r.a.createElement(L,{variant:"empty",disableRipple:!0,onClick:function(){return i.goBack()}},m):r.a.createElement(o.b,{to:t},m);return r.a.createElement(Te,{headingBar:d},a)})),we=Object(u.a)((function(){return{arrowBack:{marginRight:"1.115rem"},cursor:{cursor:"pointer"}}})),Ce=function(e){var a=e.children,t=e.handleBack,n=we(),l=r.a.createElement("div",{onClick:t,className:n.cursor},r.a.createElement("img",{src:"arrowBack~kCTuDVIq.svg",alt:"ArrowBack",className:n.arrowBack}));return r.a.createElement(s.a,{container:!0,justify:"center",alignItems:"center",direction:"row"},r.a.createElement(s.a,{item:!0,container:!0,justify:"flex-start",alignItems:"center"},t&&l,r.a.createElement(ce,{variant:"cardFormHeading"},a)))},Se=(0,t(70).makeStyles)((function(){return{form:{width:"400px"},formFieldPadding:{paddingTop:"1.5rem"},formFieldPaddingSmaller:{paddingTop:"0.3rem"},paddingBackButton:{marginRight:"1rem"},dividerMiddle:{color:"#333333"}}})),Be=function(e){var a=e.leftSide,t=e.title,n=e.children,l=e.paddingSmaller,i=Se();return r.a.createElement(s.a,{container:!0,direction:"row",justify:"space-between",alignItems:"center",className:l?i.formFieldPaddingSmaller:i.formFieldPadding},r.a.createElement(s.a,{item:!0},t?r.a.createElement(ce,null,t):a),r.a.createElement(s.a,{item:!0},n))},Ne=(Object(u.a)((function(){return{closeIcon:{marginRight:-15}}})),Object(u.a)((function(){return{tableCustom:{overflowX:"scroll"}}}))),Ie=function(e){var a=e.tableHeading,t=e.children,n=e.tablePagination,l=e.tableFilter,i=Ne();return r.a.createElement(x.a,null,r.a.createElement(j.a,{pl:3,pr:3,className:i.tableCustom},l?r.a.createElement(Fragment,null,r.a.createElement(j.a,{pt:3,pb:3},l)):null,r.a.createElement(R.a,{"aria-label":"TableCustom"},r.a.createElement(M.a,null,a),r.a.createElement(k.a,null,t),n&&r.a.createElement(V.a,null,r.a.createElement(T.a,null,r.a.createElement(O.a,{colSpan:99},n))))))},ze=Object(u.a)((function(){return{root:{padding:12},heading:{fontWeight:600,fontSize:"1rem"}}})),He=function(e){var a=e.children,t=e.align,n=e.heading,l=ze();return r.a.createElement(O.a,{align:t,classes:{root:l.root},className:n?l.heading:""},a)},Ae=Object(u.a)({table:{minWidth:500},headText:{fontSize:"0.975rem",fontWeight:"700",color:"rgb(51,51,51)"},tableCell:{fontSize:"0.9rem"}}),Pe=["children","row","defaultValue","valueKey","isNameCell","isTimeCell"],Re=function(e){var a=e.children,t=e.row,n=e.defaultValue,l=e.valueKey,i=K(e,Pe),o=Ae();if(Array.isArray(l)&&l.length>1)return r.a.createElement(O.a,J({component:"th",scope:"row",className:o.tableCell},i),t[l[0]]+" "+t[l[1]]);var c=Object(F.a)(n)?t&&t[l]:""+n;return r.a.createElement(O.a,J({component:"th",scope:"row",className:o.tableCell},i),c||a)},Me=Object(u.a)((function(e){return{tableRowDisabled:{backgroundColor:e.palette.primary.light}}})),Ve=["children","disabled"],De=r.a.forwardRef((function(e,a){var t=e.children,n=e.disabled,l=K(e,Ve),i=Me();return r.a.createElement(T.a,J({ref:a},l,{className:n?i.tableRowDisabled:""}),t)})),qe=function(e){var a=e.disableFirst,t=e.disableSecond,n=e.titleFirst,l=e.handleClickFirst,i=e.titleSecond,o=e.handleClickSecond,c=e.variantFirst,m=e.justify,d=e.style,u=e.mobile;return r.a.createElement(U,{style:d},r.a.createElement(s.a,{container:!0,alignItems:"center",justify:m||"flex-end",spacing:1},r.a.createElement(s.a,{item:!0},r.a.createElement(L,{disabled:a,variant:c||"outlined",onClick:l,size:u?"medium":"small",mobile:u},n)),r.a.createElement(s.a,{item:!0},r.a.createElement(L,{disabled:t,onClick:o,mobile:u},i))))},Le=(t(374),t(502)),Je=t(507),Ke=t(34),Ge=t(41),$e=t(66),Ue="firstName",Xe="lastName",Qe="username",Ye="email",Ze="phone",_e="role",ea="date",aa="time",ta="check",na="switch",ra="gender",la=$e.a().shape((Ee={},Object(Ke.a)(Ee,Ue,$e.b().required("error")),Object(Ke.a)(Ee,Xe,$e.b().required("error")),Object(Ke.a)(Ee,Qe,$e.b().required("error")),Object(Ke.a)(Ee,Ye,$e.b().email("error").required("error")),Object(Ke.a)(Ee,Ze,$e.b().required("error")),Object(Ke.a)(Ee,_e,$e.b().required("error")),Ee)),ia=function(){var e,a=(e={},Object(Ke.a)(e,Ue,""),Object(Ke.a)(e,Xe,""),Object(Ke.a)(e,Qe,""),Object(Ke.a)(e,Ye,""),Object(Ke.a)(e,Ze,""),Object(Ke.a)(e,_e,""),Object(Ke.a)(e,na,""),Object(Ke.a)(e,ra,""),e);return r.a.createElement(Ge.c,{enableReinitialize:!0,initialValues:a,validationSchema:la,onSubmit:function(e){}},(function(e){var a=e.handleChange,t=e.handleSubmit,n=e.values;return r.a.createElement(Ge.b,{onSubmit:t,onChange:a},JSON.stringify(n),r.a.createElement(s.a,{container:!0,spacing:2},r.a.createElement(s.a,{item:!0,xs:12},r.a.createElement(Ge.a,{name:Qe,label:"P\u0159ihla\u0161ovac\xed jm\xe9no",fullWidth:!0,component:he})),r.a.createElement(s.a,{item:!0,xs:12},r.a.createElement(Ge.a,{name:_e,label:"U\u017eivatelsk\xe1 role",onChange:a,fullWidth:!0,component:pe},r.a.createElement(D.a,{key:1,value:"A"},"A"),r.a.createElement(D.a,{key:2,value:"B"},"B")))),r.a.createElement(j.a,{pt:3,pb:3}),r.a.createElement(s.a,{container:!0,spacing:2},r.a.createElement(s.a,{item:!0,xs:6},r.a.createElement(Ge.a,{name:Ue,label:"Jm\xe9no",fullWidth:!0,component:he})),r.a.createElement(s.a,{item:!0,xs:6},r.a.createElement(Ge.a,{name:Xe,label:"P\u0159\xedjmen\xed",fullWidth:!0,component:he})),r.a.createElement(s.a,{item:!0,xs:12},r.a.createElement(Ge.a,{name:Ye,label:"E-mail",fullWidth:!0,component:he})),r.a.createElement(s.a,{item:!0,xs:12},r.a.createElement(Ge.a,{name:Ze,label:"Telefon",fullWidth:!0,component:he,type:"phone"})),r.a.createElement(s.a,{item:!0,xs:12},r.a.createElement(Ge.a,{name:ea,label:"Datum",fullWidth:!0,component:Q})),r.a.createElement(s.a,{item:!0,xs:12},r.a.createElement(Ge.a,{name:aa,label:"Time",fullWidth:!0,component:ve})),r.a.createElement(s.a,{item:!0,xs:12},r.a.createElement(Ge.a,{name:ta,label:"Check",fullWidth:!0,component:_})),r.a.createElement(s.a,{item:!0,xs:12},r.a.createElement(Ge.a,{name:na,label:"Switch",fullWidth:!0,component:je})),r.a.createElement(s.a,{item:!0,xs:12},r.a.createElement(Ge.a,{name:ra,component:ke,color:"primary",options:[{label:"Mu\u017e",value:"MAN"},{label:"\u017dena",value:"WOMAN"},{label:"Jin\xe9",value:"OTHER"}],row:!0})),r.a.createElement(s.a,{item:!0,xs:12},r.a.createElement(s.a,{container:!0,justify:"flex-end"},r.a.createElement(j.a,{mt:3},r.a.createElement(L,{variant:"contained",color:"primary",type:"submit"},"Submit"))))))}))},oa=(0,t(70).createMuiTheme)({palette:{primary:{main:"#8583F4"},buttonHover:{main:"rgba(114,111,240,1)"},purpleDarkerText:{main:"#24227B"},buttonTextDarkGray:{main:"#7F7F7F"},pageGrayBackground:{main:"#EEEEF9"},navItemCollapseText:{main:"#7F7F7F"},danger:{main:"#f44336"}},overrides:{MuiSwitch:{thumb:{"$checked$checked + &":{opacity:1,backgroundColor:"rgb(129, 171, 134)"}}},MuiInputBase:{root:{}}}}),ca=function(){return r.a.createElement(Le.a,{theme:oa},r.a.createElement(o.a,null,r.a.createElement("h1",null,"Buttons"),r.a.createElement(s.a,{container:!0,spacing:4},r.a.createElement(s.a,{item:!0},r.a.createElement(L,{color:"primary",variant:"contained"},"Click !")),r.a.createElement(s.a,{item:!0},r.a.createElement(L,{color:"primary",variant:"outlined"},"Click !")),r.a.createElement(s.a,{item:!0},r.a.createElement(L,{color:"primary",variant:"text"},"Click !"))),r.a.createElement("h1",null,"Divider"),r.a.createElement(Je.a,null),r.a.createElement("h1",null,"Form page heading"),r.a.createElement(We,{title:"heelo"},"asd"),r.a.createElement("h1",null,"FormTitle"),r.a.createElement(Ce,null,"Heslo"),r.a.createElement("h1",null,"GridRow"),r.a.createElement(Be,{leftSide:r.a.createElement(ce,{variant:"h3"},"Pracovn\xed dny")},"5 dnu"),r.a.createElement(Te,{heading:"ahopj",rightBar:r.a.createElement(L,null,"Novy")},"Loader"),r.a.createElement("h1",null,"Table"),r.a.createElement(Ie,{tableHeading:r.a.createElement(De,null,r.a.createElement(He,null),r.a.createElement(He,null,r.a.createElement(ce,{variant:"pBold"},"\u010c\xedslo objedn\xe1vky")),r.a.createElement(He,null,r.a.createElement(ce,{variant:"pBold"},"Jm\xe9no z\xe1kazn\xedka")),r.a.createElement(He,null,r.a.createElement(ce,{variant:"pBold"},"E-mail z\xe1kazn\xedka")),r.a.createElement(He,null,r.a.createElement(ce,{variant:"pBold"},"Stav objedn\xe1vky")))},r.a.createElement(De,null,r.a.createElement(Re,null,"1."),r.a.createElement(Re,null,"Lukas"),r.a.createElement(Re,null,"Kopecky."),r.a.createElement(Re,null,"Kopecky."),r.a.createElement(Re,null,"Kopecky."))),r.a.createElement("h1",null,"TextField"),r.a.createElement(s.a,{container:!0,spacing:3},r.a.createElement(s.a,{item:!0},r.a.createElement(ue,null)),r.a.createElement(s.a,{item:!0},r.a.createElement(ue,{variant:"outlined"})),r.a.createElement(s.a,{item:!0},r.a.createElement(ue,{variant:"filled"})),r.a.createElement(s.a,{item:!0},r.a.createElement(ue,{variant:"outlined",type:"search"})),r.a.createElement(s.a,{item:!0},r.a.createElement(ue,{variant:"outlined",label:"\u010c\xedslo z\xe1jezdu",value:"1238n",fullWidth:!0,type:"password",shrink:!0,disabled:!0})),r.a.createElement(s.a,{item:!0},r.a.createElement(ue,{variant:"outlined",label:"\u010c\xedslo z\xe1jezdu",value:"1238n",fullWidth:!0,type:"phone",shrink:!0,disabled:!0}))),r.a.createElement("h1",null,"Two Buttons"),r.a.createElement(qe,{handleClickFirst:function(){return alert("first")},handleClickSecond:function(){return alert("second")},titleFirst:"prvni",titleSecond:"druhy"}),r.a.createElement("h1",null,"Typigraphy"),r.a.createElement(s.a,{container:!0,spacing:2},r.a.createElement(s.a,{item:!0},r.a.createElement(ce,{variant:"h1"}," Ahoj svete")," "),r.a.createElement(s.a,{item:!0},r.a.createElement(ce,{variant:"h2"}," Ahoj svete")," "),r.a.createElement(s.a,{item:!0},r.a.createElement(ce,{variant:"h3"}," Ahoj svete")," "),r.a.createElement(s.a,{item:!0},r.a.createElement(ce,{variant:"p"}," Ahoj svete")," "),r.a.createElement(s.a,{item:!0},r.a.createElement(ce,{variant:"pBold"}," Ahoj svete")," ")),r.a.createElement(ia,null)))};i.a.render(r.a.createElement(ca,null),document.getElementById("root"))}},[[341,1,2]]]);
//# sourceMappingURL=main.d1252e93.chunk.js.map