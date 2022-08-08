// ==UserScript==
// @name          kunden crater
// @namespace     http://userstyles.org
// @description	  A dark theme for mydealz.de
// @author        supp
// @include       https://kunden.codevale.de*
// @run-at        document-start
// @version       0.46
// @updateURL     https://raw.githubusercontent.com/e0xify/mydealz-dark/master/darkmydealz.js
// ==/UserScript==

(function() {var css = [
    "html,",
    "body {",
    "	background-color: #21252D !important;",
    "}",
    "",
    "html,",
    "body,",
    "body * {",
    "	border-color: #3C414C !important;",
    "}",
    "",
    "::-webkit-scrollbar {",
	"  width: 12px;",
	"  /* This is more usable for users trying to click it. */",
	"  background-color: rgba(0,0,0,0);",
	"  -webkit-border-radius: 0px;",
	"}",
	"/* hover effect for both scrollbar area, and scrollbar \'thumb\' */",
	"::-webkit-scrollbar:hover {",
	"  background-color: rgba(0, 0, 0, 0.09);",
	"}",
	"",
	"/* The scrollbar \'thumb\' ...that marque oval shape in a scrollbar */",
	"::-webkit-scrollbar-thumb:vertical {",
	"  /* This is the EXACT color of Mac OS scrollbars. ",
	"     Yes, I pulled out digital color meter */",
	"  background: rgba(0,0,0,0.5);",
	"  -webkit-border-radius: 0px;",
    " background-clip: padding-box;",
	"}",
	"::-webkit-scrollbar-thumb:vertical:active {",
	"  background: rgba(0,0,0,0.61); /* Some darker color when you click it */",
	"  -webkit-border-radius: 0px;",
	"}",
    ".height--all-full, .thread--type-card .thread-content--nonfixed, .userHtml-video-iframe {",
    "	background: #21252D !important;",
    "}",
    ".bg-white, .to-primary-400, table.px-6.py-4.text-sm.text-gray-500.whitespace-nowrap td{",
    "	background: #2b303b !important;",
    "box-shadow: 0px 0 50px -1px #2b303b;",

    "}",
    ".from-primary-500,  tr.bg-gray-50 td {",
    "background-color: #21252D !important;",
    "}",
     "* {",
    "	color: #ccc;",
    "}",
    ".text-black, .text-gray-900 {",
    "color:#fff !important;",
    ","




].join("\n");
             if (typeof GM_addStyle != "undefined") {
                 GM_addStyle(css);
             } else if (typeof PRO_addStyle != "undefined") {
                 PRO_addStyle(css);
             } else if (typeof addStyle != "undefined") {
                 addStyle(css);
             } else {
                 var node = document.createElement("style");
                 node.type = "text/css";
                 node.appendChild(document.createTextNode(css));
                 var heads = document.getElementsByTagName("head");
                 if (heads.length > 0) {
                     heads[0].appendChild(node);
                 } else {
                     // no head yet, stick it whereever
                     document.documentElement.appendChild(node);
                 }
             }

            })();
