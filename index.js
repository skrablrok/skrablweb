/* ===== INTRO OVERLAY ===== */
(function () {
    const overlay = document.getElementById('intro-overlay');
    if (!overlay) return;

    // Skip on return visits within the same browser session
    if (sessionStorage.getItem('swIntro')) {
        overlay.remove();
        return;
    }

    // Lock scroll while overlay is visible — use a class on html so that
    // scrollbar-gutter:stable keeps the gutter reserved and no CLS occurs
    document.documentElement.classList.add('intro-active');

    // Split "SKRABLWEB" into individually-animated letters
    const logo = document.getElementById('intro-logo');
    'SKRABLWEB'.split('').forEach((char, i) => {
        const span = document.createElement('span');
        span.className = 'intro-letter';
        span.style.animationDelay = (0.28 + i * 0.07) + 's';
        span.textContent = char;
        logo.appendChild(span);
    });

    // Slide overlay upward after the content has finished animating
    const EXIT_AT   = 3100;   // ms — when the sweep starts
    const REMOVE_AT = 4200;   // ms — after the 1 s CSS transition finishes

    setTimeout(() => {
        overlay.classList.add('exit');
        document.documentElement.classList.remove('intro-active');
        sessionStorage.setItem('swIntro', '1');
    }, EXIT_AT);

    setTimeout(() => overlay.remove(), REMOVE_AT);
})();

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

// Hamburger menu logika
function toggleMenu() {
    const isOpen = navlist.classList.toggle('open');
    menu.setAttribute('aria-expanded', isOpen);
}
menu.onclick = toggleMenu;
menu.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggleMenu(); }
});

// Scroll logika
window.addEventListener("scroll", function() {
    const navbar = document.querySelector(".nav_bar");
    const logoWhite = document.querySelector(".logo");
    const logoBlack = document.querySelector(".logo2");
    const navlinks = document.querySelectorAll(".nav_link");

    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
        
        // Menjava logotipa
        logoWhite.style.display = "none";
        logoBlack.style.display = "flex";

        // Barva povezav (to že imaš)
        navlinks.forEach(link => {
            link.style.color = "#0d1e34";
        });
    } else {
        navbar.classList.remove("scrolled");
        
        // Vrnitev logotipa v prvotno stanje
        logoWhite.style.display = "flex";
        logoBlack.style.display = "none";

        // Reset barve povezav
        navlinks.forEach(link => {
            link.style.color = ""; 
        });
    }
});







document.addEventListener('DOMContentLoaded', () => {
    const dropdownLink = document.querySelector('.dropdown > a');
    const dropdownMenu = document.querySelector('.dropdown-menu');

    if (dropdownLink) {
        dropdownLink.addEventListener('click', function(e) {
            if (window.innerWidth <= 1035) {
                e.preventDefault();
                e.stopPropagation();
                const isOpen = dropdownMenu.classList.toggle('show');
                dropdownLink.setAttribute('aria-expanded', isOpen);
            }
        });
    }
});






















const texts = [
    "Izdelava personalizirane spletne strani",
    "Izdelava personalizirane spletne trgovine",
    "Izdelava SEO optimizacije",
    "Izdelava oglasov na socialnih omrežjih"
];

const element = document.getElementById("typewriter");

let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typingSpeed = 40;
const deletingSpeed = 20;
const pauseAfterTyping = 700;
const pauseAfterDeleting = 400;

function typeEffect() {
    const currentText = texts[textIndex];

    if (!isDeleting) {
        // TYPING
        element.textContent = currentText.slice(0, charIndex + 1);
        charIndex++;

        if (charIndex === currentText.length) {
            setTimeout(() => isDeleting = true, pauseAfterTyping);
        }
    } else {
        // DELETING
        element.textContent = currentText.slice(0, charIndex - 1);
        charIndex--;

        if (charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
            setTimeout(() => {}, pauseAfterDeleting);
        }
    }

    setTimeout(typeEffect, isDeleting ? deletingSpeed : typingSpeed);
}

if (element) typeEffect();






















