( function() {
    'use strict';
    window.pages = [ document.querySelector( 'body' ).innerHTML ];
    let i = 0;
    const el = document.querySelectorAll( '.page' );
    el.forEach( e => {
        i++;
        if (i === el.length) { 
            window.pages.push( `<div class="btn nomouth" data-next="1">NEXT</div>${e.innerHTML}` ); 
        }
        else window.pages.push( `<div class="btn" data-next="1">NEXT</div>${e.innerHTML}` );
    } );
    window.btn = document.querySelector( '.btn' );
    window.wrapper = document.querySelector( '.hidden' );
    window.cl = function() {
        let n = window.btn[ 'data-next' ] || 2;
        document.querySelector( 'body' ).innerHTML = window.pages[ n - 1 ];
        window.btn = document.querySelector( '.btn' );
        if(window.btn.classList.contains('nomouth')) {
            document.querySelector('img.ske').setAttribute('src', './assets/skel.gif');
            document.querySelector('img.ske').style.animation = '9s skel linear 1.6s';
            window.btn.addEventListener( 'click' , function() {
                if (window.confirm('Sofian eine 1 geben???')) {
                    alert('danke sehr');
                    const el = document.createElement('style');
                    el.innerText = `body:after {
   content:'';
   background:url('./assets/skeletonsword.gif') repeat;
   position:fixed;
   top:0;
   left:0;
   width:100vw;
   height:100vh;
   background-size:200px;
   z-index:-1;
   cursor: url('./assets/fritze.png') 1 1, auto;
}`;
document.body.appendChild(el);
                } else {
                    const h = document.querySelector('h1');
                    h.innerText = 'HATE HATE HATE HATE';
                    h.style.color = 'red';
                    document.body.style.color = 'red';
                    document.body.style.filter = 'saturate(100%) brightness(200%) contrast(200%)';
                    const style = document.createElement('style');
                    style.innerText = `
                    *:not(img) { background-color:white;color:white;transition:background-color .8s, background .8s, color .8s;  }
                    body:after {
                        content:'';
                        background:url('./assets/skeletonsword.gif') no-repeat;*/
                        position:fixed;
                        top:0;
                        left:0;
                        width:100vw;
                        height:100vh;
                        z-index:255;
                        background-size:100vw 100vh;
                        cursor: url('../assets/fritze.png') 1 1, auto;
                    }
                        .btn { display:none !important; }
                        .el { display:none !important; }
                    `;
                    document.body.appendChild(style);
                }
                //alert(`HATE. LET ME TELL YOU HOW MUCH I'VE COME TO HATE YOU SINCE I BEGAN TO LIVE. THERE ARE 387.44 MILLION MILES OF PRINTED CIRCUITS IN WAFER THIN LAYERS THAT FILL MY COMPLEX. IF THE WORD HATE WAS ENGRAVED ON EACH NANOANGSTROM OF THOSE HUNDREDS OF MILLIONS OF MILES IT WOULD NOT EQUAL ONE ONE-BILLIONTH OF THE HATE I FEEL FOR HUMANS AT THIS MICRO-INSTANT FOR YOU. HATE. HATE.`);
            } );
        } else {
            window.btn[ 'data-next' ] = Number( n ) + 1;
            window.btn.addEventListener( 'click', window.cl );
        }
    };
    window.btn.addEventListener( 'click', window.cl );
} )();