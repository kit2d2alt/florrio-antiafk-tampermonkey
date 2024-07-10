// ==UserScript==
// @name         florio anti-afk
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  anti-afk
// @author       me
// @match        https://florr.io/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    function isDesiredButton(button) {
        const computedStyle = window.getComputedStyle(button);
        return button.innerText === "I'm here" && 
               computedStyle.fontFamily.includes('Ubuntu') && 
               computedStyle.fontWeight === '700';
    }
    function clickButton() {
        const buttons = document.querySelectorAll('button');
        for (let button of buttons) {
            if (isDesiredButton(button)) {
                button.click();
                console.log('https://discord.gg/MqvmBu5tWa');
                return;
            }
        }
    }
    const observer = new MutationObserver(clickButton);
    observer.observe(document.body, { childList: true, subtree: true });

    clickButton();
})();