(function () {
  const stage    = document.getElementById('ref-stage');
  const carousel = document.getElementById('ref-carousel');
  const detail   = document.getElementById('ref-detail');
  if (!carousel || !stage || !detail) return;
  const images   = carousel.querySelectorAll('.slika');

  const projectData = [
    {
      title: "Manus Aurea",
      url: "manusaurea.si",
      img: "index/ref_manus.webp",
      paragraphs: [
        "Manus Aurea je podjetje, ki se ukvarja s športno terapijo in masažami.",
        "Stranka si je zaželela preprosto spletno stran v enem jeziku z mehkimi a profesionalno usklajenimi barvami.",
        "Začel sem z izdelavo \"hero section\", ki je obraz celotne strani.",
        "Levo stran sem uporabil za kratko besedilo, desno pa za sliko in CTA gumb.",
        "Stran je v celoti prilagojena za vse naprave."
      ]
    },
    {
      title: "Matkom",
      url: "matkom.si",
      img: "index/ref_matkom.webp",
      paragraphs: [
        "Matkom je podjetje, za katero sem zasnoval čisto in profesionalno spletno predstavitev.",
        "Stranka je želela preprosto, eno-jezično stran z usklajenimi barvami.",
        "Začel sem s hero sekcijo, ki takoj sporoči glavno storitev.",
        "Dodal sem opise storitev, mnenja strank ter kontaktni obrazec.",
        "Stran je popolnoma prilagojena vsem napravam."
      ]
    },
    {
      title: "BTINOX",
      url: "btinox.si",
      img: "index/ref_btinox.webp",
      paragraphs: [
        "BTINOX je predstavitvena stran za podjetje iz kovinske industrije.",
        "Cilj je bil moderen, čist in profesionalen videz.",
        "Hero sekcija takoj predstavi glavno dejavnost in CTA.",
        "Dodal sem galerijo, opise storitev ter kontaktni obrazec.",
        "Vse skupaj odlično deluje na vseh napravah."
      ]
    },
    {
      title: "Slikopleskarstvo Novak",
      url: "slikopleskarstvo-novak.si",
      img: "index/ref_novak.webp",
      paragraphs: [
        "Spletna stran za pleskarsko podjetje s poudarkom na portfelju.",
        "Stranka je želela toplo, vabljivo paleto barv.",
        "Hero sekcija z jasnim CTA za hitro povpraševanje.",
        "Dodane so reference, opisi storitev in obrazec.",
        "Stran je v celoti odzivna."
      ]
    },
    {
      title: "VIP STROJ",
      url: "vipstroj.si",
      img: "index/ref_vipstroj.webp",
      paragraphs: [
        "VIP STROJ predstavlja storitve podjetja na sodoben način.",
        "Naročnik je želel močan, tehnično usmerjen videz.",
        "Hero sekcija s poudarjenim CTA.",
        "Dodal sem opise storitev, galerijo in kontakt.",
        "Stran deluje brezhibno na vseh napravah."
      ]
    }
  ];

  /* ---- BROWSE: position 3 visible images around an active index ---- */
  let activeIndex = 2;
  function updatePositions(idx) {
    activeIndex = idx;
    images.forEach((img, i) => {
      img.classList.remove('active', 'left', 'right', 'hidden');
      if (i === idx)            img.classList.add('active');
      else if (i === idx - 1)   img.classList.add('left');
      else if (i === idx + 1)   img.classList.add('right');
      else                      img.classList.add('hidden');
    });
  }
  updatePositions(2);

  images.forEach((img) => {
    const i = Number(img.dataset.index);
    img.addEventListener('mouseenter', () => {
      if (!stage.classList.contains('detail')) updatePositions(i);
    });
    img.addEventListener('click', () => {
      // Only the active image opens detail; otherwise just bring it to center.
      if (!img.classList.contains('active')) {
        updatePositions(i);
        return;
      }
      openDetail(i);
    });
  });

  /* ---- DETAIL: swap to split layout, image stays in flow ---- */
  function openDetail(i) {
    const d = projectData[i];
    detail.innerHTML = `
      <img class="detail-image" src="${d.img}" alt="${d.title}" />
      <div class="detail-body">
        <span class="reveal" style="--delay:0s"><h3>${d.title}</h3></span>
        ${d.paragraphs.map((t, k) =>
          `<span class="reveal" style="--delay:${(k + 1) * 0.12}s"><p>${t}</p></span>`
        ).join('')}
        <button type="button" class="detail-back" id="detail-back">VSE REFERENCE</button>
      </div>
    `;
    stage.classList.add('detail');
    document.getElementById('detail-back').addEventListener('click', closeDetail);
    if (window.innerWidth < 860) {
      const refSection = document.getElementById('reference') || stage;
      refSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  function closeDetail() {
    stage.classList.remove('detail');
    detail.innerHTML = '';
    updatePositions(activeIndex);
  }
})();




/* ===== SCROLL-TRIGGERED ANIMATIONS (varied per section) ===== */
(function () {
    function anim(selector, cls, delay) {
        document.querySelectorAll(selector).forEach(el => {
            el.classList.add(cls);
            el.style.setProperty('--delay', delay + 's');
        });
    }

    // Gallery heading — reliable fade-up so it never stays hidden
    anim('#galerija-text h2',           'fade-up',  0);
    anim('#galerija-text #manjsi-text', 'fade-up',  0.14);
    anim('#galerija-text a',            'scale-up', 0.28);

    // Workflow section containers
    anim('.workflow-left',  'fade-up', 0);
    anim('.workflow-right', 'fade-up', 0.1);

    // Workflow cards — Y-axis flip, staggered
    document.querySelectorAll('.card').forEach((el, i) => {
        el.classList.add('card-flip');
        el.style.setProperty('--delay', (i * 0.12).toFixed(2) + 's');
    });

    // CTA banner — scale up
    anim('#prekinitev-1 #text',  'scale-up', 0);
    anim('#prekinitev-1 button', 'scale-up', 0.2);

    // About section
    anim('#leva_o_nas',  'fade-up', 0);
    anim('#desna_o_nas', 'fade-up', 0.18);

    // Service cards — X-axis tilt-in, staggered
    document.querySelectorAll('.storitev').forEach((el, i) => {
        el.classList.add('tilt-in');
        el.style.setProperty('--delay', (i * 0.1).toFixed(2) + 's');
    });

    // Contact form — scale up
    anim('#kontakt-obr', 'scale-up', 0);

    const io = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
                io.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    document.querySelectorAll(
        '.fade-up, .fade-in, .clip-reveal, .card-flip, .tilt-in, .scale-up'
    ).forEach(el => io.observe(el));
})();


/* ===== 3D TILT – service cards ===== */
(function () {
    document.querySelectorAll('.storitev').forEach(card => {
        card.addEventListener('mouseenter', () => {
            if (!card.classList.contains('in-view')) return;
            card.style.transition = 'transform 0.1s ease, box-shadow 0.3s ease';
        });
        card.addEventListener('mousemove', e => {
            if (!card.classList.contains('in-view')) return;
            const r = card.getBoundingClientRect();
            const dx = ((e.clientX - r.left) / r.width  - 0.5) * 2;
            const dy = ((e.clientY - r.top)  / r.height - 0.5) * 2;
            card.style.transform = `perspective(700px) rotateY(${dx * 9}deg) rotateX(${-dy * 6}deg) scale(1.02) translateZ(8px)`;
        });
        card.addEventListener('mouseleave', () => {
            card.style.transition = 'transform 0.55s ease, box-shadow 0.3s ease';
            card.style.transform = '';
        });
    });
})();




/* ===== CUSTOM CURSOR – crosshair ===== */
(function () {
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;

    const dot  = document.createElement('div');
    const hBar = document.createElement('div');
    const vBar = document.createElement('div');
    dot.className  = 'cursor-dot';
    hBar.className = 'cursor-h';
    vBar.className = 'cursor-v';
    document.body.prepend(vBar);
    document.body.prepend(hBar);
    document.body.prepend(dot);

    let mx = -300, my = -300;
    let lx = -300, ly = -300;

    document.addEventListener('mousemove', e => {
        mx = e.clientX; my = e.clientY;
        dot.style.left = mx + 'px';
        dot.style.top  = my + 'px';
    });

    // Lines lag slightly behind for a fluid feel
    (function tick() {
        lx += (mx - lx) * 0.18;
        ly += (my - ly) * 0.18;
        hBar.style.top  = ly + 'px';
        vBar.style.left = lx + 'px';
        requestAnimationFrame(tick);
    })();

    document.querySelectorAll('a, button, .storitev, .card, .menu-item, .slika').forEach(el => {
        el.addEventListener('mouseenter', () => document.body.classList.add('cursor-hover'));
        el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-hover'));
    });

    document.querySelectorAll('input, textarea').forEach(el => {
        el.addEventListener('mouseenter', () => {
            document.body.classList.remove('cursor-hover');
            document.body.classList.add('cursor-text');
        });
        el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-text'));
    });

    document.addEventListener('mouseleave', () => {
        document.body.classList.remove('cursor-hover', 'cursor-text');
    });
})();


/* ===== SCROLL PROGRESS BAR ===== */
(function () {
    const bar = document.getElementById('scroll-progress');
    if (!bar) return;
    window.addEventListener('scroll', () => {
        const max = document.documentElement.scrollHeight - window.innerHeight;
        bar.style.width = (max > 0 ? (window.scrollY / max) * 100 : 0).toFixed(1) + '%';
    }, { passive: true });
})();


/* ===== 3D TILT – workflow cards ===== */
(function () {
    document.querySelectorAll('.card').forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transition = 'transform 0.1s ease, background 0.3s ease';
            card.style.position   = 'relative';
            card.style.zIndex     = '2';
        });
        card.addEventListener('mousemove', e => {
            const r  = card.getBoundingClientRect();
            const dx = ((e.clientX - r.left) / r.width  - 0.5) * 2;
            const dy = ((e.clientY - r.top)  / r.height - 0.5) * 2;
            card.style.transform = `perspective(600px) rotateY(${dx * 6}deg) rotateX(${-dy * 5}deg) translateZ(6px)`;
        });
        card.addEventListener('mouseleave', () => {
            card.style.transition = 'transform 0.4s ease, background 0.3s ease';
            card.style.transform  = '';
            card.style.zIndex     = '';
        });
    });
})();


