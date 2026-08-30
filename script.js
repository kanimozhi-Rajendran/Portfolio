/**
 * Portfolio Main Interactive Scripts - Kanimozhi R.
 * Features:
 * - Dynamic data rendering from data.js
 * - ProjectMedia handling (Image, Fallback SVG, Video Demo modal)
 * - Category filter for projects
 * - Mobile navigation menu with smooth toggling
 * - ScrollSpy & Sticky header
 * - Intersection Observer smooth animations
 * - Contact form handler
 */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Initialize Components
    initNavigation();
    initScrollSpy();
    initHeroData();
    initAboutData();
    initEducationAndExperience();
    initSkills();
    initProjects();
    initCertifications();
    initCodingProfiles();
    initContactSection();
    initVideoModal();
    initScrollAnimations();
});

/* --------------------------------------------------------------------------
   Navigation & Scroll
   -------------------------------------------------------------------------- */
function initNavigation() {
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    const header = document.querySelector('.header');

    if (mobileBtn && navMenu) {
        mobileBtn.addEventListener('click', () => {
            const isOpen = navMenu.classList.toggle('mobile-open');
            mobileBtn.innerHTML = isOpen ? '<i class="fa-solid fa-xmark"></i>' : '<i class="fa-solid fa-bars"></i>';
            mobileBtn.setAttribute('aria-expanded', isOpen);
        });

        // Close on link click
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('mobile-open');
                mobileBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';
            });
        });

        // Close when clicking outside
        document.addEventListener('click', (e) => {
            if (!navMenu.contains(e.target) && !mobileBtn.contains(e.target) && navMenu.classList.contains('mobile-open')) {
                navMenu.classList.remove('mobile-open');
                mobileBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';
            }
        });
    }

    // Header scroll background change
    window.addEventListener('scroll', () => {
        if (window.scrollY > 40) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
}

function initScrollSpy() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        let current = '';
        const scrollPosition = window.pageYOffset + 120;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

/* --------------------------------------------------------------------------
   Hero & About Data Binding
   -------------------------------------------------------------------------- */
function initHeroData() {
    if (typeof portfolioData === 'undefined') return;
    const { personal } = portfolioData;

    const heroTitle = document.getElementById('hero-title');
    if (heroTitle) {
        heroTitle.innerHTML = `AI & Data Science <span class="gradient-text">Student</span> | Data Analyst | Full-Stack Developer`;
    }

    const heroDesc = document.getElementById('hero-description');
    if (heroDesc) {
        heroDesc.textContent = personal.heroTagline;
    }

    // Set Resume Links
    document.querySelectorAll('.resume-link-btn').forEach(btn => {
        btn.setAttribute('href', personal.resumeUrl);
    });
}

function initAboutData() {
    if (typeof portfolioData === 'undefined') return;
    const { personal } = portfolioData;

    const aboutTextContainer = document.getElementById('about-text-container');
    if (aboutTextContainer && personal.aboutBio) {
        aboutTextContainer.innerHTML = personal.aboutBio.map(paragraph => `<p>${paragraph}</p>`).join('');
    }
}

/* --------------------------------------------------------------------------
   Education & Experience
   -------------------------------------------------------------------------- */
function initEducationAndExperience() {
    if (typeof portfolioData === 'undefined') return;

    // Render Education
    const educationContainer = document.getElementById('education-list');
    if (educationContainer && portfolioData.education) {
        educationContainer.innerHTML = portfolioData.education.map(edu => `
            <div class="timeline-card fade-up-init">
                <div class="timeline-header">
                    <div>
                        <h4 class="timeline-title">${edu.degree}</h4>
                        <div class="timeline-institution">${edu.institution}</div>
                    </div>
                    <span class="timeline-period">${edu.duration}</span>
                </div>
                <div class="timeline-score">${edu.score}</div>
                <ul class="project-features">
                    ${edu.highlights.map(h => `<li><i class="fa-solid fa-circle-check"></i> <span>${h}</span></li>`).join('')}
                </ul>
            </div>
        `).join('');
    }

    // Render Experience
    const experienceContainer = document.getElementById('experience-list');
    if (experienceContainer && portfolioData.experience) {
        experienceContainer.innerHTML = portfolioData.experience.map(exp => `
            <div class="timeline-card fade-up-init">
                <div class="timeline-header">
                    <div>
                        <h4 class="timeline-title">${exp.role}</h4>
                        <div class="timeline-institution">${exp.company}</div>
                    </div>
                    <span class="timeline-period">${exp.duration}</span>
                </div>
                <p class="timeline-desc">${exp.description}</p>
                <div class="timeline-tags">
                    ${exp.technologies.map(t => `<span class="timeline-tag">${t}</span>`).join('')}
                </div>
            </div>
        `).join('');
    }
}

/* --------------------------------------------------------------------------
   Skills Categorized Cards
   -------------------------------------------------------------------------- */
function initSkills() {
    if (typeof portfolioData === 'undefined' || !portfolioData.skills) return;

    const container = document.getElementById('skills-grid-container');
    if (!container) return;

    const categoryTitles = {
        programming: { title: "Programming", icon: "fa-solid fa-code" },
        dataAndAi: { title: "Data & AI", icon: "fa-solid fa-brain" },
        frontend: { title: "Frontend", icon: "fa-brands fa-html5" },
        backend: { title: "Backend", icon: "fa-solid fa-server" },
        database: { title: "Database", icon: "fa-solid fa-database" },
        tools: { title: "Tools & Workflow", icon: "fa-solid fa-screwdriver-wrench" }
    };

    let html = '';
    for (const [key, skillList] of Object.entries(portfolioData.skills)) {
        const meta = categoryTitles[key] || { title: key, icon: "fa-solid fa-laptop-code" };
        html += `
            <div class="skill-category-card fade-up-init">
                <div class="category-card-header">
                    <i class="${meta.icon}"></i>
                    <h3>${meta.title}</h3>
                </div>
                <div class="skill-pills-list">
                    ${skillList.map(skill => `
                        <div class="skill-pill">
                            <i class="${skill.icon}"></i>
                            <span>${skill.name}</span>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    }
    container.innerHTML = html;
}

/* --------------------------------------------------------------------------
   Projects & ProjectMedia Component
   -------------------------------------------------------------------------- */
function initProjects() {
    if (typeof portfolioData === 'undefined' || !portfolioData.projects) return;

    const container = document.getElementById('projects-grid-container');
    const filterButtons = document.querySelectorAll('.filter-btn');
    if (!container) return;

    function renderProjects(filter = 'all') {
        const projects = portfolioData.projects.filter(p => {
            if (filter === 'all') return true;
            if (filter === 'featured') return p.category === 'featured';
            if (filter === 'additional') return p.category === 'additional';
            return true;
        });

        container.innerHTML = projects.map(p => createProjectCardHTML(p)).join('');
        attachMediaFallbacks();
        attachVideoTriggers();
        triggerAnimations();
    }

    // Filter clicks
    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderProjects(btn.dataset.filter);
        });
    });

    renderProjects('all');
}

