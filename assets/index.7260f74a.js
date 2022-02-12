var R=Object.defineProperty;var F=(e,r,a)=>r in e?R(e,r,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[r]=a;var g=(e,r,a)=>(F(e,typeof r!="symbol"?r+"":r,a),a);import{D as N,G as L,a as D,c as O,j as b,R as h,P as C,r as A,b as G}from"./vendor.52575cfe.js";const E=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function a(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerpolicy&&(o.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?o.credentials="include":t.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(t){if(t.ep)return;t.ep=!0;const o=a(t);fetch(t.href,o)}};E();const S=new D,k=new N(S),I=new L({cellHeight:20,panelHeight:25,footerHeight:35,readonly:!0,selectionMode:"multiple",groups:[]},k),T=new D,U=new N(T),P=new Set,H=new Set,d={coinNames:P,walletNames:H,importDataContainer:T,importDataSource:U,mainDataContainer:S,mainDataSource:k,mainGridInterface:I};let w=!1;function B(){if(!w){w=!0;const e=c.getState(),r=window.localStorage.getItem("theme")||"Y";r===void 0?(window.localStorage.setItem("theme","Y"),e.setDarkTheme(!0),document.getElementsByTagName("HTML")[0].className="dark"):(r!=="Y"?document.getElementsByTagName("HTML")[0].className="":document.getElementsByTagName("HTML")[0].className="dark",e.setDarkTheme(r==="Y"))}}function M(e){e?document.getElementsByTagName("HTML")[0].className="dark":document.getElementsByTagName("HTML")[0].className="",window.localStorage.setItem("theme",e?"Y":"N")}const c=O(e=>({loadingData:!1,activateLoadingData:()=>e(()=>({loadingData:!0})),deactivateLoadingData:()=>e(()=>({loadingData:!1})),darktheme:!0,setDarkTheme:r=>e(()=>({darktheme:r})),toggleDarkMode:()=>{e(r=>{const a=!r.darktheme;return M(a),{darktheme:a}})},dialogContent:"",dialogHeader:"",errormsg:"",coinCount:0,walletCount:0,walletsNames:[],coinsNames:[],coinInput:"",walletInput:"",coinSelected:new Set,walletSelected:new Set,fromDate:"",toDate:""})),l=b.exports.jsx,u=b.exports.jsxs,v=b.exports.Fragment;class W extends h.Component{constructor(r){super(r);g(this,"enabled");g(this,"myRef");this.enabled=r.enabled,this.myRef=h.createRef()}shouldComponentUpdate(r){return this.enabled=!!r.enabled,!0}componentDidMount(){this.componentDidUpdate()}componentDidUpdate(){var r;if(this.enabled)this.myRef.current.append(document.createTextNode(`
                body,
                .simple-html-grid-menu,
                .simple-html-grid {
                    --simple-html-grid-main-bg-color: #374151;
                    --simple-html-grid-sec-bg-color: #4b5563;
                    --simple-html-grid-alt-bg-color: #4b5563;
                    --simple-html-grid-main-bg-border: #1f2937;
                    --simple-html-grid-sec-bg-border: #1f2937;
                    --simple-html-grid-main-bg-selected: #234882;
                    --simple-html-grid-main-font-color: #f9f7f7;
                    --simple-html-grid-sec-font-color: #979494;
                    --simple-html-grid-dropzone-color: #979494;
                    --simple-html-grid-grouping-border: #1f2937;
                    --simple-html-grid-boxshadow: #4b5563;
                    --simple-html-grid-main-hr-border: #4b5563;
                }
            
                .simple-html-grid ul.dialog-row {
                    box-shadow: none;
                  
                }
                .simple-html-grid li.dialog-row {
        
                    border-left: 1px dotted rgb(100, 100, 100);
                } 
                .simple-html-grid .grid-edit-button {
                    border-color: #374151;
                }
                .simple-html-grid .filter-dialog-bottom-row{
                    border-top: 0px;
                }
        
                .simple-html-grid .filter-dialog-bottom-row button{
                    border: 1px solid #515458;
                }
                simple-html-grid-filter-dialog ul input{
                    color: var(--simple-html-grid-main-font-color);
                    background-color: var(--simple-html-grid-alt-bg-color);
                }

                simple-html-grid-filter-dialog ul textarea{
                    color: var(--simple-html-grid-main-font-color);
                    background-color: var(--simple-html-grid-alt-bg-color);
                }
                
        
        `));else{let a=this.myRef.current.childNodes;for(;a.length;)(r=a[0])==null||r.parentNode.removeChild(a[0]),a=this.myRef.current.childNodes}}render(){return l("style",{ref:this.myRef})}}function _(){const e=c();return e.loadingData?l("div",{className:"fixed grid w-full h-full items-center justify-center fadeIn z-[5000] bg-gray-50/50",children:u("div",{className:"block w-96 h-80 bg-gray-100 dark:bg-gray-800",children:[l("span",{className:"m-auto block text-center text-2xl bg-gray-300 p-2 dark:bg-gray-700 dark:text-white",children:"Please wait"}),l("div",{className:"block m-2 mt-10",children:l("span",{className:"m-auto block text-center loader dark:text-white"})}),l("span",{className:"m-auto block text-center underline font-semibold dark:text-white",children:e.dialogHeader}),l("span",{className:"m-auto block text-center mt-4 whitespace-pre-line dark:text-white",children:e.dialogContent||""})]})}):null}function V(){return l("footer",{className:"block text-center p-1 m-1  dark:text-gray-300 ",children:l("div",{className:"flex"})})}function Y(){return c().darktheme?l(v,{children:"\u{1F31E}"}):l(v,{children:"\u{1F31C}"})}function y(e){return e?"opacity-50 cursor-not-allowed":""}function j(){const e=c();return l("button",{className:y(e.loadingData)+"  p-2 m-1  hover:bg-gray-300 dark:hover:bg-gray-600 focus:outline-none dark:text-blue-400 font-semibold",disabled:e.loadingData,onClick:()=>d.mainGridInterface.showFilterDialog(),children:"\u{1F50D}"})}async function z(){var r;if(typeof showOpenFilePicker!="function"){c.setState({errormsg:"Your browser does not support filesystem Access Api, use newest Chrome/Edge "});return}if(((r=location.hash.split("?")[0])==null?void 0:r.split("/")[3])||"Default"){const a={types:[{description:"coinpanda csv",accept:{"csv/csv":[".csv"]}}],excludeAcceptAllOption:!0,multiple:!1},n=await showOpenFilePicker(a);if((n==null?void 0:n.length)>0){let t=function(i){if(i)return i};const s=await(await n[0].getFile()).text(),p=C.parse(s,{header:!0}),m=(p==null?void 0:p.data)||[];d.coinNames.clear(),d.coinNames.clear(),m.forEach(i=>{i.Date=new Date(i.Date),i["Sent Amount"]=t(i["Sent Amount"]),i["Sent Currency"]&&d.coinNames.add(i["Sent Currency"]),i["Sent Wallet"]&&d.walletNames.add(i["Sent Wallet"]),i["Received Amount"]&&(i["Received Amount"]=t(i["Received Amount"])),i["Received Currency"]&&d.coinNames.add(i["Received Currency"]),i["Received Wallet"]&&d.walletNames.add(i["Received Wallet"]),i["Fee Amount"]=t(i["Fee Amount"]),i["Fee Currency"]&&d.coinNames.add(i["Fee Currency"]),i["Cost Basis"]=t(i["Cost Basis"]),i.PnL=t(i.PnL),i["Fee Cost Basis"]=t(i["Fee Cost Basis"]),i["Fee PnL"]=t(i["Fee PnL"])});const x={cellHeight:20,panelHeight:25,footerHeight:35,selectionMode:"multiple",groups:[],filterSet:[],sortingSet:[],groupingExpanded:[],groupingSet:[]};x.groups=[{width:100,rows:[{header:"Transaction ID",attribute:"Transaction ID",type:"text",filterable:{placeholder:"filter"},sortable:{},allowGrouping:!0,readonly:!0},{header:"Date",attribute:"Date",type:"date",filterable:{placeholder:"filter"},sortable:{},allowGrouping:!0,readonly:!0}]},{width:100,rows:[{header:"Type",attribute:"Type",type:"text",filterable:{placeholder:"filter"},sortable:{},allowGrouping:!0,readonly:!0},{header:"Tag",attribute:"Tag",type:"text",filterable:{placeholder:"filter"},sortable:{},allowGrouping:!0,readonly:!0}]},{width:100,rows:[{header:"Sent Amount",attribute:"Sent Amount",type:"number",filterable:{placeholder:"filter"},sortable:{},allowGrouping:!0,readonly:!0},{header:"Received Amount",attribute:"Received Amount",type:"number",filterable:{placeholder:"filter"},sortable:{},allowGrouping:!0,readonly:!0}]},{width:100,rows:[{header:"Sent Currency",attribute:"Sent Currency",type:"text",filterable:{placeholder:"filter"},sortable:{},allowGrouping:!0,readonly:!0},{header:"Received Currency",attribute:"Received Currency",type:"text",filterable:{placeholder:"filter"},sortable:{},allowGrouping:!0,readonly:!0}]},{width:100,rows:[{header:"Sent Wallet",attribute:"Sent Wallet",type:"text",filterable:{placeholder:"filter"},sortable:{},allowGrouping:!0,readonly:!0},{header:"Received Wallet",attribute:"Received Wallet",type:"text",filterable:{placeholder:"filter"},sortable:{},allowGrouping:!0,readonly:!0}]},{width:100,rows:[{header:"Sent Address",attribute:"Sent Address",type:"text",filterable:{placeholder:"filter"},sortable:{},allowGrouping:!0,readonly:!0},{header:"Received Address",attribute:"Received Address",type:"text",filterable:{placeholder:"filter"},sortable:{},allowGrouping:!0,readonly:!0}]},{width:100,rows:[{header:"Fee Currency",attribute:"Fee Currency",type:"text",filterable:{placeholder:"filter"},sortable:{},allowGrouping:!0,readonly:!0},{header:"Fee Amount",attribute:"Fee Amount",type:"number",filterable:{placeholder:"filter"},sortable:{},allowGrouping:!0,readonly:!0}]},{width:100,rows:[{header:"Cost Basis",attribute:"Cost Basis",type:"number",filterable:{placeholder:"filter"},sortable:{},allowGrouping:!0,readonly:!0},{header:"PnL",attribute:"PnL",type:"number",filterable:{placeholder:"filter"},sortable:{},allowGrouping:!0,readonly:!0}]},{width:100,rows:[{header:"Fee Cost Basis",attribute:"Fee Cost Basis",type:"number",filterable:{placeholder:"filter"},sortable:{},allowGrouping:!0,readonly:!0},{header:"Fee PnL",attribute:"Fee PnL",type:"number",filterable:{placeholder:"filter"},sortable:{},allowGrouping:!0,readonly:!0}]},,{width:100,rows:[{header:"Description",attribute:"Description",type:"text",filterable:{placeholder:"filter"},sortable:{},allowGrouping:!0,readonly:!0},{header:"My Comment",attribute:"My Comment",type:"text",filterable:{placeholder:"filter"},sortable:{},allowGrouping:!0,readonly:!1}]},{width:100,rows:[{header:"Tx Details",attribute:"Tx Details",type:"text",filterable:{placeholder:"filter"},sortable:{},allowGrouping:!0,readonly:!0},{header:"Transaction Hash",attribute:"Transaction Hash",type:"text",filterable:{placeholder:"filter"},sortable:{},allowGrouping:!0,readonly:!0}]}],d.mainGridInterface.loadSettings(x,!0),d.mainDataSource.setData(m),d.mainGridInterface.autoResizeColumns(),c.setState({coinCount:d.coinNames.size,walletCount:d.walletNames.size,walletsNames:Array.from(d.walletNames).filter(i=>i.toLowerCase().indexOf(c.getState().walletInput.toLowerCase())>-1),coinsNames:Array.from(d.coinNames).filter(i=>i.toLowerCase().indexOf(c.getState().coinInput.toLowerCase())>-1)})}}}function Q(){const e=c();return l("button",{className:y(e.loadingData)+"  p-2 m-1  hover:bg-gray-300 dark:hover:bg-gray-600 focus:outline-none dark:text-blue-400 font-semibold",disabled:e.loadingData,onClick:()=>z(),children:"\u{1F4C2}"})}async function $(){var r;if(typeof showSaveFilePicker!="function"){c.setState({errormsg:"Your browser does not support filesystem Access Api, use newest Chrome/Edge "});return}if(((r=location.hash.split("?")[0])==null?void 0:r.split("/")[3])||"Default"){const a={types:[{description:"coinpanda csv",accept:{"csv/csv":[".csv"]}}],excludeAcceptAllOption:!0,multiple:!1},t=await(await showSaveFilePicker(a)).createWritable(),o=d.mainDataSource.getAllData(),s=C.unparse(o);await t.write(s),await t.close()}}function q(){const e=c();return l("button",{className:y(e.loadingData)+"  p-2 m-1  hover:bg-gray-300 dark:hover:bg-gray-600 focus:outline-none dark:text-blue-400 font-semibold",disabled:e.loadingData,onClick:()=>$(),children:"\u{1F4BE}"})}function K(){const e=c();return u("header",{className:"flex text-center text-xl p-1 m-1 bg-gray-200/75 dark:bg-gray-800 dark:text-white ",children:[u("div",{className:"flex-1 flex flex-row",children:[l(Q,{})," ",l(q,{})," ",l(j,{})]}),l("div",{className:"flex-1 text-3xl",children:"Coinpanda transaction helper"}),l("div",{className:"flex flex-1 flex-row-reverse",children:l("button",{className:"block focus:outline-none mr-5",onClick:()=>{e.toggleDarkMode()},children:l(Y,{})})})]})}class J extends h.Component{constructor(r){super(r);g(this,"myRef");this.myRef=h.createRef()}shouldComponentUpdate(){return!0}componentDidMount(){this.myRef.current.resizeInit=!0,this.myRef.current.interface=this.props.interface,this.myRef.current.connectedCallback()}render(){var r,a;return l("simple-html-grid",{ref:this.myRef,style:{width:(r=this.props.style)==null?void 0:r.width,height:(a=this.props.style)==null?void 0:a.height},class:this.props.className})}}function f(){const e=d.mainDataSource,r=c.getState(),a=Array.from(r.coinSelected),n=Array.from(r.walletSelected),t=r.fromDate,o=r.toDate;n.length===0&&a.length===0&&d.mainGridInterface.clearAllFilters();let s=null;n.length&&a.length&&(s={logicalOperator:"AND",type:"GROUP",filterArguments:[{logicalOperator:"OR",type:"GROUP",filterArguments:[{attribute:"Sent Wallet",operator:"IN",attributeType:"text",valueType:"VALUE",value:n.map(m=>m.toUpperCase())},{attribute:"Received Wallet",operator:"IN",attributeType:"text",valueType:"VALUE",value:n.map(m=>m.toUpperCase())}]},{logicalOperator:"OR",type:"GROUP",filterArguments:[{attribute:"Sent Currency",operator:"IN",attributeType:"text",valueType:"VALUE",value:a.map(m=>m.toUpperCase())},{attribute:"Received Currency",operator:"IN",attributeType:"text",valueType:"VALUE",value:a.map(m=>m.toUpperCase())}]}]}),n.length&&a.length===0&&(s={logicalOperator:"OR",type:"GROUP",filterArguments:[{attribute:"Sent Wallet",operator:"IN",attributeType:"text",valueType:"VALUE",value:n.map(m=>m.toUpperCase())},{attribute:"Received Wallet",operator:"IN",attributeType:"text",valueType:"VALUE",value:n.map(m=>m.toUpperCase())}]}),n.length===0&&a.length&&(s={logicalOperator:"AND",type:"GROUP",filterArguments:[{logicalOperator:"OR",type:"GROUP",filterArguments:[{attribute:"Sent Currency",operator:"IN",attributeType:"text",valueType:"VALUE",value:a.map(m=>m.toUpperCase())},{attribute:"Received Currency",operator:"IN",attributeType:"text",valueType:"VALUE",value:a.map(m=>m.toUpperCase())}]}]});let p=null;switch(!0){case(t!==""&&o!==""):p={logicalOperator:"AND",type:"GROUP",filterArguments:[{attribute:"Date",operator:"GREATER_THAN_OR_EQUAL_TO",attributeType:"date",valueType:"VALUE",value:t},{attribute:"Date",operator:"LESS_THAN_OR_EQUAL_TO",attributeType:"date",valueType:"VALUE",value:o}]};break;case t!=="":p={logicalOperator:"AND",type:"GROUP",filterArguments:[{attribute:"Date",operator:"GREATER_THAN_OR_EQUAL_TO",attributeType:"date",valueType:"VALUE",value:t}]};break;case o!=="":p={logicalOperator:"AND",type:"GROUP",filterArguments:[{attribute:"Date",operator:"LESS_THAN_OR_EQUAL_TO",attributeType:"date",valueType:"VALUE",value:o}]};break}if(s&&p){e.filter(p.filterArguments.concat(s));return}if(s){e.filter(s);return}if(p){e.filter(p);return}}function X(){const e=c(),[r,a]=A.exports.useState(0),n={height:"calc(100vh - 300px)"};return u("div",{className:"flex w-[300px] min-w-[200px]  m-2 dark:text-white flex-col 0",children:[u("span",{className:"font-semibold m-2",children:["Wallets (",e.walletCount,")"]}),l("div",{className:"flex align-middle",children:l("input",{className:"p-[10px] m-1 flex-1 outline-none text-black",placeholder:"wallet name",value:e.walletInput,onInput:t=>{const o=t.target.value;c.setState({walletInput:o,walletsNames:Array.from(d.walletNames).filter(s=>s.toLowerCase().indexOf(o.toLowerCase())>-1)})}})}),l("div",{style:n,className:"flex flex-col  overflow-y-auto overflow-x-hidden scrollbar",children:e.walletsNames.map((t,o)=>{const s=e.walletSelected.has(t)?"text-sm hover:bg-gray-300 dark:hover:bg-gray-600 rounded":"hidden",p=e.walletSelected.has(t)?"hidden":"text-sm hover:bg-gray-300 dark:hover:bg-gray-600 rounded";return u("div",{className:"p-2 m-2 flex flex-row border-b border-gray-200 dark:border-gray-700",children:[l("span",{className:"flex-1",children:t}),l("span",{onClick:()=>{e.walletSelected.delete(t),a(r+1),f()},className:s,children:"\u2714\uFE0F"}),l("span",{onClick:()=>{e.walletSelected.add(t),a(r+1),f()},className:p,children:"\u{1F50D}"})]},o)})})]})}function Z(){const e=c(),[r,a]=A.exports.useState(0),n={height:"calc(100vh - 300px)"};return u("div",{className:"flex w-[300px] min-w-[200px]  m-2 dark:text-white flex-col ",children:[u("span",{className:"font-semibold m-2",children:["Coins (",e.coinCount,")"]}),l("div",{className:"flex align-middle",children:l("input",{className:"p-[10px] m-1 flex-1 outline-none text-black",placeholder:"coin name",value:e.coinInput,onInput:t=>{const o=t.target.value;c.setState({coinInput:o,coinsNames:Array.from(d.coinNames).filter(s=>s.toLowerCase().indexOf(o.toLowerCase())>-1)})}})}),l("div",{style:n,className:"flex flex-col  overflow-y-auto overflow-x-hidden scrollbar",children:e.coinsNames.map((t,o)=>{const s=e.coinSelected.has(t)?"text-sm hover:bg-gray-300 dark:hover:bg-gray-600 rounded":"hidden",p=e.coinSelected.has(t)?"hidden":"text-sm hover:bg-gray-300 dark:hover:bg-gray-600 rounded";return u("div",{className:"p-2 m-2 flex flex-row border-b border-gray-200 dark:border-gray-700",children:[l("span",{className:"flex-1",children:t}),l("span",{onClick:()=>{e.coinSelected.delete(t),a(r+1),f()},className:s,children:"\u2714\uFE0F"}),l("span",{onClick:()=>{e.coinSelected.add(t),a(r+1),f()},className:p,children:"\u{1F50D}"})]},o)})})]})}function ee(){const e=c();function r(a){if(a){const n=new Date(a).getFullYear();let t=(new Date(a).getMonth()+1).toString();t.length===1&&(t="0"+t);let o=new Date(a).getDate().toString();return o.length===1&&(o="0"+o),`${n}-${t}-${o}`}return""}return l("div",{className:"flex flex-1 ",children:u("div",{className:"flex text-white flex-1",children:[u("div",{className:"flex flex-col p-2 flex-1",children:[l("span",{className:"font-semibold m-2",children:"From date:"}),l("div",{className:"flex align-middle",children:l("input",{className:"p-2 m-1 flex-1 outline-none text-black",placeholder:"from date",type:"date",value:r(e.fromDate),onInput:a=>{var t;const n=((t=a.target.valueAsDate)==null?void 0:t.getDate)?a.target.valueAsDate:"";f(),c.setState({fromDate:n})},onChange:a=>{var t;const n=((t=a.target.valueAsDate)==null?void 0:t.getDate)?a.target.valueAsDate:"";f(),c.setState({fromDate:n})}})})]}),u("div",{className:"flex flex-col p-2 flex-1",children:[l("span",{className:"font-semibold m-2",children:"From date:"}),l("div",{className:"flex align-middle",children:l("input",{className:"p-2 m-1 flex-1 outline-none text-black",placeholder:"type wallet",type:"date",value:r(e.toDate),onInput:a=>{var t;const n=((t=a.target.valueAsDate)==null?void 0:t.getDate)?a.target.valueAsDate:"";f(),c.setState({toDate:n})},onChange:a=>{var t;const n=((t=a.target.valueAsDate)==null?void 0:t.getDate)?a.target.valueAsDate:"";f(),c.setState({toDate:n})}})})]})]})})}B();function te(){const e=c();return u("div",{className:"app bg-gray-100 dark:bg-gray-800",children:[l(W,{enabled:e.darktheme}),l(_,{}),u("div",{className:"flex flex-col h-full",children:[l(K,{}),u("div",{className:"flex flex-row  h-full",children:[u("div",{className:"flex flex-col m-2",children:[l(ee,{}),u("div",{className:"flex flex-row",children:[l(X,{}),l(Z,{})]})]}),u("div",{className:"flex flex-col h-full w-full",children:[e.errormsg?u("span",{className:"ml-2 text-red-500 font-semibold ",children:[l("span",{className:"underline",children:"Error:"}),e.errormsg]}):"",l(J,{className:"simple-html-grid flex-grow h-full m-3",interface:d.mainGridInterface})]})]}),l(V,{})]})]})}G.render(l(h.StrictMode,{children:l(te,{})}),document.getElementById("root"));