/* ===== 3D HERO HEADING – dynamic light source via text-shadow ===== */
(function () {
    if (window.innerWidth <= 765) return;
    const heading = document.getElementById('naslov1');
    const hero    = document.querySelector('header');
    if (!heading || !hero) return;

    let tx = 0, ty = 0;   // target (raw mouse position)
    let cx = 0, cy = 0;   // current (lerped)
    let active = false;
    let rafId  = null;

    function applyShadow() {
        const sx = 1 + cx * -3;
        const sy = 1 + cy * -2;
        const layers = Array.from({ length: 12 }, (_, i) => {
            const n  = i + 1;
            const rc = Math.round(215 - i * 15.5);
            const gc = Math.round(80  - i * 6.5);
            const op = (0.44 - i * 0.037).toFixed(2);
            return `${(sx * n).toFixed(2)}px ${(sy * n).toFixed(2)}px 0 rgba(${rc},${gc},0,${op})`;
        });
        layers.push('0 28px 45px rgba(0,0,0,.40)');
        heading.style.textShadow = layers.join(', ');
    }

    function tick() {
        cx += (tx - cx) * 0.06;
        cy += (ty - cy) * 0.06;
        applyShadow();
        if (active || Math.abs(tx - cx) > 0.0005 || Math.abs(ty - cy) > 0.0005) {
            rafId = requestAnimationFrame(tick);
        } else {
            rafId = null;
            if (!active) heading.style.textShadow = '';
        }
    }

    hero.addEventListener('mousemove', e => {
        const r = hero.getBoundingClientRect();
        tx = (e.clientX - r.left) / r.width  - 0.5;
        ty = (e.clientY - r.top)  / r.height - 0.5;
        active = true;
        if (!rafId) rafId = requestAnimationFrame(tick);
    });

    hero.addEventListener('mouseleave', () => {
        active = false;
        tx = 0;
        ty = 0;
        if (!rafId) rafId = requestAnimationFrame(tick);
    });
})();


