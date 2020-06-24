/*
javascript:function loadScript(scriptURL){ var scriptElem = document.createElement('SCRIPT'); scriptElem.setAttribute('language', 'JavaScript'); scriptElem.setAttribute('src', scriptURL); document.body.appendChild(scriptElem)}loadScript('https://raw.githubusercontent.com/pixelthing/marathon-styles-favelet/master/marathon.js');
*/

(function() {
  const css = `
/* reset */
*,
*::before,
*::after {
  box-sizing: border-box;
}
body {
  all: unset;
}
table, th, td {
  font: unset;
}
input, input.tt {
  font-size: 18px;
  font-family: unset !important;
}

/* imports */
@import url('https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@100&display=swap');

/* extend */
body {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0;
  color: #666;
  background: #3399ff;
  font: unset;
  font-family: 'Roboto Slab', sans-serif;
  font-size: 18px;
}
body > table {
  margin: 0 auto;
  height: auto;
}

/* login */
form[name="login"] h1 {
  color: #fff;
  margin: 0;
  padding: 1em 0 0.5em;
}
form[name="login"] input {
  display: block;
  width: 100%;
  margin: 5px 0;
  padding: 0 0.5em;
  max-width: 320px;
  line-height: 3;
  border: 1px solid #fafafa;
  border-radius: 5px;
  box-shadow: inset 2px 2px 3px 0 rgba(0,0,0,0.15);
}
form[name="login"] input[type="submit"] {
  -webkit-appearance: none;
  border: none;
  color: #fff;
  background: #2ECC40;
  border-radius: 10px;
  box-shadow: 2px 2px 3px 0 rgba(0,0,0,0.15);
}
form[name="login"] input[type="submit"]:active {
  background: #29b739;
}
form[name="login"] pre,
form[name="login"] pre b {
  font-family: inherit;
  font-size: inherit;
}

/* Notifications */
td[bgcolor="red"] {
  display: block;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: auto;
  width: auto;
  color: #fff;
  padding: 1em;
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
  document.head.appendChild(styleTag);

  // login
  document.querySelector('div[class="marathon"]').remove();
  let headerTag = document.createElement('h1');
  headerTag.innerText = 'Marathon Tid';
  document.querySelector('form[name="login"]').prepend(headerTag);
  let labelNodes = document.querySelector('form[name="login"] b').childNodes;
  labelNodes.forEach(node => {
    if (node.nodeValue && node.nodeValue.trim().length) {
      node.textContent = '';
    }
  });
  let inputUser = document.querySelector('form[name="login"] input[name="ID"]');
  inputUser.setAttribute('autocapitalize', 'off');
  inputUser.setAttribute('placeholder', 'user kod');
  let inputPass = document.querySelector('form[name="login"] input[name="PASS"]');
  inputPass.setAttribute('placeholder', 'lösenord');
})();