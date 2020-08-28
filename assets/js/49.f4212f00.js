(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{394:function(t,s,e){"use strict";e.r(s);var a=e(42),n=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"error-handler"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#error-handler"}},[t._v("#")]),t._v(" Error Handler")]),t._v(" "),e("p",[t._v("This argument is available for all the Pyot Store of type "),e("Badge",{attrs:{text:"Pyot Source",vertical:"middle"}})],1),t._v(" "),e("h2",{attrs:{id:"basics"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#basics"}},[t._v("#")]),t._v(" Basics")]),t._v(" "),e("p",[t._v("Accepts a dictionary of status code to tuple of strategy and strategy arguments.")]),t._v(" "),e("blockquote",[e("h4",{attrs:{id:"syntax-mapping-int-tuple-str-list-int"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#syntax-mapping-int-tuple-str-list-int"}},[t._v("#")]),t._v(" Syntax: "),e("code",[t._v("Mapping[int, Tuple[str, List[int]]]")])]),t._v(" "),e("p",[t._v("the key is an integer indentifying the status code, the value is a Tuple that has 2 items, the first item is the strategy token and the second item is a list of arguments passed to the strategy. List of token and accepted arguments:")]),t._v(" "),e("p",[e("code",[t._v('"T"')]),t._v(" (throw on error): "),e("code",[t._v("[]")]),t._v(" No arguments")]),t._v(" "),e("p",[e("code",[t._v('"R"')]),t._v(" (retry a set time): "),e("code",[t._v("[times: int]")]),t._v(" The number of times to retry")]),t._v(" "),e("p",[e("code",[t._v('"E"')]),t._v(" (exponential backoff): "),e("code",[t._v("[initial: int, times: int]")]),t._v(" The number of seconds for initial backoff and the max number of times to backoff. Each backoff will raise the backoff time to the power of 2.")])]),t._v(" "),e("p",[t._v("The functionality of this argument is to define the strategy to use when a non 200 status code is returned for the request made out to other sources. By passing this will override the default strategy specified in the dictionary. For example:")]),t._v(" "),e("div",{staticClass:"language-python line-numbers-mode"},[e("div",{staticClass:"highlight-lines"},[e("br"),e("div",{staticClass:"highlighted"},[t._v(" ")]),e("div",{staticClass:"highlighted"},[t._v(" ")]),e("div",{staticClass:"highlighted"},[t._v(" ")]),e("br"),e("br")]),e("pre",{pre:!0,attrs:{class:"language-python"}},[e("code",[e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ERROR_HANDLING"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("404")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"T"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("502")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"R"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("429")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"E"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br")])]),e("p",[t._v("This will override the strategy used for 404 to throw inmediately, 502 to retry 3 times before throwing and 429 to exponentially backoff with a initial backoff of 3 seconds and a max tries of 3 times.")]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),e("p",[t._v("The Riot Games API can give 3 types of 429: "),e("code",[t._v("service")]),t._v(", "),e("code",[t._v("application")]),t._v(" and "),e("code",[t._v("method")]),t._v(", the one that can be overridden is the "),e("code",[t._v("service")]),t._v(" 429, the other 2 types of 429 is handled by the RiotAPI Ratelimiter.")])]),t._v(" "),e("h2",{attrs:{id:"default-handler"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#default-handler"}},[t._v("#")]),t._v(" Default Handler")]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("INFO")]),t._v(" "),e("p",[t._v("The status code 888 is for identifying unexpected status codes that are not in the list, for example: a 510 will result in a Pyot side 888 for simplicity.")])]),t._v(" "),e("blockquote",[e("p",[e("code",[t._v('400 : ("T", [])')])]),t._v(" "),e("p",[e("code",[t._v('401 : ("T", [])')])]),t._v(" "),e("p",[e("code",[t._v('404 : ("T", [])')])]),t._v(" "),e("p",[e("code",[t._v('403 : ("T", [])')])]),t._v(" "),e("p",[e("code",[t._v('408 : ("E", [3, 3])')])]),t._v(" "),e("p",[e("code",[t._v('429 : ("E", [3, 3])')])]),t._v(" "),e("p",[e("code",[t._v('500 : ("E", [3, 3])')])]),t._v(" "),e("p",[e("code",[t._v('502 : ("R", [3])')])]),t._v(" "),e("p",[e("code",[t._v('503 : ("E", [3, 3])')])]),t._v(" "),e("p",[e("code",[t._v('504 : ("R", [3])')])]),t._v(" "),e("p",[e("code",[t._v('888 : ("T", [])')])])])])}),[],!1,null,null,null);s.default=n.exports}}]);