/* ===== MAGNETIC BUTTONS ===== */
(function () {
    document.querySelectorAll('#vec_referenc, #prekinitev-1 button, .submit-btn').forEach(btn => {
        btn.addEventListener('mouseenter', () => {
            btn.style.transition = 'transform 0.15s ease';
        });
        btn.addEventListener('mousemove', e => {
            const r  = btn.getBoundingClientRect();
            const dx = (e.clientX - (r.left + r.width  / 2)) * 0.18;
            const dy = (e.clientY - (r.top  + r.height / 2)) * 0.22;
            btn.style.transform = `translate(${dx}px, ${dy}px)`;
        });
        btn.addEventListener('mouseleave', () => {
            btn.style.transition = 'transform 0.5s cubic-bezier(0.23, 1, 0.32, 1)';
            btn.style.transform  = '';
        });
    });
})();

/* ===== SCROLL MARQUEE ===== */
(function () {
    const section = document.getElementById('scroll-marquee');
    if (!section) return;

    const rows = section.querySelectorAll('.sm-row');

    function update() {
        const rect    = section.getBoundingClientRect();
        const viewH   = window.innerHeight;
        const progress = (viewH - rect.top) / (viewH + rect.height);
        const centered = progress - 0.5;

        rows.forEach((row, i) => {
            const dir   = parseFloat(row.dataset.dir);
            const speed = 1 + i * 0.2;
            row.querySelector('.sm-track').style.transform =
                'translateX(' + (dir * centered * 30 * speed).toFixed(2) + '%)';
        });
    }

    window.addEventListener('scroll', update, { passive: true });
    update();
})();

