document.addEventListener('DOMContentLoaded', () => {

    // --------------------
    // Custom Cursor
    // --------------------
    const cursorDot = document.getElementById('cursor-dot');
    const cursorOutline = document.getElementById('cursor-outline');

    if (cursorDot && cursorOutline) {
        window.addEventListener('mousemove', (e) => {
            const posX = e.clientX;
            const posY = e.clientY;

            cursorDot.style.left = `${posX}px`;
            cursorDot.style.top = `${posY}px`;

            // cursorOutline.style.left = `${posX}px`;
            // cursorOutline.style.top = `${posY}px`;
            // Animate outline for smoother following
            gsap.to(cursorOutline, {
                duration: 0.3,
                left: `${posX}px`,
                top: `${posY}px`,
                ease: "power1.out"
            });

            // Show cursor on mouse move inside body
            cursorDot.style.opacity = '1';
            cursorOutline.style.opacity = '0.5'; // Default outline opacity
        });

        document.body.addEventListener('mouseleave', () => {
            cursorDot.style.opacity = '0';
            cursorOutline.style.opacity = '0';
        });

        // Add hover effect for interactive elements
        const interactiveElements = document.querySelectorAll('a, button, .service-card, .portfolio-item');
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
    }


    // --------------------
    // Header Scroll & Active Link
    // --------------------
    const header = document.querySelector('header');
    let lastScrollTop = 0;

    if (header) {
        window.addEventListener('scroll', () => {
            let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            if (scrollTop > lastScrollTop && scrollTop > header.offsetHeight) {
                // Scroll Down
                header.classList.add('header-hidden');
            } else {
                // Scroll Up
                header.classList.remove('header-hidden');
            }
            lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
            
            // Active link highlighting
            const sections = document.querySelectorAll('section[id]');
            const navLinks = document.querySelectorAll('header nav ul li a');
            
            sections.forEach(section => {
                const sectionTop = section.offsetTop - header.offsetHeight - 50; // Adjust offset as needed
                const sectionHeight = section.offsetHeight;
                const sectionId = section.getAttribute('id');

                if (scrollTop >= sectionTop && scrollTop < sectionTop + sectionHeight) {
                    navLinks.forEach(link => {
                        link.classList.remove('active');
                        if (link.getAttribute('href') === `#${sectionId}`) {
                            link.classList.add('active');
                        }
                    });
                } else if (scrollTop < (document.querySelector('section[id]')?.offsetTop || 0) - header.offsetHeight - 50) {
                     // If scroll is above the first section, no link is active
                     navLinks.forEach(link => link.classList.remove('active'));
                }
            });
        });
    }

    // --------------------
    // Mobile Navigation Toggle
    // --------------------
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.querySelector('header ul.nav-links');
    const navLinkItems = document.querySelectorAll('header ul.nav-links li a.nav-link');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('nav-active');

            // 아이콘 변경 (햄버거 <-> X)
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

        // 모바일 메뉴에서 링크 클릭 시 메뉴 닫기
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
    }


    // --------------------
    // GSAP Animations
    // --------------------
    gsap.registerPlugin(ScrollTrigger);

    // Hero Section Animation
    const heroTimeline = gsap.timeline({ delay: 0.5 });
    heroTimeline
        .to("#hero-title-line1", { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" })
        .to("#hero-title-line2", { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }, "-=0.6")
        .to("#hero-subtitle", { opacity: 1, y: 0, duration: 0.7, ease: "power2.out" }, "-=0.5")
        .to("#hero-cta", { opacity: 1, y: 0, duration: 0.6, ease: "back.out(1.7)" }, "-=0.4");
    
    // General Scroll-triggered animations for sections and elements
    // Replacing AOS with GSAP for consistency
    const revealElements = gsap.utils.toArray('[data-aos]'); // Use existing data-aos for targeting if convenient

    revealElements.forEach((el) => {
        const delay = parseFloat(el.dataset.aosDelay) / 1000 || 0; // Convert ms to s
        const animationType = el.dataset.aos;

        let startX = 0, startY = 0, startScale = 1, startOpacity = 0;

        if (animationType === 'fade-up') { startY = 50; }
        else if (animationType === 'fade-right') { startX = -50; }
        else if (animationType === 'fade-left') { startX = 50; }
        else if (animationType === 'zoom-in' || animationType === 'zoom-in-up') { startScale = 0.8; if(animationType === 'zoom-in-up') startY = 30;}
        // Add more types as needed or simplify

        gsap.fromTo(el,
            { opacity: startOpacity, x: startX, y: startY, scale: startScale },
            {
                opacity: 1, x: 0, y: 0, scale: 1,
                duration: 0.8,
                delay: delay,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: el,
                    start: "top 85%", // When element top hits 85% of viewport height
                    toggleActions: "play none none none", // Play animation once on enter
                    // markers: true, // for debugging
                }
            }
        );
        el.style.opacity = '0'; // Initially hide elements to be animated by GSAP
    });
    
    // Section Title animation (alternative to data-aos)
    gsap.utils.toArray('.section-title').forEach(title => {
        gsap.from(title, {
            opacity:0,
            y: 50,
            duration: 0.6,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: title,
                start: 'top 90%',
                toggleActions: 'play none none none',
            }
        });
         // Animate the ::after pseudo-element - 이 부분을 주석 처리합니다.
        /*
        gsap.from(title.querySelectorAll('::after'), { 
            // This direct selection won't work for pseudo-elements
            // Pseudo-element animation needs a different approach
            // For simplicity, we'll animate the title itself
            // Or create a real span element for the line
        });
        */
    });

    // About Section Image Parallax
    const aboutImage = document.querySelector('.about-image img');
    if (aboutImage) {
        gsap.to(aboutImage, {
            yPercent: -15, // 이미지를 위로 15% 만큼 더 느리게 스크롤 (값을 조정하여 효과 변경)
            ease: "none",
            scrollTrigger: {
                trigger: ".about-section", // 트리거 요소
                start: "top bottom", // .about-section 상단이 뷰포트 하단에 닿을 때 시작
                end: "bottom top", // .about-section 하단이 뷰포트 상단에 닿을 때 끝
                scrub: true // 스크롤에 부드럽게 동기화
            }
        });
    }


    // Services Card & Portfolio Item 3D Tilt Effect (using VanillaTilt.js)
    if (typeof VanillaTilt !== 'undefined') {
        VanillaTilt.init(document.querySelectorAll(".service-card, .portfolio-item"), {
            max: 8,        // Max tilt rotation (degrees) - 조금 줄여서 은은하게
            speed: 400,    // Tilt speed
            glare: true,   // If it should have a "glare" effect
            "max-glare": 0.1 // Glare effect opacity (0 = no glare, 1 = full glare) - 글레어 약하게
        });
    } else {
        console.warn("VanillaTilt.js not loaded. Tilt effect disabled.");
    }

    // FAQ Accordion
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const questionButton = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');
        const icon = questionButton.querySelector('i');

        questionButton.addEventListener('click', () => {
            const isOpened = questionButton.getAttribute('aria-expanded') === 'true';

            // Close all other items when one is opened (optional)
            /*
            if (!isOpened) { 
                faqItems.forEach(otherItem => {
                    if (otherItem !== item) {
                        const otherQuestion = otherItem.querySelector('.faq-question');
                        const otherAnswer = otherItem.querySelector('.faq-answer');
                        const otherIcon = otherQuestion.querySelector('i');
                        
                        otherQuestion.setAttribute('aria-expanded', 'false');
                        otherAnswer.style.maxHeight = null;
                        // Reset padding transitions for others if you added them
                        // otherAnswer.style.paddingTop = '0px';
                        // otherAnswer.style.paddingBottom = '0px';
                        if(otherIcon) otherIcon.style.transform = 'rotate(0deg)';
                    }
                });
            }
            */

            if (isOpened) {
                questionButton.setAttribute('aria-expanded', 'false');
                answer.style.maxHeight = null;
                // answer.style.paddingTop = '0px'; // CSS handles this via transition
                // answer.style.paddingBottom = '0px'; // CSS handles this via transition
                if(icon) icon.style.transform = 'rotate(0deg)';
            } else {
                questionButton.setAttribute('aria-expanded', 'true');
                answer.style.maxHeight = answer.scrollHeight + "px";
                // answer.style.paddingTop = '0px'; // Padding is handled by the .faq-answer class itself
                // answer.style.paddingBottom = '20px'; // Padding for <p> is in CSS
                if(icon) icon.style.transform = 'rotate(180deg)';
            }
        });
    });

    // AOS.init(); // GSAP is used instead

}); // End of DOMContentLoaded 