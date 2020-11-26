(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{363:function(s,t,a){"use strict";a.r(t);var n=a(42),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"celery"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#celery"}},[s._v("#")]),s._v(" Celery")]),s._v(" "),a("p",[s._v("Celery is Task Queue for scheduling tasks and workloads.")]),s._v(" "),a("p",[s._v("You probably don't need celery for concurrency, since the Pyot itself gives you high concurrency. In most scenario you will need celery for distributing work across processes or machines, which in Python it can become tricky with "),a("code",[s._v("multiprocessing")]),s._v(" and periodic tasks that can also get tricky with normal cronjobs.")]),s._v(" "),a("p",[s._v("Example usage:")]),s._v(" "),a("ul",[a("li",[s._v("Run a task every day at 4 AM.")]),s._v(" "),a("li",[s._v("Run multiple CPU intense tasks at the same time in a multicore machine")]),s._v(" "),a("li",[s._v("Run the same task in multiple machines.")])]),s._v(" "),a("p",[s._v("Celery itself supports Django.")]),s._v(" "),a("p",[s._v("First you need to follow the "),a("a",{attrs:{href:"https://docs.celeryproject.org/en/stable/getting-started/introduction.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("celery setup guide"),a("OutboundLink")],1),s._v(".")]),s._v(" "),a("p",[s._v("After that, all you need to do is import the celery instance and decorate it as needed.")]),s._v(" "),a("h2",{attrs:{id:"asyncio-issues"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#asyncio-issues"}},[s._v("#")]),s._v(" Asyncio Issues")]),s._v(" "),a("p",[s._v("Celery does not support async functions, there is 2 solution.")]),s._v(" "),a("h3",{attrs:{id:"using-asynctosync-decorator"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#using-asynctosync-decorator"}},[s._v("#")]),s._v(" Using AsyncToSync decorator")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("pip "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" asgiref\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("Wrap the tasks")]),s._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" asgiref"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("sync "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" AsyncToSync\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("celery "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" app\n\n"),a("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[s._v("@app"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("task")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[s._v("@AsyncToSync")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("async")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mytask")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ...")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("h3",{attrs:{id:"calling-asyncio-run"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#calling-asyncio-run"}},[s._v("#")]),s._v(" Calling asyncio.run")]),s._v(" "),a("p",[s._v("This one involves in creating a proxy synchronous function, not so clean. You can also create a decorator that functions similarly to "),a("code",[s._v("AsyncToSync")]),s._v(".")]),s._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" asyncio\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("celery "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" app\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("async")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mytask")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ...")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[s._v("@app"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("task")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("my_proxy_task")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    asyncio"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("run"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("mytask"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);