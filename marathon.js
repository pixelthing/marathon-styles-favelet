/*
javascript:function loadScript(scriptURL){ var scriptElem = document.createElement('SCRIPT'); scriptElem.setAttribute('language', 'JavaScript'); scriptElem.setAttribute('src', scriptURL); document.body.appendChild(scriptElem)}loadScript('http://pixelthing.github.io/bootstrap-grid-favelet/payload.js');

*/

(function() {
    const css = `
body > table {
    margin: 0 auto;
    height: auto;
}

body {
    backgriound:red;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
`;
    // viewport tag
    let viewportTag = document.createElement("meta");
    viewportTag.setAttribute('name','viewport');
    viewportTag.setAttribute('content','width=device-width, initial-scale=1');
    document.head.append(viewportTag);
    // CSS
    let styleTag = document.createElement('style');
    styleTag.innerHTML = css;
    document.head.appendChild(style);
})();