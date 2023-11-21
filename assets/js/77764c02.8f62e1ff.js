"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[323],{9283:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var t=i(5893),r=i(1151);const s={sidebar_position:1},a="Schema",o={id:"API-Reference/schema",title:"Schema",description:"ExperimentConfig",source:"@site/docs/API-Reference/schema.md",sourceDirName:"API-Reference",slug:"/API-Reference/schema",permalink:"/YiValApi/docs/API-Reference/schema",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/API-Reference/schema.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"API Reference",permalink:"/YiValApi/docs/category/api-reference"},next:{title:"Common Utils",permalink:"/YiValApi/docs/API-Reference/common-utils"}},l={},c=[{value:"<code>ExperimentConfig</code>",id:"experimentconfig",level:2},{value:"Introduction",id:"introduction",level:3},{value:"Class Definition",id:"class-definition",level:3},{value:"Description",id:"description",level:4},{value:"Attributes",id:"attributes",level:4},{value:"Example",id:"example",level:3},{value:"Source Code",id:"source-code",level:3},{value:"<code>InputData</code>",id:"inputdata",level:2},{value:"Introduction",id:"introduction-1",level:3},{value:"Class Definition",id:"class-definition-1",level:3},{value:"Description",id:"description-1",level:4},{value:"Attributes",id:"attributes-1",level:4},{value:"Example",id:"example-1",level:3},{value:"Source Code",id:"source-code-1",level:3}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"schema",children:"Schema"}),"\n",(0,t.jsx)(n.h2,{id:"experimentconfig",children:(0,t.jsx)(n.code,{children:"ExperimentConfig"})}),"\n",(0,t.jsx)(n.h3,{id:"introduction",children:"Introduction"}),"\n",(0,t.jsx)(n.p,{children:"The ExperimentConfig class offers a thorough configuration schema for defining and executing experiments. It encompasses a wide range of experiment components, such as dataset configurations, custom functions, evaluators, trainers, and more."}),"\n",(0,t.jsx)(n.h3,{id:"class-definition",children:"Class Definition"}),"\n",(0,t.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"ExperimentConfig"})," class outlines the configuration for an experiment, capturing both mandatory and optional parameters."]}),"\n",(0,t.jsx)(n.h4,{id:"attributes",children:"Attributes"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"description(str)"})}),":","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"A brief description of the experiment."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"dataset(DatasetConfig)"})}),":","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"The configuration related to the dataset used in the experiment."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"custom_function(Optional[str])"})}),":","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"A custom function for the experiment (if any)."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"variations(Optional[List[WrapperConfig]])"})}),":","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"A list of configurations for different variations or wrappers."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"selection_strategy(Optional[Dict[str, BaseConfig]])"})}),":","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Strategy for selecting specific configurations or variations."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"wrapper_configs(Optional[Dict[str, BaseWrapperConfig]])"})}),":","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Configuration for specific wrappers."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"combinations_to_run(Optional[List[Tuple[str, Any]]])"})}),":","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Specific combinations to execute during the experiment."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"evaluators(Optional[List[Union[EvaluatorConfig, ComparisonEvaluatorConfig, GlobalEvaluatorConfig]])]"})}),":","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Configuration for evaluators that assess the experiment's results."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"improver(Optional[BaseCombinationImproverConfig])"})}),":","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Configuration for the improver to enhance the combinations."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"trainer(Optional[BaseTrainerConfig])"})}),":","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Configuration for training models."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"output(Optional[OutputConfig])"})}),":","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Configuration detailing the experiment's output format and destination."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"human_rating_configs(Optional[List[HumanRatingConfig]])"})}),":","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Configuration for human raters evaluating the experiment."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"existing_experiment_path(Optional[str])"})}),":","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Path to a pre-existing experiment (if any)."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"version(Optional[str])"})}),":","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"The version of the experiment."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"output_parser(Optional[str])"})}),":","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Parser for the experiment's output."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"metadata(Optional[Dict[str, Any]])"})}),":","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Additional metadata related to the experiment."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"custom_reader, custom_combination_improver, custom_data_generators, custom_wrappers, custom_evaluators, custom_variation_generators, custom_selection_strategies, custom_improvers(all Optional[Dict[str, Dict[str, Any]]])"})}),":","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Custom configurations for various components of the experiment. Each custom attribute allows users to define specific configurations tailored to their requirements."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"example",children:"Example"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-YAML",children:'custom_function: yival.demo.qa.qa\r\ndataset:\r\n  file_path: demo/data/yival_expected_results.csv\r\n  reader: csv_reader\r\n  source_type: dataset\r\n  reader_config:\r\n    expected_result_column: expected_result\r\ndescription: Configuration fo question answering with expected results.\r\nevaluators:\r\n  - evaluator_type: individual\r\n    matching_technique: includes\r\n    metric_calculators:\r\n      - method: AVERAGE\r\n    name: string_expected_result\r\n\r\nvariations:\r\n  - name: qa\r\n    variations:\r\n      - instantiated_value: ""\r\n        value: ""\r\n        value_type: str\r\n        variation_id: null\r\n      - instantiated_value: "Think first, then make a decision. Some random thoughts:"\r\n        value: "Think first, then make a decision. Some random thoughts:"\r\n        value_type: str\r\n        variation_id: null\n'})}),"\n",(0,t.jsx)(n.h3,{id:"source-code",children:(0,t.jsx)(n.a,{href:"https://security.larksuite.com/link/safety?target=https%3A%2F%2Fgithub.com%2FYiVal%2FYiVal%2Fblob%2Fmaster%2Fsrc%2Fyival%2Fschemas%2Fexperiment_config.py%23L150&scene=ccm&logParams=%7B",children:"Source Code"})}),"\n",(0,t.jsx)(n.h2,{id:"inputdata",children:(0,t.jsx)(n.code,{children:"InputData"})}),"\n",(0,t.jsx)(n.h3,{id:"introduction-1",children:"Introduction"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"InputData"})," class provides a structured representation of individual data samples used in an experiment. It captures essential attributes like the unique identifier, the actual content (input parameters), and the expected result."]}),"\n",(0,t.jsx)(n.h3,{id:"class-definition-1",children:"Class Definition"}),"\n",(0,t.jsx)(n.h4,{id:"description-1",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"InputData"})," class represents data for a single example in an experiment. It organizes the data into a structured format, making it easier to process and evaluate within the experiment."]}),"\n",(0,t.jsx)(n.h4,{id:"attributes-1",children:"Attributes"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"content(Dict[str, Any])"})}),":","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"A dictionary that encapsulates all the necessary input parameters for a custom function or experiment. This could include features, parameters, or any other required data points."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"example_id(Optional[str])"})}),":","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["A unique identifier for the individual data sample or example. This can be useful for tracking, referencing, or debugging purposes. The default value is ",(0,t.jsx)(n.code,{children:"None"}),"."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"expected_result(Optional[Any])"})}),":","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Represents the expected outcome or result corresponding to the given input. This can be useful for evaluation, comparison, or validation tasks. The default value is ",(0,t.jsx)(n.code,{children:"None"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"example-1",children:"Example"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-YAML",children:'# Sample data representation using InputData\r\n\r\nsample_data = InputData(\r\n    content={\r\n        "feature_1": 5.7,\r\n        "feature_2": 3.2,\r\n        "feature_3": 4.1\r\n    },\r\n    example_id="sample_001",\r\n    expected_result="Class_A"\r\n)\r\n\r\n# In this example, `sample_data` represents an individual data point with three features. The expected result for this data sample is "Class_A", and it is uniquely identified by the ID "sample_001".\n'})}),"\n",(0,t.jsxs)(n.p,{children:["This documentation offers a comprehensive guide to the ",(0,t.jsx)(n.code,{children:"InputData"})," class. Ensure you adapt the specified content, IDs, results, and other parameters to synchronize with your project's structure and requirements."]}),"\n",(0,t.jsx)(n.h3,{id:"source-code-1",children:(0,t.jsx)(n.a,{href:"https://github.com/YiVal/YiVal/blob/99585944bf25aee5a694f00af1baff72f3ceb687/src/yival/schemas/common_structures.py#L7",children:"Source Code"})})]})}function u(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},1151:(e,n,i)=>{i.d(n,{Z:()=>o,a:()=>a});var t=i(7294);const r={},s=t.createContext(r);function a(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);