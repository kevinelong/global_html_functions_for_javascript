/*
FROM https://www.w3.org/TR/2011/WD-html5-author-20110809/index.html#elements-1
using:
[...document.querySelectorAll("table tr")].filter(r=>!r.innerHTML.includes("empty")).map(e=>[...e.querySelectorAll("th code a")]).map(e=>e.length&&e.length>0?e[0].innerHTML:e).join(" ")
in the console with and without the ! 
*/

const CLOSED_TAGS = "a abbr address article aside audio b bdi bdo blockquote body button canvas caption cite code colgroup datalist dd del details dfn div dl dt em fieldset figcaption figure footer form h1 head header hgroup html i iframe ins kbd label legend li map mark menu meter nav noscript object ol optgroup option output p pre progress q rp rt ruby s samp script section select small span strong style sub summary sup table tbody td textarea tfoot th thead time title tr u ul var video".split(" ");
const EMPTY_TAGS = "area base br col command embed hr img input keygen link meta param source track wbr border object link command embed html video audio".split(" ");

const tag = (name, content, attrs) => {
        return `<${name}${attrs ? " " + attrs : ""}>${content}</${name}>`
}

const empty_tag = (name, attrs) => {
        return `<${name}${attrs ? " " + attrs : ""}>`
}

//CLOSED_TAGS.forEach(t => console.log(t,window.hasOwnProperty(t)))
//EMPTY_TAGS.forEach(t => console.log(t,window.hasOwnProperty(t)))

CLOSED_TAGS.forEach(t => window[t] = (content, attrs) => tag(t, content,attrs));
EMPTY_TAGS.forEach(t => window[t] = (attrs) => empty_tag(t, attrs));

console.log(b("bold"));
console.log(div("help", `id="123"`));
console.log(img(`src="/"`));
