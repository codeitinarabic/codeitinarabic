(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{"7evw":function(A,e,t){"use strict";t("HAE/"),Object.defineProperty(e,"__esModule",{value:!0}),e.DiscussionEmbed=e.CommentEmbed=e.CommentCount=void 0;var a=t("UZsz"),n=t("Bp/N"),i=t("HhXV");e.CommentCount=a.CommentCount,e.CommentEmbed=n.CommentEmbed,e.DiscussionEmbed=i.DiscussionEmbed;var r={CommentCount:a.CommentCount,CommentEmbed:n.CommentEmbed,DiscussionEmbed:i.DiscussionEmbed};e.default=r},"Bp/N":function(A,e,t){"use strict";t("xfY5"),t("a1Th"),t("h7Nl"),t("Btvt"),t("/SS/"),t("hHhE"),t("HAE/"),Object.defineProperty(e,"__esModule",{value:!0}),e.CommentEmbed=void 0;var a=function(){function A(A,e){for(var t=0;t<e.length;t++){var a=e[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(A,a.key,a)}}return function(e,t,a){return t&&A(e.prototype,t),a&&A(e,a),e}}(),n=r(t("q1tI")),i=r(t("17x9"));function r(A){return A&&A.__esModule?A:{default:A}}function c(A,e){if(!(A instanceof e))throw new TypeError("Cannot call a class as a function")}function o(A,e){if(!A)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?A:e}var s=e.CommentEmbed=function(A){function e(){return c(this,e),o(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return function(A,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);A.prototype=Object.create(e&&e.prototype,{constructor:{value:A,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(A,e):A.__proto__=e)}(e,A),a(e,[{key:"getSrc",value:function(){return"https://embed.disqus.com/p/"+Number(this.props.commentId).toString(36)+"?p="+(this.props.showParentComment?"1":"0")+"&m="+(this.props.showMedia?"1":"0")}},{key:"render",value:function(){return n.default.createElement("iframe",{src:this.getSrc(),width:this.props.width,height:this.props.height,seamless:"seamless",scrolling:"no",frameBorder:"0"})}}]),e}(n.default.Component);s.defaultProps={showMedia:!0,showParentComment:!0,width:420,height:320},s.propTypes={commentId:i.default.string.isRequired,showMedia:i.default.bool,showParentComment:i.default.bool,width:i.default.number,height:i.default.number}},EH9Q:function(A){A.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"title":"Codeit in Arabic","description":"Learn code in arabic, articles in learning programming in arabic. step by step tutorials in arabic for beginners in learning how to code.","author":"waEl Hagag"}}}}')},HhXV:function(A,e,t){"use strict";t("8+KV"),t("/SS/"),t("hHhE"),t("91GP"),t("HAE/"),Object.defineProperty(e,"__esModule",{value:!0}),e.DiscussionEmbed=void 0;var a=Object.assign||function(A){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(A[a]=t[a])}return A},n=function(){function A(A,e){for(var t=0;t<e.length;t++){var a=e[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(A,a.key,a)}}return function(e,t,a){return t&&A(e.prototype,t),a&&A(e,a),e}}(),i=o(t("q1tI")),r=o(t("17x9")),c=t("ZMnY");function o(A){return A&&A.__esModule?A:{default:A}}function s(A,e){if(!(A instanceof e))throw new TypeError("Cannot call a class as a function")}function d(A,e){if(!A)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?A:e}var f=["preData","preInit","onInit","onReady","afterRender","preReset","onIdentify","beforeComment","onNewComment","onPaginate"];(e.DiscussionEmbed=function(A){function e(){return s(this,e),d(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return function(A,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);A.prototype=Object.create(e&&e.prototype,{constructor:{value:A,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(A,e):A.__proto__=e)}(e,A),n(e,[{key:"componentDidMount",value:function(){"undefined"!=typeof window&&window.disqus_shortname&&window.disqus_shortname!==this.props.shortname&&this.cleanInstance(),this.loadInstance()}},{key:"shouldComponentUpdate",value:function(A){return this.props!==A&&(0,c.shallowComparison)(this.props,A)}},{key:"componentDidUpdate",value:function(A){this.props.shortname!==A.shortname&&this.cleanInstance(),this.loadInstance()}},{key:"loadInstance",value:function(){var A=window.document;window&&window.DISQUS&&A.getElementById("dsq-embed-scr")?window.DISQUS.reset({reload:!0,config:this.getDisqusConfig(this.props.config)}):(window.disqus_config=this.getDisqusConfig(this.props.config),window.disqus_shortname=this.props.shortname,(0,c.insertScript)("https://"+this.props.shortname+".disqus.com/embed.js","dsq-embed-scr",A.body))}},{key:"cleanInstance",value:function(){var A=window.document;(0,c.removeScript)("dsq-embed-scr",A.body),window&&window.DISQUS&&window.DISQUS.reset({});try{delete window.DISQUS}catch(t){window.DISQUS=void 0}var e=A.getElementById("disqus_thread");if(e)for(;e.hasChildNodes();)e.removeChild(e.firstChild)}},{key:"getDisqusConfig",value:function(A){return function(){var e=this;this.page.identifier=A.identifier,this.page.url=A.url,this.page.title=A.title,this.page.remote_auth_s3=A.remoteAuthS3,this.page.api_key=A.apiKey,f.forEach((function(t){e.callbacks[t]=[A[t]]}))}}},{key:"render",value:function(){return i.default.createElement("div",a({},this.props,{id:"disqus_thread"}))}}]),e}(i.default.Component)).propTypes={shortname:r.default.string.isRequired,config:r.default.shape({identifier:r.default.string,url:r.default.string,title:r.default.string,preData:r.default.func,preInit:r.default.func,onInit:r.default.func,onReady:r.default.func,afterRender:r.default.func,preReset:r.default.func,onIdentify:r.default.func,beforeComment:r.default.func,onNewComment:r.default.func,onPaginate:r.default.func}).isRequired}},UZsz:function(A,e,t){"use strict";t("/SS/"),t("hHhE"),t("HAE/"),Object.defineProperty(e,"__esModule",{value:!0}),e.CommentCount=void 0;var a=function(){function A(A,e){for(var t=0;t<e.length;t++){var a=e[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(A,a.key,a)}}return function(e,t,a){return t&&A(e.prototype,t),a&&A(e,a),e}}(),n=c(t("q1tI")),i=c(t("17x9")),r=t("ZMnY");function c(A){return A&&A.__esModule?A:{default:A}}function o(A,e){if(!(A instanceof e))throw new TypeError("Cannot call a class as a function")}function s(A,e){if(!A)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?A:e}var d=(0,r.debounce)((function(){window.DISQUSWIDGETS&&window.DISQUSWIDGETS.getCount({reset:!0})}),300,!1);(e.CommentCount=function(A){function e(){return o(this,e),s(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return function(A,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);A.prototype=Object.create(e&&e.prototype,{constructor:{value:A,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(A,e):A.__proto__=e)}(e,A),a(e,[{key:"componentDidMount",value:function(){this.loadInstance()}},{key:"shouldComponentUpdate",value:function(A){return this.props!==A&&(0,r.shallowComparison)(this.props,A)}},{key:"componentDidUpdate",value:function(A){this.props.shortname!==A.shortname&&this.cleanInstance(),this.loadInstance()}},{key:"loadInstance",value:function(){var A=window.document;A.getElementById("dsq-count-scr")?d():(0,r.insertScript)("https://"+this.props.shortname+".disqus.com/count.js","dsq-count-scr",A.body)}},{key:"cleanInstance",value:function(){var A=window.document.body;(0,r.removeScript)("dsq-count-scr",A),window.DISQUSWIDGETS=void 0}},{key:"render",value:function(){return n.default.createElement("span",{className:"disqus-comment-count","data-disqus-identifier":this.props.config.identifier,"data-disqus-url":this.props.config.url},this.props.children)}}]),e}(n.default.Component)).propTypes={shortname:i.default.string.isRequired,config:i.default.shape({identifier:i.default.string,url:i.default.string,title:i.default.string}).isRequired}},VJ7Y:function(A){A.exports=JSON.parse('{"data":{"allMarkdownRemark":{"edges":[{"node":{"id":"9d95ce0a-8cd8-52c5-8eb6-53d0656167ce","fields":{"slug":"/الجملة الشرطية أو if statement"},"frontmatter":{"tags":["إطار العمل","تعلم البرمجة"],"title":"الجملة الشرطية أو if statement ومتي يمكن أستخدامها","date":"2020-03-19","category":["لغات البرمجة"],"image":{"childImageSharp":{"fluid":{"base64":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAKABQDASIAAhEBAxEB/8QAGQAAAgMBAAAAAAAAAAAAAAAAAAMBAgQF/8QAFQEBAQAAAAAAAAAAAAAAAAAAAQD/2gAMAwEAAhADEAAAAePZWglEg//EABgQAQEAAwAAAAAAAAAAAAAAAAExABAh/9oACAEBAAEFAi90YVv/xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAEDAQE/AT//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAECAQE/AT//xAAWEAADAAAAAAAAAAAAAAAAAAAAICH/2gAIAQEABj8CKv8A/8QAGxAAAgIDAQAAAAAAAAAAAAAAABEBQSFRgWH/2gAIAQEAAT8h1N+EvTqOQWIRiqMZI//aAAwDAQACAAMAAAAQX/8A/8QAFREBAQAAAAAAAAAAAAAAAAAAARD/2gAIAQMBAT8QCf/EABURAQEAAAAAAAAAAAAAAAAAAAEQ/9oACAECAQE/EGf/xAAdEAEAAwABBQAAAAAAAAAAAAABABExQSFRYXGB/9oACAEBAAE/EHdghnRd/ZcLG+yHd/Sza8TBK41EiSBwT//Z","aspectRatio":2.1,"src":"/static/a628fbfc62f548e987f336ecdb5ddb96/0621a/if-stnt.jpg","srcSet":"/static/a628fbfc62f548e987f336ecdb5ddb96/f8fcd/if-stnt.jpg 63w,\\n/static/a628fbfc62f548e987f336ecdb5ddb96/eaae9/if-stnt.jpg 125w,\\n/static/a628fbfc62f548e987f336ecdb5ddb96/0621a/if-stnt.jpg 250w,\\n/static/a628fbfc62f548e987f336ecdb5ddb96/79c0d/if-stnt.jpg 375w,\\n/static/a628fbfc62f548e987f336ecdb5ddb96/5a639/if-stnt.jpg 480w","sizes":"(max-width: 250px) 100vw, 250px"}}}}}},{"node":{"id":"fac8afa8-5f3f-5907-b053-db0ad33d5ada","fields":{"slug":"/هل يمكن تطوير تطبيقات المحمول بلغات الويب ؟"},"frontmatter":{"tags":["إطار العمل","تطوير تطبيقات الموبايل","رأكت نيتف","فلاتر جوجل"],"title":"هل يمكن تطوير تطبيقات المحمول بلغات الويب ؟","date":"2020-03-18","category":["تطوير تطبيقات المحمول"],"image":{"childImageSharp":{"fluid":{"base64":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAKABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAQBAv/EABYBAQEBAAAAAAAAAAAAAAAAAAMCBP/aAAwDAQACEAMQAAABoj3l8YWf/8QAGRAAAgMBAAAAAAAAAAAAAAAAAREAEBMS/9oACAEBAAEFAsxgjEZ0U6//xAAWEQADAAAAAAAAAAAAAAAAAAACEEH/2gAIAQMBAT8BOL//xAAVEQEBAAAAAAAAAAAAAAAAAAACEP/aAAgBAgEBPwEz/8QAGhAAAgIDAAAAAAAAAAAAAAAAEBEAARIxQf/aAAgBAQAGPwLJcmgnaP8A/8QAHRAAAgICAwEAAAAAAAAAAAAAABEBIVFhMUGBof/aAAgBAQABPyHpLu9m5w/CaKmz40Y2ZwOcn//aAAwDAQACAAMAAAAQ9w//xAAXEQEBAQEAAAAAAAAAAAAAAAABABGR/9oACAEDAQE/ECcWF//EABgRAAIDAAAAAAAAAAAAAAAAAAABETFx/9oACAECAQE/EGvST//EAB8QAAEDBAMBAAAAAAAAAAAAAAEAESExQVFxYYGRof/aAAgBAQABPxD6eLyWDQ+tIIERAHEVC48NMzaXTC62ETMCUBhNF//Z","aspectRatio":2.1,"src":"/static/1564964e6bc8f5824e638938798f101b/0621a/react-native-crop.jpg","srcSet":"/static/1564964e6bc8f5824e638938798f101b/f8fcd/react-native-crop.jpg 63w,\\n/static/1564964e6bc8f5824e638938798f101b/eaae9/react-native-crop.jpg 125w,\\n/static/1564964e6bc8f5824e638938798f101b/0621a/react-native-crop.jpg 250w,\\n/static/1564964e6bc8f5824e638938798f101b/79c0d/react-native-crop.jpg 375w,\\n/static/1564964e6bc8f5824e638938798f101b/bd63a/react-native-crop.jpg 500w,\\n/static/1564964e6bc8f5824e638938798f101b/b66a4/react-native-crop.jpg 600w","sizes":"(max-width: 250px) 100vw, 250px"}}}}}},{"node":{"id":"f7b3fb8d-d0ba-5d5e-b7b2-6aafabb7630c","fields":{"slug":"/لماذا يجب ان تستخدم إطار عمل؟"},"frontmatter":{"tags":["إطار العمل"],"title":"لماذا يجب ان تستخدم إطار عمل؟","date":"2020-03-14","category":["تطوير تطبيقات الويب"],"image":{"childImageSharp":{"fluid":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAAA7EAAAOxAGVKw4bAAACiElEQVQozyWSyU9TYRTF+/f4N7gxcePOuDAxblypiRo33ZAYI0QJRAaZCi10fi00bR9DmTqX15aW1xakdHqlBcXEIWlYmhgXP+/DxX35vu/de+4591yLv2jgLxi4M3U86c84S5ekPR6urQ9QN9P49G9EtD6BbBNH3qA9+5ZfE68IpI7xHDRxp09xpk7w5hooxS4WX+E/oPloT1Rxak1Wc3U2NhN4s2csrB8QOLpkPppiJppGzdaIbMYFrMFC/JgVAXbEa7glVymeY/ELakAOPilKWd+xOzKN66iP46AtDU5wJISJdHdl6zik6aIw9Uj+p2SD51s9PqTOCemX+A77QswEzHfxayJZLurHJVT7GrakSAhGSGQ1FDXO2GKUyZUtojsasb0ktuAGjsIF1libqWRLCHXxSr1S7GFxpuvY93WccR1vScArV8yoGv2LL7i9Co9fWrn/dBh95xH0b8HvAv6dkrA+IyD5S1oLmzD/L7lvSu4RLPV4EWnyLCimJCrMbx1iGOe8j+dYHnmNf85G43CIgX6bP4MCq7sllsREdTtPc3SY6J6Gp3yBYko2aZpxd/GYO7YKSrnH7LqG3jYY/zEgU5OzfkrKmOJNdp7892uCsSSO8ldSAZW/T+6RDG/jEmWBvOmyfJR8B3umjS3fw51vibNZZkJhAVaZVDcYD6tMRAKMR8JMhaPMhWI49o4IFlusyWZ4pd4ncWOKJ9diabd8M4Pt7CkRmYdy2CNT7ZLWmxRqHX4abXqtLrlal4Nqi1jlHHuyzlioymJcNiFeZVlWxyd7ajF1mwB+rcMgEuJKVXEWTKYGKxLmv/1an61KH5e8O0VFsNxlNGTwcKjO9GaHNRmTyc6Mf8IDdGDGrBL+AAAAAElFTkSuQmCC","aspectRatio":2.1,"src":"/static/167c0f10a8e4324466e9b50faf2856b5/917d0/fr-wk-codeit.png","srcSet":"/static/167c0f10a8e4324466e9b50faf2856b5/dd440/fr-wk-codeit.png 63w,\\n/static/167c0f10a8e4324466e9b50faf2856b5/c61ee/fr-wk-codeit.png 125w,\\n/static/167c0f10a8e4324466e9b50faf2856b5/917d0/fr-wk-codeit.png 250w,\\n/static/167c0f10a8e4324466e9b50faf2856b5/63aa4/fr-wk-codeit.png 375w,\\n/static/167c0f10a8e4324466e9b50faf2856b5/28b0f/fr-wk-codeit.png 383w","sizes":"(max-width: 250px) 100vw, 250px"}}}}}},{"node":{"id":"5223c73b-4343-5ba7-881b-d4d0c3428dc9","fields":{"slug":"/أفضل أربعة لغات برمجية لتعلمها في 2020"},"frontmatter":{"tags":["البرمجة","تطوير المواقع","لغات البرمجة"],"title":"أفضل أربعة لغات برمجية لتعلمها في 2020","date":"2020-02-19","category":["لغات البرمجة"],"image":{"childImageSharp":{"fluid":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAIAAAA7N+mxAAAACXBIWXMAAAsSAAALEgHS3X78AAABdklEQVQoz2WSS67BYBTHuwuJN7f1iEdVqAoqVS5SEamJWYcdGIgdkBgLC7ADczuxgy7ADvyuD/d1Bl++fOf8Xz2V0r8rlUrJsqwoCufHq8Q9/a+k901+FGBVVYfDoWEYzWaTczKZ2LbNYzKZlH/UEwxrJpP5fNVgMJjNZtPpdDQa6brebrcF3rIsWqZpRiKRcDgMSoKjWCwCzufzlUpFALrdLuL9fp9HMFgYj8eO45RKpUajsV6vF4sFRiTigQGPhVgsxjREhUKBx+12u9vtarVaLpeDEWQoFCqXy9fr9Xw+Iy5ls1lsLJfL/X5PLx6Pa5qGMkNBENxuN2DMgIQCX71ez/d913W/bNNAkJCbzUa4oDqdDnGgO51O1WoVI/P5nOSchEcTCMOSWAa3aDQK5ng8AmYaevRbrRbfGfzlciEFGKKiJzb3XJWgqNfrnudBtFqtDocDexILp0iBc+VR751/71nok5lVI0g8BBOJhOhyQfPPT3IHqdWBbaOBJy0AAAAASUVORK5CYII=","aspectRatio":2.1,"src":"/static/61066479675913b437116de832f3eeac/917d0/top_4_language_2020.png","srcSet":"/static/61066479675913b437116de832f3eeac/dd440/top_4_language_2020.png 63w,\\n/static/61066479675913b437116de832f3eeac/c61ee/top_4_language_2020.png 125w,\\n/static/61066479675913b437116de832f3eeac/917d0/top_4_language_2020.png 250w,\\n/static/61066479675913b437116de832f3eeac/63aa4/top_4_language_2020.png 375w,\\n/static/61066479675913b437116de832f3eeac/30bed/top_4_language_2020.png 500w,\\n/static/61066479675913b437116de832f3eeac/c8f23/top_4_language_2020.png 560w","sizes":"(max-width: 250px) 100vw, 250px"}}}}}},{"node":{"id":"038bfb7a-90cc-5549-8115-df0fd586be46","fields":{"slug":"/ماهي اللغة البرمجية المناسبة الي ابدأ بها تعلم البرمجة؟"},"frontmatter":{"tags":["إطار العمل","تعلم البرمجة","تطوير المواقع","تطوير واجهة المستخدم"],"title":"ماهي اللغة البرمجية المناسبة الي ابدأ بها تعلم البرمجة؟","date":"2020-02-16","category":["لغات البرمجة"],"image":{"childImageSharp":{"fluid":{"base64":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAKABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAABAACA//EABYBAQEBAAAAAAAAAAAAAAAAAAIABP/aAAwDAQACEAMQAAABdvqYk8W1X//EABsQAAIBBQAAAAAAAAAAAAAAAAACQQEREiEx/9oACAEBAAEFAqd2PfKHI//EABgRAAIDAAAAAAAAAAAAAAAAAAABERIh/9oACAEDAQE/AZ0u0f/EABYRAQEBAAAAAAAAAAAAAAAAAAABAv/aAAgBAgEBPwGJl//EABwQAAICAgMAAAAAAAAAAAAAAAABQVEQEiFx8P/aAAgBAQAGPwJLbllQTj1C6P/EABwQAQADAAIDAAAAAAAAAAAAAAEAESExQXGBof/aAAgBAQABPyGvZD6loBu3J1fENtMG6iTBog+af//aAAwDAQACAAMAAAAQz/8A/8QAGBEBAQADAAAAAAAAAAAAAAAAAQARIUH/2gAIAQMBAT8QXodlmL//xAAWEQEBAQAAAAAAAAAAAAAAAAABABH/2gAIAQIBAT8Qyg5Cg3//xAAeEAEAAgICAwEAAAAAAAAAAAABABEhMUFRYXGB4f/aAAgBAQABPxBh4odogM16gneWWiYeH2YYyjrqASl4587jqqjQ0bxux/Cf/9k=","aspectRatio":2.1,"src":"/static/da6df8ad71b221837185bbf843d37251/0621a/lang-codeit.jpg","srcSet":"/static/da6df8ad71b221837185bbf843d37251/f8fcd/lang-codeit.jpg 63w,\\n/static/da6df8ad71b221837185bbf843d37251/eaae9/lang-codeit.jpg 125w,\\n/static/da6df8ad71b221837185bbf843d37251/0621a/lang-codeit.jpg 250w,\\n/static/da6df8ad71b221837185bbf843d37251/79c0d/lang-codeit.jpg 375w,\\n/static/da6df8ad71b221837185bbf843d37251/bd63a/lang-codeit.jpg 500w,\\n/static/da6df8ad71b221837185bbf843d37251/f8c19/lang-codeit.jpg 701w","sizes":"(max-width: 250px) 100vw, 250px"}}}}}},{"node":{"id":"e2089d59-aea8-5bf3-bdf0-665d615dc76f","fields":{"slug":"/كم ساعة يحتاجها المبرمج المبتدأ لتعلم البرمجة؟"},"frontmatter":{"tags":["تعلم البرمجة","تطوير المواقع","تطوير واجهة المستخدم"],"title":"كم ساعة يحتاجها المبرمج المبتدأ لتعلم البرمجة؟","date":"2020-02-15","category":["لغات البرمجة"],"image":{"childImageSharp":{"fluid":{"base64":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAKABQDASIAAhEBAxEB/8QAGAAAAwEBAAAAAAAAAAAAAAAAAAEDAgT/xAAWAQEBAQAAAAAAAAAAAAAAAAABAAL/2gAMAwEAAhADEAAAAbPn04sIL//EABwQAAEDBQAAAAAAAAAAAAAAAAABAgMREiEyQf/aAAgBAQABBQKly8wSjNT/xAAVEQEBAAAAAAAAAAAAAAAAAAAQQf/aAAgBAwEBPwGH/8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAgEBPwE//8QAGBAAAgMAAAAAAAAAAAAAAAAAABESIDH/2gAIAQEABj8CUkbX/8QAHhAAAQMEAwAAAAAAAAAAAAAAABExUQEhQWFxkbH/2gAIAQEAAT8h7v5GybkSRah6lGP/2gAMAwEAAgADAAAAEKfv/8QAFREBAQAAAAAAAAAAAAAAAAAAARD/2gAIAQMBAT8QWP/EABcRAQADAAAAAAAAAAAAAAAAAAEQESH/2gAIAQIBAT8QDbj/xAAbEAEAAgMBAQAAAAAAAAAAAAABABEhMXGR8f/aAAgBAQABPxAGYoUbB9EAABX7S/YetRqQoi0nGYoMAK8muf/Z","aspectRatio":2.1,"src":"/static/447c8280fb2b8e3ed950c24f7f24fb5b/0621a/tim-codeit.jpg","srcSet":"/static/447c8280fb2b8e3ed950c24f7f24fb5b/f8fcd/tim-codeit.jpg 63w,\\n/static/447c8280fb2b8e3ed950c24f7f24fb5b/eaae9/tim-codeit.jpg 125w,\\n/static/447c8280fb2b8e3ed950c24f7f24fb5b/0621a/tim-codeit.jpg 250w,\\n/static/447c8280fb2b8e3ed950c24f7f24fb5b/79c0d/tim-codeit.jpg 375w,\\n/static/447c8280fb2b8e3ed950c24f7f24fb5b/bd63a/tim-codeit.jpg 500w,\\n/static/447c8280fb2b8e3ed950c24f7f24fb5b/06202/tim-codeit.jpg 626w","sizes":"(max-width: 250px) 100vw, 250px"}}}}}},{"node":{"id":"86c8a403-a7d2-57a0-a53b-a8a2712734f5","fields":{"slug":"/ما هي مواصفات جهاز الحاسوب الذي يحتاجة المبرمج؟"},"frontmatter":{"tags":["أطار العمل"],"title":"ما هي مواصفات جهاز الحاسوب الذي يحتاجة المبرمج؟","date":"2020-02-12","category":["بيئة العمل"],"image":{"childImageSharp":{"fluid":{"base64":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAKABQDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABAAB/8QAFgEBAQEAAAAAAAAAAAAAAAAAAgAB/9oADAMBAAIQAxAAAAECysyyyR//xAAaEAACAgMAAAAAAAAAAAAAAAABAgAyAxEh/9oACAEBAAEFAgNs6DGVPGuKGf/EABcRAAMBAAAAAAAAAAAAAAAAAAABAgP/2gAIAQMBAT8BHjLP/8QAFxEBAAMAAAAAAAAAAAAAAAAAAAERE//aAAgBAgEBPwG20v/EABwQAAEDBQAAAAAAAAAAAAAAAAABAhAREjFBgf/aAAgBAQAGPwK2om+GFhsf/8QAHBAAAwEAAgMAAAAAAAAAAAAAAAEhETFBUWFx/9oACAEBAAE/IX3c00B0vQzbyQiIU98nX4f/2gAMAwEAAgADAAAAEOjP/8QAFhEBAQEAAAAAAAAAAAAAAAAAAREA/9oACAEDAQE/EElMpXf/xAAYEQEBAAMAAAAAAAAAAAAAAAABABEhUf/aAAgBAgEBPxDUHsCYC//EABsQAQEBAQEAAwAAAAAAAAAAAAERIQAxQXGR/9oACAEBAAE/EArgjNnVYoo0dgmvOBlWIZ+/fJ2aCzO+YENX114FweO//9k=","aspectRatio":2.1,"src":"/static/871992adb1aebd16d585b4147702c04c/0621a/angular.jpg","srcSet":"/static/871992adb1aebd16d585b4147702c04c/f8fcd/angular.jpg 63w,\\n/static/871992adb1aebd16d585b4147702c04c/eaae9/angular.jpg 125w,\\n/static/871992adb1aebd16d585b4147702c04c/0621a/angular.jpg 250w,\\n/static/871992adb1aebd16d585b4147702c04c/79c0d/angular.jpg 375w,\\n/static/871992adb1aebd16d585b4147702c04c/52e13/angular.jpg 436w","sizes":"(max-width: 250px) 100vw, 250px"}}}}}},{"node":{"id":"d11f3aaf-9cdf-5a25-a72f-bec1cc3cffea","fields":{"slug":"/ما هو ال Static Page Generator ولماذا نعيد استخدام ال Static Page مرة أخري؟"},"frontmatter":{"tags":["إطار العمل","تطوير المواقع","رأكت جي اس","تطوير واجهة المستخدم"],"title":"ما هو ال Static Page Generator ولماذا نعيد استخدام ال Static Page مرة أخري؟","date":"2019-01-29","category":["تطوير تطبيقات الويب"],"image":{"childImageSharp":{"fluid":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAAA7EAAAOxAGVKw4bAAACJUlEQVQoz3WS7UtTcRTH7/9XUG8jetmLkMoiLCKwByGaEUZmlAhavYiMEMOca2Aq+dicDh+WUzfdU267d3fbfX7w42/X0kS6cDjn93A/v3O+50ieZ6KoMp5rUHdMTNfE9k0aIjaMOg2thqbXcMX5/r4dGDinYnBBeMm2dcYnpvHNOmOKzbLm4uu7pFKbxFfWmY8nAivLZfGTdwJ2DLVxfRtHV5F0q0G2WsQU4PXfJbZlBVfANbWCI7K1LC3wjmOgmw1s4f9C/SOgRyafp1gpIxX1EqH5z8GliegYicU5qtUyo5EIirxHPrdDpVTAd3VkVWFzN3sEa5bpeZZ40BCSmGK9j9Q3FObsjQdc6XjJ9cevaOnopu1ZH7ee9nK3q5+WR91cvNNJZ/9gAAhgorxsschScoO60Li5r2kqmXIVaSn5i/dfonwMjzMyOcvIxIzwM4yKeFjEg99/MDD8janYcgDTRKPUhkp8fYPoTIx0LochZFFrCluFPSTwOfn52K7F4b5ogiwfnZSUCmmh1ezyKpHpBSbFI1+n5ljb2j7ssrgvNQNL1B61fZoqVN0GreEw2eZqMcnemdv46WwAtC39eEQCc/54n51CgYoYPymTz7GQTDG0tsnP1BYb6QyfEjFWdjKsxhLMhgaIi4xS2d1TM/jvLNq2Sc2oIPV8GObc1YdcanvC5fbn3HvxlrZQLzdDb7gWes2F9i7Ot3Zwv+fdf2HHWXscACTO1SMhSq2mAAAAAElFTkSuQmCC","aspectRatio":2.1,"src":"/static/5ae132f3137c768717fb54ff20380a86/917d0/static_page_gen.png","srcSet":"/static/5ae132f3137c768717fb54ff20380a86/dd440/static_page_gen.png 63w,\\n/static/5ae132f3137c768717fb54ff20380a86/c61ee/static_page_gen.png 125w,\\n/static/5ae132f3137c768717fb54ff20380a86/917d0/static_page_gen.png 250w,\\n/static/5ae132f3137c768717fb54ff20380a86/63aa4/static_page_gen.png 375w,\\n/static/5ae132f3137c768717fb54ff20380a86/30bed/static_page_gen.png 500w,\\n/static/5ae132f3137c768717fb54ff20380a86/3c564/static_page_gen.png 640w","sizes":"(max-width: 250px) 100vw, 250px"}}}}}},{"node":{"id":"7ebc863c-d2fd-510f-8aa1-bde6f6f03ba6","fields":{"slug":"/الأنظمة الوهمية Virtualization Technology ماهي ولماذا نحتاج اليها؟"},"frontmatter":{"tags":["إطار العمل","سيرفرات الإستضافة"],"title":"الأنظمة الوهمية Virtualization Technology ماهي ولماذا نحتاج اليها؟","date":"2019-01-29","category":["بيئة العمل"],"image":{"childImageSharp":{"fluid":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAAA7EAAAOxAGVKw4bAAACSElEQVQozzWSW1PaUBSF+Sd9sFPttEq5hDskkEDIFUgggAIiKkRHR6vo2LFKq055bN/6c1dXDtOHPSezz9nfXmvvxBQnwKdMEe8+xpFVbcQLCnKqhZxmwQqOUNLbeB9PYy8vI1vTkWdeqjZx8/iK1fo3pJqBiulBsbso6C5idW9KSBUfElkme6JQaw3Q6OwjWa5D98dQ3QGSFQ1pWWOzJlL8vnl8wfrPX6SVJqpODwoj33AQc0cXKBsBPmdlJvuEaMjUTCRKKh8GKDRcZKomKoaHRFnlvYqdVB66N8RgFrKuQtU28nUbstVFrGT0qFDFdrIA2R4QZhHSQpFWoxHkVAe7OQXxoiqKIruT8BKj03O4gwns/oSC+JajyNdpOat12EXF1q6EYrPLZIvANkpNj51dzs2mRZ3KGjB6E7QPjrH4+oCrhxUu7r9jfv0A/zBEdxqKulim5hCoYGtPYiefA/apzke56UNSDMIanN8m5tffcLdaE/SE5dMr4w3L5zVun36JM3IWk2oevpRMbCcK0NoTqK19FBsewV1hOQLucWkJLsgeHoswg0OqHTMO4ezP4R4sYA2ON5bTiike76SK0DpjQkdU6Am1BdqPZiqAJQ2t0QKdSQhnOINNgDM8hT+9RG92xfNiozApO0hUDP6LMtQ2gZ0R59cVwKhjBEzJumhq9Kaw+kcw+//PI7THZwLYmZxvFEpVS9iL5mX0T2AEM64/4D/ZF4uJ7nKaQzUnWCx/Yn67Qrhc4Ywxv31m7gfO7t8Q3r0QfIl/J2l74Ku8wX4AAAAASUVORK5CYII=","aspectRatio":2.1,"src":"/static/3002c527ac0d2b8f8a1729e5fe4ca1dc/917d0/virt_codeit.png","srcSet":"/static/3002c527ac0d2b8f8a1729e5fe4ca1dc/dd440/virt_codeit.png 63w,\\n/static/3002c527ac0d2b8f8a1729e5fe4ca1dc/c61ee/virt_codeit.png 125w,\\n/static/3002c527ac0d2b8f8a1729e5fe4ca1dc/917d0/virt_codeit.png 250w,\\n/static/3002c527ac0d2b8f8a1729e5fe4ca1dc/63aa4/virt_codeit.png 375w,\\n/static/3002c527ac0d2b8f8a1729e5fe4ca1dc/6f592/virt_codeit.png 416w","sizes":"(max-width: 250px) 100vw, 250px"}}}}}}]}}}')},ZMnY:function(A,e,t){"use strict";t("rE2o"),t("ioFf"),t("RW0V"),t("rGqo"),t("yt8O"),t("Btvt"),t("XfO3"),t("T39b"),t("dZ+Y"),t("LK8F"),t("HAE/"),Object.defineProperty(e,"__esModule",{value:!0}),e.insertScript=function(A,e,t){var a=window.document.createElement("script");return a.async=!0,a.src=A,a.id=e,t.appendChild(a),a},e.removeScript=function(A,e){var t=window.document.getElementById(A);t&&e.removeChild(t)},e.debounce=function(A,e,t){var a=void 0;return function(){var n=this,i=arguments,r=function(){a=null,t||A.apply(n,i)},c=t&&!a;window.clearTimeout(a),a=setTimeout(r,e),c&&A.apply(n,i)}},e.isReactElement=r,e.shallowComparison=function(A,e){var t=new Set(Object.keys(A),Object.keys(e)),a=!0,n=!1,i=void 0;try{for(var c,o=t[Symbol.iterator]();!(a=(c=o.next()).done);a=!0){var s=c.value;if(A[s]!==e[s]&&!r(A[s]))return!0}}catch(d){n=!0,i=d}finally{try{!a&&o.return&&o.return()}finally{if(n)throw i}}return!1};var a,n=t("q1tI"),i=(a=n)&&a.__esModule?a:{default:a};function r(A){return!!i.default.isValidElement(A)||!!Array.isArray(A)&&A.some((function(A){return i.default.isValidElement(A)}))}},vrFN:function(A,e,t){"use strict";var a=t("EH9Q"),n=t("q1tI"),i=t.n(n),r=t("TJpk"),c=t.n(r);function o(A){var e=A.description,t=A.lang,n=A.meta,r=A.title,o=a.data.site,s=e||o.siteMetadata.description;return i.a.createElement(c.a,{htmlAttributes:{lang:t},title:r,titleTemplate:"%s | "+o.siteMetadata.title,meta:[{name:"description",content:s},{property:"og:title",content:r},{property:"og:description",content:s},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:o.siteMetadata.author},{name:"twitter:title",content:r},{name:"twitter:description",content:s}].concat(n)})}o.defaultProps={lang:"en",meta:[],description:""},e.a=o},yZlL:function(A,e,t){"use strict";t.r(e),t.d(e,"default",(function(){return E})),t.d(e,"postQuery",(function(){return b}));var a=t("q1tI"),n=t.n(a),i=t("Wbzz"),r=t("9eSz"),c=t.n(r),o=t("N1om"),s=t.n(o),d=t("7evw"),f=t("vrFN"),l=t("Bl7J"),u=t("WQqN"),g=(t("a1Th"),t("Btvt"),t("VJ7Y")),p=function(A){var e=A.postSlug,t=A.postCat,a=g.data.allMarkdownRemark.edges;return n.a.createElement("div",{className:"row",dir:"rtl"},a.filter((function(A){return A.node.fields.slug!==e&&A.node.frontmatter.category.toString()===t.toString()})).slice(0,3).map((function(A){return n.a.createElement("div",{key:A.node.fields.slug,className:"col-md-4"},n.a.createElement("div",{className:"home-article"},n.a.createElement(i.Link,{to:A.node.fields.slug,style:{textDecoration:"none"}},n.a.createElement(c.a,{className:"articleimg",fluid:A.node.frontmatter.image.childImageSharp.fluid}),n.a.createElement("div",{className:"text-secondary"},A.node.frontmatter.title)),n.a.createElement("div",null,n.a.createElement("em",null,n.a.createElement("i",{className:"far fa-calendar-alt"})," ",A.node.frontmatter.date),n.a.createElement("br",null),n.a.createElement("em",null,n.a.createElement("i",{className:"fas fa-clipboard-list"})," ",A.node.frontmatter.category))),n.a.createElement("br",null))})))};var m=function(A){var e,t;function a(){return A.apply(this,arguments)||this}return t=A,(e=a).prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t,a.prototype.render=function(){return n.a.createElement("i",{id:"like-botton",onClick:function(){var A=document.getElementById("like-botton");"fas fa-heart"===A.className?(A.setAttribute("class","far fa-heart"),A.innerHTML=""):"far fa-heart"===A.className&&(A.setAttribute("class","fas fa-heart"),A.innerHTML=" معجب به")},style:{cursor:"pointer",color:"#FF0000"},className:"far fa-heart","aria-hidden":"true"})},a}(a.Component);function E(A){var e=A.data.markdownRemark,t=e.frontmatter.category,a={identifier:e.id,title:e.frontmatter.title};return n.a.createElement(l.a,null,n.a.createElement(f.a,{title:e.frontmatter.title,description:e.excerpt}),n.a.createElement("div",{className:"d-flex justify-content-center"},n.a.createElement("div",{className:"col-md-8"},n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("h2",null,n.a.createElement("b",{dir:"auto"},n.a.createElement("i",{className:"far fa-bookmark"})," ",e.frontmatter.title,n.a.createElement("br",null)))," ",n.a.createElement(i.Link,{to:"/category/"+s()(t)}," ",n.a.createElement("span",{className:"badge badge-info"},t," ",n.a.createElement("i",{className:"fas fa-clipboard-list"})))," ",n.a.createElement("span",{className:"badge badge-info"},e.frontmatter.date," ",n.a.createElement("i",{className:"fas fa-clipboard-list"})),"  ",n.a.createElement(c.a,{className:"card-img-top",fluid:e.frontmatter.image.childImageSharp.fluid}),n.a.createElement("br",null),n.a.createElement("div",{dir:"auto",className:"unselectable",dangerouslySetInnerHTML:{__html:e.html}}),n.a.createElement("div",null,n.a.createElement("h5",null,n.a.createElement(m,null)," ",n.a.createElement("small",null,":هل أعجبك هذا المقال")," ")," "),n.a.createElement("ul",null,e.frontmatter.tags.map((function(A){return n.a.createElement(i.Link,{key:A,to:"/tags/"+s()(A)}," ",n.a.createElement("span",{className:"badge badge-warning"},A))}))," ",": ",n.a.createElement("i",{className:"fa fa-tags fa-sm"})," الوســوم"),n.a.createElement("h6",null,"تم نشرة في ",n.a.createElement("i",{className:"far fa-calendar-alt"})," :"," ",e.frontmatter.date),n.a.createElement("h6",null,n.a.createElement(i.Link,{to:"/category/"+s()(t)}," ",n.a.createElement("span",{className:"badge badge-info"},t," ",n.a.createElement("i",{className:"fas fa-clipboard-list"})))),n.a.createElement(i.Link,{to:"/",className:"btn btn-secondary btn-sm"},n.a.createElement("i",{className:"far fa-arrow-alt-circle-left"})," العودة للخلف"),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("b",null," ",": موضوعات ذات صلة ",n.a.createElement("i",{className:"far fa-copy"})),n.a.createElement("hr",null),n.a.createElement(p,{postCat:e.frontmatter.category,postSlug:e.fields.slug}),n.a.createElement("hr",null),n.a.createElement("div",{id:"content-mobile"},n.a.createElement("div",{className:"p-3 mb-2 bg-success text-white"},"القائمة البريدية"),n.a.createElement(u.a,null)),n.a.createElement("hr",null),n.a.createElement("b",null,": أضف تعليقك علي الموضوع ",n.a.createElement("i",{className:"far fa-comment-dots"})),n.a.createElement(d.DiscussionEmbed,{shortname:"codeitarabic",config:a}))))}var b="318474115"}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-ed01fd807d096256b444.js.map