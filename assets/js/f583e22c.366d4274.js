"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[117],{8108:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>t,metadata:()=>o,toc:()=>p});var i=n(5893),a=n(1151);const t={sidebar_position:5},s="Wrapper",o={id:"API-Reference/wrapper",title:"Wrapper",description:"BaseWrapper",source:"@site/docs/API-Reference/wrapper.md",sourceDirName:"API-Reference",slug:"/API-Reference/wrapper",permalink:"/YiValApi/docs/API-Reference/wrapper",draft:!1,unlisted:!1,editUrl:"https://github.com/YiVal/YiVal/tree/master/website/docs/API-Reference/wrapper.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Evaluation",permalink:"/YiValApi/docs/API-Reference/evaluation"},next:{title:"Selection",permalink:"/YiValApi/docs/API-Reference/selection"}},l={},p=[{value:"<code>BaseWrapper</code>",id:"basewrapper",level:2},{value:"Introduction",id:"introduction",level:3},{value:"Class Definition",id:"class-definition",level:3},{value:"Description",id:"description",level:4},{value:"Attributes",id:"attributes",level:4},{value:"Example",id:"example",level:3},{value:"Source Code",id:"source-code",level:3},{value:"<code>StringWrapper</code>",id:"stringwrapper",level:2},{value:"Introduction",id:"introduction-1",level:3},{value:"Class Definition",id:"class-definition-1",level:3},{value:"Description",id:"description-1",level:4},{value:"Attributes",id:"attributes-1",level:4},{value:"Example",id:"example-1",level:3},{value:"Source Code",id:"source-code-1",level:3},{value:"Custom Wrapper Guide: <code>NumberWrapper</code>",id:"custom-wrapper-guide-numberwrapper",level:2},{value:"Introduction",id:"introduction-2",level:3},{value:"Base Wrapper Overview",id:"base-wrapper-overview",level:3},{value:"Creating a <code>NumberWrapper</code>",id:"creating-a-numberwrapper",level:3},{value:"Registering the <code>NumberWrapper</code>",id:"registering-the-numberwrapper",level:3},{value:"Config",id:"config",level:3},{value:"Conclusion",id:"conclusion",level:3}];function c(e){const r={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.h1,{id:"wrapper",children:"Wrapper"}),"\n",(0,i.jsx)(r.h2,{id:"basewrapper",children:(0,i.jsx)(r.code,{children:"BaseWrapper"})}),"\n",(0,i.jsx)(r.h3,{id:"introduction",children:"Introduction"}),"\n",(0,i.jsxs)(r.p,{children:["This module introduces the ",(0,i.jsx)(r.code,{children:"BaseWrapper"})," class, which serves as the fundamental structure for wrappers in the experimental framework. Wrappers manage experiment variations based on the global experiment state. They are crucial components to control and monitor different variations during an experiment's lifecycle."]}),"\n",(0,i.jsx)(r.h3,{id:"class-definition",children:"Class Definition"}),"\n",(0,i.jsx)(r.h4,{id:"description",children:"Description"}),"\n",(0,i.jsx)(r.p,{children:"Base class for wrappers that manage experiment variations based on the global experiment state. This class provides the fundamental structure and methods for wrappers. Specific wrappers should inherit from this class and implement the necessary methods."}),"\n",(0,i.jsx)(r.h4,{id:"attributes",children:"Attributes"}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.strong,{children:(0,i.jsx)(r.code,{children:"name(str)"})}),":","\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsx)(r.li,{children:"The name of the wrapper."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.strong,{children:(0,i.jsx)(r.code,{children:"experiment_state(ExperimentState)"})}),":","\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsx)(r.li,{children:"The global state of the experiment."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.strong,{children:(0,i.jsx)(r.code,{children:"config(BaseWrapperConfig)"})}),":","\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsx)(r.li,{children:"The configuration for the wrapper."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(r.h3,{id:"example",children:"Example"}),"\n",(0,i.jsx)(r.h3,{id:"source-code",children:(0,i.jsx)(r.a,{href:"https://github.com/YiVal/YiVal/blob/master/src/yival/wrappers/base_wrapper.py",children:"Source Code"})}),"\n",(0,i.jsx)(r.h2,{id:"stringwrapper",children:(0,i.jsx)(r.code,{children:"StringWrapper"})}),"\n",(0,i.jsx)(r.h3,{id:"introduction-1",children:"Introduction"}),"\n",(0,i.jsxs)(r.p,{children:["This module provides a ",(0,i.jsx)(r.code,{children:"StringWrapper"})," class designed to manage string variations based on the current experiment state. It helps in retrieving and formatting string variations in the context of an active experiment."]}),"\n",(0,i.jsx)(r.h3,{id:"class-definition-1",children:"Class Definition"}),"\n",(0,i.jsx)(r.h4,{id:"description-1",children:"Description"}),"\n",(0,i.jsx)(r.h4,{id:"attributes-1",children:"Attributes"}),"\n",(0,i.jsx)(r.h3,{id:"example-1",children:"Example"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-Python",children:'wrapper = StringWrapper(template="Hello, {name}!", name="greeting_experiment", variables={"name": "John"})\r\nprint(str(wrapper))  # This will print the appropriate greeting based on the experiment state.\n'})}),"\n",(0,i.jsx)(r.h3,{id:"source-code-1",children:(0,i.jsx)(r.a,{href:"https://github.com/YiVal/YiVal/blob/master/src/yival/wrappers/string_wrapper.py",children:"Source Code"})}),"\n",(0,i.jsxs)(r.h2,{id:"custom-wrapper-guide-numberwrapper",children:["Custom Wrapper Guide: ",(0,i.jsx)(r.code,{children:"NumberWrapper"})]}),"\n",(0,i.jsx)(r.h3,{id:"introduction-2",children:"Introduction"}),"\n",(0,i.jsx)(r.p,{children:"In the experimental framework, wrappers play a vital role in managing variations throughout an experiment's lifecycle. By creating custom wrappers, one can control and monitor variations tailored to specific needs, ensuring that the experiment operates smoothly and efficiently."}),"\n",(0,i.jsxs)(r.p,{children:["In this guide, we will walk you through the process of creating a custom wrapper named ",(0,i.jsx)(r.code,{children:"NumberWrapper"}),". This wrapper will handle variations specifically for numbers. By the end of this guide, you will have a clear understanding of creating and registering a custom wrapper within the experimental framework."]}),"\n",(0,i.jsx)(r.h3,{id:"base-wrapper-overview",children:"Base Wrapper Overview"}),"\n",(0,i.jsxs)(r.p,{children:["The ",(0,i.jsx)(r.code,{children:"BaseWrapper"})," class provides the fundamental structure for wrappers. It comes equipped with methods to register new wrappers, retrieve registered ones, and fetch their configurations. The primary purpose of a wrapper is to manage experiment variations based on the global experiment state."]}),"\n",(0,i.jsxs)(r.h3,{id:"creating-a-numberwrapper",children:["Creating a ",(0,i.jsx)(r.code,{children:"NumberWrapper"})]}),"\n",(0,i.jsxs)(r.p,{children:["The ",(0,i.jsx)(r.code,{children:"NumberWrapper"})," will be a custom wrapper designed to handle variations specifically for numbers."]}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-Python",children:'from typing import Optional\r\n\r\nfrom number_wrapper_config import NumberWrapperConfig\r\nfrom yival.wrappers.base_wrapper import BaseWrapper\r\n\r\nclass NumberWrapper(BaseWrapper):\r\n    """\r\n    A wrapper for numbers to manage experiment variations based on the global\r\n    experiment state. If a variation for the given experiment name exists and\r\n    the global ExperimentState is active, the variation is used. Otherwise,\r\n    the original number is returned.\r\n    """\r\n    default_config = NumberWrapperConfig()\r\n\r\n    def __init__(\r\n        self,\r\n        value: float,\r\n        name: str,\r\n        config: Optional[NumberWrapperConfig] = None\r\n        state: Optional[ExperimentState] = None\r\n    ) -> None:\r\n        super().__init__(name, config, state)\r\n        self._value = value\r\n\r\n    def get_value(self) -> float:\r\n        variation = self.get_variation()\r\n        if variation is not None:\r\n            return variation\r\n        return self._value\r\n       \r\n \n'})}),"\n",(0,i.jsxs)(r.p,{children:["Here, the ",(0,i.jsx)(r.code,{children:"NumberWrapper"})," class is responsible for retrieving a variation if one exists, otherwise it returns the original number. The ",(0,i.jsx)(r.code,{children:"get_value"})," method is used to fetch the number, considering any variations."]}),"\n",(0,i.jsxs)(r.h3,{id:"registering-the-numberwrapper",children:["Registering the ",(0,i.jsx)(r.code,{children:"NumberWrapper"})]}),"\n",(0,i.jsxs)(r.p,{children:["To make the ",(0,i.jsx)(r.code,{children:"NumberWrapper"})," usable within the experimental framework, it needs to be registered. The registration process involves mapping the wrapper's name to its class and configuration."]}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-Python",children:'from dataclasses import dataclass\r\n\r\nfrom yival.schemas.wrapper_configs import BaseWrapperConfig\r\n\r\n@dataclass\r\nclass NumberWrapperConfig(BaseWrapperConfig):\r\n    """\r\n    Configuration specific to the NumberWrapper.\r\n    """\r\n    pass\n'})}),"\n",(0,i.jsxs)(r.p,{children:["By calling the ",(0,i.jsx)(r.code,{children:"register_wrapper"})," method, the ",(0,i.jsx)(r.code,{children:"NumberWrapper"})," becomes available for use in the experimental framework."]}),"\n",(0,i.jsx)(r.h3,{id:"config",children:"Config"}),"\n",(0,i.jsx)(r.p,{children:"Now you can configure the wrapper in the yml file:"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-YAML",children:"custom_wrappers:\r\n  number_wrapper:\r\n    class: /path/to/number_wrapper.NumberWrapper\r\n    config_cls: /path/to/number_wrapper_config.NumberWrapperConfig\n"})}),"\n",(0,i.jsx)(r.p,{children:"And you should be able to use the wrapper in your code like a string wrapper."}),"\n",(0,i.jsx)(r.h3,{id:"conclusion",children:"Conclusion"}),"\n",(0,i.jsxs)(r.p,{children:["By following this guide, you've successfully created and registered a custom wrapper named ",(0,i.jsx)(r.code,{children:"NumberWrapper"})," in the experimental framework. This flexibility allows you to tailor experiments to specific needs, ensuring accurate and efficient results."]})]})}function d(e={}){const{wrapper:r}={...(0,a.a)(),...e.components};return r?(0,i.jsx)(r,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},1151:(e,r,n)=>{n.d(r,{Z:()=>o,a:()=>s});var i=n(7294);const a={},t=i.createContext(a);function s(e){const r=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),i.createElement(t.Provider,{value:r},e.children)}}}]);