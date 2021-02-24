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
