fetch('/components/nav.html')
  .then(res => res.text())
  .then(html => {
    document.getElementById('nav-placeholder').innerHTML = html;
    // Dynamically load nav.js after nav.html is injected
    const script = document.createElement('script');
    script.src = '/components/nav.js';
    document.body.appendChild(script);
  });