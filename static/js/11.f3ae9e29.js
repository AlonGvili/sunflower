(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"./examples/sunflower-antd-modal-form/Example3.jsx":function(e,t,a){"use strict";a.r(t);a("./node_modules/_antd@3.26.5@antd/es/modal/style/index.js");var n=a("./node_modules/_antd@3.26.5@antd/es/modal/index.js"),r=(a("./node_modules/_antd@3.26.5@antd/es/spin/style/index.js"),a("./node_modules/_antd@3.26.5@antd/es/spin/index.js")),s=(a("./node_modules/_antd@3.26.5@antd/es/button/style/index.js"),a("./node_modules/_antd@3.26.5@antd/es/button/index.js")),o=(a("./node_modules/_antd@3.26.5@antd/es/input/style/index.js"),a("./node_modules/_antd@3.26.5@antd/es/input/index.js")),i=a("./node_modules/_@babel_runtime@7.7.7@@babel/runtime/regenerator/index.js"),l=a.n(i),c=(a("./node_modules/_antd@3.26.5@antd/es/form/style/index.js"),a("./node_modules/_antd@3.26.5@antd/es/form/index.js")),u=a("react"),f=a.n(u),d=a("./packages/sunflower-antd/src/index.ts");t.default=c.a.create()((function(e){var t=e.form,a=Object(d.e)({defaultVisible:!1,autoSubmitClose:!0,submit:function(e){var t,a;return l.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.username,a=e.email,console.log("beforeSubmit"),n.next=4,l.a.awrap(new Promise((function(e){return setTimeout(e,1e3)})));case 4:return console.log("afterSubmit",t,a),n.abrupt("return","ok");case 6:case"end":return n.stop()}}))},form:t}),i=a.modalProps,u=a.formProps,m=a.show,b=a.formLoading,p=a.submit;return f.a.createElement("div",null,f.a.createElement(n.a,Object.assign({},i,{title:"useModalForm",okText:"submit",width:600}),f.a.createElement(r.a,{spinning:b},f.a.createElement(c.a,Object.assign({layout:"inline"},u),f.a.createElement(c.a.Item,{label:"Username"},t.getFieldDecorator("username")(f.a.createElement(o.a,{placeholder:"Username",disabled:!0}))),f.a.createElement(c.a.Item,{label:"Email"},t.getFieldDecorator("email",{rules:[{required:!0,message:"Please input email",type:"email"}]})(f.a.createElement(o.a,{placeholder:"Email"}))),f.a.createElement(c.a.Item,null,f.a.createElement(s.a,{onClick:function(){return p({username:"lily"}).then((function(e){return console.log(e)}))}},"call submit method"))))),f.a.createElement(s.a,{onClick:m},"show"))}))},"./packages/sunflower-antd/src/index.ts":function(e,t,a){"use strict";var n=a("./node_modules/_@babel_runtime@7.7.7@@babel/runtime/helpers/esm/objectSpread2.js"),r=a("./node_modules/_@babel_runtime@7.7.7@@babel/runtime/helpers/esm/slicedToArray.js"),s=(a("./node_modules/_antd@3.26.5@antd/es/form/style/index.js"),a("./node_modules/_antd@3.26.5@antd/es/form/index.js")),o=a("react");"undefined"!==typeof UseSearchResultConfig&&UseSearchResultConfig&&UseSearchResultConfig===Object(UseSearchResultConfig)&&Object.isExtensible(UseSearchResultConfig)&&Object.defineProperty(UseSearchResultConfig,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"UseSearchResultConfig",filename:"packages/sunflower-hooks-search-result/src/index.ts"}});var i=function(e){var t=e.search,a=e.autoFirstSearch,n=void 0===a||a,s=e.defaultRequestData,i=Object(o.useState)(),l=Object(r.a)(i,2),c=l[0],u=l[1],f=Object(o.useState)(),d=Object(r.a)(f,2),m=d[0],b=d[1],p=Object(o.useState)(!1),g=Object(r.a)(p,2),j=g[0],O=g[1],S=Object(o.useState)(!1),v=Object(r.a)(S,2),x=v[0],_=v[1],h=function(e){return u(e),O(!0),Promise.resolve(t&&t(e)).then((function(e){b(e),O(!1)}))};return Object(o.useEffect)((function(){var e;_(!0),e="function"===typeof s?s():s,Promise.resolve(e).then((function(e){u(e),_(!1),n&&h(e)})).catch((function(){_(!1)}))}),[]),{loading:j,requestData:c,setRequestData:u,responseData:m,defaultRequestDataLoading:x,search:h}};i&&i===Object(i)&&Object.isExtensible(i)&&Object.defineProperty(i,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"useSearchResult",filename:"packages/sunflower-hooks-search-result/src/index.ts"}}),"undefined"!==typeof StoreValue&&StoreValue&&StoreValue===Object(StoreValue)&&Object.isExtensible(StoreValue)&&Object.defineProperty(StoreValue,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"StoreValue",filename:"packages/sunflower-antd-form-table/src/index.tsx"}}),"undefined"!==typeof Store&&Store&&Store===Object(Store)&&Object.isExtensible(Store)&&Object.defineProperty(Store,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Store",filename:"packages/sunflower-antd-form-table/src/index.tsx"}}),"undefined"!==typeof SearchResponseData&&SearchResponseData&&SearchResponseData===Object(SearchResponseData)&&Object.isExtensible(SearchResponseData)&&Object.defineProperty(SearchResponseData,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"SearchResponseData",filename:"packages/sunflower-antd-form-table/src/index.tsx"}}),"undefined"!==typeof UseSearchResultAntdConfig&&UseSearchResultAntdConfig&&UseSearchResultAntdConfig===Object(UseSearchResultAntdConfig)&&Object.isExtensible(UseSearchResultAntdConfig)&&Object.defineProperty(UseSearchResultAntdConfig,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"UseSearchResultAntdConfig",filename:"packages/sunflower-antd-form-table/src/index.tsx"}});var l=function(e){var t=e||{},a=t.search,l=t.autoFirstSearch,c=void 0===l||l,u=t.defaultPageSize,f=void 0===u?10:u,d=t.defaultCurrent,m=void 0===d?1:d,b=t.defaultFormValues,p=void 0===b?{}:b,g=t.form,j=3;s.a.useForm&&(j=4);var O=g;if(!g){if(4!==j)throw new Error('"form" need in antd@3');var S=s.a.useForm(),v=Object(r.a)(S,1);O=v[0]}var x=Object(o.useState)(),_=Object(r.a)(x,2),h=_[0],C=_[1],F=i({search:a,autoFirstSearch:c,defaultRequestData:function(){var e;return e="function"===typeof p?p():p,Promise.resolve(e).then((function(e){var t=g.isFieldsTouched(),a=Object(n.a)({},e);if(Object.keys(e).forEach((function(t){a[t]=g.isFieldTouched(t)?g.getFieldValue(t):e[t]})),C(e),g.setFieldsValue(a),t)throw P(Object(n.a)({pageSize:f,current:m},a)),new Error("will not autoFirstSearch");return Object(n.a)({pageSize:f,current:m},a)}))}}),y=F.loading,w=F.requestData,U=void 0===w?{}:w,P=F.setRequestData,E=F.responseData,V=void 0===E?{}:E,k=F.defaultRequestDataLoading,R=F.search,D=4===j?{form:O,onFinish:function(e){R(Object(n.a)({current:1,pageSize:U.pageSize},e))},initialValues:h}:{onSubmit:function(e){e.preventDefault(),O.validateFields((function(e,t){e||R(Object(n.a)({current:1,pageSize:U.pageSize},t))}))}},L={pagination:{pageSize:U.pageSize,current:U.current,defaultPageSize:f,defaultCurrent:m,total:V.total},loading:y,dataSource:V.dataSource,onChange:function(e,t,a){R(Object(n.a)({},U,{current:e.current===U.current?1:e.current,pageSize:e.pageSize,filters:t,sorter:a}))}},M=Object(n.a)({},U);return delete M.current,delete M.pageSize,delete M.filter,delete M.sorter,{form:O,formProps:D,tableProps:L,loading:y,defaultFormValuesLoading:k,formValues:M,filters:U.filters,sorter:U.sorter,current:U.current,pageSize:U.pageSize,dataSource:V.dataSource,total:V.total,search:function(e){R(Object(n.a)({},U,{},e))}}};l&&l===Object(l)&&Object.isExtensible(l)&&Object.defineProperty(l,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"useFormTable",filename:"packages/sunflower-antd-form-table/src/index.tsx"}});var c=a("./node_modules/_@babel_runtime@7.7.7@@babel/runtime/helpers/esm/toConsumableArray.js");"undefined"!==typeof UseCascadeSearchConfig&&UseCascadeSearchConfig&&UseCascadeSearchConfig===Object(UseCascadeSearchConfig)&&Object.isExtensible(UseCascadeSearchConfig)&&Object.defineProperty(UseCascadeSearchConfig,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"UseCascadeSearchConfig",filename:"packages/sunflower-hooks-cascade-search/src/index.ts"}});var u=function(e){var t=e.list,a=void 0===t?[]:t,n=Object(o.useState)([]),s=Object(r.a)(n,2),i=s[0],l=s[1],u=Object(o.useState)(a.map((function(){return!1}))),f=Object(r.a)(u,2),d=f[0],m=f[1];return{search:function(e){if(!(e>=a.length||e<0)&&(!(e>0)||i[e-1])){var t=Object(c.a)(i.slice(0,e));l(t);var n=Object(c.a)(d);n[e]=!0,m(n);for(var r=arguments.length,s=new Array(r>1?r-1:0),o=1;o<r;o++)s[o-1]=arguments[o];Promise.resolve(a[e].apply(a,[i[e-1]].concat(s))).then((function(t){var a=Object(c.a)(i.slice(0,e+1));a[e]=t;var n=Object(c.a)(d);n[e]=!1,m(n),l(a)}))}},responseDataList:i,loadingList:d,setResponseDataList:l}};u&&u===Object(u)&&Object.isExtensible(u)&&Object.defineProperty(u,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"useCascadeSearch",filename:"packages/sunflower-hooks-cascade-search/src/index.ts"}}),"undefined"!==typeof OptionData&&OptionData&&OptionData===Object(OptionData)&&Object.isExtensible(OptionData)&&Object.defineProperty(OptionData,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"OptionData",filename:"packages/sunflower-antd-cascade-select/src/index.tsx"}}),"undefined"!==typeof ListItem&&ListItem&&ListItem===Object(ListItem)&&Object.isExtensible(ListItem)&&Object.defineProperty(ListItem,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ListItem",filename:"packages/sunflower-antd-cascade-select/src/index.tsx"}}),"undefined"!==typeof Select&&Select&&Select===Object(Select)&&Object.isExtensible(Select)&&Object.defineProperty(Select,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Select",filename:"packages/sunflower-antd-cascade-select/src/index.tsx"}}),"undefined"!==typeof UseCascadeSelectConfig&&UseCascadeSelectConfig&&UseCascadeSelectConfig===Object(UseCascadeSelectConfig)&&Object.isExtensible(UseCascadeSelectConfig)&&Object.defineProperty(UseCascadeSelectConfig,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"UseCascadeSelectConfig",filename:"packages/sunflower-antd-cascade-select/src/index.tsx"}});var f=function(e){var t=e.list,a=void 0===t?[]:t,n=e.autoFirstSearch,r=void 0===n||n,s=e.form,i=u({list:a.map((function(e){return function(t){for(var a=arguments.length,n=new Array(a>1?a-1:0),r=1;r<a;r++)n[r-1]=arguments[r];return e.options.apply(e,n)}}))}),l=i.search,c=i.responseDataList,f=i.loadingList,d=i.setResponseDataList,m=a.map((function(e,t){var n=c[t]||[];return{props:{loading:f[t],onChange:function(e){if(e&&l(t+1,e),s){for(var n={},r=t+1;r<a.length;r+=1)n[a[r].name]=void 0;var o=c.slice(0,t+1);s.setFieldsValue(n),d(o)}}},options:n}}));return Object(o.useEffect)((function(){r&&!c[0]&&l(0)}),[]),{search:l,selects:m}};f&&f===Object(f)&&Object.isExtensible(f)&&Object.defineProperty(f,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"useCascadeSelect",filename:"packages/sunflower-antd-cascade-select/src/index.tsx"}}),"undefined"!==typeof UseModalConfig&&UseModalConfig&&UseModalConfig===Object(UseModalConfig)&&Object.isExtensible(UseModalConfig)&&Object.defineProperty(UseModalConfig,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"UseModalConfig",filename:"packages/sunflower-antd-modal/src/index.tsx"}});var d=function(e){var t=(e||{}).defaultVisible,a=void 0!==t&&t,n=Object(o.useState)(a),s=Object(r.a)(n,2),i=s[0],l=s[1],c=Object(o.useCallback)((function(){return l(!0)}),[i]),u=Object(o.useCallback)((function(){return l(!1)}),[i]);return{visible:i,show:c,close:u,modalProps:{visible:i,onCancel:u}}};d&&d===Object(d)&&Object.isExtensible(d)&&Object.defineProperty(d,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"useModal",filename:"packages/sunflower-antd-modal/src/index.tsx"}}),"undefined"!==typeof StoreValue&&StoreValue&&StoreValue===Object(StoreValue)&&Object.isExtensible(StoreValue)&&Object.defineProperty(StoreValue,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"StoreValue",filename:"packages/sunflower-antd-form/src/index.tsx"}}),"undefined"!==typeof Store&&Store&&Store===Object(Store)&&Object.isExtensible(Store)&&Object.defineProperty(Store,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Store",filename:"packages/sunflower-antd-form/src/index.tsx"}}),"undefined"!==typeof UseFormConfig&&UseFormConfig&&UseFormConfig===Object(UseFormConfig)&&Object.isExtensible(UseFormConfig)&&Object.defineProperty(UseFormConfig,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"UseFormConfig",filename:"packages/sunflower-antd-form/src/index.tsx"}});var m=function(e){var t=Object(o.useState)(!1),a=Object(r.a)(t,2),i=a[0],l=a[1],c=Object(o.useState)({}),u=Object(r.a)(c,2),f=u[0],d=u[1],m=e.defaultFormValues,b=e.form,p=e.submit,g=Object(o.useState)({}),j=Object(r.a)(g,2),O=j[0],S=j[1],v=Object(o.useState)(!1),x=Object(r.a)(v,2),_=x[0],h=x[1],C=Object(o.useState)(),F=Object(r.a)(C,2),y=F[0],w=F[1],U=3;s.a.useForm&&(U=4);var P=b;if(!b){if(4!==U)throw new Error('"form" need in antd@3');var E=s.a.useForm(),V=Object(r.a)(E,1);P=V[0]}var k=function(e){return S(e),h(!0),new Promise((function(e,t){P.validateFields((function(a,n){a?(h(!1),t(a)):e(Promise.resolve(p(n)).then((function(e){return h(!1),w(e),e})).catch((function(e){throw h(!1),e})))}))}))};return Object(o.useEffect)((function(){var e,t=!1;if(m)return"function"===typeof m?(l(!0),e=m()):e=m,Promise.resolve(e).then((function(e){if(!t){var a=Object(n.a)({},e);Object.keys(e).forEach((function(t){a[t]=b.isFieldTouched(t)?b.getFieldValue(t):e[t]})),l(!1),d(e),b.setFieldsValue(a)}})).catch((function(){t||l(!1)})),function(){t=!0}}),[]),{form:P,formProps:4===U?{form:P,onFinish:k,initialValues:f}:{onSubmit:function(e){e.preventDefault(),k(b.getFieldsValue())}},defaultFormValuesLoading:i,formValues:O,initialValues:f,formResult:y,formLoading:_,submit:function(e){return P.setFieldsValue(e),k(P.getFieldsValue())}}};m&&m===Object(m)&&Object.isExtensible(m)&&Object.defineProperty(m,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"useForm",filename:"packages/sunflower-antd-form/src/index.tsx"}}),"undefined"!==typeof UseModalFormConfig&&UseModalFormConfig&&UseModalFormConfig===Object(UseModalFormConfig)&&Object.isExtensible(UseModalFormConfig)&&Object.defineProperty(UseModalFormConfig,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"UseModalFormConfig",filename:"packages/sunflower-antd-modal-form/src/index.tsx"}});var b=function(e){var t=e||{},a=t.defaultVisible,r=void 0!==a&&a,s=t.autoSubmitClose,o=void 0===s||s,i=t.autoResetForm,l=void 0===i||i,c=t.submit,u=t.form,f=t.defaultFormValues,b=d({defaultVisible:r}),p=b.visible,g=b.show,j=b.close,O=b.modalProps,S=m({form:u,submit:c,defaultFormValues:f}),v=S.form,x=S.formProps,_=S.formLoading,h=S.defaultFormValuesLoading,C=S.formValues,F=S.initialValues,y=S.formResult,w=S.submit,U=Object(n.a)({},O,{onOk:function(){w().then((function(){o&&j(),l&&v.resetFields()}))}});return{form:v,visible:p,show:g,close:j,modalProps:U,formProps:x,formLoading:_,defaultFormValuesLoading:h,formValues:C,initialValues:F,formResult:y,submit:w}};b&&b===Object(b)&&Object.isExtensible(b)&&Object.defineProperty(b,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"useModalForm",filename:"packages/sunflower-antd-modal-form/src/index.tsx"}}),"undefined"!==typeof UseStepsFormConfig&&UseStepsFormConfig&&UseStepsFormConfig===Object(UseStepsFormConfig)&&Object.isExtensible(UseStepsFormConfig)&&Object.defineProperty(UseStepsFormConfig,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"UseStepsFormConfig",filename:"packages/sunflower-antd-steps-form/src/index.tsx"}});var p=function(e){var t=e||{},a=t.form,n=t.defaultFormValues,s=t.defaultCurrent,i=void 0===s?0:s,l=t.submit,c=t.total,u=t.isBackValidate,f=void 0===u||u,d=Object(o.useState)(i),b=Object(r.a)(d,2),p=b[0],g=b[1],j=m({form:a,submit:l,defaultFormValues:n}),O=j.form,S=j.formProps,v=j.formLoading,x=j.defaultFormValuesLoading,_=j.formValues,h=j.initialValues,C=j.formResult,F=j.submit,y=function(e){var t=e;e>c-1&&(t=c-1),e<0&&(t=0),g(t)},w=function(e){return e===p||(e<p&&!f?(y(e),!0):new Promise((function(t,a){O.validateFields((function(n,r){n?a(n):(y(e),t(r))}))})))};return{current:p,gotoStep:w,stepsProps:{current:p,onChange:function(e){return w(e)}},formProps:S,formLoading:v,defaultFormValuesLoading:x,formValues:_,initialValues:h,formResult:C,form:O,submit:F}};p&&p===Object(p)&&Object.isExtensible(p)&&Object.defineProperty(p,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"useStepsForm",filename:"packages/sunflower-antd-steps-form/src/index.tsx"}}),a.d(t,"c",(function(){return l})),a.d(t,"a",(function(){return f})),a.d(t,"d",(function(){return d})),a.d(t,"b",(function(){return m})),a.d(t,"e",(function(){return b})),a.d(t,"f",(function(){return p})),p&&p===Object(p)&&Object.isExtensible(p)&&Object.defineProperty(p,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"useStepsForm",filename:"packages/sunflower-antd/src/index.ts"}}),b&&b===Object(b)&&Object.isExtensible(b)&&Object.defineProperty(b,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"useModalForm",filename:"packages/sunflower-antd/src/index.ts"}}),m&&m===Object(m)&&Object.isExtensible(m)&&Object.defineProperty(m,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"useForm",filename:"packages/sunflower-antd/src/index.ts"}}),d&&d===Object(d)&&Object.isExtensible(d)&&Object.defineProperty(d,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"useModal",filename:"packages/sunflower-antd/src/index.ts"}}),f&&f===Object(f)&&Object.isExtensible(f)&&Object.defineProperty(f,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"useCascadeSelect",filename:"packages/sunflower-antd/src/index.ts"}}),l&&l===Object(l)&&Object.isExtensible(l)&&Object.defineProperty(l,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"useFormTable",filename:"packages/sunflower-antd/src/index.ts"}})}}]);