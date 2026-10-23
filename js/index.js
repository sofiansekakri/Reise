(function() {
    'use strict';
    const ee = document.createElement('script');
    ee.src = './js/btn.js';
    document.body.appendChild(ee);

    const e = document.createElement('script');
    e.src = './js/delTemp.js';
    e.classList.add('temp');
    document.body.appendChild(e);
})();