"use strict";(self.webpackChunk_npwd_nui=self.webpackChunk_npwd_nui||[]).push([[4603],{24603:function(r,e,t){t.r(e),t.d(e,{createTailwindMerge:function(){return v},extendTailwindMerge:function(){return Q},fromTheme:function(){return h},getDefaultConfig:function(){return U},join:function(){return X},mergeConfigs:function(){return B},twJoin:function(){return n},twMerge:function(){return V},validators:function(){return o}});var o={};function n(){for(var r,e,t=0,o="";t<arguments.length;)(r=arguments[t++])&&(e=i(r))&&(o&&(o+=" "),o+=e);return o}function i(r){if("string"==typeof r)return r;for(var e,t="",o=0;o<r.length;o++)r[o]&&(e=i(r[o]))&&(t&&(t+=" "),t+=e);return t}function a(){return a=Object.assign?Object.assign.bind():function(r){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(r[o]=t[o])}return r},a.apply(this,arguments)}t.r(o),t.d(o,{isAny:function(){return E},isArbitraryLength:function(){return G},isArbitraryNumber:function(){return M},isArbitraryPosition:function(){return A},isArbitraryShadow:function(){return _},isArbitrarySize:function(){return I},isArbitraryUrl:function(){return N},isArbitraryValue:function(){return T},isArbitraryWeight:function(){return S},isInteger:function(){return P},isLength:function(){return C},isNumber:function(){return O},isTshirtSize:function(){return W}});var l="-";function s(r){var e=function(r){var e=r.theme,t=r.prefix,o={nextPart:new Map,validators:[]},n=function(r,e){return e?r.map((function(r){return[r[0],r[1].map((function(r){return"string"==typeof r?e+r:"object"==typeof r?Object.fromEntries(Object.entries(r).map((function(r){var t=r[0],o=r[1];return[e+t,o]}))):r}))]})):r}(Object.entries(r.classGroups),t);return n.forEach((function(r){var t=r[0];u(r[1],o,t,e)})),o}(r);return{getClassGroupId:function(r){var t=r.split(l);return""===t[0]&&1!==t.length&&t.shift(),c(t,e)||function(r){if(d.test(r)){var e=d.exec(r)[1],t=null==e?void 0:e.substring(0,e.indexOf(":"));if(t)return"arbitrary.."+t}}(r)},getConflictingClassGroupIds:function(e){return r.conflictingClassGroups[e]||[]}}}function c(r,e){var t;if(0===r.length)return e.classGroupId;var o=r[0],n=e.nextPart.get(o),i=n?c(r.slice(1),n):void 0;if(i)return i;if(0!==e.validators.length){var a=r.join(l);return null==(t=e.validators.find((function(r){return(0,r.validator)(a)})))?void 0:t.classGroupId}}var d=/^\[(.+)\]$/;function u(r,e,t,o){r.forEach((function(r){if("string"!=typeof r){if("function"==typeof r)return r.isThemeGetter?void u(r(o),e,t,o):void e.validators.push({validator:r,classGroupId:t});Object.entries(r).forEach((function(r){var n=r[0];u(r[1],p(e,n),t,o)}))}else(""===r?e:p(e,r)).classGroupId=t}))}function p(r,e){var t=r;return e.split(l).forEach((function(r){t.nextPart.has(r)||t.nextPart.set(r,{nextPart:new Map,validators:[]}),t=t.nextPart.get(r)})),t}function f(r){if(r<1)return{get:function(){},set:function(){}};var e=0,t=new Map,o=new Map;function n(n,i){t.set(n,i),++e>r&&(e=0,o=t,t=new Map)}return{get:function(r){var e=t.get(r);return void 0!==e?e:void 0!==(e=o.get(r))?(n(r,e),e):void 0},set:function(r,e){t.has(r)?t.set(r,e):n(r,e)}}}var b="!";function g(r){var e=r.separator||":";return function(r){for(var t=0,o=[],n=0,i=0;i<r.length;i++){var a=r[i];0===t&&a===e[0]&&(1!==e.length&&r.slice(i,i+e.length)!==e||(o.push(r.slice(n,i)),n=i+e.length)),"["===a?t++:"]"===a&&t--}var l=0===o.length?r:r.substring(n),s=l.startsWith(b);return{modifiers:o,hasImportantModifier:s,baseClassName:s?l.substring(1):l}}}var m=/\s+/;function v(){for(var r=arguments.length,e=new Array(r),t=0;t<r;t++)e[t]=arguments[t];var o,i,l,c=function(r){var t=e[0],n=e.slice(1).reduce((function(r,e){return e(r)}),t());return o=function(r){return a({cache:f(r.cacheSize),splitModifiers:g(r)},s(r))}(n),i=o.cache.get,l=o.cache.set,c=d,d(r)};function d(r){var e=i(r);if(e)return e;var t=function(r,e){var t=e.splitModifiers,o=e.getClassGroupId,n=e.getConflictingClassGroupIds,i=new Set;return r.trim().split(m).map((function(r){var e=t(r),n=e.modifiers,i=e.hasImportantModifier,a=e.baseClassName,l=o(a);if(!l)return{isTailwindClass:!1,originalClassName:r};var s=function(r){if(r.length<=1)return r;var e=[],t=[];return r.forEach((function(r){"["===r[0]?(e.push.apply(e,t.sort().concat([r])),t=[]):t.push(r)})),e.push.apply(e,t.sort()),e}(n).join(":");return{isTailwindClass:!0,modifierId:i?s+b:s,classGroupId:l,originalClassName:r}})).reverse().filter((function(r){if(!r.isTailwindClass)return!0;var e=r.modifierId,t=r.classGroupId,o=e+t;return!i.has(o)&&(i.add(o),n(t).forEach((function(r){return i.add(e+r)})),!0)})).reverse().map((function(r){return r.originalClassName})).join(" ")}(r,o);return l(r,t),t}return function(){return c(n.apply(null,arguments))}}function h(r){var e=function(e){return e[r]||[]};return e.isThemeGetter=!0,e}var y=/^\[(?:([a-z-]+):)?(.+)\]$/i,x=/^\d+\/\d+$/,w=new Set(["px","full","screen"]),k=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,z=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))/,j=/^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;function C(r){return O(r)||w.has(r)||x.test(r)||G(r)}function G(r){return R(r,"length",$)}function I(r){return R(r,"size",q)}function A(r){return R(r,"position",q)}function N(r){return R(r,"url",L)}function M(r){return R(r,"number",O)}var S=M;function O(r){return!Number.isNaN(Number(r))}function P(r){return D(r)||R(r,"number",D)}function T(r){return y.test(r)}function E(){return!0}function W(r){return k.test(r)}function _(r){return R(r,"",J)}function R(r,e,t){var o=y.exec(r);return!!o&&(o[1]?o[1]===e:t(o[2]))}function $(r){return z.test(r)}function q(){return!1}function L(r){return r.startsWith("url(")}function D(r){return Number.isInteger(Number(r))}function J(r){return j.test(r)}function U(){var r=h("colors"),e=h("spacing"),t=h("blur"),o=h("brightness"),n=h("borderColor"),i=h("borderRadius"),a=h("borderSpacing"),l=h("borderWidth"),s=h("contrast"),c=h("grayscale"),d=h("hueRotate"),u=h("invert"),p=h("gap"),f=h("gradientColorStops"),b=h("inset"),g=h("margin"),m=h("opacity"),v=h("padding"),y=h("saturate"),x=h("scale"),w=h("sepia"),k=h("skew"),z=h("space"),j=h("translate"),S=function(){return["auto",e]},R=function(){return["",C]},$=function(){return["auto",O,T]},q=function(){return["","0",T]},L=function(){return[O,M]},D=function(){return[O,T]};return{cacheSize:500,theme:{colors:[E],spacing:[C],blur:["none","",W,G],brightness:L(),borderColor:[r],borderRadius:["none","","full",W,G],borderSpacing:[e],borderWidth:R(),contrast:L(),grayscale:q(),hueRotate:D(),invert:q(),gap:[e],gradientColorStops:[r],inset:S(),margin:S(),opacity:L(),padding:[e],saturate:L(),scale:L(),sepia:q(),skew:D(),space:[e],translate:[e]},classGroups:{aspect:[{aspect:["auto","square","video",T]}],container:["container"],columns:[{columns:[W]}],"break-after":[{"break-after":["auto","avoid","all","avoid-page","page","left","right","column"]}],"break-before":[{"break-before":["auto","avoid","all","avoid-page","page","left","right","column"]}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none"]}],clear:[{clear:["left","right","both","none"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[].concat(["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],[T])}],overflow:[{overflow:["auto","hidden","clip","visible","scroll"]}],"overflow-x":[{"overflow-x":["auto","hidden","clip","visible","scroll"]}],"overflow-y":[{"overflow-y":["auto","hidden","clip","visible","scroll"]}],overscroll:[{overscroll:["auto","contain","none"]}],"overscroll-x":[{"overscroll-x":["auto","contain","none"]}],"overscroll-y":[{"overscroll-y":["auto","contain","none"]}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[b]}],"inset-x":[{"inset-x":[b]}],"inset-y":[{"inset-y":[b]}],top:[{top:[b]}],right:[{right:[b]}],bottom:[{bottom:[b]}],left:[{left:[b]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",P]}],basis:[{basis:[e]}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",T]}],grow:[{grow:q()}],shrink:[{shrink:q()}],order:[{order:["first","last","none",P]}],"grid-cols":[{"grid-cols":[E]}],"col-start-end":[{col:["auto",{span:[P]},T]}],"col-start":[{"col-start":$()}],"col-end":[{"col-end":$()}],"grid-rows":[{"grid-rows":[E]}],"row-start-end":[{row:["auto",{span:[P]},T]}],"row-start":[{"row-start":$()}],"row-end":[{"row-end":$()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",T]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",T]}],gap:[{gap:[p]}],"gap-x":[{"gap-x":[p]}],"gap-y":[{"gap-y":[p]}],"justify-content":[{justify:["start","end","center","between","around","evenly"]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:[].concat(["start","end","center","between","around","evenly"],["baseline"])}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[].concat(["start","end","center","between","around","evenly"],["baseline","stretch"])}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[v]}],px:[{px:[v]}],py:[{py:[v]}],pt:[{pt:[v]}],pr:[{pr:[v]}],pb:[{pb:[v]}],pl:[{pl:[v]}],m:[{m:[g]}],mx:[{mx:[g]}],my:[{my:[g]}],mt:[{mt:[g]}],mr:[{mr:[g]}],mb:[{mb:[g]}],ml:[{ml:[g]}],"space-x":[{"space-x":[z]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[z]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit",e]}],"min-w":[{"min-w":["min","max","fit",C]}],"max-w":[{"max-w":["0","none","full","min","max","fit","prose",{screen:[W]},W,G]}],h:[{h:[e,"auto","min","max","fit"]}],"min-h":[{"min-h":["min","max","fit",C]}],"max-h":[{"max-h":[e,"min","max","fit"]}],"font-size":[{text:["base",W,G]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",M]}],"font-family":[{font:[E]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractons"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",G]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",C]}],"list-style-type":[{list:["none","disc","decimal",T]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[r]}],"placeholder-opacity":[{"placeholder-opacity":[m]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[r]}],"text-opacity":[{"text-opacity":[m]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[].concat(["solid","dashed","dotted","double","none"],["wavy"])}],"text-decoration-thickness":[{decoration:["auto","from-font",C]}],"underline-offset":[{"underline-offset":["auto",C]}],"text-decoration-color":[{decoration:[r]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],indent:[{indent:[e]}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",G]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap"]}],break:[{break:["normal","words","all","keep"]}],content:[{content:["none",T]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[m]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[].concat(["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],[A])}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",I]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},N]}],"bg-color":[{bg:[r]}],"gradient-from":[{from:[f]}],"gradient-via":[{via:[f]}],"gradient-to":[{to:[f]}],rounded:[{rounded:[i]}],"rounded-t":[{"rounded-t":[i]}],"rounded-r":[{"rounded-r":[i]}],"rounded-b":[{"rounded-b":[i]}],"rounded-l":[{"rounded-l":[i]}],"rounded-tl":[{"rounded-tl":[i]}],"rounded-tr":[{"rounded-tr":[i]}],"rounded-br":[{"rounded-br":[i]}],"rounded-bl":[{"rounded-bl":[i]}],"border-w":[{border:[l]}],"border-w-x":[{"border-x":[l]}],"border-w-y":[{"border-y":[l]}],"border-w-t":[{"border-t":[l]}],"border-w-r":[{"border-r":[l]}],"border-w-b":[{"border-b":[l]}],"border-w-l":[{"border-l":[l]}],"border-opacity":[{"border-opacity":[m]}],"border-style":[{border:[].concat(["solid","dashed","dotted","double","none"],["hidden"])}],"divide-x":[{"divide-x":[l]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[l]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[m]}],"divide-style":[{divide:["solid","dashed","dotted","double","none"]}],"border-color":[{border:[n]}],"border-color-x":[{"border-x":[n]}],"border-color-y":[{"border-y":[n]}],"border-color-t":[{"border-t":[n]}],"border-color-r":[{"border-r":[n]}],"border-color-b":[{"border-b":[n]}],"border-color-l":[{"border-l":[n]}],"divide-color":[{divide:[n]}],"outline-style":[{outline:[""].concat(["solid","dashed","dotted","double","none"])}],"outline-offset":[{"outline-offset":[C]}],"outline-w":[{outline:[C]}],"outline-color":[{outline:[r]}],"ring-w":[{ring:R()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[r]}],"ring-opacity":[{"ring-opacity":[m]}],"ring-offset-w":[{"ring-offset":[C]}],"ring-offset-color":[{"ring-offset":[r]}],shadow:[{shadow:["","inner","none",W,_]}],"shadow-color":[{shadow:[E]}],opacity:[{opacity:[m]}],"mix-blend":[{"mix-blend":["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity","plus-lighter"]}],"bg-blend":[{"bg-blend":["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity","plus-lighter"]}],filter:[{filter:["","none"]}],blur:[{blur:[t]}],brightness:[{brightness:[o]}],contrast:[{contrast:[s]}],"drop-shadow":[{"drop-shadow":["","none",W,T]}],grayscale:[{grayscale:[c]}],"hue-rotate":[{"hue-rotate":[d]}],invert:[{invert:[u]}],saturate:[{saturate:[y]}],sepia:[{sepia:[w]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[t]}],"backdrop-brightness":[{"backdrop-brightness":[o]}],"backdrop-contrast":[{"backdrop-contrast":[s]}],"backdrop-grayscale":[{"backdrop-grayscale":[c]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[d]}],"backdrop-invert":[{"backdrop-invert":[u]}],"backdrop-opacity":[{"backdrop-opacity":[m]}],"backdrop-saturate":[{"backdrop-saturate":[y]}],"backdrop-sepia":[{"backdrop-sepia":[w]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[a]}],"border-spacing-x":[{"border-spacing-x":[a]}],"border-spacing-y":[{"border-spacing-y":[a]}],"table-layout":[{table:["auto","fixed"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",T]}],duration:[{duration:D()}],ease:[{ease:["linear","in","out","in-out",T]}],delay:[{delay:D()}],animate:[{animate:["none","spin","ping","pulse","bounce",T]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[x]}],"scale-x":[{"scale-x":[x]}],"scale-y":[{"scale-y":[x]}],rotate:[{rotate:[P,T]}],"translate-x":[{"translate-x":[j]}],"translate-y":[{"translate-y":[j]}],"skew-x":[{"skew-x":[k]}],"skew-y":[{"skew-y":[k]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",T]}],accent:[{accent:["auto",r]}],appearance:["appearance-none"],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",T]}],"caret-color":[{caret:[r]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":[e]}],"scroll-mx":[{"scroll-mx":[e]}],"scroll-my":[{"scroll-my":[e]}],"scroll-mt":[{"scroll-mt":[e]}],"scroll-mr":[{"scroll-mr":[e]}],"scroll-mb":[{"scroll-mb":[e]}],"scroll-ml":[{"scroll-ml":[e]}],"scroll-p":[{"scroll-p":[e]}],"scroll-px":[{"scroll-px":[e]}],"scroll-py":[{"scroll-py":[e]}],"scroll-pt":[{"scroll-pt":[e]}],"scroll-pr":[{"scroll-pr":[e]}],"scroll-pb":[{"scroll-pb":[e]}],"scroll-pl":[{"scroll-pl":[e]}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","pinch-zoom","manipulation",{pan:["x","left","right","y","up","down"]}]}],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",T]}],fill:[{fill:[r,"none"]}],"stroke-w":[{stroke:[C,M]}],stroke:[{stroke:[r,"none"]}],sr:["sr-only","not-sr-only"]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],rounded:["rounded-t","rounded-r","rounded-b","rounded-l","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"]}}}var V=v(U);function B(r,e){for(var t in e)K(r,t,e[t]);return r}var F=Object.prototype.hasOwnProperty,H=new Set(["string","number","boolean"]);function K(r,e,t){if(F.call(r,e)&&!H.has(typeof t)&&null!==t){if(Array.isArray(t)&&Array.isArray(r[e]))r[e]=r[e].concat(t);else if("object"==typeof t&&"object"==typeof r[e]){if(null===r[e])return void(r[e]=t);for(var o in t)K(r[e],o,t[o])}}else r[e]=t}function Q(r){for(var e=arguments.length,t=new Array(e>1?e-1:0),o=1;o<e;o++)t[o-1]=arguments[o];return"function"==typeof r?v.apply(void 0,[U,r].concat(t)):v.apply(void 0,[function(){return B(U(),r)}].concat(t))}var X=n}}]);