/**
 * Reusable ProjectCard HTML Generator with ProjectMedia Support
 */
function createProjectCardHTML(project) {
    const videoSource = project.demoVideo || project.video || '';
    const videoBtnHTML = (project.hasVideo && videoSource)
        ? `<button class="video-demo-badge" data-id="${project.id}" data-video="${videoSource}" data-title="${project.title}" data-image="${project.image || ''}">
                <i class="fa-solid fa-play"></i> Watch Demo
           </button>`
        : '';

    // Primary image path and SVG fallback path
    const fallbackSvg = project.image.replace(/\.(png|jpg|jpeg)$/, '.svg');

    return `
        <article class="project-card fade-up-init" data-id="${project.id}">
            <div class="project-media-wrapper">
                ${videoBtnHTML}
                <img 
                    src="${project.image}" 
                    alt="${project.title}" 
                    class="project-media-img" 
                    data-fallback="${fallbackSvg}"
                    loading="lazy"
                />
            </div>
            <div class="project-content">
                <h3 class="project-title">${project.title}</h3>
                <p class="project-desc">${project.description}</p>
                
                ${project.features && project.features.length ? `
                    <ul class="project-features">
                        ${project.features.slice(0, 3).map(f => `<li><i class="fa-solid fa-circle-check"></i> <span>${f}</span></li>`).join('')}
                    </ul>
                ` : ''}

                <div class="project-tech-stack">
                    ${project.technologies.map(t => `<span class="tech-badge">${t}</span>`).join('')}
                </div>

                <div class="project-actions">
                    <a href="${project.githubUrl || '#'}" target="_blank" rel="noopener noreferrer" class="btn btn-outline btn-sm">
                        <i class="fa-brands fa-github"></i> GitHub
                    </a>
                    <a href="${videoSource || project.image || '#'}" class="btn btn-primary btn-sm live-demo-btn" data-id="${project.id}" data-video="${videoSource}" data-image="${project.image || ''}" data-title="${project.title}">
                        <i class="fa-solid fa-arrow-up-right-from-square"></i> Live Demo
                    </a>
                </div>
            </div>
        </article>
    `;
}

