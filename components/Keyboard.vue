<template>
  <div id="keyboard">
    <ul class="cf">
      <li>
        <a href="#" class="key c27 fn"><span id="esc">esc</span></a>
      </li>
      <li>
        <a href="#" class="key c112 fn"><span>F1</span></a>
      </li>
      <li>
        <a href="#" class="key c113 fn"><span>F2</span></a>
      </li>
      <li>
        <a href="#" class="key c114 fn"><span>F3</span></a>
      </li>
      <li>
        <a href="#" class="key c115 fn"><span>F4</span></a>
      </li>
      <li>
        <a href="#" class="key c116 fn"><span>F5</span></a>
      </li>
      <li>
        <a href="#" class="key c117 fn"><span>F6</span></a>
      </li>
      <li>
        <a href="#" class="key c118 fn"><span>F7</span></a>
      </li>
      <li>
        <a href="#" class="key c119 fn"><span>F8</span></a>
      </li>
      <li>
        <a href="#" class="key c120 fn"><span>F9</span></a>
      </li>
      <li>
        <a href="#" class="key c121 fn"><span>F10</span></a>
      </li>
      <li>
        <a href="#" class="key c122 fn"><span>F11</span></a>
      </li>
      <li>
        <a href="#" class="key c123 fn"><span>F12</span></a>
      </li>
      <li>
        <a href="#" class="key fn"><span>Eject</span></a>
      </li>
    </ul>
    <ul class="cf" id="numbers">
      <li>
        <a href="#" class="key c192"><b>`</b></a>
      </li>
      <li>
        <a href="#" class="key c49"><b>1</b></a>
      </li>
      <li>
        <a href="#" class="key c50"><b>2</b></a>
      </li>
      <li>
        <a href="#" class="key c51"><b>3</b></a>
      </li>
      <li>
        <a href="#" class="key c52"><span>4</span></a>
      </li>
      <li>
        <a href="#" class="key c53"><span>5</span></a>
      </li>
      <li>
        <a href="#" class="key c54"><span>6</span></a>
      </li>
      <li>
        <a href="#" class="key c55"><span>7</span></a>
      </li>
      <li>
        <a href="#" class="key c56"><span>8</span></a>
      </li>
      <li>
        <a href="#" class="key c57"><span>9</span></a>
      </li>
      <li>
        <a href="#" class="key c48"><span>0</span></a>
      </li>
      <li>
        <a href="#" class="key c189 alt"><span>-</span></a>
      </li>
      <li>
        <a href="#" class="key c187"><span>=</span></a>
      </li>
      <li>
        <a href="#" class="key c46" id="delete"><span>Delete</span></a>
      </li>
    </ul>
    <ul class="cf" id="qwerty">
      <li>
        <a href="#" class="key c9" id="tab"><span>tab</span></a>
      </li>
      <li>
        <a href="#" class="key c81"><span>q</span></a>
      </li>
      <li>
        <a href="#" class="key c87"><span>w</span></a>
      </li>
      <li>
        <a href="#" class="key c69"><span>e</span></a>
      </li>
      <li>
        <a href="#" class="key c82"><span>r</span></a>
      </li>
      <li>
        <a href="#" class="key c84"><span>t</span></a>
      </li>
      <li>
        <a href="#" class="key c89"><span>y</span></a>
      </li>
      <li>
        <a href="#" class="key c85"><span>u</span></a>
      </li>
      <li>
        <a href="#" class="key c73"><span>i</span></a>
      </li>
      <li>
        <a href="#" class="key c79"><span>o</span></a>
      </li>
      <li>
        <a href="#" class="key c80"><span>p</span></a>
      </li>
      <li>
        <a href="#" class="key c219 alt"><span>[</span></a>
      </li>
      <li>
        <a href="#" class="key c221 alt"><span>]</span></a>
      </li>
      <li>
        <a href="#" class="key c220 alt"><span>\</span></a>
      </li>
    </ul>
    <ul class="cf" id="asdfg">
      <li>
        <a href="#" class="key c20 alt" id="caps"
          ><b></b><span>caps lock</span></a
        >
      </li>
      <li>
        <a href="#" class="key c65"><span>a</span></a>
      </li>
      <li>
        <a href="#" class="key c83"><span>s</span></a>
      </li>
      <li>
        <a href="#" class="key c68"><span>d</span></a>
      </li>
      <li>
        <a href="#" class="key c70"><span>f</span></a>
      </li>
      <li>
        <a href="#" class="key c71"><span>g</span></a>
      </li>
      <li>
        <a href="#" class="key c72"><span>h</span></a>
      </li>
      <li>
        <a href="#" class="key c74"><span>j</span></a>
      </li>
      <li>
        <a href="#" class="key c75"><span>k</span></a>
      </li>
      <li>
        <a href="#" class="key c76"><span>l</span></a>
      </li>
      <li>
        <a href="#" class="key c186 alt"><span>;</span></a>
      </li>
      <li>
        <a href="#" class="key c222 alt"><span>'</span></a>
      </li>
      <li>
        <a href="#" class="key c13 alt" id="enter"><span>return</span></a>
      </li>
    </ul>
    <ul class="cf" id="zxcvb">
      <li>
        <a href="#" class="key c16 shiftleft"><span>Shift</span></a>
      </li>
      <li>
        <a href="#" class="key c90"><span>z</span></a>
      </li>
      <li>
        <a href="#" class="key c88"><span>x</span></a>
      </li>
      <li>
        <a href="#" class="key c67"><span>c</span></a>
      </li>
      <li>
        <a href="#" class="key c86"><span>v</span></a>
      </li>
      <li>
        <a href="#" class="key c66"><span>b</span></a>
      </li>
      <li>
        <a href="#" class="key c78"><span>n</span></a>
      </li>
      <li>
        <a href="#" class="key c77"><span>m</span></a>
      </li>
      <li>
        <a href="#" class="key c188 alt"><span>,</span></a>
      </li>
      <li>
        <a href="#" class="key c190 alt"><span>.</span></a>
      </li>
      <li>
        <a href="#" class="key c191 alt"><span>/</span></a>
      </li>
      <li>
        <a href="#" class="key c16 shiftright"><span>Shift</span></a>
      </li>
    </ul>
    <ul class="cf" id="bottomrow">
      <li>
        <a href="#" class="key" id="fn"><span>fn</span></a>
      </li>
      <li>
        <a href="#" class="key c17" id="control"><span>control</span></a>
      </li>
      <li>
        <a href="#" class="key option" id="optionleft"><span>option</span></a>
      </li>
      <li>
        <a href="#" class="key command" id="commandleft"
          ><span>command</span></a
        >
      </li>
      <li><a href="#" class="key c32" id="spacebar"></a></li>
      <li>
        <a href="#" class="key command" id="commandright"
          ><span>command</span></a
        >
      </li>
      <li>
        <a href="#" class="key option" id="optionright"><span>option</span></a>
      </li>
      <ol class="cf">
        <li>
          <a href="#" class="key c37" id="left"><span>&#9666;</span></a>
        </li>
        <li>
          <a href="#" class="key c38" id="up"><span>&#9652;</span></a>
          <a href="#" class="key c40" id="down"><span>&#9662;</span></a>
        </li>
        <li>
          <a href="#" class="key c39" id="right"><span>&#9656;</span></a>
        </li>
      </ol>
    </ul>
  </div>

  <cite> </cite>
</template>

<script setup></script>

<style scoped>
@font-face {
  font-family: "Montserrat";
  src: url("assets/fonts/Montserrat-Regular.ttf");
}
body {
  background: #333;
}

#keyboard,
#keyborad > * {
  scale: 67%;
  font-family: "Montserrat";
}

#keyboard {
  position: absolute;
  left: 30%;
  top: 62%;
  transform: translate(-50%, -50%);
  margin: 50px auto;
  width: 794px;
  height: 315px;
  background: #d5d9dc url("") repeat-x;
  -moz-border-radius-topleft: 7px 21px;
  -moz-border-radius-topright: 7px 21px;
  -moz-border-radius-bottomright: 10px;
  -moz-border-radius-bottomleft: 10px;
  border-top-left-radius: 7px 21px;
  border-top-right-radius: 7px 21px;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
  padding: 50px 0 0 10px;
  -webkit-box-shadow: inset 0 0 8px #bbb, 0 1px 0 #aaa, 0 4px 0 #bbb,
    0 10px 30px #111;
  -moz-box-shadow: inset 0 0 8px #bbb, 0 1px 0 #aaa, 0 4px 0 #bbb,
    0 10px 30px #111;
  box-shadow: inset 0 0 8px #bbb, 0 1px 0 #aaa, 0 4px 0 #bbb, 0 10px 30px #111;
  transform: rotateX(40deg);
}

ul {
  list-style-type: none;
  width: 784px;
  margin: 0 auto;
}
li {
  float: left;
  /* transform: rotateX(40deg); */
}

.key {
  display: block;
  color: #aaa;
  font: bold 9pt arial;
  text-decoration: none;
  text-align: center;
  width: 44px;
  height: 41px;
  margin: 5px;
  background: #222;
  -moz-border-radius: 4px;
  border-radius: 4px;
  border-top: 1px solid #222;
  -webkit-box-shadow: inset 0 0 25px #333, 0 1px 0 #000, 0 2px 0 #222,
    0 2px 3px #333;
  -moz-box-shadow: inset 0 0 25px #333, 0 1px 0 #000, 0 2px 0 #222,
    0 2px 3px #333;
  box-shadow: inset 0 0 25px #333, 0 1px 0 #000, 0 2px 0 #222, 0 2px 3px #333;
  text-shadow: 0px -1px 0px #000;
  /* transform: rotateX(40deg); */
}

.key:active,
.keydown {
  color: #888;
  background: #222;
  margin: 7px 5px 3px;
  -webkit-box-shadow: inset 0 0 25px #333, 0 0 3px #333;
  -moz-box-shadow: inset 0 0 25px #333, 0 0 3px #333;
  box-shadow: inset 0 0 25px #333, 0 0 3px #333;
  border-top: 1px solid #000;
}

.fn span {
  display: block;
  margin: 14px 5px 0 0;
  text-align: right;
  font: bold 6pt arial;
  text-transform: uppercase;
}
#esc {
  margin: 6px 15px 0 0;
  font-size: 7.5pt;
  text-transform: lowercase;
}

#numbers li a span {
  display: block;
}

#numbers li a b {
  margin: 3px 0 3px;
  display: block;
}

#numbers li .alt b {
  display: block;
  margin: 0 0 3px;
}

#numbers li #delete span {
  text-align: right;
  margin: 23px 10px 0 0;
  font-size: 7.5pt;
  text-transform: lowercase;
}

#qwerty li a span {
  display: block;
  margin: 13px 0 0;
  text-transform: uppercase;
}

#qwerty li #tab span {
  text-align: left;
  margin: 23px 0 0 10px;
  font-size: 7.5pt;
  text-transform: lowercase;
}

#qwerty li .alt b {
  display: block;
  margin: 3px 0 0;
}
#qwerty li .alt span {
  margin: 2px 0 0;
}

#asdfg li a span {
  display: block;
  margin: 13px 0 0;
  text-transform: uppercase;
}

#asdfg li .alt span {
  margin: 0;
  text-transform: lowercase;
}
#asdfg li .alt b {
  display: block;
  margin: 3px 0 0;
}
#asdfg li #caps b {
  display: block;
  background: #999;
  width: 4px;
  height: 4px;
  border-radius: 10px;
  margin: 9px 0 0 10px;
  -webkit-box-shadow: inset 0 1px 0 #666;
  -moz-box-shadow: inset 0 1px 0 #666;
  box-shadow: inset 0 1px 0 #666;
}
#asdfg li #caps span {
  text-align: left;
  margin: 10px 0 0 10px;
  font-size: 7.5pt;
}
#asdfg li #enter span {
  text-align: right;
  margin: 23px 10px 0 0;
  font-size: 7.5pt;
}

#zxcvb li a span {
  display: block;
  margin: 13px 0 0;
  text-transform: uppercase;
}
#zxcvb li .shiftleft span {
  text-align: left;
  margin: 23px 0 0 10px;
  font-size: 7.5pt;
  text-transform: lowercase;
}
#zxcvb li .shiftright span {
  text-align: right;
  margin: 23px 10px 0 0;
  font-size: 7.5pt;
  text-transform: lowercase;
}
#zxcvb li .alt b {
  display: block;
  margin: 4px 0 0;
}
#zxcvb li .alt span {
  margin: 0;
}

#bottomrow li #fn span,
#bottomrow li #control span,
#bottomrow li #optionleft span,
#bottomrow li #commandleft span {
  display: block;
  text-align: left;
  margin: 31px 0 0 8px;
  font-size: 7.5pt;
  text-transform: lowercase;
}

#bottomrow li #optionright span,
#bottomrow li #commandright span {
  display: block;
  text-align: right;
  margin: 31px 8px 0 0;
  font-size: 7.5pt;
  text-transform: lowercase;
}

#bottomrow ol li #left span,
#bottomrow ol li #right span,
#bottomrow ol li #up span,
#bottomrow ol li #down span {
  display: block;
  margin: 9px 0 0;
}

.fn {
  height: 26px;
  width: 46px;
}
#delete {
  width: 72px;
}
#tab {
  width: 72px;
}
#caps {
  width: 85px;
}
#enter {
  width: 85px;
}
.shiftleft,
.shiftright {
  width: 112px;
}
#fn,
#control,
.option,
.command,
#spacebar {
  height: 49px;
}

#control {
  width: 56px;
}
.option {
  width: 46px;
}
.command {
  width: 67px;
}
#spacebar {
  width: 226px;
}

#left img,
#up img,
#down img,
#right img {
  border: none;
}
ul ol {
  list-style-type: none;
}
#down {
  height: 23px;
}
#up,
#left,
#right {
  height: 24px;
}
#left,
#right {
  margin: 30px 5px 5px;
}
#left:active,
#right:active {
  margin: 32px 5px 3px;
}
#up {
  margin: 5px 5px 1px;
  border-bottom-right-radius: 0px;
  border-bottom-left-radius: 0px;
}
#up:active {
  margin: 8px 5px -2px;
}
#down {
  margin: 0 5px 5px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}
#down:active {
  margin: 3px 5px 4px;
}

#main {
  width: 700px;
  padding: 20px 50px;
  margin: 0 auto 50px;
  background: #fff;
  border-radius: 5px;
  -webkit-box-shadow: 0 1px 2px #aaa;
}

h1 {
  color: #888;
  text-align: center;
  font: bold 25pt/25pt arial;
  margin: 30px 0 60px;
}

h2 {
  color: #666;
  font: 13pt/0pt arial;
}

p {
  color: #999;
  font: 9pt/17pt arial;
  margin: 0 0 50px;
}

small {
  font: italic 8pt/12pt arial;
  color: #aaa;
  padding: 0 130px 0 0;
  display: block;
}

cite {
  display: block;
  padding: 0 0 30px;
  margin: 0 auto;
  text-align: center;
  color: #ccc;
  font: italic bold 8pt arial;
}

cite a {
  color: #e5e5e5;
  text-decoration: underline;
}

#main a {
  color: #007fff;
}

ul,
ol {
  padding: 0px;
  margin: 0;
}

/* Micro Clearfix by Nicolas Gallagher - http://nicolasgallagher.com/micro-clearfix-hack */
/* For modern browsers */
.cf:before,
.cf:after {
  content: "";
  display: table;
}
.cf:after {
  clear: both;
}

/* For IE 6/7 (trigger hasLayout) */
.cf {
  zoom: 1;
}

/* #keyboard {
  transform: rotateX(40deg);

} */
</style>
