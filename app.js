
var mainContent = document.getElementById("main-content");

var mainContentChildren = mainContent.children;
console.log(mainContentChildren);

var renderElements = document.getElementsByClassName("render");
for (element of renderElements) {
    console.log(element.innerHTML);
}

document.getElementById("first-name").value = "Abdul";

document.getElementById("last-name").value = "Sameed";
document.getElementById("email").value = "sameed@example.com";

var form = document.getElementById("form-content");
console.log(form.nodeType)
var lname = document.getElementById("lastName")
console.log(lname.nodeType)
lname.children.innerHTML = "Sameed"
var main = document.getElementById("main-content")
var fchild = main.firstChild;
var lchild = main.lastChild;
var lname = document.getElementById("lastName")
var nextSib = lname.nextSibling;
var preSib = lname.previousSibling;
var email = document.getElementById("email")
var pnode = email.parentNode;
var pnodeType = email.parentNode.nodeType



