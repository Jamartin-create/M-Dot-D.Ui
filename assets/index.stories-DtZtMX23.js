import{d as l,c as e,a as u}from"./vue.esm-bundler-Dvys2Rqt.js";const _={display:"flex",flexDirection:"column",minHeight:"100vh",gap:"16px",background:"#f5f7fa",padding:"16px"},v={display:"flex",flex:1,gap:"16px"},g={padding:"24px",background:"#fff",borderRadius:"8px",boxShadow:"0 1px 3px 0 rgba(0, 0, 0, 0.1)",transition:"all 0.3s ease"},M={...g,position:"sticky",top:"16px",zIndex:10},N={...g,width:"240px",flexShrink:0,overflowY:"auto",maxHeight:"calc(100vh - 32px)"},O={...g,flex:1,minHeight:"500px"},V={...g,textAlign:"center",color:"#718096"},p=l({name:"Header",props:{height:{type:Number,default:60}},setup(t){return()=>e("header",{style:{...M,height:`${t.height}px`}},[e("slot",null,[u("顶部导航")])])}}),a=l({name:"Sidebar",props:{width:{type:Number,default:240}},setup(t){return()=>e("aside",{style:{...N,width:`${t.width}px`}},[e("slot",null,[u("侧边栏")])])}}),o=l({name:"Content",props:{minHeight:{type:Number,default:500}},setup(t){return()=>e("main",{style:{...O,minHeight:`${t.minHeight}px`}},[e("slot",null,[u("主要内容区")])])}}),h=l({name:"Footer",props:{height:{type:Number,default:60}},setup(t){return()=>e("footer",{style:{...V,height:`${t.height}px`}},[e("slot",null,[u("底部区域")])])}}),r=l({name:"Layout",setup(t,{slots:n}){return()=>{var F,m,f,b;return e("div",{style:_},[(F=n.header)==null?void 0:F.call(n),e("div",{style:v},[(m=n.sidebar)==null?void 0:m.call(n),(f=n.content)==null?void 0:f.call(n)]),(b=n.footer)==null?void 0:b.call(n)])}}}),k={title:"Layout/B/Global",component:r,tags:["autodocs"],argTypes:{headerHeight:{control:"number",description:"头部高度",defaultValue:60},sidebarWidth:{control:"number",description:"侧边栏宽度",defaultValue:240},contentMinHeight:{control:"number",description:"内容区最小高度",defaultValue:500},footerHeight:{control:"number",description:"底部高度",defaultValue:60}}},i={render:t=>({components:{Layout:r,Header:p,Sidebar:a,Content:o,Footer:h},setup(){return()=>e(r,null,{header:()=>e(p,{height:t.headerHeight},{default:()=>[u("顶部导航区域")]}),sidebar:()=>e(a,{width:t.sidebarWidth},{default:()=>[u("侧边栏内容")]}),content:()=>e(o,{minHeight:t.contentMinHeight},{default:()=>[u("主要内容区域")]}),footer:()=>e(h,{height:t.footerHeight},{default:()=>[u("底部版权信息")]})})}}),args:{headerHeight:60,sidebarWidth:240,contentMinHeight:500,footerHeight:60}},d={render:t=>({components:{Layout:r,Sidebar:a,Content:o,Footer:h},setup(){return()=>e(r,null,{sidebar:()=>e(a,null,{default:()=>[u("侧边栏内容")]}),content:()=>e(o,null,{default:()=>[u("无顶部导航的布局")]}),footer:()=>e(h,null,{default:()=>[u("底部版权信息")]})})}})},s={render:t=>({components:{Layout:r,Header:p,Sidebar:a,Content:o},setup(){return()=>e(r,null,{header:()=>e(p,null,{default:()=>[u("顶部导航区域")]}),sidebar:()=>e(a,null,{default:()=>[u("侧边栏内容")]}),content:()=>e(o,null,{default:()=>[u("无底部区域的布局")]})})}})},c={render:t=>({components:{Layout:r,Content:o},setup(){return()=>e(r,null,{content:()=>e(o,null,{default:()=>[u("仅展示内容区域的布局")]})})}})};var B,y,E;i.parameters={...i.parameters,docs:{...(B=i.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Layout,
      Header,
      Sidebar,
      Content,
      Footer
    },
    setup() {
      return () => <Layout>
                    {{
          header: () => <Header height={args.headerHeight}>顶部导航区域</Header>,
          sidebar: () => <Sidebar width={args.sidebarWidth}>侧边栏内容</Sidebar>,
          content: () => <Content minHeight={args.contentMinHeight}>主要内容区域</Content>,
          footer: () => <Footer height={args.footerHeight}>底部版权信息</Footer>
        }}
                </Layout>;
    }
  }),
  args: {
    headerHeight: 60,
    sidebarWidth: 240,
    contentMinHeight: 500,
    footerHeight: 60
  }
}`,...(E=(y=i.parameters)==null?void 0:y.docs)==null?void 0:E.source}}};var C,H,A;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Layout,
      Sidebar,
      Content,
      Footer
    },
    setup() {
      return () => <Layout>
                    {{
          sidebar: () => <Sidebar>侧边栏内容</Sidebar>,
          content: () => <Content>无顶部导航的布局</Content>,
          footer: () => <Footer>底部版权信息</Footer>
        }}
                </Layout>;
    }
  })
}`,...(A=(H=d.parameters)==null?void 0:H.docs)==null?void 0:A.source}}};var x,S,L;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Layout,
      Header,
      Sidebar,
      Content
    },
    setup() {
      return () => <Layout>
                    {{
          header: () => <Header>顶部导航区域</Header>,
          sidebar: () => <Sidebar>侧边栏内容</Sidebar>,
          content: () => <Content>无底部区域的布局</Content>
        }}
                </Layout>;
    }
  })
}`,...(L=(S=s.parameters)==null?void 0:S.docs)==null?void 0:L.source}}};var D,W,w;c.parameters={...c.parameters,docs:{...(D=c.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Layout,
      Content
    },
    setup() {
      return () => <Layout>
                    {{
          content: () => <Content>仅展示内容区域的布局</Content>
        }}
                </Layout>;
    }
  })
}`,...(w=(W=c.parameters)==null?void 0:W.docs)==null?void 0:w.source}}};const $=["Basic","WithoutHeader","WithoutFooter","OnlyContent"],T=Object.freeze(Object.defineProperty({__proto__:null,Basic:i,OnlyContent:c,WithoutFooter:s,WithoutHeader:d,__namedExportsOrder:$,default:k},Symbol.toStringTag,{value:"Module"}));export{T as G,c as O,d as W,s as a};
