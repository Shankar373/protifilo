window.SHANKAR_PROFILE_IMAGE = 'assets/images/profile.jpg';

document.addEventListener('DOMContentLoaded', function () {
  const avatar = document.querySelector('.avatar');
  if (avatar) {
    avatar.innerHTML = '<img class="profile-photo" src="' + window.SHANKAR_PROFILE_IMAGE + '" alt="Shankar Bandi">';
  }

  const nav = document.querySelector('.links');
  if (nav && !nav.querySelector('[href="#about"]')) {
    const aboutLink = document.createElement('a');
    aboutLink.href = '#about';
    aboutLink.textContent = 'About';
    nav.insertBefore(aboutLink, nav.firstChild);
  }

  const heroActions = document.querySelector('.hero .actions');
  if (heroActions && !heroActions.querySelector('.linkedin-link')) {
    const linkedin = document.createElement('a');
    linkedin.className = 'btn linkedin-link';
    linkedin.href = 'https://www.linkedin.com/in/narayana-shankar-bandi-5583a3294/';
    linkedin.target = '_blank';
    linkedin.rel = 'noopener';
    linkedin.textContent = 'LinkedIn ↗';
    heroActions.appendChild(linkedin);
  }

  const hero = document.querySelector('.hero');
  const services = document.querySelector('#services');
  if (hero && services && !document.querySelector('#about')) {
    const about = document.createElement('section');
    about.className = 'section about-section';
    about.id = 'about';
    about.innerHTML = `
      <div class="wrap">
        <div class="sectionhead">
          <div class="kicker">About me</div>
          <h2>A developer focused on useful software.</h2>
          <p>I'm Shankar Bandi, a full-stack developer working across frontend, backend, APIs and databases. I build practical web experiences and business applications with a focus on clear UX, responsive design and maintainable implementation.</p>
        </div>
        <div class="about-grid">
          <article class="card about-card">
            <h3>What I work with</h3>
            <p class="muted">React, Angular, Java, Spring Boot, Node.js, Python, MongoDB, SQL, REST APIs, Git, Maven and Docker.</p>
          </article>
          <article class="card about-card">
            <h3>Recognition</h3>
            <p class="muted">Recognized as Employee of the Month at SystemaOps. This portfolio also includes my enterprise COBOL → Java modernization work alongside client-oriented web projects.</p>
          </article>
        </div>
      </div>`;
    hero.insertAdjacentElement('afterend', about);
  }

  const style = document.createElement('style');
  style.textContent = `
    .avatar{width:190px;height:250px;overflow:hidden;border-radius:22px;background:#162940;margin-bottom:20px;box-shadow:0 18px 45px rgba(0,0,0,.28);}
    .profile-photo{width:100%;height:100%;display:block;object-fit:cover;object-position:center 34%;}
    .profile{position:relative;overflow:hidden;}
    .profile:before{content:"";position:absolute;width:180px;height:180px;right:-70px;top:-70px;border-radius:50%;background:rgba(110,231,249,.10);filter:blur(2px);}
    .profile h2{letter-spacing:-1px;}
    .about-grid{display:grid;grid-template-columns:1fr 1fr;gap:16px;}
    .about-card{min-height:150px;}
    .btn{transition:transform .2s ease,border-color .2s ease,box-shadow .2s ease;}
    .btn:hover{transform:translateY(-2px);box-shadow:0 10px 25px rgba(0,0,0,.18);}
    .project{transition:transform .2s ease,border-color .2s ease,box-shadow .2s ease;}
    .project:hover{transform:translateY(-4px);border-color:#35516e;box-shadow:0 18px 40px rgba(0,0,0,.16);}
    @media(max-width:800px){.about-grid{grid-template-columns:1fr;}}
    @media(max-width:520px){.avatar{width:150px;height:200px;}}
  `;
  document.head.appendChild(style);
});
