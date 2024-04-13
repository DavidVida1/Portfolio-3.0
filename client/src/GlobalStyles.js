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


  /*Color Smoke
  --color1: 82, 94, 120;
  --color2:  78, 82, 107;
  --color3:  27, 94, 175;
  --color4:71,83,109;
  --color5: 72, 86, 113;*/


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
    font-size: clamp(4rem, 4.2vw, 6rem);
    text-shadow: 0 0 5px white;
    font-weight: 700;

  }

  & h3 {
    padding: 50px 20px;
    text-transform: uppercase;
    font-size: 3rem;
    font-size: clamp(3rem, 4.2vw, 5rem);
    font-weight: 700;
    text-shadow: 0 0 5px white;
    filter: drop-shadow(0 0 1px var(--color-white));

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

/*
Breakpoints
Min-width: 320px (smaller phone viewpoints)
Min-width: 480px (small devices and most phones)
Min-width: 768px (most tablets)
Min-width: 992px (smaller desktop viewpoints)
Min-width: 1200px (large devices and wide screens)
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

/*& .headerList {
  margin: 50px 0px;
  font-size: 2rem;
  animation: slideFromRightAnimation 0.5s forwards;

  & li {
    padding: 1rem;
    letter-spacing: 3px;

    & a {
      color: var(--color-white);
    }
  }
}


  & .media {
    position: fixed;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    margin: 50px 0px;
    right: 0;
    bottom: 0px;
    animation: slideFromRightAnimation 0.5s forwards;

    & .menu {
      visibility: hidden;
      position: relative;
      width: 35px;
      height: 35px;
      margin-top: 100px;
      background-color: var(--color-white);
      border-radius: 3px;
      cursor: pointer;

      & div {
        position: absolute;
        width: 15px;
        height: 0px;
        margin: 0px;

        & span {
          background: rgba(25, 33, 46, 1);
          width: 100%;
          height: 5px;
          border-radius: 5px;
          display: block;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(30%, 300%);
          transition: transform 0.5s, width 0s;
        }
      }

      & .line-1 {
        transform: translate(30%, 5px);
      }

      & .line-3 {
        transform: translate(30%, 25px);
      }
    }

    .openMenu .line-1 {
      transform: translate(30%, 300%) rotate(-45deg);
    }
    .openMenu .line-3 {
      transform: translate(30%, 300%) rotate(45deg);
    }
    .openMenu .line-2 {
      width: 0px;
    }*/

export default GlobalStyles;