/* ===== SUBPAGE SCROLL ANIMATIONS ===== */
(function () {
    const img     = document.querySelector('.leva img');
    const steps   = document.querySelectorAll('.desna .opis');
    const section = document.querySelector('.storitev');
    if (!img && !steps.length) return;

    // Highlight step numbers — wrap the digit in a circular badge, strip the trailing dot
    steps.forEach(step => {
        const h2 = step.querySelector('h2');
        if (!h2) return;
        h2.innerHTML = h2.innerHTML.replace(/^(\s*\d+)\.?\s*/, '<span class="sp-num">$1</span> ');
    });

    // Add animation classes + staggered delays
    if (img) img.classList.add('sp-img');
    steps.forEach((el, i) => {
        el.classList.add('sp-step');
        el.style.setProperty('--sp-delay', (i * 0.1).toFixed(2) + 's');
    });

    // Observer for image + step items
    const io = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add('sp-in');
            io.unobserve(entry.target);
        });
    }, { threshold: 0.15, rootMargin: '0px 0px -30px 0px' });

    if (img) io.observe(img);
    steps.forEach(el => io.observe(el));

    // Observer for the orange accent line on the section
    if (section) {
        const lineObs = new IntersectionObserver(([e]) => {
            if (e.isIntersecting) {
                section.classList.add('sp-line-in');
                lineObs.disconnect();
            }
        }, { threshold: 0.05 });
        lineObs.observe(section);
    }

    // 3D mouse tilt on the image
    const leva = document.querySelector('.leva');
    if (leva && img) {
        leva.addEventListener('mouseenter', () => {
            if (!img.classList.contains('sp-in')) return;
            img.style.transition = 'transform 0.1s ease, box-shadow 0.15s ease';
        });
        leva.addEventListener('mousemove', e => {
            if (!img.classList.contains('sp-in')) return;
            const r = leva.getBoundingClientRect();
            const x = (e.clientX - r.left) / r.width  - 0.5;
            const y = (e.clientY - r.top)  / r.height - 0.5;
            img.style.transform = `perspective(900px) rotateY(${(x * 14).toFixed(1)}deg) rotateX(${(-y * 10).toFixed(1)}deg) scale(1.03)`;
            img.style.boxShadow = `${(-x * 20).toFixed(1)}px ${(-y * 14).toFixed(1)}px 44px rgba(0,0,0,0.18)`;
        });
        leva.addEventListener('mouseleave', () => {
            img.style.transition = 'transform 0.5s cubic-bezier(0.23,1,0.32,1), box-shadow 0.5s ease';
            img.style.transform  = 'perspective(900px) rotateY(0deg) rotateX(0deg) scale(1)';
            img.style.boxShadow  = '0 14px 44px rgba(0,0,0,0.12)';
        });
    }
})();


