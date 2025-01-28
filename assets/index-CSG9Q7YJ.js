import{j as n,M as d,P as h,C as o,a as r,S as t}from"./index-D9yW8D9M.js";import{useMDXComponents as l}from"./index-DQ0SHXP1.js";import{G as x,W as c,a as j,O as a}from"./index.stories-DtZtMX23.js";import"./iframe-Dxm83I_b.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-Cu4lwwaE.js";import"./index-DkDiOc0H.js";import"./index-ogSvIofg.js";import"./vue.esm-bundler-Dvys2Rqt.js";function s(e){const i={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...l(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(d,{of:x}),`
`,n.jsx(i.h1,{id:"global-布局组件",children:"Global 布局组件"}),`
`,n.jsx(i.p,{children:"Global 布局组件是一个基于 CSS Grid 的完整页面布局系统，提供了灵活的页面结构组织方式。"}),`
`,n.jsx(i.h2,{id:"特性",children:"特性"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"基于 CSS Grid 的响应式布局"}),`
`,n.jsx(i.li,{children:"支持头部、侧边栏、内容区、底部的灵活组合"}),`
`,n.jsx(i.li,{children:"提供默认样式，可以通过插槽自定义内容"}),`
`]}),`
`,n.jsx(i.h2,{id:"基础用法",children:"基础用法"}),`
`,n.jsx(h,{}),`
`,n.jsx(o,{}),`
`,n.jsx(i.h2,{id:"布局变体",children:"布局变体"}),`
`,n.jsx(i.h3,{id:"无顶部导航布局",children:"无顶部导航布局"}),`
`,n.jsx(i.p,{children:"适用于不需要顶部导航栏的页面布局。"}),`
`,n.jsx(r,{of:c}),`
`,n.jsx(i.h3,{id:"无底部区域布局",children:"无底部区域布局"}),`
`,n.jsx(i.p,{children:"适用于不需要底部信息的页面布局。"}),`
`,n.jsx(r,{of:j}),`
`,n.jsx(i.h3,{id:"仅内容区域",children:"仅内容区域"}),`
`,n.jsx(i.p,{children:"最简单的布局方式，只显示内容区域。"}),`
`,n.jsx(r,{of:a}),`
`,n.jsx(i.h2,{id:"组件尺寸控制",children:"组件尺寸控制"}),`
`,n.jsx(i.p,{children:"每个布局区域都支持尺寸控制："}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:["Header: 通过 ",n.jsx(i.code,{children:"height"})," 属性控制高度"]}),`
`,n.jsxs(i.li,{children:["Sidebar: 通过 ",n.jsx(i.code,{children:"width"})," 属性控制宽度"]}),`
`,n.jsxs(i.li,{children:["Content: 通过 ",n.jsx(i.code,{children:"minHeight"})," 属性控制最小高度"]}),`
`,n.jsxs(i.li,{children:["Footer: 通过 ",n.jsx(i.code,{children:"height"})," 属性控制高度"]}),`
`]}),`
`,n.jsx(i.h3,{id:"默认尺寸",children:"默认尺寸"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"头部高度：60px"}),`
`,n.jsx(i.li,{children:"侧边栏宽度：240px"}),`
`,n.jsx(i.li,{children:"内容区最小高度：500px"}),`
`,n.jsx(i.li,{children:"底部高度：60px"}),`
`]}),`
`,n.jsx(i.h2,{id:"代码示例",children:"代码示例"}),`
`,n.jsx(t,{language:"tsx",dark:!0,code:`
<Layout>
  <Header height={60}>顶部导航区域</Header>
  <Sidebar width={240}>侧边栏内容</Sidebar>
  <Content minHeight={500}>主要内容区域</Content>
  <Footer height={60}>底部版权信息</Footer>
</Layout>
  `}),`
`,n.jsx(i.h2,{id:"注意事项",children:"注意事项"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"布局组件使用 CSS Grid 实现，确保浏览器兼容性"}),`
`,n.jsx(i.li,{children:"所有区域都支持自定义内容"}),`
`,n.jsx(i.li,{children:"布局区域可以根据需要选择性使用"}),`
`]})]})}function H(e={}){const{wrapper:i}={...l(),...e.components};return i?n.jsx(i,{...e,children:n.jsx(s,{...e})}):s(e)}export{H as default};
