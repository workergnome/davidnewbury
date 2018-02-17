---
title: Scratchpad
link: http://www.workergnome.com/scratchpad
source: https://www.github.com/workergnome/scratchpad
desc: An absurdly tiny webapp for taking notes in the browser
---

Scratchpad is an absurdly tiny webapp for taking notes in the browser.

It uses [contenteditable](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/contenteditable) to turn the entire webpage into a re-writable page and it uses [localstorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage) to persist the content across page loads. It also polls localstorage to keep multiple instances in sync across tabs.  It also uses the (depreciated, but still widely supported) [app.manifest](https://developer.mozilla.org/en-US/docs/Web/HTML/Using_the_application_cache\ file to work even without internet connectivity.

Because the information is entirely local and nothing is shared with the internet, it's both fast and secure.  And the entire source code of the app is shorter than this description.