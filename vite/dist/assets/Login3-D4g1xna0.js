import{n as R,N as C,O as G,r as p,j as e,G as t,Q as j,B as n,R as x,T as i,U as g,S as v,V as L,W as w,X as M}from"./index--MNNFQyL.js";import{G as $,F as H,c as q,a as b,I as y,O as f,b as d,d as O,e as T,f as U,g as V,C as Q,A as _,h as N,i as X}from"./AuthFooter-Dyz0TBuG.js";import{B as c}from"./Button-IAt27e6n.js";import"./Link-CWb76MoD.js";const J=({...a})=>{const r=R(),k=C(r.breakpoints.down("md")),I=G(s=>s.customization),[S,A]=p.useState(!0),B=async()=>{console.error("Login")},[l,F]=p.useState(!1),P=()=>{F(!l)},D=s=>{s.preventDefault()};return e.jsxs(e.Fragment,{children:[e.jsxs(t,{container:!0,direction:"column",justifyContent:"center",spacing:2,children:[e.jsx(t,{item:!0,xs:12,children:e.jsx(j,{children:e.jsxs(c,{disableElevation:!0,fullWidth:!0,onClick:B,size:"large",variant:"outlined",sx:{color:"grey.700",backgroundColor:r.palette.grey[50],borderColor:r.palette.grey[100]},children:[e.jsx(n,{sx:{mr:{xs:1,sm:2,width:20}},children:e.jsx("img",{src:$,alt:"google",width:16,height:16,style:{marginRight:k?8:16}})}),"Sign in with Google"]})})}),e.jsx(t,{item:!0,xs:12,children:e.jsxs(n,{sx:{alignItems:"center",display:"flex"},children:[e.jsx(x,{sx:{flexGrow:1},orientation:"horizontal"}),e.jsx(c,{variant:"outlined",sx:{cursor:"unset",m:2,py:.5,px:7,borderColor:`${r.palette.grey[100]} !important`,color:`${r.palette.grey[900]}!important`,fontWeight:500,borderRadius:`${I.borderRadius}px`},disableRipple:!0,disabled:!0,children:"OR"}),e.jsx(x,{sx:{flexGrow:1},orientation:"horizontal"})]})}),e.jsx(t,{item:!0,xs:12,container:!0,alignItems:"center",justifyContent:"center",children:e.jsx(n,{sx:{mb:2},children:e.jsx(i,{variant:"subtitle1",children:"Sign in with Email address"})})})]}),e.jsx(H,{initialValues:{email:"",password:"",submit:null},validationSchema:q().shape({email:b().email("Must be a valid email").max(255).required("Email is required"),password:b().max(255).required("Password is required")}),children:({errors:s,handleBlur:m,handleChange:u,handleSubmit:E,isSubmitting:W,touched:o,values:h})=>e.jsxs("form",{noValidate:!0,onSubmit:E,...a,children:[e.jsxs(g,{fullWidth:!0,error:!!(o.email&&s.email),sx:{...r.typography.customInput},children:[e.jsx(y,{htmlFor:"outlined-adornment-email-login",children:"Email Address / Username"}),e.jsx(f,{id:"outlined-adornment-email-login",type:"email",value:h.email,name:"email",onBlur:m,onChange:u,label:"Email Address / Username",inputProps:{}}),o.email&&s.email&&e.jsx(d,{error:!0,id:"standard-weight-helper-text-email-login",children:s.email})]}),e.jsxs(g,{fullWidth:!0,error:!!(o.password&&s.password),sx:{...r.typography.customInput},children:[e.jsx(y,{htmlFor:"outlined-adornment-password-login",children:"Password"}),e.jsx(f,{id:"outlined-adornment-password-login",type:l?"text":"password",value:h.password,name:"password",onBlur:m,onChange:u,endAdornment:e.jsx(O,{position:"end",children:e.jsx(T,{"aria-label":"toggle password visibility",onClick:P,onMouseDown:D,edge:"end",size:"large",children:l?e.jsx(U,{}):e.jsx(V,{})})}),label:"Password",inputProps:{}}),o.password&&s.password&&e.jsx(d,{error:!0,id:"standard-weight-helper-text-password-login",children:s.password})]}),e.jsxs(v,{direction:"row",alignItems:"center",justifyContent:"space-between",spacing:1,children:[e.jsx(L,{control:e.jsx(Q,{checked:S,onChange:z=>A(z.target.checked),name:"checked",color:"primary"}),label:"Remember me"}),e.jsx(i,{variant:"subtitle1",color:"secondary",sx:{textDecoration:"none",cursor:"pointer"},children:"Forgot Password?"})]}),s.submit&&e.jsx(n,{sx:{mt:3},children:e.jsx(d,{error:!0,children:s.submit})}),e.jsx(n,{sx:{mt:2},children:e.jsx(j,{children:e.jsx(c,{disableElevation:!0,disabled:W,fullWidth:!0,size:"large",type:"submit",variant:"contained",color:"secondary",children:"Sign in"})})})]})})]})},te=()=>{const a=C(r=>r.breakpoints.down("md"));return e.jsx(_,{children:e.jsxs(t,{container:!0,direction:"column",justifyContent:"flex-end",sx:{minHeight:"100vh"},children:[e.jsx(t,{item:!0,xs:12,children:e.jsx(t,{container:!0,justifyContent:"center",alignItems:"center",sx:{minHeight:"calc(100vh - 68px)"},children:e.jsx(t,{item:!0,sx:{m:{xs:1,sm:3},mb:0},children:e.jsx(N,{children:e.jsxs(t,{container:!0,spacing:2,alignItems:"center",justifyContent:"center",children:[e.jsx(t,{item:!0,sx:{mb:3},children:e.jsx(w,{to:"#","aria-label":"logo",children:e.jsx(M,{})})}),e.jsx(t,{item:!0,xs:12,children:e.jsx(t,{container:!0,direction:{xs:"column-reverse",md:"row"},alignItems:"center",justifyContent:"center",children:e.jsx(t,{item:!0,children:e.jsxs(v,{alignItems:"center",justifyContent:"center",spacing:1,children:[e.jsx(i,{color:"secondary.main",gutterBottom:!0,variant:a?"h3":"h2",children:"Hi, Welcome Back"}),e.jsx(i,{variant:"caption",fontSize:"16px",textAlign:{xs:"center",md:"inherit"},children:"Enter your credentials to continue"})]})})})}),e.jsx(t,{item:!0,xs:12,children:e.jsx(J,{})}),e.jsx(t,{item:!0,xs:12,children:e.jsx(x,{})}),e.jsx(t,{item:!0,xs:12,children:e.jsx(t,{item:!0,container:!0,direction:"column",alignItems:"center",xs:12,children:e.jsx(i,{component:w,to:"/pages/register/register3",variant:"subtitle1",sx:{textDecoration:"none"},children:"Don't have an account?"})})})]})})})})}),e.jsx(t,{item:!0,xs:12,sx:{m:3,mt:1},children:e.jsx(X,{})})]})})};export{te as default};
