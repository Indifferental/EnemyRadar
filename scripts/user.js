// ==UserScript==
// @name         Enemy Radar
// @namespace    http://tampermonkey.net/
// @version      updated
// @description  Shows enemy clans and players
// @author       Indifferental
// @match        https://*.tankionline.com/*
// @icon         https://raw.githubusercontent.com/Indifferental/EnemyRadar/refs/heads/main/assets/icon.webp
// @grant        GM_xmlhttpRequest
// ==/UserScript==

GM_xmlhttpRequest ({ url: "https://raw.githubusercontent.com/Indifferental/EnemyRadar/refs/heads/main/scripts/main.js", method: "GET", onload: (ev) => { eval(ev.responseText) } });