/* ===== SUBPAGE NEW LAYOUT ANIMATIONS ===== */
(function () {
    const cards      = document.querySelectorAll('.sp-card');
    const introWrap  = document.querySelector('.sp-intro-img');
    const introImg   = introWrap && introWrap.querySelector('img');
    const introText  = document.querySelector('.sp-intro-text');
    if (!cards.length && !introImg) return;

    // -- Highlight current page in the dropdown --
    const currentFile = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.dropdown-menu a').forEach(link => {
        if (link.getAttribute('href') === currentFile) {
            link.classList.add('sp-nav-active');
        }
    });

    // -- Staggered card reveal --
    cards.forEach((card, i) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(22px)';
        card.style.transitionDelay = (i * 0.1).toFixed(2) + 's';
    });
    const cardObs = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            const el = entry.target;
            const delay = parseFloat(el.style.transitionDelay || '0') * 1000;
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
            el.classList.add('sp-card-in');
            cardObs.unobserve(el);
            setTimeout(() => { el.style.transitionDelay = '0s'; }, delay + 700);
        });
    }, { threshold: 0.08 });
    cards.forEach(c => cardObs.observe(c));

    // -- Intro text stagger --
    if (introText) {
        [...introText.children].forEach((el, i) => {
            el.style.opacity    = '0';
            el.style.transform  = 'translateY(18px)';
            el.style.transition = `opacity 0.55s ease ${(0.1 + i * 0.1).toFixed(2)}s, transform 0.55s ease ${(0.1 + i * 0.1).toFixed(2)}s`;
        });
        const txtObs = new IntersectionObserver(([e]) => {
            if (!e.isIntersecting) return;
            [...introText.children].forEach(el => {
                el.style.opacity  = '1';
                el.style.transform = 'translateY(0)';
            });
            txtObs.disconnect();
        }, { threshold: 0.2 });
        txtObs.observe(introText);
    }

    // -- Intro image reveal + 3D mouse tilt --
    if (introImg && introWrap) {
        introImg.style.opacity    = '0';
        introImg.style.transform  = 'perspective(900px) translateX(-30px) rotateY(5deg) scale(0.96)';
        introImg.style.transition = 'opacity 0.85s cubic-bezier(0.23,1,0.32,1), transform 0.85s cubic-bezier(0.23,1,0.32,1)';

        const imgObs = new IntersectionObserver(([e]) => {
            if (!e.isIntersecting) return;
            introImg.style.opacity   = '1';
            introImg.style.transform = 'perspective(900px) translateX(0) rotateY(0) scale(1)';
            imgObs.disconnect();
        }, { threshold: 0.2 });
        imgObs.observe(introWrap);

        introWrap.addEventListener('mouseenter', () => {
            introImg.style.transition = 'transform 0.1s ease, box-shadow 0.15s ease';
        });
        introWrap.addEventListener('mousemove', e => {
            const r = introWrap.getBoundingClientRect();
            const x = (e.clientX - r.left) / r.width  - 0.5;
            const y = (e.clientY - r.top)  / r.height - 0.5;
            introImg.style.transform = `perspective(900px) rotateY(${(x * 12).toFixed(1)}deg) rotateX(${(-y * 9).toFixed(1)}deg) scale(1.03)`;
            introImg.style.boxShadow = `${(-x * 18).toFixed(1)}px ${(-y * 13).toFixed(1)}px 40px rgba(0,0,0,0.16)`;
        });
        introWrap.addEventListener('mouseleave', () => {
            introImg.style.transition = 'transform 0.5s cubic-bezier(0.23,1,0.32,1), box-shadow 0.5s ease';
            introImg.style.transform  = 'perspective(900px) rotateY(0) rotateX(0) scale(1)';
            introImg.style.boxShadow  = '';
        });
    }
})();


