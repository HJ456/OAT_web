console.log('[Debug] script.js file loaded and parsed.'); // 파일 최상단 로그

document.addEventListener('DOMContentLoaded', () => {
    console.log('[Debug] DOMContentLoaded event fired.'); // DOMContentLoaded 시작 로그

    console.log("[Debug] Attempting to log OAT hidden message...");
    try {
        console.log("%cOAT의 숨겨진 열정을 발견하셨군요! 🔥", "font-size: 14px; color: #64FFDA;");
        console.log("저희는 전기차 안전 기술의 혁신을 선도합니다. 함께 미래를 만들어갈 인재를 기다립니다! careers@oat-safety.com");
        console.log("[Debug] OAT hidden message logged successfully.");
    } catch (e) {
        console.error("[Debug] Error logging OAT hidden message:", e);
    }

    // --------------------
    // Particles.js Initialization
    // --------------------
    console.log("[Debug] Checking for particlesJS library...");
    if (typeof particlesJS !== 'undefined') {
        console.log("[Debug] particlesJS found. Initializing particles background...");
        try {
            particlesJS('particles-js', {
                "particles": {
                    "number": {
                        "value": 60,
                        "density": {
                            "enable": true,
                            "value_area": 700
                        }
                    },
                    "color": {
                        "value": "#64FFDA"
                    },
                    "shape": {
                        "type": "circle",
                        "stroke": {
                            "width": 0,
                            "color": "#000000"
                        },
                        "polygon": {
                            "nb_sides": 5
                        }
                    },
                    "opacity": {
                        "value": 0.6,
                        "random": true,
                        "anim": {
                            "enable": true,
                            "speed": 0.5,
                            "opacity_min": 0.1,
                            "sync": false
                        }
                    },
                    "size": {
                        "value": 1.5,
                        "random": true,
                        "anim": {
                            "enable": false,
                            "speed": 10,
                            "size_min": 0.1,
                            "sync": false
                        }
                    },
                    "line_linked": {
                        "enable": true,
                        "distance": 120,
                        "color": "#64FFDA",
                        "opacity": 0.2,
                        "width": 1
                    },
                    "move": {
                        "enable": true,
                        "speed": 0.8,
                        "direction": "bottom-right",
                        "random": false,
                        "straight": false,
                        "out_mode": "out",
                        "bounce": false,
                        "attract": {
                            "enable": false,
                            "rotateX": 600,
                            "rotateY": 1200
                        }
                    }
                },
                "interactivity": {
                    "detect_on": "canvas",
                    "events": {
                        "onhover": {
                            "enable": true,
                            "mode": "repulse"
                        },
                        "onclick": {
                            "enable": true,
                            "mode": "push"
                        },
                        "resize": true
                    },
                    "modes": {
                        "grab": {
                            "distance": 140,
                            "line_linked": {
                                "opacity": 1
                            }
                        },
                        "bubble": {
                            "distance": 300,
                            "size": 30,
                            "duration": 2,
                            "opacity": 0.8,
                            "speed": 3
                        },
                        "repulse": {
                            "distance": 100,
                            "duration": 0.4
                        },
                        "push": {
                            "particles_nb": 4
                        },
                        "remove": {
                            "particles_nb": 2
                        }
                    }
                },
                "retina_detect": true
            });
            console.log("[Debug] particlesJS initialized successfully.");
        } catch (e) {
            console.error("[Debug] Error initializing particlesJS:", e);
        }
    } else {
        console.warn("[Debug] particlesJS library not loaded. Background effect disabled.");
    }

    // --------------------
    // Function Definitions for Initializations
    // --------------------
    function initializeCustomCursor() {
        console.log("[Debug] initializeCustomCursor called.");
        try {
            const cursorDot = document.getElementById('cursor-dot');
            const cursorOutline = document.getElementById('cursor-outline');

            if (cursorDot && cursorOutline) {
                window.addEventListener('mousemove', (e) => {
                    const posX = e.clientX;
                    const posY = e.clientY;
    
                    cursorDot.style.left = `${posX}px`;
                    cursorDot.style.top = `${posY}px`;
    
                    gsap.to(cursorOutline, {
                        duration: 0.3,
                        left: `${posX}px`,
                        top: `${posY}px`,
                        ease: "power1.out"
                    });
    
                    cursorDot.style.opacity = '1';
                    cursorOutline.style.opacity = '0.5';
                });
    
                document.body.addEventListener('mouseleave', () => {
                    cursorDot.style.opacity = '0';
                    cursorOutline.style.opacity = '0';
                });
    
                const interactiveElements = document.querySelectorAll('a, button, .service-card, .portfolio-item, .faq-question');
                interactiveElements.forEach(el => {
                    el.addEventListener('mouseenter', () => {
                        cursorOutline.style.transform = 'translate(-50%, -50%) scale(1.6)';
                        cursorOutline.style.borderColor = 'var(--accent-light-blue)';
                        cursorOutline.style.opacity = '1';
                        cursorDot.style.backgroundColor = 'var(--accent-light-blue)';
                    });
                    el.addEventListener('mouseleave', () => {
                        cursorOutline.style.transform = 'translate(-50%, -50%) scale(1)';
                        cursorOutline.style.borderColor = 'var(--accent-cyan)';
                        cursorOutline.style.opacity = '0.5';
                        cursorDot.style.backgroundColor = 'var(--accent-cyan)';
                    });
                });
                console.log("[Debug] Custom cursor initialized.");
            } else {
                console.warn("[Debug] Cursor elements not found for initializeCustomCursor.");
            }
        } catch (e) {
            console.error("[Debug] Error in initializeCustomCursor:", e);
        }
    }

    function initializeHeaderScroll() {
        console.log("[Debug] initializeHeaderScroll called.");
        try {
            const header = document.querySelector('header');
            let lastScrollTop = 0;
            if (header) {
                window.addEventListener('scroll', () => {
                    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
                    if (scrollTop > lastScrollTop && scrollTop > header.offsetHeight) {
                        header.classList.add('header-hidden');
                    } else {
                        header.classList.remove('header-hidden');
                    }
                    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
                    
                    const sections = document.querySelectorAll('main section[id]');
                    const navLinks = document.querySelectorAll('header nav ul li a.nav-link');
                    
                    let currentSectionId = null;
                    sections.forEach(section => {
                        const sectionTop = section.offsetTop - header.offsetHeight - 50; 
                        const sectionHeight = section.offsetHeight;
                        if (scrollTop >= sectionTop && scrollTop < sectionTop + sectionHeight) {
                            currentSectionId = section.getAttribute('id');
                        }
                    });

                    navLinks.forEach(link => {
                        link.classList.remove('active');
                        if (link.getAttribute('href') === `#${currentSectionId}`) {
                            link.classList.add('active');
                        }
                    });
                    if (scrollTop < (document.querySelector('main section[id]')?.offsetTop || 0) - header.offsetHeight - 50) {
                        navLinks.forEach(link => link.classList.remove('active'));
                    }
                });
                console.log("[Debug] Header scroll listener initialized.");
            } else {
                console.warn("[Debug] Header element not found for initializeHeaderScroll.");
            }
        } catch (e) {
            console.error("[Debug] Error in initializeHeaderScroll:", e);
        }
    }

    function initializeMobileNavigation() {
        console.log("[Debug] initializeMobileNavigation called.");
        try {
            const menuToggle = document.getElementById('menu-toggle');
            const navLinks = document.querySelector('header ul.nav-links');
            const navLinkItems = document.querySelectorAll('header ul.nav-links li a.nav-link');
            if (menuToggle && navLinks) {
                menuToggle.addEventListener('click', () => {
                    navLinks.classList.toggle('nav-active');
                    const icon = menuToggle.querySelector('i');
                    if (navLinks.classList.contains('nav-active')) {
                        icon.classList.remove('fa-bars');
                        icon.classList.add('fa-times');
                        menuToggle.setAttribute('aria-expanded', 'true');
                    } else {
                        icon.classList.remove('fa-times');
                        icon.classList.add('fa-bars');
                        menuToggle.setAttribute('aria-expanded', 'false');
                    }
                });
    
                navLinkItems.forEach(link => {
                    link.addEventListener('click', () => {
                        if (navLinks.classList.contains('nav-active')) {
                            navLinks.classList.remove('nav-active');
                            const icon = menuToggle.querySelector('i');
                            icon.classList.remove('fa-times');
                            icon.classList.add('fa-bars');
                            menuToggle.setAttribute('aria-expanded', 'false');
                        }
                    });
                });
                console.log("[Debug] Mobile navigation initialized.");
            } else {
                console.warn("[Debug] Mobile navigation elements not found.");
            }
        } catch (e) {
            console.error("[Debug] Error in initializeMobileNavigation:", e);
        }
    }

    let scrollTriggers = []; // GSAP ScrollTrigger 인스턴스 관리 배열
    function reinitializeGsapAnimations() {
        console.log('[GSAP Debug] reinitializeGsapAnimations called');
        try {
            scrollTriggers.forEach(st => st.kill());
            scrollTriggers = [];
            gsap.killTweensOf('.section-title'); 
            gsap.killTweensOf('.about-image img');
            gsap.killTweensOf('.about-text h3, .about-text p');
            gsap.killTweensOf('.service-card'); // 서비스 카드 트윈 정리
            gsap.killTweensOf('.portfolio-item'); // 포트폴리오 아이템 트윈 정리

            console.log('[GSAP Debug] Old ScrollTriggers and tweens killed.');

            // Hero Section Animation (페이지 로드 시 한 번만 실행되도록 조건 추가)
            if (!document.body.classList.contains('hero-animated')) {
                console.log('[GSAP Debug] Initializing hero animation');
                const heroTimeline = gsap.timeline({ delay: 0.5 });
                heroTimeline
                    .fromTo("#hero-title-line1", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" })
                    .fromTo("#hero-title-line2", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }, "-=0.6")
                    .fromTo("#hero-subtitle", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.7, ease: "power2.out" }, "-=0.5")
                    .fromTo("#hero-cta", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6, ease: "back.out(1.7)" }, "-=0.4")
                    .call(() => {
                        document.body.classList.add('hero-animated');
                        console.log('[GSAP Debug] Hero animation complete, body class added.');
                    });
            } else {
                console.log('[GSAP Debug] Hero already animated.');
            }
            
            // 일반 [data-aos] 요소 처리 (About 텍스트, Service 카드, Portfolio 아이템 제외)
            const 일반RevealElements = gsap.utils.toArray('[data-aos]:not(.section-title):not(.about-text h3):not(.about-text p):not(.service-card):not(.portfolio-item)');
            console.log('[GSAP Debug] 일반RevealElements:', 일반RevealElements);
            일반RevealElements.forEach((el) => {
                const delay = parseFloat(el.dataset.aosDelay) / 1000 || 0;
                const animationType = el.dataset.aos;
                let startX = 0, startY = 0, startScale = 1; // startOpacity는 0으로 고정
        
                if (animationType === 'fade-up') { startY = 50; }
                else if (animationType === 'fade-right') { startX = -50; }
                else if (animationType === 'fade-left') { startX = 50; }
                
                gsap.set(el, { opacity: 0, x: startX, y: startY, scale: startScale });
                let st = ScrollTrigger.create({
                    trigger: el,
                    start: "top 85%",
                    // markers: true, // 일반 요소에 대한 마커는 주석 처리 (필요시 활성화)
                    toggleActions: "play none none none",
                    onEnter: () => {
                        console.log('[GSAP Debug] 일반 요소 entering:', el);
                        gsap.to(el, {
                            opacity: 1, x: 0, y: 0, scale: 1,
                            duration: 0.8,
                            delay: delay,
                            ease: "power2.out"
                        });
                    }
                });
                scrollTriggers.push(st);
            });
            console.log('[GSAP Debug] 일반RevealElements processing done.');
            
            // Section Title animation (모든 섹션 타이틀에 일괄 적용)
            gsap.utils.toArray('.section-title').forEach(title => {
                gsap.set(title, {opacity:0, y: 50});
                let st = ScrollTrigger.create({
                    trigger: title,
                    start: 'top 90%',
                    // markers: true, // 제목에 대한 마커는 주석 처리 (필요시 활성화)
                    toggleActions: 'play none none none',
                    onEnter: () => {
                        console.log('[GSAP Debug] Section title entering:', title);
                        gsap.to(title, { opacity:1, y: 0, duration: 0.6, ease: 'power2.out'});
                    }
                });
                scrollTriggers.push(st);
            });
            console.log('[GSAP Debug] Section titles processing done.');

            // About Us 섹션 - 텍스트 순차 등장
            const aboutTextElements = gsap.utils.toArray('.about-text h3, .about-text p');
            console.log('[GSAP Debug] About text elements:', aboutTextElements);
            if (aboutTextElements.length > 0) {
                gsap.set(aboutTextElements, { opacity: 0, y: 30 });
                let stAboutText = ScrollTrigger.create({
                    trigger: ".about-text",
                    start: "top 80%",
                    // markers: true, // About 텍스트 마커 (필요시 활성화)
                    toggleActions: "play none none none",
                    onEnter: () => {
                        console.log('[GSAP Debug] About text entering...');
                        gsap.to(aboutTextElements, {
                            opacity: 1,
                            y: 0,
                            duration: 0.7,
                            stagger: 0.2,
                            ease: "power2.out"
                        });
                    }
                });
                scrollTriggers.push(stAboutText);
            } else {
                console.log('[GSAP Debug] No About text elements found.');
            }

            // About Section Image Parallax
            const aboutImage = document.querySelector('.about-image img');
            if (aboutImage) {
                console.log('[GSAP Debug] Initializing About image parallax for:', aboutImage);
                let stAboutImage = gsap.to(aboutImage, {
                    yPercent: -15,
                    ease: "none",
                    scrollTrigger: {
                        trigger: ".about-section",
                        start: "top bottom",
                        end: "bottom top",
                        scrub: true
                        // markers: true, // About 이미지 패럴랙스 마커 (필요시 활성화)
                    }
                });
                if (stAboutImage.scrollTrigger) {
                     scrollTriggers.push(stAboutImage.scrollTrigger);
                }
            } else {
                console.log('[GSAP Debug] About image not found.');
            }

            // Services 섹션 - 카드 스태거 등장
            const serviceCards = gsap.utils.toArray('.service-card');
            console.log('[GSAP Debug] Service cards found:', serviceCards);
            if (serviceCards.length > 0) {
                const serviceAnimation = gsap.fromTo(serviceCards,
                    { autoAlpha: 0, y: 50 }, // opacity와 visibility 대신 autoAlpha 사용
                    { 
                        autoAlpha: 1, // opacity와 visibility 대신 autoAlpha 사용
                        y: 0, 
                        duration: 0.6, 
                        stagger: 0.15, 
                        ease: "power2.out",
                        immediateRender: false,
                        onStart: function() {
                            console.log('[GSAP Debug] Service cards animation STARTED for:', this.targets());
                        },
                        onComplete: function() {
                            console.log('[GSAP Debug] Service cards animation COMPLETED for:', this.targets());
                            if (serviceCards.length > 0) {
                                console.log('[GSAP Debug] autoAlpha of first service card AFTER animation:', gsap.getProperty(serviceCards[0], "autoAlpha"));
                                // console.log('[GSAP Debug] Opacity of first service card AFTER animation:', gsap.getProperty(serviceCards[0], "opacity"));
                                // console.log('[GSAP Debug] Visibility of first service card AFTER animation:', gsap.getProperty(serviceCards[0], "visibility"));
                            }
                        },
                        scrollTrigger: {
                            trigger: ".services-grid", start: "top 80%", // markers: true, // 사용자가 제거 요청
                            toggleActions: "play none none none",
                            onEnter: () => {
                                console.log('[GSAP Debug] Service cards ST onEnter for group. Attempting to animate.');
                            },
                            onLeave: () => console.log('[GSAP Debug] Service cards ST onLeave for group'),
                            onEnterBack: () => console.log('[GSAP Debug] Service cards ST onEnterBack for group'),
                            onLeaveBack: () => console.log('[GSAP Debug] Service cards ST onLeaveBack for group')
                        }
                    }
                );
                if (serviceAnimation.scrollTrigger) {
                    scrollTriggers.push(serviceAnimation.scrollTrigger);
                    console.log('[GSAP Debug] Service cards animation and ScrollTrigger created.');
                } else {
                    // 이 경우는 gsap.fromTo가 ScrollTrigger를 생성하지 못했을 때 (매우 드묾)
                    console.error('[GSAP Debug] Service animation did NOT create a scrollTrigger property!');
                    // 만약 ScrollTrigger를 생성하지 않는다면, 수동으로 만들어서 추가해야 할 수 있지만,
                    // fromTo 내에서 scrollTrigger를 정의하면 자동으로 생성되어야 합니다.
                }
            } else {
                console.log('[GSAP Debug] No service cards found or length is 0.');
            }

            // Portfolio 섹션 - 아이템 스태거 등장 (zoom-in-up 효과 유사하게)
            const portfolioItems = gsap.utils.toArray('.portfolio-item');
            console.log('[GSAP Debug] Portfolio items found:', portfolioItems);
            if (portfolioItems.length > 0) {
                const portfolioAnimation = gsap.fromTo(portfolioItems,
                    { autoAlpha: 0, scale: 0.8, y: 30 }, // opacity와 visibility 대신 autoAlpha 사용
                    {
                        autoAlpha: 1, // opacity와 visibility 대신 autoAlpha 사용
                        scale: 1, 
                        y: 0, 
                        duration: 0.7, 
                        stagger: 0.2, 
                        ease: "power2.out",
                        immediateRender: false,
                        onStart: function() {
                            console.log('[GSAP Debug] Portfolio items animation STARTED for:', this.targets());
                        },
                        onComplete: function() {
                            console.log('[GSAP Debug] Portfolio items animation COMPLETED for:', this.targets());
                            if (portfolioItems.length > 0) {
                                console.log('[GSAP Debug] autoAlpha of first portfolio item AFTER animation:', gsap.getProperty(portfolioItems[0], "autoAlpha"));
                                // console.log('[GSAP Debug] Opacity of first portfolio item AFTER animation:', gsap.getProperty(portfolioItems[0], "opacity"));
                                // console.log('[GSAP Debug] Visibility of first portfolio item AFTER animation:', gsap.getProperty(portfolioItems[0], "visibility"));
                            }
                        },
                        scrollTrigger: {
                            trigger: ".portfolio-grid", start: "top 80%", // markers: true, // 사용자가 제거 요청
                            toggleActions: "play none none none",
                            onEnter: () => {
                                console.log('[GSAP Debug] Portfolio items ST onEnter for group. Attempting to animate.');
                            },
                            onLeave: () => console.log('[GSAP Debug] Portfolio items ST onLeave for group'),
                            onEnterBack: () => console.log('[GSAP Debug] Portfolio items ST onEnterBack for group'),
                            onLeaveBack: () => console.log('[GSAP Debug] Portfolio items ST onLeaveBack for group')
                        }
                    }
                );
                if (portfolioAnimation.scrollTrigger) {
                    scrollTriggers.push(portfolioAnimation.scrollTrigger);
                    console.log('[GSAP Debug] Portfolio items animation and ScrollTrigger created.');
                } else {
                    console.error('[GSAP Debug] Portfolio animation did NOT create a scrollTrigger property!');
                }
            } else {
                console.log('[GSAP Debug] No portfolio items found or length is 0.');
            }
            
            console.log('[GSAP Debug] Attempting ScrollTrigger.refresh(). Current triggers:', scrollTriggers.length);
            ScrollTrigger.refresh(); // 모든 ScrollTrigger 설정 후 한번만 호출
            console.log('[GSAP Debug] ScrollTrigger.refresh() finished.');
        } catch (e) {
            console.error('[GSAP Debug] Error in reinitializeGsapAnimations:', e);
        }
        console.log('[GSAP Debug] reinitializeGsapAnimations finished execution.');
    }

    function reinitializeVanillaTilt() {
        console.log("[Debug] reinitializeVanillaTilt called.");
        try {
            if (typeof VanillaTilt !== 'undefined') {
                // 기존 VanillaTilt 인스턴스 제거 (VanillaTilt 자체에 destroy 메서드가 없을 수 있음)
                // DOM 요소를 다시 선택하여 초기화하는 것으로 대체
                const tiltElements = document.querySelectorAll(".service-card, .portfolio-item");
                tiltElements.forEach(el => {
                    if (el.vanillaTilt) {
                        el.vanillaTilt.destroy(); // 만약 destroy 메서드가 있다면 사용
                    }
                });
                VanillaTilt.init(tiltElements, {
                    max: 8, 
                    speed: 400, 
                    glare: true,
                    "max-glare": 0.1 
                });
                console.log("[Debug] VanillaTilt reinitialized for elements:", tiltElements);
            } else {
                console.warn("VanillaTilt.js not loaded. Tilt effect disabled.");
            }
        } catch (e) {
            console.error("[Debug] Error in reinitializeVanillaTilt:", e);
        }
    }

    function initializeFaqAccordion() {
        console.log("[Debug] initializeFaqAccordion called.");
        try {
            const faqItems = document.querySelectorAll('.faq-item');
            faqItems.forEach(item => {
                const questionButton = item.querySelector('.faq-question');
                const answer = item.querySelector('.faq-answer');
                const icon = questionButton.querySelector('i');
    
                // 이벤트 리스너 중복 방지를 위해 기존 리스너 제거 (옵션)
                // questionButton.replaceWith(questionButton.cloneNode(true)); // 간단한 방법
                // questionButton = item.querySelector('.faq-question'); // 다시 선택

                // 이미 이벤트 리스너가 있다면 추가하지 않도록 플래그 사용 또는 리스너 관리
                if (!questionButton.hasAttribute('data-faq-initialized')) {
                    questionButton.addEventListener('click', () => {
                        const isOpened = questionButton.getAttribute('aria-expanded') === 'true';
        
                        // 모든 아이템을 닫는 로직 (선택적)
                        // faqItems.forEach(otherItem => {
                        //     if (otherItem !== item) {
                        //         otherItem.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
                        //         otherItem.querySelector('.faq-answer').style.maxHeight = null;
                        //         otherItem.querySelector('.faq-question i').classList.remove('fa-chevron-up');
                        //         otherItem.querySelector('.faq-question i').classList.add('fa-chevron-down');
                        //     }
                        // });
        
                        if (isOpened) {
                            questionButton.setAttribute('aria-expanded', 'false');
                            answer.style.maxHeight = null;
                            icon.classList.remove('fa-chevron-up');
                            icon.classList.add('fa-chevron-down');
                        } else {
                            questionButton.setAttribute('aria-expanded', 'true');
                            answer.style.maxHeight = answer.scrollHeight + "px";
                            icon.classList.remove('fa-chevron-down');
                            icon.classList.add('fa-chevron-up');
                        }
                    });
                    questionButton.setAttribute('data-faq-initialized', 'true');
                }
            });
            console.log("[Debug] FAQ accordion initialized for items:", faqItems);
        } catch (e) {
            console.error("[Debug] Error in initializeFaqAccordion:", e);
        }
    }

    function initializePortfolioModal() {
        console.log("[Debug] initializePortfolioModal called.");
        // 이 함수는 이제 document.body에 단 한 번만 리스너를 부착합니다.
        if (document.body.dataset.portfolioListenersAttached === 'true') {
            console.log("[Debug] Portfolio modal listeners are already attached to the body. Skipping.");
            return;
        }
        console.log("[Debug] Attaching portfolio modal listeners to the document body for the first time.");

        try {
            const modalOverlay = document.getElementById('portfolio-modal');
            if (!modalOverlay) {
                console.warn("[Debug] Portfolio modal overlay not found. Cannot initialize.");
                return;
            }

            const modalVideoContainer = modalOverlay.querySelector('.modal-video-container');
            const modalIframe = modalVideoContainer ? modalVideoContainer.querySelector('iframe') : null;
            const modalImg = modalOverlay.querySelector('#modal-img');
            const modalTitle = modalOverlay.querySelector('#modal-title');
            const modalDescription = modalOverlay.querySelector('#modal-description');
            const modalDetailsList = modalOverlay.querySelector('#modal-details-list');
            const closeModalButton = modalOverlay.querySelector('.modal-close-button');

            const closeModal = () => {
                console.log("[Debug] Closing portfolio modal.");
                modalOverlay.classList.remove('active');
                document.body.style.overflow = '';
                if (modalIframe && modalIframe.src) {
                    modalIframe.src = ''; // 비디오 재생 중지
                }
            };

            // 이벤트 위임: body에서 발생하는 클릭 이벤트를 감지
            document.body.addEventListener('click', (event) => {
                const item = event.target.closest('.portfolio-item');
                if (!item) return;

                event.preventDefault(); // 혹시 모를 기본 동작 방지

                console.log("[Debug] Portfolio item clicked via body listener:", item.dataset.modalTitle);
                
                const videoUrl = item.dataset.modalVideo;
                const imageUrl = item.dataset.modalImage;
                const title = item.dataset.modalTitle;
                const description = item.dataset.modalDescription;
                const detailsString = item.dataset.modalDetails;

                // 비디오 또는 이미지 컨테이너 제어
                if (videoUrl && modalIframe) {
                    modalIframe.src = videoUrl;
                    modalVideoContainer.style.display = 'block';
                    modalImg.style.display = 'none';
                } else if (imageUrl) {
                    modalImg.src = imageUrl;
                    modalImg.alt = title;
                    modalImg.style.display = 'block';
                    if(modalVideoContainer) modalVideoContainer.style.display = 'none';
                }

                modalTitle.textContent = title;
                if(modalDescription) modalDescription.innerHTML = `<p>${description || ''}</p>`;

                // 상세 정보 리스트 생성
                modalDetailsList.innerHTML = '';
                if (detailsString) {
                    try {
                        const details = JSON.parse(detailsString);
                        for (const key in details) {
                            if (details.hasOwnProperty(key)) {
                                const value = details[key];
                                const listItem = document.createElement('li');
                                if (Array.isArray(value)) {
                                    listItem.innerHTML = `<strong>${key}:</strong> ${value.join(', ')}`;
                                } else {
                                    listItem.innerHTML = `<strong>${key}:</strong> ${value}`;
                                }
                                modalDetailsList.appendChild(listItem);
                            }
                        }
                    } catch (e) {
                        console.error("[Debug] Error parsing modal details JSON:", e, "Raw details:", detailsString);
                        const listItem = document.createElement('li');
                        listItem.textContent = "상세 정보를 불러오는 데 실패했습니다.";
                        modalDetailsList.appendChild(listItem);
                    }
                }

                modalOverlay.classList.add('active');
                document.body.style.overflow = 'hidden';
            });

            // 닫기 버튼 리스너
            if (closeModalButton) closeModalButton.addEventListener('click', closeModal);
            // 오버레이 클릭 리스너
            modalOverlay.addEventListener('click', (event) => {
                if (event.target === modalOverlay) closeModal();
            });
            // ESC 키 리스너
            document.addEventListener('keydown', (event) => {
                if (event.key === 'Escape' && modalOverlay.classList.contains('active')) {
                    closeModal();
                }
            });

            // 리스너가 성공적으로 부착되었음을 표시
            document.body.dataset.portfolioListenersAttached = 'true';
            console.log("[Debug] Portfolio modal listeners attached successfully to body.");

        } catch (e) {
            console.error("[Debug] Error in initializePortfolioModal:", e);
        }
    }

    function initializeImageViewerModal() {
        console.log("[Debug] initializeImageViewerModal called.");
        if (document.body.dataset.imageViewerListenersAttached === 'true') return;

        const imageViewerModal = document.getElementById('image-viewer-modal');
        if (!imageViewerModal) {
            console.warn("[Debug] Image viewer modal not found. Cannot initialize.");
            return;
        }

        const viewerImage = imageViewerModal.querySelector('.image-viewer-content img');
        const closeButton = imageViewerModal.querySelector('.modal-close-button');

        const openModal = (imgSrc) => {
            if (!viewerImage) return;
            viewerImage.src = imgSrc;
            imageViewerModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        };

        const closeModal = () => {
            imageViewerModal.classList.remove('active');
            document.body.style.overflow = '';
        };

        document.body.addEventListener('click', (event) => {
            const certItem = event.target.closest('.certification-item');
            if (!certItem) return;
            
            const imgElement = certItem.querySelector('img');
            if (imgElement) {
                event.preventDefault();
                openModal(imgElement.src);
            }
        });

        if (closeButton) closeButton.addEventListener('click', closeModal);
        imageViewerModal.addEventListener('click', (event) => {
            if (event.target === imageViewerModal) {
                closeModal();
            }
        });

        // ESC 키 리스너는 포트폴리오 모달과 공유될 수 있으므로, 여기서도 확인
        document.addEventListener('keydown', (event) => {
            if (event.key === 'Escape' && imageViewerModal.classList.contains('active')) {
                closeModal();
            }
        });

        document.body.dataset.imageViewerListenersAttached = 'true';
        console.log("[Debug] Image viewer modal listeners attached successfully to body.");
    }

    function initializeHeroCtaEffect() {
        console.log("[Debug] initializeHeroCtaEffect called.");
        // 이벤트 위임을 사용하여 body에 리스너 한 번만 등록
        if (document.body.dataset.heroCtaListenerAttached === 'true') return;
        
        try {
            document.body.addEventListener('click', (e) => {
                if (!e.target.closest('#hero-cta')) return;

                const ctaButton = e.target.closest('#hero-cta');
                const rect = ctaButton.getBoundingClientRect();
                const clickX = e.clientX - rect.left;
                const clickY = e.clientY - rect.top;

                for (let i = 0; i < 15; i++) {
                    const particle = document.createElement('div');
                    particle.classList.add('cta-particle');
                    document.body.appendChild(particle);

                    gsap.set(particle, {
                        x: rect.left + clickX,
                        y: rect.top + clickY,
                        opacity: 1
                    });

                    gsap.to(particle, {
                        x: `+=${gsap.utils.random(-80, 80)}`,
                        y: `+=${gsap.utils.random(-80, 80)}`,
                        opacity: 0,
                        scale: gsap.utils.random(0.3, 1),
                        duration: gsap.utils.random(0.5, 1),
                        ease: "power2.out",
                        onComplete: () => {
                            particle.remove();
                        }
                    });
                }
            });
            document.body.dataset.heroCtaListenerAttached = 'true';
            console.log("[Debug] Hero CTA effect listener attached to body.");
        } catch (e) {
            console.error("[Debug] Error in initializeHeroCtaEffect:", e);
        }
    }

    function initializeServiceCardIconHover() {
        console.log("[Debug] initializeServiceCardIconHover called.");
        if (document.body.dataset.serviceCardHoverAttached === 'true') return;

        try {
            document.body.addEventListener('mouseover', (e) => {
                const card = e.target.closest('.service-card');
                if (!card) return;
                
                // GSAP에 의해 이미 애니메이션이 진행 중인지 확인 (선택적)
                if (gsap.isTweening(card)) return;

                const icon = card.querySelector('.service-icon img');
                if (icon) {
                    gsap.to(icon, { 
                        scale: 1.15, 
                        rotateZ: 8,
                        duration: 0.3, 
                        ease: 'power2.out' 
                    });
                }
            });

            document.body.addEventListener('mouseout', (e) => {
                const card = e.target.closest('.service-card');
                if (!card) return;
                
                if (gsap.isTweening(card)) return;

                const icon = card.querySelector('.service-icon img');
                if (icon) {
                    gsap.to(icon, { 
                        scale: 1, 
                        rotateZ: 0,
                        duration: 0.3, 
                        ease: 'power2.out' 
                    });
                }
            });
            document.body.dataset.serviceCardHoverAttached = 'true';
            console.log("[Debug] Service card icon hover listeners attached to body.");
        } catch (e) {
            console.error("[Debug] Error in initializeServiceCardIconHover:", e);
        }
    }

    function initializeScrollProgressBar() {
        console.log("[Debug] initializeScrollProgressBar called.");
        try {
            const progressBar = document.getElementById('scroll-progress-bar');
            if (!progressBar) {
                console.warn("[Debug] Scroll progress bar element not found.");
                return;
            }
            const updateProgressBar = () => {
                const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
                const scrollHeight = document.documentElement.scrollHeight;
                const clientHeight = document.documentElement.clientHeight;

                if (scrollHeight <= clientHeight) { // 페이지가 스크롤되지 않는 경우
                    progressBar.style.width = '0%';
                    return;
                }

                const scrollPercent = (scrollTop / (scrollHeight - clientHeight)) * 100;
                progressBar.style.width = scrollPercent + '%';
            };

            // Barba.js 페이지 전환 시 기존 리스너를 명시적으로 제거하고 다시 추가할 필요는 없음
            // window에 대한 리스너는 initialize 시점에 한 번만 등록해도 페이지 전환 후에도 계속 작동함.
            // 다만, Barba.js가 새 콘텐츠를 로드하고 DOM 높이가 변경된 후 
            // updateProgressBar가 올바른 값을 참조하도록 하는 것이 중요.
            // 현재 구조에서는 enter 트랜지션 onComplete에서 다시 initializeScrollProgressBar를 호출하므로,
            // progressBar 변수는 새 페이지 기준으로 다시 찾아지지만, 스크롤 리스너는 window에 계속 남아있게 됨.
            // 이는 일반적으로 문제되지 않으나, 만약 문제가 발생하면 리스너 제거/추가 로직이 필요할 수 있음.
            
            window.addEventListener('scroll', updateProgressBar);
            updateProgressBar(); // 페이지 로드/전환 시 초기 상태 업데이트
            console.log("[Debug] Scroll progress bar initialized.");
        } catch (e) {
            console.error("[Debug] Error in initializeScrollProgressBar:", e);
        }
    }

    function runAllInitializers() {
        console.log("[Debug] Running all initializers...");
        try {
            initializeCustomCursor();
            initializeHeaderScroll();
            initializeMobileNavigation();
            reinitializeGsapAnimations();
            reinitializeVanillaTilt();
            initializeFaqAccordion();
            initializePortfolioModal();
            initializeImageViewerModal();
            initializeHeroCtaEffect();
            initializeServiceCardIconHover();
            initializeScrollProgressBar();
        } catch(e) {
            console.error("[Debug] Error during initialization sequence:", e);
        }
        console.log("[Debug] All initializers finished.");
    }

    // --------------------
    // Initial Calls on DOMContentLoaded
    // --------------------
    console.log("[Debug] Starting initial calls on DOMContentLoaded...");
    
    // --------------------
    // Barba.js Initialization
    // --------------------
    console.log("[Debug] Checking for Barba.js library...");
    if (typeof barba !== 'undefined') {
        console.log('[Barba Debug] Barba.js found, attempting to initialize...');
        try {
            barba.init({
                sync: true, 
                timeout: 7000, 
                debug: true, // Enable Barba's own debug mode
                prevent: ({ el }) => {
                    // href 속성값이 '#'으로 시작하는 링크는 Barba.js가 처리하지 않도록 방지
                    const href = el.getAttribute('href');
                    return href && href.startsWith('#');
                },
                transitions: [{
                    name: 'slide-transition',
                    once(data) {
                        console.log('[Barba Debug] "once" handler called. Data:', data);
                        runAllInitializers();
                    },
                    async leave(data) {
                        console.log('[Barba Debug] "leave" handler called. Current container:', data.current.container);
                        const done = this.async();
                        gsap.to(data.current.container, {
                            opacity: 0, y: -80, duration: 0.4, ease: "power2.in", 
                            onComplete: () => {
                                console.log('[Barba Debug] "leave" animation complete.');
                                done();
                            }
                        });
                    },
                    async enter(data) {
                        console.log('[Barba Debug] "enter" handler called. Next container:', data.next.container);
                        window.scrollTo(0, 0); 
                        gsap.set(data.next.container, { opacity: 0, y: 80 });
                        
                        gsap.to(data.next.container, {
                            opacity: 1, y: 0, duration: 0.5, ease: "power2.out", delay: 0.2, 
                            onComplete: () => {
                                console.log('[Barba Debug] "enter" animation complete, calling initializers...');
                                runAllInitializers();
                            }
                        });
                    }
                }]
            });
            console.log('[Barba Debug] Barba.init called successfully.');
        } catch (e) {
            console.error('[Barba Debug] Error initializing Barba.js:', e);
        }
    } else {
        console.warn("[Barba Debug] Barba.js library not loaded. Page transitions disabled. Running initializers directly.");
        runAllInitializers();
    }
    console.log('[Debug] End of DOMContentLoaded event listener.');
}); // End of DOMContentLoaded 