walk(document.body);

function walk(node) {
  var child, next;

  if (node && node.isContentEditable) return;

  switch (node.nodeType) {
    case 1: // Element
    case 9: // Document
    case 11: // Document fragment
      child = node.firstChild;
      while (child) {
        next = child.nextSibling;
        walk(child);
        child = next;
      }
      break;

    case 3: // Text node
      handleText(node);
      break;
  }
}

function handleText(textNode) {
  var a = textNode.nodeValue;
  if (a.match(/\baway\b/gi)) {
    a = a
      .replace(/\baway\b/g, "AFK")
      .replace(/\bAway\b/g, "AFK");
    textNode.nodeValue = a;
  }
    var b = textNode.nodeValue;
  if (b.match(/\bhappy\b/gi)) {
    b = b
      .replace(/\bhappy\b/g, "POG")
      .replace(/\bHappy\b/g, "POG");
    textNode.nodeValue = b;
  }
      var c = textNode.nodeValue;
  if (c.match(/\blying\b/gi)) {
    c = c
      .replace(/\blying\b/g, "cap")
      .replace(/\blie\b/g, "cap")
      .replace(/\bLie\b/g, "Cap")
      .replace(/\bLying\b/g, "Cap");
    textNode.nodeValue = c;
  }
        var d = textNode.nodeValue;
  if (d.match(/\bangry\b/gi)) {
    d = d
      .replace(/\bangry\b/g, "salt")
      .replace(/\bAngry\b/g, "Salt");
    textNode.nodeValue = d;
  }
        var e = textNode.nodeValue;
  if (e.match(/\bsad\b/gi)) {
    e = e
      .replace(/\bsad\b/g, "feelsbadman")
      .replace(/\bSad\b/g, "Feelsbadman");
    textNode.nodeValue = e;
  }
          var f = textNode.nodeValue;
  if (f.match(/\blaughing\b/gi)) {
    f = f
      .replace(/\blaughing\b/g, "OMEGALUL")
      .replace(/\blaugh\b/g, "OMEGALUL")
      .replace(/\bLaugh\b/g, "OMEGALUL")
      .replace(/\bLaughing\b/g, "OMEGALUL");
    textNode.nodeValue = f;
  }
          var g = textNode.nodeValue;
  if (g.match(/\blaugh\b/gi)) {
    g = g
      .replace(/\blaugh\b/g, "OMEGALUL")
      .replace(/\bLaugh\b/g, "OMEGALUL")
    textNode.nodeValue = g;
  }
}

if (window.MutationObserver) {
  var observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
      if (mutation.addedNodes) {
        for (var i = 0; i < mutation.addedNodes.length; i++) {
          var node = mutation.addedNodes[i];
          walk(node);
        }
      }
    });
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true
  });
}

setTimeout(function() {
  walk(document.body);
}, 1000);

////////////////////////////////////////CITATIONS/////////////////////////////////////
//https://chrome.google.com/webstore/detail/yas-by-queer-eye/emhcionpgomklidodcncnfncjfeaifoj/related
//////////////////////////////////////////////////////////////////////////////////////

$("img").attr("src", "https://static-cdn.jtvnw.net/jtv_user_pictures/83671d65-e64a-42f5-8d44-55bfab2fab66-profile_image-300x300.png").load(function(){
    this.width; 

});

////////////////////////////////////////CITATIONS/////////////////////////////////////
//https://stackoverflow.com/questions/554273/changing-the-image-source-using-jquery
//////////////////////////////////////////////////////////////////////////////////////