/**
 * Image Fallback Handler (ProjectMedia logic)
 */
function attachMediaFallbacks() {
    const images = document.querySelectorAll('.project-media-img');
    images.forEach(img => {
        img.onerror = function () {
            const fallbackUrl = this.getAttribute('data-fallback');
            if (fallbackUrl && this.src !== fallbackUrl && !this.dataset.failedOnce) {
                this.dataset.failedOnce = "true";
                this.src = fallbackUrl;
            } else {
                // Render pure CSS/SVG placeholder card
                const wrapper = this.parentElement;
                const altText = this.alt || 'Project Preview';
                wrapper.innerHTML = `
                    <div class="project-placeholder-box">
                        <i class="fa-solid fa-laptop-code"></i>
                        <span>${altText}</span>
                    </div>
                `;
            }
        };
    });
}

/* --------------------------------------------------------------------------
   Video Demo Modal Handler
   -------------------------------------------------------------------------- */
function initVideoModal() {
    const modalBackdrop = document.getElementById('video-modal');
    const modalVideo = document.getElementById('modal-video-player');
    const modalImg = document.getElementById('modal-fallback-image');
    const modalTitle = document.getElementById('modal-video-title');
    const modalClose = document.getElementById('video-modal-close');
    const modalError = document.getElementById('modal-video-error');
    const modalErrorText = document.getElementById('modal-video-error-text');

    if (!modalBackdrop || !modalVideo) return;

    window.openVideoDemo = function (videoSrc, title, fallbackImage) {
        modalTitle.textContent = title ? `${title} • Demo Video` : 'Project Demo';

        // Reset visibility
        if (modalError) modalError.style.display = 'none';
        if (modalImg) modalImg.style.display = 'none';

        if (videoSrc && videoSrc.trim() !== '' && videoSrc !== '#') {
            modalVideo.style.display = 'block';
            modalVideo.src = videoSrc;
            modalBackdrop.classList.add('open');

            // Handle missing video gracefully by falling back to project image
            modalVideo.onerror = function () {
                modalVideo.style.display = 'none';
                if (fallbackImage) {
                    if (modalImg) {
                        modalImg.src = fallbackImage;
                        modalImg.alt = title || 'Project Preview';
                        modalImg.style.display = 'block';
                    }
                } else if (modalError) {
                    modalError.style.display = 'flex';
                    if (modalErrorText) {
                        modalErrorText.innerHTML = `Demo video will be playable once <code>${videoSrc}</code> is added to your project.`;
                    }
                }
            };

            const playPromise = modalVideo.play();
            if (playPromise !== undefined) {
                playPromise.catch(() => {
                    // Browser policy may require user interaction for audio
                });
            }
        } else if (fallbackImage) {
            // Fallback cleanly to image when no video is present
            modalVideo.style.display = 'none';
            modalVideo.pause();
            modalVideo.src = '';
            if (modalImg) {
                modalImg.src = fallbackImage;
                modalImg.alt = title || 'Project Preview';
                modalImg.style.display = 'block';
            }
            modalBackdrop.classList.add('open');
        }
    };

    function closeModal() {
        modalBackdrop.classList.remove('open');
        modalVideo.pause();
        modalVideo.src = '';
        if (modalImg) {
            modalImg.src = '';
            modalImg.style.display = 'none';
        }
        if (modalError) modalError.style.display = 'none';
    }

    if (modalClose) {
        modalClose.addEventListener('click', closeModal);
    }

    modalBackdrop.addEventListener('click', (e) => {
        if (e.target === modalBackdrop) {
            closeModal();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modalBackdrop.classList.contains('open')) {
            closeModal();
        }
    });
}


