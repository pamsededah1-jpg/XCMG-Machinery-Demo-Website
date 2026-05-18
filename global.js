const pathPrefix = window.location.pathname.includes('/pages/') ? '..' : '.';

function nav(active='home'){
  return `
  <div class="topbar">
    <div class="container topbar-inner">
      <div>Heavy equipment solutions for Nigeria, West Africa and major industrial projects.</div>
      <div>WhatsApp: <strong>+234 913 053 6798</strong></div>
    </div>
  </div>
  <nav class="nav">
    <div class="container nav-inner">
      <a class="brand" href="${pathPrefix}/index.html">
        <img src="${pathPrefix}/images/xcmg-logo-white.svg" alt="XCMG logo">
        <span><small>XCMG Nigeria</small> Industrial Machinery</span>
      </a>
      <div class="nav-links">
        <a class="${active==='home'?'active':''}" href="${pathPrefix}/index.html">Home</a>
        <a class="${active==='products'?'active':''}" href="${pathPrefix}/pages/products.html">Products</a>
        <a class="${active==='about'?'active':''}" href="${pathPrefix}/pages/about.html">About</a>
        <a class="${active==='projects'?'active':''}" href="${pathPrefix}/pages/projects.html">Projects</a>
        <a class="${active==='contact'?'active':''}" href="${pathPrefix}/pages/contact.html">Contact</a>
      </div>
      <a class="btn btn-primary" href="${pathPrefix}/pages/contact.html">Get a quote</a>
      <button class="nav-toggle" aria-label="Open menu" onclick="toggleMenu()"><span></span></button>
    </div>
    <div id="mobileMenu" class="mobile-menu">
      <a href="${pathPrefix}/index.html">Home</a>
      <a href="${pathPrefix}/pages/products.html">Products</a>
      <a href="${pathPrefix}/pages/about.html">About</a>
      <a href="${pathPrefix}/pages/projects.html">Projects</a>
      <a href="${pathPrefix}/pages/contact.html">Contact</a>
    </div>
  </nav>`;
}

function footer(){
  return `
  <footer class="footer">
    <div class="container footer-main">
      <div>
        <img src="${pathPrefix}/images/xcmg-logo-white.svg" alt="XCMG" style="height:44px;width:auto;margin-bottom:14px">
        <p>A professional static website package for XCMG Nigeria, designed to look credible, premium and ready for sales conversations, quotations and Netlify deployment.</p>
      </div>
      <div>
        <h4>Quick Links</h4>
        <div class="footer-links">
          <a href="${pathPrefix}/index.html">Homepage</a>
          <a href="${pathPrefix}/pages/products.html">Equipment Catalogue</a>
          <a href="${pathPrefix}/pages/projects.html">Projects & Use Cases</a>
          <a href="${pathPrefix}/pages/contact.html">Request Quote</a>
        </div>
      </div>
      <div>
        <h4>Contact</h4>
        <div class="footer-links">
          <a href="tel:+2349130536798">+234 913 053 6798</a>
          <a href="mailto:africa@xcmg.com">africa@xcmg.com</a>
          <span>Apapa, Lagos, Nigeria</span>
        </div>
      </div>
    </div>
    <div class="container footer-bottom">© 2026 XCMG Nigeria website concept. Ready for VS Code and Netlify deployment.</div>
  </footer>`;
}

function toggleMenu(){
  document.getElementById('mobileMenu')?.classList.toggle('open');
}

function injectLayout(active){
  document.getElementById('nav-root').innerHTML = nav(active);
  document.getElementById('footer-root').innerHTML = footer();
}

function initReveal(){
  const obs = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting) entry.target.classList.add('visible');
    });
  },{threshold:0.12});
  document.querySelectorAll('.reveal').forEach(el=>obs.observe(el));
}

document.addEventListener('DOMContentLoaded', initReveal);
