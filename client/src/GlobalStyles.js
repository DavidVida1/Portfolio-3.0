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

  /* ORGINAL*/
  /*blue center top bottom*/ 
  /*--color1: 18, 113, 255;

  /*pink center stays circle left*/ 
  /*--color2: 221, 74, 255;

  /* baby blue bottom*/
  /*--color3: 100, 220, 255;

  /*left to center*/
  /*--color4: 200, 50, 50;

  /*huge center center circle to left*/
  /*--color5: 180, 180, 50;

  /*Follow Mouse*/ 
  /*--color-interactive: 140, 100, 255;*/

   /*test1*/

  --color1: 199, 82, 42;

  --color2: 229, 193, 133;

  --color3: 100, 220, 255;

  --color4:116, 168, 146;

  --color5: 0, 133, 133;

  --color-interactive: 251, 242, 196;

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
    font-size: clamp(4rem, 4.2vw, 6rem);
    text-shadow: 0 0 5px white;
    font-weight: 700;
    text-shadow: 0 0 5px white;
  }

  & h3 {
    padding: 50px 20px;
    text-transform: uppercase;
    font-size: 3rem;
    font-size: clamp(3rem, 4.2vw, 5rem);
    font-weight: 700;
    text-shadow: 0 0 5px white;
  }


  & h4 {
    margin-bottom: 30px;
    font-size: clamp(3rem, 4.2vw, 4rem);
      }

  & h5 {        
    font-weight: 700;
    text-shadow: 0 0 5px white;
    font-size: clamp(2.7rem, 3.5vw, 4rem);
        }

  & h6 {        
    font-weight: 500;
    text-shadow: 0 0 5px white;
    font-size: clamp(2.7rem, 3.5vw, 3rem);
        }
`;
export default GlobalStyles;