function attachVideoTriggers() {
    const demoTriggers = document.querySelectorAll('.live-demo-btn, .video-demo-badge');
    demoTriggers.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();

            const projectId = btn.getAttribute('data-id');
            let videoPath = btn.getAttribute('data-video');
            let title = btn.getAttribute('data-title');
            let imagePath = btn.getAttribute('data-image');

            // Look up from portfolioData.projects dynamically
            if (typeof portfolioData !== 'undefined' && portfolioData.projects && projectId) {
                const proj = portfolioData.projects.find(p => p.id === projectId);
                if (proj) {
                    videoPath = proj.demoVideo || proj.video || videoPath;
                    title = proj.title || title;
                    imagePath = proj.image || imagePath;
                }
            }

            if (typeof window.openVideoDemo === 'function') {
                window.openVideoDemo(videoPath, title, imagePath);
            }
        });
    });
}

/* --------------------------------------------------------------------------
   Certifications & Badges (Tiered Layout)
   -------------------------------------------------------------------------- */
function initCertifications() {
    if (typeof portfolioData === 'undefined') return;

    // Helper to resolve certificate link
    const resolveLink = (cert) => {
        if (cert.link && cert.link !== '[ADD_VERIFICATION_LINK]' && cert.link !== '[ADD_LINK_IF_AVAILABLE]' && cert.link !== '#') {
            return cert.link;
        }
        return cert.fallbackImage || cert.image || '#';
    };

    // 1. Render Featured Certifications (Top Row, 3 Highlighted Cards)
    const featuredContainer = document.getElementById('featured-certs-container');
    const featuredList = portfolioData.featuredCertifications || [];
    if (featuredContainer && featuredList.length > 0) {
        featuredContainer.innerHTML = featuredList.map(cert => {
            const fallbackSrc = cert.fallbackImage || cert.image.replace(/\.png$/, '.svg');
            const viewLink = resolveLink(cert);
            const isNptel = cert.id === 'nptel-java-programming';
            const actionText = isNptel ? 'Verify Certificate' : 'Verify Credential';

            return `
                <article class="cert-card featured-card fade-up-init" data-id="${cert.id || ''}">
                    <div class="featured-corner-ribbon">
                        <i class="fa-solid fa-crown"></i> Featured
                    </div>
                    <div class="cert-media-wrapper">
                        <img 
                            src="${cert.image}" 
                            alt="${cert.title}" 
                            class="cert-img" 
                            data-fallback="${fallbackSrc}"
                            loading="lazy"
                        />
                    </div>
                    <div class="cert-card-body">
                        <h3 class="cert-card-title">${cert.title}</h3>
                        <p class="cert-card-issuer">Issued by: <span>${cert.issuer}</span></p>

                        ${cert.subtitleBadge ? `
                            <div class="cert-subtitle-badge">
                                <i class="fa-solid fa-award"></i> ${cert.subtitleBadge}
                            </div>
                        ` : ''}

                        ${cert.rollNo ? `
                            <div class="cert-roll-box">
                                <span>Roll No: <code>${cert.rollNo}</code></span>
                                <button class="cert-roll-copy-btn" data-copy="${cert.rollNo}" title="Copy Roll Number to verify">
                                    <i class="fa-regular fa-copy"></i> Copy
                                </button>
                            </div>
                        ` : ''}

                        <div class="cert-card-actions">
                            <a href="${viewLink}" target="_blank" rel="noopener noreferrer" class="btn btn-outline btn-sm cert-view-btn" aria-label="Verify ${cert.title}">
                                <i class="fa-solid fa-arrow-up-right-from-square"></i> ${actionText}
                            </a>
                        </div>
                    </div>
                </article>
            `;
        }).join('');
    }

    // 2. Render All Certifications (Standard 3-Column Grid)
    const certsContainer = document.getElementById('certifications-grid-container');
    const standardList = portfolioData.allCertifications || portfolioData.certifications || [];
    if (certsContainer && standardList.length > 0) {
        certsContainer.innerHTML = standardList.map(cert => {
            const fallbackSrc = cert.fallbackImage || cert.image.replace(/\.png$/, '.svg');
            const viewLink = resolveLink(cert);
            const actionText = cert.isPdf ? 'View Certificate' : 'View Certificate';
            const actionIcon = cert.isPdf ? 'fa-solid fa-file-pdf' : 'fa-solid fa-arrow-up-right-from-square';

            return `
                <article class="cert-card fade-up-init" data-id="${cert.id || ''}">
                    ${cert.isPdf ? `
                        <div class="cert-format-badge">
                            <i class="fa-solid fa-file-pdf"></i> Certificate
                        </div>
                    ` : ''}
                    <div class="cert-media-wrapper">
                        <img 
                            src="${cert.image}" 
                            alt="${cert.title}" 
                            class="cert-img" 
                            data-fallback="${fallbackSrc}"
                            loading="lazy"
                        />
                    </div>
                    <div class="cert-card-body">
                        <h3 class="cert-card-title">${cert.title}</h3>
                        <p class="cert-card-issuer">Issued by: <span>${cert.issuer}</span></p>
                        <div class="cert-card-actions">
                            <a href="${viewLink}" target="_blank" rel="noopener noreferrer" class="btn btn-outline btn-sm cert-view-btn" aria-label="View ${cert.title} Certificate">
                                <i class="${actionIcon}"></i> ${actionText}
                            </a>
                        </div>
                    </div>
                </article>
            `;
        }).join('');
    }

    // 3. Fallback handlers for certificate images across both containers
    const allCertImages = document.querySelectorAll('#featured-certs-container .cert-img, #certifications-grid-container .cert-img');
    allCertImages.forEach(img => {
        img.onerror = function () {
            const fallback = this.getAttribute('data-fallback');
            if (fallback && this.src !== fallback && !this.dataset.fallbackTried) {
                this.dataset.fallbackTried = 'true';
                this.src = fallback;
            }
        };
    });

    // 4. Render Small Pill-Shaped Achievements Chips
    const badgesContainer = document.getElementById('achievements-badges-container');
    if (badgesContainer && portfolioData.achievements) {
        badgesContainer.innerHTML = portfolioData.achievements.map(ach => {
            const accent = ach.accentColor || '#FFA116';
            const icon = ach.icon || 'fa-solid fa-medal';
            const linkHref = (ach.link && ach.link !== '#') ? ach.link : '#';
            const isExternal = linkHref !== '#';

            return `
                <a href="${linkHref}" ${isExternal ? 'target="_blank" rel="noopener noreferrer"' : ''} class="achievement-chip-pill fade-up-init" style="--chip-accent: ${accent};" aria-label="${ach.title}">
                    <div class="achievement-chip-icon" style="background: ${accent}18; color: ${accent}; border-color: ${accent}45;">
                        <i class="${icon}"></i>
                    </div>
                    <div class="achievement-chip-body">
                        <span class="achievement-chip-label">${ach.label || ach.title}</span>
                        ${ach.stat ? `<span class="achievement-chip-stat" style="background: ${accent}1c; color: ${accent}; border: 1px solid ${accent}45;">${ach.stat}</span>` : ''}
                    </div>
                    ${isExternal ? `<i class="fa-solid fa-arrow-up-right-from-square achievement-chip-arrow"></i>` : ''}
                </a>
            `;
        }).join('');
    }

    // 5. Copy Roll Number Handler for NPTEL
    document.querySelectorAll('.cert-roll-copy-btn').forEach(btn => {
        btn.addEventListener('click', function (e) {
            e.preventDefault();
            e.stopPropagation();
            const textToCopy = this.getAttribute('data-copy');
            if (navigator.clipboard && textToCopy) {
                navigator.clipboard.writeText(textToCopy).then(() => {
                    const originalHtml = this.innerHTML;
                    this.innerHTML = '<i class="fa-solid fa-check" style="color: #4ade80;"></i> Copied!';
                    setTimeout(() => {
                        this.innerHTML = originalHtml;
                    }, 2200);
                }).catch(err => {
                    console.error('Clipboard copy failed:', err);
                });
            }
        });
    });

    triggerAnimations();
}

