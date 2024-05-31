"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6154],{8387:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>u,toc:()=>d});var r=n(4848),a=n(8453),s=n(1470),o=n(9365);const i={sidebar_position:5},l="Checkout embedded in a web page",u={id:"checkouts/embed",title:"Checkout embedded in a web page",description:"To obtain the link of the incorporation it is necessary to make a POST request /checkouts with the intended data.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/checkouts/embed.mdx",sourceDirName:"checkouts",slug:"/checkouts/embed",permalink:"/en/checkouts/embed",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"docs",previous:{title:"Checkout with possibility to store payment method",permalink:"/en/checkouts/allowRegistration"},next:{title:"Checkout Credit/Debit Card",permalink:"/en/checkouts/cc"}},c={},d=[];function h(e){const t={a:"a",blockquote:"blockquote",code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"checkout-embedded-in-a-web-page",children:"Checkout embedded in a web page"}),"\n",(0,r.jsx)(t.p,{children:"To obtain the link of the incorporation it is necessary to make a POST request /checkouts with the intended data."}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.code,{children:"redirects"})," parameter of the ",(0,r.jsx)(t.code,{children:"action"})," type is mandatory and should contain the url where the customer should be redirected after payment processing.\nThe checkout id parameter is automatically linked to the url at the time of redirection."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-json",children:'    {\n\t\t...\n\n\t\t"redirects": [\n\t\t\t{\n\t\t\t\t"type": "action", // <== Redireccionamento obrigat\xf3rio\n\t\t\t\t"url": "https://www.url-action.dominio"\n\t\t\t}\n\t\t]\n\t}\n'})}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"POST"})," /checkouts"]}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"Creation of the checkout with the following data:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Language:"})," Portuguese"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Page Layout:"})," Embedded"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Amount:"})," 5\u20ac"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Payment method:"})," Credit/Debit Card (CC)"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Product code:"})," REFPRODUTO_1"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Product description:"})," Computador"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Customer:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Customer number:"})," 1,"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"First name:"})," Jos\xe9"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Last name:"})," Silva,"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Phone number:"})," 351#961234567,"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Email:"})," ",(0,r.jsx)(t.a,{href:"mailto:jose.silva@email.com",children:"jose.silva@email.com"})]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Invoicing address:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Country:"})," Portugal,"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"City:"})," Lisbon,"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Address:"})," Rua Domingos Monteiro n\xba 7 A,"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Postal Code:"})," 1050-074"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Redirections:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"After payment:"})," ",(0,r.jsx)(t.a,{href:"https://www.url-action.dominio",children:"https://www.url-action.dominio"})]}),"\n"]}),"\n"]}),"\n"]}),"\n","\n",(0,r.jsxs)(s.A,{children:[(0,r.jsx)(o.A,{value:"request",label:"Request",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-json",children:'{\n\t"payment": {\n\t\t"amount": 500,\n\t\t"code": "REFPRODUTO_1",\n\t\t"summary": "Computador",\n\t\t"customer": {\n\t\t\t"customerId": "1",\n\t\t\t"firstName": "Jos\xe9",\n\t\t\t"lastName": "Silva",\n\t\t\t"phoneNumber": "351#961234567",\n\t\t\t"email": "jose.silva@email.com"\n\t\t},\n\t\t"billingAddress": {\n\t\t\t"country": "PT",\n\t\t\t"city": "Lisboa",\n\t\t\t"street1": "Rua Domingos Monteiro n\xba 7 A",\n\t\t\t"postCode": "1050-074"\n\t\t},\n\t\t"paymentMethod": {\n\t\t\t"code": "CC" // <== M\xe9todo de pagamento\n\t\t}\n\t},\n\t"page": {\n\t\t"language": "PT",\n\t\t"layout": "embed" // <== Incorporado\n\t},\n\t"redirects": [\n\t\t{\n\t\t\t"type": "action", // <== Redireccionamento obrigat\xf3rio\n\t\t\t"url": "https://www.url-action.dominio"\n\t\t}\n\t]\n}\n'})})}),(0,r.jsx)(o.A,{value:"response",label:"Response",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-json",children:'{\n\t"apiVersion": "1.0",\n\t"date": "2022-01-03T14:16:17+00:00",\n\t"success": true,\n\t"data": {\n\t\t"id": "0uJQvNoxoloZCn4gyuGKIWR8dtU9OnAm0emxYWcb",\n\t\t"createdAt": "2022-01-03 14:16:17",\n\t\t"checkoutUrl": "https://paypay.pt/paypay/checkout/v2/embed/0uJQvNoxoloZCn4gyuGKIWR8dtU9OnAm0emxYWcb?page_layout=embed",\n\t\t"paymentId": "42690",\n\t\t"stateDetails": {\n\t\t\t"state": "PaymentReady",\n\t\t\t"timestamp": "2022-01-03T14:16:17+00:00"\n\t\t}\n\t}\n}\n'})})})]}),"\n",(0,r.jsxs)(t.p,{children:["To create the payment form simply add the following HTML/JavaScript lines to your page.\nThe ",(0,r.jsx)(t.code,{children:"{id}"})," should be replaced with the id returned in the response to the request, in the previous example it would be 0uJQvNoxoloZCn4gyuGKIWR8dtU9OnAm0emxYWcb."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-html",children:'<form class="paymentWidgets"></form>\n\n<script src="https://paypay.pt/paypay/checkout/v2/embed/{id}?page_layout=embed"><\/script>\n'})})]})}function m(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},9365:(e,t,n)=>{n.d(t,{A:()=>o});n(6540);var r=n(4164);const a={tabItem:"tabItem_Ymn6"};var s=n(4848);function o(e){var t=e.children,n=e.hidden,o=e.className;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.A)(a.tabItem,o),hidden:n,children:t})}},1470:(e,t,n)=>{n.d(t,{A:()=>w});var r=n(6540),a=n(4164),s=n(3104),o=n(6347),i=n(205),l=n(7485),u=n(1682),c=n(9466);function d(e){var t,n;return null!=(t=null==(n=r.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,r.isValidElement)(e)&&((t=e.props)&&"object"==typeof t&&"value"in t))return e;var t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:n.filter(Boolean))?t:[]}function h(e){var t=e.values,n=e.children;return(0,r.useMemo)((function(){var e=null!=t?t:function(e){return d(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}(n);return function(e){var t=(0,u.X)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function m(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function p(e){var t=e.queryString,n=void 0!==t&&t,a=e.groupId,s=(0,o.W6)(),i=function(e){var t=e.queryString,n=void 0!==t&&t,r=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=r?r:null}({queryString:n,groupId:a});return[(0,l.aZ)(i),(0,r.useCallback)((function(e){if(i){var t=new URLSearchParams(s.location.search);t.set(i,e),s.replace(Object.assign({},s.location,{search:t.toString()}))}}),[i,s])]}function b(e){var t,n,a,s,o=e.defaultValue,l=e.queryString,u=void 0!==l&&l,d=e.groupId,b=h(e),f=(0,r.useState)((function(){return function(e){var t,n=e.defaultValue,r=e.tabValues;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:r}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+r.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var a=null!=(t=r.find((function(e){return e.default})))?t:r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:o,tabValues:b})})),g=f[0],x=f[1],v=p({queryString:u,groupId:d}),j=v[0],y=v[1],w=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:d}.groupId),n=(0,c.Dv)(t),a=n[0],s=n[1],[a,(0,r.useCallback)((function(e){t&&s.set(e)}),[t,s])]),k=w[0],C=w[1],T=function(){var e=null!=j?j:k;return m({value:e,tabValues:b})?e:null}();return(0,i.A)((function(){T&&x(T)}),[T]),{selectedValue:g,selectValue:(0,r.useCallback)((function(e){if(!m({value:e,tabValues:b}))throw new Error("Can't select invalid tab value="+e);x(e),y(e),C(e)}),[y,C,b]),tabValues:b}}var f=n(2303);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=n(4848);function v(e){var t=e.className,n=e.block,r=e.selectedValue,o=e.selectValue,i=e.tabValues,l=[],u=(0,s.a_)().blockElementScrollPositionUntilNextRender,c=function(e){var t=e.currentTarget,n=l.indexOf(t),a=i[n].value;a!==r&&(u(t),o(a))},d=function(e){var t,n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":var r,a=l.indexOf(e.currentTarget)+1;n=null!=(r=l[a])?r:l[0];break;case"ArrowLeft":var s,o=l.indexOf(e.currentTarget)-1;n=null!=(s=l[o])?s:l[l.length-1]}null==(t=n)||t.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":n},t),children:i.map((function(e){var t=e.value,n=e.label,s=e.attributes;return(0,x.jsx)("li",Object.assign({role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:function(e){return l.push(e)},onKeyDown:d,onClick:c},s,{className:(0,a.A)("tabs__item",g.tabItem,null==s?void 0:s.className,{"tabs__item--active":r===t}),children:null!=n?n:t}),t)}))})}function j(e){var t=e.lazy,n=e.children,a=e.selectedValue,s=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){var o=s.find((function(e){return e.props.value===a}));return o?(0,r.cloneElement)(o,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:s.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a})}))})}function y(e){var t=b(e);return(0,x.jsxs)("div",{className:(0,a.A)("tabs-container",g.tabList),children:[(0,x.jsx)(v,Object.assign({},t,e)),(0,x.jsx)(j,Object.assign({},t,e))]})}function w(e){var t=(0,f.A)();return(0,x.jsx)(y,Object.assign({},e,{children:d(e.children)}),String(t))}},8453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>i});var r=n(6540);const a={},s=r.createContext(a);function o(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);