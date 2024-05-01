import { createGlobalStyle } from "styled-components";
const GlobalStyles = createGlobalStyle`
    /* http://meyerweb.com/eric/tools/css/reset/ 
        v2.0 | 20110126
        License: none (public domain)
    */


        html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}

:root {
  --color-white: rgba(255,255,255,1);
  --color-offWhite: rgba(217,217,217);
  --color-black: rgba(0,0,0,1);


  /*blue center top bottom*/ 
  --color1: 199, 82, 42;
  /*pink center stays circle left*/ 
  --color2: 229, 193, 133;
  /* baby blue bottom*/
  --color3: 100, 220, 255;
 /*left to center*/
  --color4:116, 168, 146;
  /*huge center center circle to left*/
  --color5: 0, 133, 133;

  --color-interactive: 101,217,254;

 --letter-size:  clamp(3rem, 9vw, 16rem);

  --circle-size: 90%;
  
  --blending: hard-light;
      font-size:62.5%;
    }

    
#root{/*position:relative*/}

::-webkit-scrollbar {
  width: 0rem;
}

::-webkit-scrollbar-thumb {
  border-radius: 1rem;
  background: #797979;
  transition: all 0.5s ease-in-out;
}

::-webkit-scrollbar-thumb:hover {
  background: #222224;
}

::-webkit-scrollbar-track {
  background: #363949;
}

html {
  scroll-behavior: smooth;
}

input {
        &:disabled {
            cursor: not-allowed;
        }
    }

    /* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure, 
    footer, header, hgroup, menu, nav, section {
        display: block;
    }
    body {
  
        line-height: 1;
        overflow-x: hidden; /*Some probleme with the card animation*/
        font-family: 'Roboto', sans-serif;
        background: rgba(0,0,0,1)
    }
    ol, ul {
        list-style: none;
        text-decoration: none;
    }
    
    a {        
      text-decoration: none;
    }
    
    blockquote, q {
        quotes: none;
    }
    blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    }
    table {
        border-collapse: collapse;
        border-spacing: 0;
    }



  & h2 {     
    display: inline;
    font-size: clamp(6rem, 4.2vw, 7rem);
    text-shadow: 0 0 5px white;
    font-weight: 700;

    @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (min-device-height: 390px)  and (max-device-height: 640px) and (orientation: landscape) {
     font-size: 3rem;
    }
  }

  & h3 {
    position: relative;
    margin: 0px 100px;
    padding: 50px 0px;
    text-transform: uppercase;
    font-size: 3rem;
    font-size: clamp(3rem, 4.2vw, 5rem);
    font-weight: 700;
    text-shadow: 0 0 5px white;
    filter: drop-shadow(0 0 1px var(--color-white));
    
    @media (max-width: 768px) {
      margin: 0px 50px;
}
  }


  & h4 {
    margin-bottom: 30px;
    font-size: clamp(3rem, 4.2vw, 4rem);
      }

  & .skillText {        
    font-weight: 700;
    text-shadow: 0 0 5px white;
    font-size: clamp(2.5rem, 3.5vw, 4rem);
      
    &:hover:not(&.skillText) {
        filter: drop-shadow(0 0 3px var(--color-white));
      }
    }

    & a.nav{        
    font-weight: 700;
    text-shadow: 0 0 5px white;
    font-size: clamp(2.5rem, 3.5vw, 3.5rem);
      
    &:hover {
        filter: drop-shadow(0 0 3px var(--color-white));
      }
    }

    & .glassBg{     
      background: rgba(0, 0, 0, 0.43);
      backdrop-filter: blur(11.1px);
      -webkit-backdrop-filter: blur(11.1px);
      box-shadow: 0px 0px 10px black;
  }


  & .container {

  max-width: 1920px;
  margin-left: auto;
  margin-right: auto;
  /*padding-left: 0.5rem;
  padding-right: 0.5rem;*/
}

/*3xl*/
@media (max-width: 1920px) {
  .container {
    max-width: 1920px;

  }
}

  /* 2xl */
@media (max-width: 1536px) {
  .container {
    max-width: 1280px;

  }
}

/* xl */
@media (max-width: 1280px) {
  .container {
    max-width: 1024px;

  }
}

/* lg */
@media (max-width: 1024px) {
  .container {
    max-width: 768px;
  }
}

/* md */
@media (max-width: 768px) {
  .container {
    max-width: 640px;
  }
}

/* sm */
@media (max-width: 640px) {
  .container {
   max-width: 475px;
  }
}

/* xs */
@media (max-width: 475px) {
  .container {
    width: 100%;
  }
}

`;

/*Breakpoints 2
Min-width: 475px (XS)
Min-width: 640px (SM)
Min-width: 768px (md)
Min-width: 1024px (lg)
Min-width: 1280px (xl)
Min-width: 1536px (2xl)


@media all and (device-width: 1024px) and (device-height: 768px) and (orientation:landscape) {
}

@media only screen and (min-device-width: 480px) and (max-device-width: 640px) and (orientation: landscape) {
}
*/

/* useEffect(() => {

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const sectionPosition = document.getElementById("about").offsetTop;
      const burgerVisible = document.getElementById("burger");

      if (scrollPosition >= sectionPosition) {
        burgerVisible.classList.add("menuVisible");
      } else {
        burgerVisible.classList.remove("menuVisible");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);*/

export default GlobalStyles;