/* --------------------------------------------------------------------------
   Coding Profiles
   -------------------------------------------------------------------------- */
function initCodingProfiles() {
    if (typeof portfolioData === 'undefined' || !portfolioData.codingProfiles) return;

    const container = document.getElementById('profiles-grid-container');
    if (!container) return;

    container.innerHTML = portfolioData.codingProfiles.map(p => `
        <div class="profile-card fade-up-init">
            <div class="profile-icon-wrap">
                <i class="${p.icon}"></i>
            </div>
            <h3 class="profile-name">${p.name}</h3>
            <p class="profile-handle">${p.username}</p>
            <a href="${p.url}" target="_blank" rel="noopener noreferrer" class="btn btn-outline btn-sm">
                View Profile
            </a>
        </div>
    `).join('');
}

/* --------------------------------------------------------------------------
   Contact Form & Details
   -------------------------------------------------------------------------- */
function initContactSection() {
    const contactForm = document.getElementById('contact-form');
    const formAlert = document.getElementById('form-status-alert');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;

            submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Sending...';
            submitBtn.disabled = true;

            const formData = new FormData(contactForm);

            // Fetch submit for Netlify form
            fetch(contactForm.action || '/', {
                method: 'POST',
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: new URLSearchParams(formData).toString()
            })
            .then(() => {
                formAlert.className = 'form-status-alert success';
                formAlert.textContent = 'Thank you! Your message has been sent successfully.';
                contactForm.reset();
            })
            .catch(() => {
                formAlert.className = 'form-status-alert error';
                formAlert.textContent = 'Unable to send message directly. Please contact me at kani74608@gmail.com.';
            })
            .finally(() => {
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
                setTimeout(() => {
                    formAlert.className = 'form-status-alert';
                    formAlert.textContent = '';
                }, 6000);
            });
        });
    }
}

/* --------------------------------------------------------------------------
   Scroll Animations (Intersection Observer)
   -------------------------------------------------------------------------- */
function initScrollAnimations() {
    triggerAnimations();
}

function triggerAnimations() {
    const elements = document.querySelectorAll('.fade-up-init:not(.in-view), .fade-left-init:not(.in-view), .fade-right-init:not(.in-view)');
    
    if (!('IntersectionObserver' in window)) {
        elements.forEach(el => el.classList.add('in-view'));
        return;
    }

    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
                obs.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -40px 0px'
    });

    elements.forEach(el => observer.observe(el));
}
