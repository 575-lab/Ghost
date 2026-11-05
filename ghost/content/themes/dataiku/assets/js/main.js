(function () {
  var toggle = document.querySelector('[data-menu-toggle]');
  var nav = document.getElementById('dk-nav');
  if (!toggle || !nav) {
    return;
  }
  toggle.addEventListener('click', function () {
    var open = nav.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    toggle.querySelector('.material-symbols-sharp').textContent = open ? 'close' : 'menu';
  });
})();

// Code cards: show the language and add a copy button. Prism (loaded on posts and pages)
// highlights any block with a language-xxx class.
(function () {
  var LABELS = {
    bash: 'Shell',
    shell: 'Shell',
    sh: 'Shell',
    js: 'JavaScript',
    javascript: 'JavaScript',
    ts: 'TypeScript',
    typescript: 'TypeScript',
    py: 'Python',
    python: 'Python',
    yml: 'YAML',
    yaml: 'YAML',
    sql: 'SQL',
    json: 'JSON',
    html: 'HTML',
    xml: 'XML',
    css: 'CSS',
    go: 'Go',
    rust: 'Rust',
    java: 'Java',
    dockerfile: 'Dockerfile',
    markdown: 'Markdown',
    toml: 'TOML',
    plaintext: 'Text',
    text: 'Text',
  };

  document.querySelectorAll('.dk-content pre > code').forEach(function (code) {
    var pre = code.parentNode;
    var match = /(?:^|\s)lang(?:uage)?-([\w+#-]+)/.exec(code.className);
    var lang = match ? match[1].toLowerCase() : '';

    var wrap = document.createElement('div');
    wrap.className = 'dk-code';
    pre.parentNode.insertBefore(wrap, pre);
    wrap.appendChild(pre);

    var bar = document.createElement('div');
    bar.className = 'dk-code-bar';
    var label = document.createElement('span');
    label.className = 'dk-code-lang';
    label.textContent = LABELS[lang] || lang;
    bar.appendChild(label);

    if (navigator.clipboard) {
      var button = document.createElement('button');
      button.type = 'button';
      button.className = 'dk-code-copy';
      button.setAttribute('aria-label', 'Copy code');
      button.innerHTML =
        '<span class="material-symbols-sharp" aria-hidden="true">content_copy</span><span>Copy</span>';
      button.addEventListener('click', function () {
        navigator.clipboard.writeText(code.textContent).then(function () {
          button.lastChild.textContent = 'Copied';
          setTimeout(function () {
            button.lastChild.textContent = 'Copy';
          }, 1500);
        });
      });
      bar.appendChild(button);
    }
    wrap.appendChild(bar);
  });
})();