/* ===== REFERENCE CARDS ANIMATION ===== */
(function () {
    const refCards = document.querySelectorAll('.ref-card');
    if (!refCards.length) return;

    refCards.forEach((card, i) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(26px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s cubic-bezier(0.23,1,0.32,1)';
        card.style.transitionDelay = (i * 0.09).toFixed(2) + 's';
    });

    const obs = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            const el = entry.target;
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
            obs.unobserve(el);
            setTimeout(() => { el.style.transitionDelay = '0s'; },
                parseFloat(el.style.transitionDelay || '0') * 1000 + 700);
        });
    }, { threshold: 0.08 });

    refCards.forEach(c => obs.observe(c));

    // Intro stats stagger
    const stats = document.querySelectorAll('.ref-stat');
    stats.forEach((stat, i) => {
        stat.style.opacity = '0';
        stat.style.transform = 'translateY(16px)';
        stat.style.transition = `opacity 0.5s ease ${(0.15 + i * 0.12).toFixed(2)}s, transform 0.5s ease ${(0.15 + i * 0.12).toFixed(2)}s`;
    });
    if (stats.length) {
        const statsObs = new IntersectionObserver(([e]) => {
            if (!e.isIntersecting) return;
            stats.forEach(s => { s.style.opacity = '1'; s.style.transform = 'translateY(0)'; });
            statsObs.disconnect();
        }, { threshold: 0.3 });
        statsObs.observe(stats[0].closest('.ref-stats'));
    }
})();


/* ===== ICON GLOBE ===== */
(function () {
    const globe = document.getElementById('icon-globe');
    const wrap  = document.getElementById('globe-wrap');
    if (!globe || !wrap) return;

    const icons = [
        'fab fa-html5',
        'fab fa-css3-alt',
        'fab fa-js',
        'fas fa-code',
        'fab fa-figma',
        'fas fa-database',
    ];

    const isMobileGlobe = window.innerWidth < 1000;
    const COUNT  = isMobileGlobe ? 18 : 20;
    const mobileGlobeSize = Math.max(260, Math.min(320, Math.round(window.innerWidth * 0.8)));
    const RADIUS = isMobileGlobe ? Math.min(135, Math.round(mobileGlobeSize / 2) - 20) : 240;

    // Fibonacci sphere — evenly distributed points on a sphere
    for (let i = 0; i < COUNT; i++) {
        const phi   = Math.acos(1 - 2 * (i + 0.5) / COUNT);
        const theta = Math.PI * (1 + Math.sqrt(5)) * i;

        const tYdeg = theta * (180 / Math.PI);
        const rXdeg = (phi   * 180 / Math.PI) - 90;

        const el = document.createElement('i');
        el.className = icons[i % icons.length];
        el.style.cssText =
            'transform:translate(-50%,-50%) rotateY(' + tYdeg + 'deg) rotateX(' + (-rXdeg) + 'deg) translateZ(' + RADIUS + 'px)';
        globe.appendChild(el);
    }

    let rotX = 15, rotY = 0;
    let velX = 0,  velY = 0.22;
    let isHovering = false;
    let lastGlobeTick = 0;

    // Mouse interaction only on desktop — mobile just auto-spins
    if (!isMobileGlobe) {
        wrap.addEventListener('mouseenter', () => { isHovering = true; });
        wrap.addEventListener('mouseleave', () => { isHovering = false; });
        wrap.addEventListener('mousemove',  e  => {
            const r  = wrap.getBoundingClientRect();
            const dx = (e.clientX - (r.left + r.width  / 2)) / (r.width  / 2);
            const dy = (e.clientY - (r.top  + r.height / 2)) / (r.height / 2);
            velY = dx * 3.5;
            velX = -dy * 3.5;
        });
    }

    (function tick(ts = 0) {
        // Throttle to ~20 fps on mobile to save battery / GPU
        if (isMobileGlobe && ts > 0 && ts - lastGlobeTick < 50) { requestAnimationFrame(tick); return; }
        lastGlobeTick = ts;
        rotY += velY;
        rotX += velX;
        // smoothly ease back to slow auto-spin when not hovered
        if (!isHovering) {
            velY += (0.22 - velY) * 0.04;
            velX += (0    - velX) * 0.04;
        }
        globe.style.transform = 'rotateX(' + rotX + 'deg) rotateY(' + rotY + 'deg)';
        requestAnimationFrame(tick);
    })();
})();
