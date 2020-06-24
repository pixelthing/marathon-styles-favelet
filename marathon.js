/*
javascript:function loadScript(scriptURL){ var scriptElem = document.createElement('SCRIPT'); scriptElem.setAttribute('language', 'JavaScript'); scriptElem.setAttribute('src', scriptURL); document.body.appendChild(scriptElem)}loadScript('https://raw.githubusercontent.com/pixelthing/marathon-styles-favelet/master/marathon.js');
*/

var styleMarathon = function() {
  const css = `
/* imports */

@import url('https://fonts.googleapis.com/css2?family=Roboto&family=Roboto+Slab:wght@200;400&display=swap');

/* variables */
:root {
  --primary: #3399ff;
  --primary-light1: #7fbcf9;

  --grey3: #eee;

  --error: #FF4136;
  --error-dark: #FF4136;
  --error-contrast: #fcc; 

  --ok: #2ECC40;
  --ok-dark: #29b739;
  --ok-contrast: #cfc; 

  --font-size: 16px;
  --font-size-small: 13px;
  --button-padding: 0.5em 1em;
}

/* reset */

*,
*::before,
*::after {
  box-sizing: border-box;
}
body {
  all: unset;
}
table, th, td, p, li, b {
  font-family: inherit;
  font-size: inherit;
}

/* extend */

body {
  margin: 0;
  color: #666;
  background: var(--primary);
  font: unset;
  font-family: 'Roboto', sans-serif;
  font-size: var(--font-size);
}
h1 {
  font-weight: 200;
}
h1, h2, h3 {
  margin: 0;
  font-family: 'Roboto Slab', sans-serif;
}
body > table {
  margin: 0 auto;
  height: auto;
}
input, input.tt {
  font-family: 'Roboto', sans-serif;
  height: auto;
  margin: auto;
  padding: var(--button-padding);
  font-size: inherit;
  line-height: 2;
  border: 1px solid var(--grey3);
  border-radius: 3px;
  box-shadow: inset 1px 1px 2px 0 rgba(0,0,0,0.15);
}
input.knapp,
input[type="button"],
input[type="submit"] {
  -webkit-appearance: none;
  height: auto !important;
  border: none;
  color: #fff;
  background: #999;
  border-radius: 5px;
  padding: var(--button-padding);
  box-shadow: 2px 2px 3px 0 rgba(0,0,0,0.15);
  font-weight: bold;
}
input.knapp:hover,
input[type="button"]:hover,
input[type="submit"]:hover {
  background: #777;
}
input.knapp:active,
input[type="button"]:active,
input[type="submit"]:active {
  color: #333;
  background: #ccc;
}
input[type="submit"],
input[value="Save"] {
  color: var(--ok-contrast);
  background: var(--ok);
}
input[type="submit"]:hover,
input[value="Save"]:hover {
  background: var(--ok-dark);
}
input[type="submit"]:active,
input[value="Save"]:active {
  color: var(--ok);
  background: var(--ok-contrast);
}
input[type="checkbox"] {
  width: 0.8em;
  height: 0.8em;
  margin: 0 0.25em 0 0;
  box-shadow: none;
  border: 1px solid #ccc;
  border-radius: 5px;
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
  color: var(--ok-contrast);
  background: var(--ok);
  border-radius: 10px;
  box-shadow: 2px 2px 3px 0 rgba(0,0,0,0.15);
}
form[name="login"] input[type="submit"]:active {
  background: var(--ok-dark);
}
form[name="login"] pre,
form[name="login"] pre b {
  font-family: inherit;
  font-size: inherit;
}

/* time reporting */

form[name="rapp"] > table,
form[name="rapp"] > table > tbody {
  display: block;
  width: 100vw;
  max-width: 100vw;
}
.rapp__row {
  max-width: 100vw;
  width: 100%;
  display: flex;
  overflow: auto;
}
.rapp__row > td {
  display: block;
}

/* time reporting - row 1 */
.rapp__row--1 {
  position: relative;
  z-index: 3;
  box-shadow: 0 1px 5px 0 rgb(0,0,0,0.15);
}

.rapp__row--1 table b {
  display: inline-block;
  margin: 0 0 0 10px;
  font-size: 24px;
  font-family: 'Roboto Slab', sans-serif;
  font-weight: 400;
}
.rapp__row--1 td {
  padding: 0;
}
form[name="rapp"] .meny {
  width: 100vw;
  padding: 5px;
  margin-left: 0 !important;
  background: var(--primary-light1);
  font-weight: normal;
  line-height: 1;
  white-space: nowrap;
  overflow: auto;
}
form[name="rapp"] .meny a {
  display: inline-block;
  padding: var(--button-padding);
  color: #fff;
  border-right: 1px solid #fff;
  text-transform: uppercase;
}
form[name="rapp"] .meny a:first-child {
  background: var(--primary);
  color: #fff;
  border:none;
}

/* time reporting - row 2 */

.rapp__row--2 {
  position: relative;
  z-index: 2;
  padding: 5px;
  background: var(--grey3);
  white-space: nowrap;
  box-shadow: 0 1px 5px 0 rgb(0,0,0,0.15);
}
.rapp__row--2 input.knapp {
  color: #666;
  background: transparent;
  box-shadow: none;
  border-radius: 0;
  border-right: 1px solid #999;
  font-weight: normal;
  line-height: 1;
}
.rapp__row--2 input.knapp:last-child {
  border-right: none;
}

/* time reporting - row 3 */

.rapp__row--3 {
  min-height: 80vh;
  background: #fff;
  overflow: hidden;
}
@media (max-width: 599px) {
  .rapp__row--3 {
    flex-direction: column;
  }
}
.rapp__col--1 {
  flex: 0 1;
  background: var(--grey3);
  padding: 10px;
}
.rapp__col--2 {
  flex: 1 0;
  padding: 10px;
  overflow: auto;
}
.rapp__entries {
  border-collapse: collapse;
  border-right: 20px solid #fff;
}
.rapp__entries.rapp__entries th {
  padding: 0.5em;
  font-weight: bold;
  background: transparent;
  border-bottom: 2px solid #666;
}
.rapp__entries td {
  padding: 0.5em;
  background: transparent;
}
.rapp__entries tr:nth-child(even) {
  background: #f6f6f6;
}
/*
.rapp__entries .rad:nth-child(1) a,
.rapp__entries .rad:nth-child(2) a,
.rapp__entries .rad:nth-child(3) a,
.rapp__entries .rad:nth-child(4) a {
  text-decoration: underline !important;
}
*/
.rapp__entry--locked,
.rapp__entry--locked a {
  color: #999 !important;
}
.rapp__entry td {
  padding-left: 1px;
  padding-right: 1px;
}
.rapp__entry input {
  padding-left: 0.5em;
  padding-right: 0.5em;
}
.rapp__entry td:nth-child(1) input {
  width: 3.8em;
}
.rapp__buttons {
  background: transparent !important;
}
.rapp__buttons td {
  text-align: left;
  border-top: 2px solid #666 !important;
  padding-top: 20px !important;
  padding-left: 0;
}
.rapp__buttons .knapp {
  float: left;
  margin-right: 30px;
}
a[href^="javascript:radera"] {
  display: block;
  width: 42px;
  height: 42px;
  order-radius: 1000px;
  color: var(--error);
  background: var(--error-contrast);
  text-align: center;
  border-radius: 10px;
  box-shadow: 2px 2px 3px 0 rgba(0,0,0,0.15);
}
a[href^="javascript:radera"]:before {
  content: '✖';
  line-height: 42px;
}
img[src="/tidpics/del.gif"] {
  display: none;
}

/* calendar */

.alma {
  width: 20em;
  background: transparent !important;
  font-size: var(--font-size-small);
}
@media (max-width: 599px) {
  .alma {
    font-size: var(--font-size);
  }
}
@media (min-width: 1200px) {
  .alma {
    font-size: var(--font-size);
  }
}
.alma h2 {
  margin: 0;
}
.alma th:first-child {
  width: 20px;
}
.alma td.dkn {
  border: none;
  line-height: 1.5em;
  width: 12.5% !important;
  height: auto !important;
}
.alma .dkn {
  background: var(--grey3);
}
.alma .dkn--done {
  color: var(--ok);
  background: var(--ok-contrast);
}
.alma .dkn--waiting {
  color: var(--error);
  background: var(--error-contrast);
}
.alma td a {
  display: block;
  line-height: 1.8;
  color: inherit;
}
.alma td u {
  display: block;
  line-height: 1.8;
}

/* dialog */

.dialog {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10px;
  color: #fff;
}
.dialog form {
  max-width: 800px;
  width: 100%;
  margin: 10px;
  color: #666;
  background: #fff;
  margin: 10px 0 0;
  padding: 10px;
  text-align: center;
}
.dialog table {
  max-width: 800px;
  width: 100%;
  color: #666;
  background: #fff;
  border: 10px solid #fff;
  border-collapse: collapse;
}
.dialog th {
  padding: 0.5em;
  font-weight: bold;
  background: transparent;
  border-bottom: 2px solid #666;
}
.dialog td {
  padding: 0.5em;
  background: transparent;
}
.dialog tr:nth-child(even) {
  background: #f6f6f6;
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
  background: var(--error);
  color: var(--error-contrast);
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

  // reset
  let tables = document.querySelectorAll('table');
  tables.forEach(el => {
    el.removeAttribute('cellspacing');
    el.removeAttribute('cellpadding');
    el.removeAttribute('border');
  });
  let tablesThs = document.querySelectorAll('th');
  tablesThs.forEach(el => {
    el.removeAttribute('width');
    el.removeAttribute('height');
  });
  let tablesTds = document.querySelectorAll('td');
  tablesTds.forEach(el => {
    el.removeAttribute('width');
    el.removeAttribute('height');
  });

  // login
  if (document.querySelector('form[name="login"]')) {
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
  }

  // main time reporting interface
  if (document.querySelectorAll('form[name="rapp"]').length > 0) {
    
    // add easier to use selectors
    let tableRows = document.querySelectorAll('form[name="rapp"] > table > tbody > tr');
    tableRows.forEach((el, i) => {
      el.classList.add('rapp__row');
      el.classList.add('rapp__row--' + (i + 1));
    });
    let tableCols = document.querySelectorAll('.rapp__row--3 > td');
    tableCols.forEach((el, i) => {
      el.classList.add('rapp__col');
      el.classList.add('rapp__col--' + (i + 1));
    });
    document.querySelector('.rapp__col--2 > table').classList.add('rapp__entries');
    document.querySelector('.rapp__col--2 tr:nth-last-child(1)').classList.add('rapp__buttons');
    document.querySelector('.rapp__col--2 tr:nth-last-child(2)').classList.add('rapp__entry');

    // remove autocompletes, they just misinterpret
    let inputs = document.querySelectorAll('form[name="rapp"] input');
    inputs.forEach((input, i) => {
      input.setAttribute('autocomplete','off');
    });

    // calendar changes
    document.querySelector('.alma').setAttribute('align', 'center');
    let greenTd = document.querySelectorAll('td[bgcolor="#5ae869"]');
    greenTd.forEach(el => {
      el.removeAttribute('bgcolor');
      el.classList.add('dkn--done');
    });
    let redTd = document.querySelectorAll('td[bgcolor="#d8443b"]');
    redTd.forEach(el => {
      el.removeAttribute('bgcolor');
      el.classList.add('dkn--waiting');
    });
    let greyTd = document.querySelectorAll('td[bgcolor="#f2f2f2"]');
    greyTd.forEach(el => {
      el.removeAttribute('bgcolor');
    });

    // re-arrange the bad entry table
    let entries = document.querySelectorAll('.rapp__entries tr[valign="top"]');
    entries.forEach(row => {
      let cols = row.querySelectorAll('td');
      if (cols[0].getAttribute('bgcolor') === '#c0c0c0') {
        row.classList.add('rapp__entry--locked')
        cols.forEach(col => {
          col.removeAttribute('bgcolor');
        });
      }
      if (cols.length === 7) {
        cols[1].setAttribute('colspan', '2');
        cols[3].setAttribute('colspan', '2');
        let extraCell = document.createElement('td');
        row.appendChild(extraCell);
      }
    });
    // let cell2 = document.querySelector('.rapp__entry td:nth-child(2)');
    // let cell3 = document.querySelector('.rapp__entry td:nth-child(3)');
    // cell2.append(cell3.childNodes);
    // cell3.remove();

  }

  // Dialogs
  if (document.querySelector('body[onload^="document"]') || document.body.getAttribute('bgcolor') === '#C0C0C0') {

    document.body.classList.add('dialog');

    // remove autocompletes, they just misinterpret
    let inputs = document.querySelectorAll('input');
    inputs.forEach((input, i) => {
      input.setAttribute('autocomplete','off');
    });
  }

};
styleMarathon();