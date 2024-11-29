import{_ as M,E as N,W as K,o as O,H as U,D,r as b,I as R,a as y,c as C,b as e,d as n,m as u,z as c,n as S,y as I,V as L,t as $,e as J,i as W,F as A,v as B}from"./index-CG-Z1QoR.js";import{L as a}from"./localeText-DLVUk9Mp.js";const F={class:"card rounded-3 flex-grow-1 bg-danger-subtle border-danger-subtle border shadow"},T={class:"card-body"},z={class:"d-flex align-items-center gap-3 inputGroup"},E=["value"],G={class:"mb-0"},j={class:"d-flex mt-3"},q=["disabled"],Z={__name:"updateConfigurationName",props:{configurationName:String},emits:["close"],setup(w,{emit:h}){const g=w,P=h,l=N({data:"",valid:!1}),i=K();O(()=>{U(()=>l.data,d=>{l.valid=/^[a-zA-Z0-9_=+.-]{1,15}$/.test(d)&&d.length>0&&!i.Configurations.find(r=>r.Name===d)})});const s=D(),m=b(!1),f=R(),p=async()=>{l.data&&(m.value=!0,clearInterval(s.Peers.RefreshInterval),await I("/api/renameWireguardConfiguration",{Name:g.configurationName,NewConfigurationName:l.data},async d=>{d.status?(await i.getConfigurations(),s.newMessage("Server","Configuration renamed","success"),f.push(`/configuration/${l.data}/peers`)):(s.newMessage("Server",d.message,"danger"),m.value=!1)}))};return(d,r)=>(y(),C("div",F,[e("div",T,[e("p",null,[n(a,{t:"To update this configuration's name, WGDashboard will execute the following operations:"})]),e("ol",null,[e("li",null,[n(a,{t:"Duplicate current configuration's database table and .conf file with the new name"})]),e("li",null,[n(a,{t:"Delete current configuration's database table and .conf file"})])]),e("div",z,[e("input",{class:"form-control form-control-sm rounded-3",value:w.configurationName,disabled:""},null,8,E),r[3]||(r[3]=e("h3",{class:"mb-0"},[e("i",{class:"bi bi-arrow-right"})],-1)),u(e("input",{class:S(["form-control form-control-sm rounded-3",[l.data?l.valid?"is-valid":"is-invalid":""]]),id:"newConfigurationName","onUpdate:modelValue":r[0]||(r[0]=v=>l.data=v)},null,2),[[c,l.data]])]),e("div",{class:S(["invalid-feedback",{"d-block":!l.valid&&l.data}])},[n(a,{t:"Configuration name is invalid. Possible reasons:"}),e("ul",G,[e("li",null,[n(a,{t:"Configuration name already exist."})]),e("li",null,[n(a,{t:"Configuration name can only contain 15 lower/uppercase alphabet, numbers, underscore, equal sign, plus sign, period and hyphen."})])])],2),e("div",j,[e("button",{onClick:r[1]||(r[1]=v=>P("close")),class:"btn btn-sm bg-secondary-subtle border-secondary-subtle text-secondary-emphasis rounded-3"},[n(a,{t:"Cancel"})]),e("button",{onClick:r[2]||(r[2]=v=>p()),disabled:!l.data||m.value,class:"btn btn-sm btn-danger rounded-3 ms-auto"},[n(a,{t:"Save"})],8,q)])])]))}},H=M(Z,[["__scopeId","data-v-4be4f48a"]]),Q={class:"container d-flex h-100 w-100"},X={class:"m-auto modal-dialog-centered dashboardModal",style:{width:"700px"}},Y={class:"card rounded-3 shadow flex-grow-1"},ee={class:"card-header bg-transparent d-flex align-items-center gap-2 border-0 p-4"},te={class:"mb-0"},se={class:"card-body px-4 pb-4"},oe={class:"d-flex gap-2 flex-column"},ne={key:0,class:"d-flex align-items-center gap-3"},ae={class:"text-muted"},le={class:"d-flex align-items-center gap-3"},ie={class:"text-muted",style:{"word-break":"keep-all"}},re={class:"ms-auto",style:{"word-break":"break-all"}},de={class:"d-flex"},ue={for:"configuration_private_key",class:"form-label"},ce={class:"text-muted d-block"},me={class:"form-check form-switch ms-auto"},fe=["disabled"],be={for:"configuration_ipaddress_cidr",class:"form-label"},ge={class:"text-muted"},pe=["disabled"],ve={for:"configuration_listen_port",class:"form-label"},_e={class:"text-muted"},ye=["disabled"],we={for:"configuration_preup",class:"form-label"},xe={class:"text-muted"},Ce=["disabled"],he={for:"configuration_predown",class:"form-label"},Pe={class:"text-muted"},ke=["disabled"],Ne={for:"configuration_postup",class:"form-label"},Se={class:"text-muted"},$e=["disabled"],Ke={for:"configuration_postdown",class:"form-label"},Ue={class:"text-muted"},De=["disabled"],Ie={class:"d-flex align-items-center gap-2 mt-4"},Ve=["disabled"],Me=["disabled"],Oe={class:"d-flex gap-2"},Je={__name:"editConfiguration",props:{configurationInfo:Object},emits:["changed","close","backupRestore","deleteConfiguration"],setup(w,{emit:h}){const g=w,P=K(),l=D(),i=b(!1),s=N(JSON.parse(JSON.stringify(g.configurationInfo))),m=b(!1),f=b(!1);b(!1);const p=N({PrivateKey:!0,IPAddress:!0,ListenPort:!0}),d=L("editConfigurationContainer"),r=()=>{P.checkWGKeyLength(s.PrivateKey)?(p.PrivateKey=!0,s.PublicKey=window.wireguard.generatePublicKey(s.PrivateKey)):p.PrivateKey=!1},v=()=>{f.value=!1,Object.assign(s,JSON.parse(JSON.stringify(g.configurationInfo)))},k=h,V=()=>{i.value=!0,I("/api/updateWireguardConfiguration",s,_=>{i.value=!1,_.status?(l.newMessage("Server","Configuration saved","success"),f.value=!1,k("dataChanged",_.data)):l.newMessage("Server",_.message,"danger")})},x=b(!1);return U(s,()=>{f.value=JSON.stringify(s)!==JSON.stringify(g.configurationInfo)},{deep:!0}),(_,t)=>(y(),C("div",{class:"peerSettingContainer w-100 h-100 position-absolute top-0 start-0 overflow-y-scroll",ref_key:"editConfigurationContainer",ref:d},[e("div",Q,[e("div",X,[e("div",Y,[e("div",ee,[e("h4",te,[n(a,{t:"Configuration Settings"})]),e("button",{type:"button",class:"btn-close ms-auto",onClick:t[0]||(t[0]=o=>_.$emit("close"))})]),e("div",se,[e("div",oe,[x.value?J("",!0):(y(),C("div",ne,[e("small",ae,[n(a,{t:"Name"})]),e("small",null,$(s.Name),1),e("button",{onClick:t[1]||(t[1]=o=>x.value=!0),class:"btn btn-sm bg-danger-subtle border-danger-subtle text-danger-emphasis rounded-3 ms-auto"}," Update Name ")])),x.value?(y(),W(H,{key:1,onClose:t[2]||(t[2]=o=>x.value=!1),"configuration-name":s.Name},null,8,["configuration-name"])):(y(),C(A,{key:2},[t[21]||(t[21]=e("hr",null,null,-1)),e("div",le,[e("small",ie,[n(a,{t:"Public Key"})]),e("small",re,$(s.PublicKey),1)]),t[22]||(t[22]=e("hr",null,null,-1)),e("div",null,[e("div",de,[e("label",ue,[e("small",ce,[n(a,{t:"Private Key"})])]),e("div",me,[u(e("input",{class:"form-check-input",type:"checkbox",role:"switch",id:"editPrivateKeySwitch","onUpdate:modelValue":t[3]||(t[3]=o=>m.value=o)},null,512),[[B,m.value]]),t[16]||(t[16]=e("label",{class:"form-check-label",for:"editPrivateKeySwitch"},[e("small",null,"Edit")],-1))])]),u(e("input",{type:"text",class:S(["form-control form-control-sm rounded-3",{"is-invalid":!p.PrivateKey}]),disabled:i.value||!m.value,onKeyup:t[4]||(t[4]=o=>r()),"onUpdate:modelValue":t[5]||(t[5]=o=>s.PrivateKey=o),id:"configuration_private_key"},null,42,fe),[[c,s.PrivateKey]])]),e("div",null,[e("label",be,[e("small",ge,[n(a,{t:"IP Address/CIDR"})])]),u(e("input",{type:"text",class:"form-control form-control-sm rounded-3",disabled:i.value,"onUpdate:modelValue":t[6]||(t[6]=o=>s.Address=o),id:"configuration_ipaddress_cidr"},null,8,pe),[[c,s.Address]])]),e("div",null,[e("label",ve,[e("small",_e,[n(a,{t:"Listen Port"})])]),u(e("input",{type:"number",class:"form-control form-control-sm rounded-3",disabled:i.value,"onUpdate:modelValue":t[7]||(t[7]=o=>s.ListenPort=o),id:"configuration_listen_port"},null,8,ye),[[c,s.ListenPort]])]),e("div",null,[e("label",we,[e("small",xe,[n(a,{t:"PreUp"})])]),u(e("input",{type:"text",class:"form-control form-control-sm rounded-3",disabled:i.value,"onUpdate:modelValue":t[8]||(t[8]=o=>s.PreUp=o),id:"configuration_preup"},null,8,Ce),[[c,s.PreUp]])]),e("div",null,[e("label",he,[e("small",Pe,[n(a,{t:"PreDown"})])]),u(e("input",{type:"text",class:"form-control form-control-sm rounded-3",disabled:i.value,"onUpdate:modelValue":t[9]||(t[9]=o=>s.PreDown=o),id:"configuration_predown"},null,8,ke),[[c,s.PreDown]])]),e("div",null,[e("label",Ne,[e("small",Se,[n(a,{t:"PostUp"})])]),u(e("input",{type:"text",class:"form-control form-control-sm rounded-3",disabled:i.value,"onUpdate:modelValue":t[10]||(t[10]=o=>s.PostUp=o),id:"configuration_postup"},null,8,$e),[[c,s.PostUp]])]),e("div",null,[e("label",Ke,[e("small",Ue,[n(a,{t:"PostDown"})])]),u(e("input",{type:"text",class:"form-control form-control-sm rounded-3",disabled:i.value,"onUpdate:modelValue":t[11]||(t[11]=o=>s.PostDown=o),id:"configuration_postdown"},null,8,De),[[c,s.PostDown]])]),e("div",Ie,[e("button",{class:"btn bg-secondary-subtle border-secondary-subtle text-secondary-emphasis rounded-3 shadow ms-auto",onClick:t[12]||(t[12]=o=>v()),disabled:!f.value||i.value},[t[17]||(t[17]=e("i",{class:"bi bi-arrow-clockwise me-2"},null,-1)),n(a,{t:"Reset"})],8,Ve),e("button",{class:"btn bg-primary-subtle border-primary-subtle text-primary-emphasis rounded-3 shadow",disabled:!f.value||i.value,onClick:t[13]||(t[13]=o=>V())},[t[18]||(t[18]=e("i",{class:"bi bi-save-fill me-2"},null,-1)),n(a,{t:"Save"})],8,Me)]),t[23]||(t[23]=e("hr",null,null,-1)),t[24]||(t[24]=e("h5",{class:"mb-3"},"Danger Zone",-1)),e("div",Oe,[e("button",{onClick:t[14]||(t[14]=o=>k("backupRestore")),style:{"flex-basis":"100%"},class:"btn bg-warning-subtle border-warning-subtle text-warning-emphasis rounded-3 ms-auto"},[t[19]||(t[19]=e("i",{class:"bi bi-copy me-2"},null,-1)),n(a,{t:"Backup & Restore"})]),e("button",{onClick:t[15]||(t[15]=o=>k("deleteConfiguration")),style:{"flex-basis":"100%"},class:"btn bg-danger-subtle border-danger-subtle text-danger-emphasis rounded-3 ms-auto"},[t[20]||(t[20]=e("i",{class:"bi bi-trash-fill me-2"},null,-1)),n(a,{t:"Delete Configuration"})])])],64))])])])])])],512))}};export{Je as default};
