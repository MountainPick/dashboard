(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[756],{2963:function(e,a,n){Promise.resolve().then(n.bind(n,5166))},5166:function(e,a,n){"use strict";n.r(a);var t=n(7437),r=n(2265),s=n(9872),i=n(6507),o=n(8024),l=n(2277),c=n(8874),d=n(3226),x=n(7827),h=n(4797),m=n(3878),u=n(5843),Z=n(8595),j=n(1356),p=n(4033);(0,u.ZP)(s.Z)(e=>{let{theme:a}=e;return{...a.typography.body1,textAlign:"center",color:a.palette.text.secondary,height:60,lineHeight:"60px"}}),(0,Z.Z)({palette:{mode:"dark"}}),(0,Z.Z)({palette:{mode:"light"}});let g=[{id:"1",name:"Front Door Camera",location:"Entrance",model:"SecureCam Pro",status:"Online",statusColor:"success.main",lastMaintenance:"2023-05-15"},{id:"2",name:"Backyard Camera",location:"Rear Garden",model:"OutdoorVision X",status:"Offline",statusColor:"error.main",lastMaintenance:"2023-04-20"},{id:"3",name:"Garage Camera",location:"Garage",model:"SecureCam Lite",status:"Online",statusColor:"success.main",lastMaintenance:"2023-05-10"},{id:"4",name:"Living Room Camera",location:"Living Room",model:"IndoorVision 360",status:"Maintenance",statusColor:"warning.main",lastMaintenance:"2023-05-18"}];a.default=()=>{let[e,a]=(0,r.useState)(0),[n,s]=(0,r.useState)(!1),[u,Z]=(0,r.useState)(""),v=(0,p.useRouter)(),C=e=>{"1"===e?(s(!0),b()):v.push("/camera-stream?cameraId=".concat(e))},b=()=>{let e=new WebSocket("ws://3.27.194.81:8000/ws");return e.onopen=()=>{console.log("WebSocket connection established")},e.onmessage=e=>{let a=JSON.parse(e.data);"frame"===a.type&&console.log(a)},e.onerror=e=>{console.error("WebSocket error:",e)},()=>{e.close()}};return(0,t.jsxs)(i.Z,{children:[(0,t.jsxs)(o.Z,{value:e,onChange:(e,n)=>{a(n)},children:[(0,t.jsx)(l.Z,{label:"List View"}),(0,t.jsx)(l.Z,{label:"Grid View"})]}),0===e&&(0,t.jsx)(c.ZP,{container:!0,spacing:0,children:(0,t.jsx)(c.ZP,{item:!0,xs:12,lg:12,children:(0,t.jsx)(j.Z,{})})}),1===e&&(0,t.jsx)(c.ZP,{container:!0,spacing:2,children:g.map(e=>(0,t.jsx)(c.ZP,{item:!0,xs:12,sm:6,children:(0,t.jsx)(m.Z,{children:(0,t.jsxs)(i.Z,{onClick:()=>C(e.id),sx:{cursor:"pointer","&:hover":{backgroundColor:"action.hover"}},children:[(0,t.jsx)("img",{src:"/images/camera/camera-1.jpg",alt:e.name,style:{width:"100%",height:"200px",objectFit:"cover"}}),(0,t.jsxs)(i.Z,{p:2,children:[(0,t.jsx)(d.Z,{variant:"h6",fontWeight:600,children:e.name}),(0,t.jsx)(d.Z,{color:"textSecondary",fontSize:"13px",children:e.model}),(0,t.jsxs)(d.Z,{color:"textSecondary",variant:"body2",children:["Location: ",e.location]}),(0,t.jsxs)(i.Z,{display:"flex",justifyContent:"space-between",alignItems:"center",mt:1,children:[(0,t.jsx)(x.Z,{sx:{pl:"4px",pr:"4px",backgroundColor:e.statusColor,color:"#fff"},size:"small",label:e.status}),(0,t.jsxs)(d.Z,{variant:"body2",children:["Last Maintenance: ",e.lastMaintenance]})]})]})]})})},e.id))}),(0,t.jsx)(h.Z,{open:n,onClose:()=>{s(!1)},"aria-labelledby":"camera-stream-modal","aria-describedby":"live-camera-stream",children:(0,t.jsx)(i.Z,{sx:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:"80%",bgcolor:"background.paper",border:"2px solid #000",boxShadow:24,p:4},children:(0,t.jsx)(d.Z,{id:"camera-stream-modal",variant:"h6",component:"h2",children:"Live Camera Stream"})})})]})}},1356:function(e,a,n){"use strict";var t=n(7437);n(2265);var r=n(4033),s=n(5795),i=n(3701),o=n(6988),l=n(8489),c=n(666),d=n(3226),x=n(9279),h=n(6507),m=n(7827),u=n(3878);let Z=[{id:"1",name:"Front Door Camera",location:"Entrance",model:"SecureCam Pro",status:"Online",statusColor:"success.main",lastMaintenance:"2023-05-15"},{id:"2",name:"Backyard Camera",location:"Rear Garden",model:"OutdoorVision X",status:"Offline",statusColor:"error.main",lastMaintenance:"2023-04-20"},{id:"3",name:"Garage Camera",location:"Garage",model:"SecureCam Lite",status:"Online",statusColor:"success.main",lastMaintenance:"2023-05-10"},{id:"4",name:"Living Room Camera",location:"Living Room",model:"IndoorVision 360",status:"Maintenance",statusColor:"warning.main",lastMaintenance:"2023-05-18"}];a.Z=()=>{let e=(0,r.useRouter)(),a=a=>{e.push("/camera-stream?cameraId=".concat(a))};return(0,t.jsx)(u.Z,{title:"Camera List",children:(0,t.jsx)(s.Z,{sx:{width:{xs:"274px",sm:"100%"}},children:(0,t.jsxs)(i.Z,{"aria-label":"camera list table",sx:{whiteSpace:"nowrap",mt:2},children:[(0,t.jsx)(o.Z,{children:(0,t.jsxs)(l.Z,{children:[(0,t.jsx)(c.Z,{children:(0,t.jsx)(d.Z,{color:"textSecondary",variant:"h6",children:"Id"})}),(0,t.jsx)(c.Z,{children:(0,t.jsx)(d.Z,{color:"textSecondary",variant:"h6",children:"Name"})}),(0,t.jsx)(c.Z,{children:(0,t.jsx)(d.Z,{color:"textSecondary",variant:"h6",children:"Location"})}),(0,t.jsx)(c.Z,{children:(0,t.jsx)(d.Z,{color:"textSecondary",variant:"h6",children:"Status"})}),(0,t.jsx)(c.Z,{align:"right",children:(0,t.jsx)(d.Z,{color:"textSecondary",variant:"h6",children:"Last Maintenance"})})]})}),(0,t.jsx)(x.Z,{children:Z.map(e=>(0,t.jsxs)(l.Z,{onClick:()=>a(e.id),sx:{cursor:"pointer","&:hover":{backgroundColor:"action.hover"}},children:[(0,t.jsx)(c.Z,{children:(0,t.jsx)(d.Z,{fontSize:"15px",fontWeight:500,children:e.id})}),(0,t.jsx)(c.Z,{children:(0,t.jsx)(h.Z,{display:"flex",alignItems:"center",children:(0,t.jsxs)(h.Z,{children:[(0,t.jsx)(d.Z,{variant:"h6",fontWeight:600,children:e.name}),(0,t.jsx)(d.Z,{color:"textSecondary",fontSize:"13px",children:e.model})]})})}),(0,t.jsx)(c.Z,{children:(0,t.jsx)(d.Z,{color:"textSecondary",variant:"h6",children:e.location})}),(0,t.jsx)(c.Z,{children:(0,t.jsx)(m.Z,{sx:{pl:"4px",pr:"4px",backgroundColor:e.statusColor,color:"#fff"},size:"small",label:e.status})}),(0,t.jsx)(c.Z,{align:"right",children:(0,t.jsx)(d.Z,{variant:"h6",children:e.lastMaintenance})})]},e.id))})]})})})}},3878:function(e,a,n){"use strict";var t=n(7437);n(2265);var r=n(5133),s=n(8469),i=n(3226),o=n(3457),l=n(6507);a.Z=e=>{let{title:a,subtitle:n,children:c,action:d,footer:x,cardheading:h,headtitle:m,headsubtitle:u,middlecontent:Z}=e;return(0,t.jsxs)(r.Z,{sx:{padding:0},elevation:9,variant:void 0,children:[h?(0,t.jsxs)(s.Z,{children:[(0,t.jsx)(i.Z,{variant:"h3",children:m}),(0,t.jsx)(i.Z,{variant:"subtitle2",color:"textSecondary",children:u})]}):(0,t.jsxs)(s.Z,{sx:{p:"30px"},children:[a?(0,t.jsxs)(o.Z,{direction:"row",spacing:2,justifyContent:"space-between",alignItems:"center",mb:3,children:[(0,t.jsxs)(l.Z,{children:[a?(0,t.jsx)(i.Z,{variant:"h3",children:a}):"",n?(0,t.jsx)(i.Z,{variant:"subtitle2",color:"textSecondary",children:n}):""]}),d]}):null,c]}),Z,x]})}}},function(e){e.O(0,[370,468,498,116,659,238,859,428,971,596,744],function(){return e(e.s=2963)}),_N_E=e.O()}]);