// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    
    // Mobile Navigation Toggle
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const nav = document.querySelector('.nav');
    
    if (mobileMenuToggle && nav) {
        mobileMenuToggle.addEventListener('click', function() {
            nav.classList.toggle('active');
            
            // Animate hamburger menu
            const spans = this.querySelectorAll('span');
            if (nav.classList.contains('active')) {
                spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
            } else {
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });
    }
    
    // Close mobile menu when clicking on a link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (nav.classList.contains('active')) {
                nav.classList.remove('active');
                const spans = mobileMenuToggle.querySelectorAll('span');
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });
    });
    
    // FAQ Accordion Functionality
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');
        
        question.addEventListener('click', function() {
            const isActive = item.classList.contains('active');
            
            // Close all other FAQ items
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });
            
            // Toggle current item
            if (isActive) {
                item.classList.remove('active');
            } else {
                item.classList.add('active');
            }
        });
    });
    
    // Smooth Scrolling for Navigation Links
    const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');
    
    smoothScrollLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetSection.offsetTop - headerHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Header Scroll Effect
    const header = document.querySelector('.header');
    let lastScrollTop = 0;
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > 100) {
            header.style.background = 'rgba(255, 255, 255, 0.95)';
            header.style.backdropFilter = 'blur(20px)';
        } else {
            header.style.background = 'white';
            header.style.backdropFilter = 'blur(10px)';
        }
        
        lastScrollTop = scrollTop;
    });
    
    // Button Click Effects
    const buttons = document.querySelectorAll('.btn');
    
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Create ripple effect
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple');
            
            this.appendChild(ripple);
            
            // Remove ripple after animation
            setTimeout(() => {
                ripple.remove();
            }, 600);
            
            // Handle different button actions
            const buttonText = this.textContent.trim();
            
            if (buttonText.includes('Start Your Journey Today')) {
                // Scroll to services section
                const servicesSection = document.querySelector('#services');
                if (servicesSection) {
                    const headerHeight = header.offsetHeight;
                    const targetPosition = servicesSection.offsetTop - headerHeight - 20;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            } else if (buttonText.includes('Check Your Eligibility Now') || buttonText.includes('Verifica tu Elegibilidad Ahora')) {
                // Open the same application modal as hero button
                const applicationModal = document.getElementById('applicationModal');
                if (applicationModal) {
                    applicationModal.style.display = 'block';
                    document.body.style.overflow = 'hidden'; // Prevent background scrolling
                }
            } else if (buttonText.includes('Contact Us Today')) {
                // Scroll to contact section
                const contactSection = document.querySelector('#contact');
                if (contactSection) {
                    const headerHeight = header.offsetHeight;
                    const targetPosition = contactSection.offsetTop - headerHeight - 20;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
    
    // Eligibility Form Function
    function showEligibilityForm() {
        // Create modal overlay
        const modal = document.createElement('div');
        modal.className = 'eligibility-modal';
        modal.innerHTML = `
            <div class="modal-content">
                <div class="modal-header">
                    <h3>Check Your Eligibility</h3>
                    <button class="close-modal">&times;</button>
                </div>
                <form class="eligibility-form">
                    <div class="form-group">
                        <label for="name">Full Name *</label>
                        <input type="text" id="name" name="name" required>
                    </div>
                    <div class="form-group">
                        <label for="email">Email Address *</label>
                        <input type="email" id="email" name="email" required>
                    </div>
                    <div class="form-group">
                        <label for="phone">Phone Number *</label>
                        <input type="tel" id="phone" name="phone" required>
                    </div>
                    <div class="form-group">
                        <label for="credit-score">Estimated Credit Score</label>
                        <select id="credit-score" name="credit-score">
                            <option value="">Select Credit Score Range</option>
                            <option value="excellent">Excellent (750+)</option>
                            <option value="good">Good (700-749)</option>
                            <option value="fair">Fair (650-699)</option>
                            <option value="poor">Poor (Below 650)</option>
                            <option value="unknown">Don't Know</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="property-type">Property Type Interest</label>
                        <select id="property-type" name="property-type">
                            <option value="">Select Property Type</option>
                            <option value="single-family">Single Family Home</option>
                            <option value="condo">Condominium</option>
                            <option value="townhouse">Townhouse</option>
                            <option value="multi-family">Multi-Family</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="budget">Budget Range</label>
                        <select id="budget" name="budget">
                            <option value="">Select Budget Range</option>
                            <option value="under-200k">Under $200,000</option>
                            <option value="200k-300k">$200,000 - $300,000</option>
                            <option value="300k-400k">$300,000 - $400,000</option>
                            <option value="400k-500k">$400,000 - $500,000</option>
                            <option value="over-500k">Over $500,000</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="timeline">Timeline to Purchase/Rent</label>
                        <select id="timeline" name="timeline">
                            <option value="">Select Timeline</option>
                            <option value="immediately">Immediately</option>
                            <option value="1-3-months">1-3 Months</option>
                            <option value="3-6-months">3-6 Months</option>
                            <option value="6-12-months">6-12 Months</option>
                            <option value="over-12-months">Over 12 Months</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="message">Additional Information</label>
                        <textarea id="message" name="message" rows="4" placeholder="Tell us about your situation and any specific questions..."></textarea>
                    </div>
                    <button type="submit" class="btn btn-primary">Submit Eligibility Check</button>
                </form>
            </div>
        `;
        
        // Add modal to page
        document.body.appendChild(modal);
        
        // Show modal
        setTimeout(() => {
            modal.classList.add('active');
        }, 10);
        
        // Close modal functionality
        const closeBtn = modal.querySelector('.close-modal');
        closeBtn.addEventListener('click', () => {
            modal.classList.remove('active');
            setTimeout(() => {
                modal.remove();
            }, 300);
        });
        
        // Close modal when clicking outside
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('active');
                setTimeout(() => {
                    modal.remove();
                }, 300);
            }
        });
        
        // Form submission
        const form = modal.querySelector('.eligibility-form');
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const data = Object.fromEntries(formData);
            
            // Show success message
            showSuccessMessage('Thank you! We\'ll review your information and contact you within 24 hours to discuss your eligibility.');
            
            // Close modal
            modal.classList.remove('active');
            setTimeout(() => {
                modal.remove();
            }, 300);
        });
    }
    
    // Success Message Function
    function showSuccessMessage(message) {
        const successDiv = document.createElement('div');
        successDiv.className = 'success-message';
        successDiv.textContent = message;
        
        document.body.appendChild(successDiv);
        
        setTimeout(() => {
            successDiv.classList.add('active');
        }, 10);
        
        setTimeout(() => {
            successDiv.classList.remove('active');
            setTimeout(() => {
                successDiv.remove();
            }, 300);
        }, 5000);
    }
    
    // Intersection Observer for Animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animateElements = document.querySelectorAll('.service-card, .testimonial-card, .faq-item, .section-header');
    animateElements.forEach(el => {
        observer.observe(el);
    });
    
    // Add CSS for animations
    const style = document.createElement('style');
    style.textContent = `
        .service-card, .testimonial-card, .faq-item, .section-header {
            opacity: 0;
            transform: translateY(30px);
            transition: opacity 0.6s ease, transform 0.6s ease;
        }
        
        .service-card.animate-in, .testimonial-card.animate-in, .faq-item.animate-in, .section-header.animate-in {
            opacity: 1;
            transform: translateY(0);
        }
        
        .eligibility-modal {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.5);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 10000;
            opacity: 0;
            transition: opacity 0.3s ease;
        }
        
        .eligibility-modal.active {
            opacity: 1;
        }
        
        .modal-content {
            background: white;
            border-radius: 16px;
            padding: 2rem;
            max-width: 500px;
            width: 90%;
            max-height: 90vh;
            overflow-y: auto;
            transform: scale(0.9);
            transition: transform 0.3s ease;
        }
        
        .eligibility-modal.active .modal-content {
            transform: scale(1);
        }
        
        .modal-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 1.5rem;
        }
        
        .close-modal {
            background: none;
            border: none;
            font-size: 1.5rem;
            cursor: pointer;
            color: #64748b;
        }
        
        .form-group {
            margin-bottom: 1.5rem;
        }
        
        .form-group label {
            display: block;
            margin-bottom: 0.5rem;
            font-weight: 500;
            color: #374151;
        }
        
        .form-group input,
        .form-group select,
        .form-group textarea {
            width: 100%;
            padding: 0.75rem;
            border: 1px solid #d1d5db;
            border-radius: 8px;
            font-size: 1rem;
            transition: border-color 0.3s ease;
        }
        
        .form-group input:focus,
        .form-group select:focus,
        .form-group textarea:focus {
            outline: none;
            border-color: #dc2626;
            box-shadow: 0 0 0 3px rgba(220, 38, 38, 0.1);
        }
        
        .success-message {
            position: fixed;
            top: 20px;
            right: 20px;
            background: #10b981;
            color: white;
            padding: 1rem 1.5rem;
            border-radius: 8px;
            box-shadow: 0 10px 30px rgba(16, 185, 129, 0.3);
            z-index: 10001;
            transform: translateX(100%);
            transition: transform 0.3s ease;
        }
        
        .success-message.active {
            transform: translateX(0);
        }
        
        .ripple {
            position: absolute;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.6);
            transform: scale(0);
            animation: ripple-animation 0.6s linear;
            pointer-events: none;
        }
        
        @keyframes ripple-animation {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
        
        @media (max-width: 768px) {
            .modal-content {
                padding: 1.5rem;
                margin: 1rem;
            }
        }
    `;
    
    document.head.appendChild(style);
    
    // Hero Image Carousel
    const heroImages = document.querySelectorAll('.hero-carousel img');
    let currentImageIndex = 0;
    
    function nextImage() {
        // Remove active class from current image
        heroImages[currentImageIndex].classList.remove('active');
        
        // Move to next image
        currentImageIndex = (currentImageIndex + 1) % heroImages.length;
        
        // Add active class to new image
        heroImages[currentImageIndex].classList.add('active');
    }
    
    // Change image every 4 seconds
    setInterval(nextImage, 4000);
    
    // Language Toggle Functionality
    const langToggle = document.getElementById('langToggle');
    const ukFlag = document.getElementById('ukFlag');
    const spainFlag = document.getElementById('spainFlag');
    let currentLang = 'en';
    
    // Spanish translations
    const translations = {
        en: {
            // Header
            'Home': 'Home',
            'Services': 'Services',
            'About': 'About',
            'Contact': 'Contact',
            'Call us now': 'Call us now',
            'Start Your Journey Today': 'Start Your Journey Today',
            
            // Hero Section
            'Your Trusted Destination to Buy or Rent Your Dream Home': 'Your Trusted Destination to Buy or Rent Your Dream Home',
            'At DestinationBuyRent.com, we simplify the process of buying or renting. From credit guidance to closing the deal, we make sure your journey to a new home is smooth and stress-free.': 'At DestinationBuyRent.com, we simplify the process of buying or renting. From credit guidance to closing the deal, we make sure your journey to a new home is smooth and stress-free.',
            '👉 Start Your Journey Today': '👉 Start Your Journey Today',
            
            // Services Section
            'Our Main Services': 'Our Main Services',
            'Comprehensive solutions to make your home buying or renting journey successful': 'Comprehensive solutions to make your home buying or renting journey successful',
            'Credit Improvement': 'Credit Improvement',
            'Tools and strategies to qualify for better loan terms and improve your financial standing.': 'Tools and strategies to qualify for better loan terms and improve your financial standing.',
            'Document Support': 'Document Support',
            'Step-by-step organization and preparation of all paperwork needed for your transaction.': 'Step-by-step organization and preparation of all paperwork needed for your transaction.',
            'Personalized Guidance': 'Personalized Guidance',
            'Clear explanations and support tailored for buyers, renters, or investors at every step.': 'Clear explanations and support tailored for buyers, renters, or investors at every step.',
            'Flexible Loan Options': 'Flexible Loan Options',
            'FHA, Conventional, Non-QM, DSCR, and more options tailored to your specific needs.': 'FHA, Conventional, Non-QM, DSCR, and more options tailored to your specific needs.',
            
            // CTA Sections
            'Find out if you qualify to buy or rent today—your dream home is closer than you think.': 'Find out if you qualify to buy or rent today—your dream home is closer than you think.',
            '👉 Check Your Eligibility Now': '👉 Check Your Eligibility Now',
            'Whether you\'re buying or renting, DestinationBuyRent.com is your trusted partner.': 'Whether you\'re buying or renting, DestinationBuyRent.com is your trusted partner.',
            '👉 Contact Us Today': '👉 Contact Us Today',
            
            // Why Choose Us Section
            'Why Choose Us': 'Why Choose Us',
            'Trust, expertise, and personalized support for your home journey': 'Trust, expertise, and personalized support for your home journey',
            'Key Advantages': 'Key Advantages',
            'Fast preparation and processing': 'Fast preparation and processing',
            'Step-by-step clarity throughout the process': 'Step-by-step clarity throughout the process',
            'Personalized support and guidance': 'Personalized support and guidance',
            'Easy-to-follow checklists': 'Easy-to-follow checklists',
            'Trust & Security': 'Trust & Security',
            'Jose L. Figueroa, NMLS #371526, Licensed Mortgage Loan Originator in Florida': 'Jose L. Figueroa, NMLS #371526, Licensed Mortgage Loan Originator in Florida',
            'FHA, Fannie Mae, Freddie Mac, VA, USDA, Non-Conforming programs': 'FHA, Fannie Mae, Freddie Mac, VA, USDA, Non-Conforming programs',
            'Member of national and local mortgage and real estate associations': 'Member of national and local mortgage and real estate associations',
            'Trusted by thousands of first-time buyers & investors in South Florida': 'Trusted by thousands of first-time buyers & investors in South Florida',
            'Equal Housing Opportunity': 'Equal Housing Opportunity',
            'FHA': 'FHA',
            'NMLS': 'NMLS',
            'USDA': 'USDA',
            'VA': 'VA',
            
            // Testimonials Section
            'What Our Clients Say': 'What Our Clients Say',
            'Real experiences from satisfied clients across South Florida': 'Real experiences from satisfied clients across South Florida',
            'DestinationBuyRent.com made everything so simple! I found the perfect home in less than 2 months. Highly recommended.': 'DestinationBuyRent.com made everything so simple! I found the perfect home in less than 2 months. Highly recommended.',
            'Laura T.': 'Laura T.',
            'First-time Homebuyer': 'First-time Homebuyer',
            'I never thought I could qualify to buy, but they guided me step by step. Thanks to their help, I\'m now a proud homeowner.': 'I never thought I could qualify to buy, but they guided me step by step. Thanks to their help, I\'m now a proud homeowner.',
            'Carlos M.': 'Carlos M.',
            'New Homeowner': 'New Homeowner',
            'Professional, transparent, and supportive from start to finish. Renting has never been easier.': 'Professional, transparent, and supportive from start to finish. Renting has never been easier.',
            'Andres G.': 'Andres G.',
            'Rental Client': 'Rental Client',
            
            // FAQ Section
            'Frequently Asked Questions': 'Frequently Asked Questions',
            'Get answers to common questions about our services': 'Get answers to common questions about our services',
            'Do I need high credit to buy a house?': 'Do I need high credit to buy a house?',
            'Not always. We\'ll review your situation and give you clear steps to improve and qualify.': 'Not always. We\'ll review your situation and give you clear steps to improve and qualify.',
            'Can I rent while preparing to buy?': 'Can I rent while preparing to buy?',
            'Yes! DestinationBuyRent.com helps with both renting and planning your path to ownership.': 'Yes! DestinationBuyRent.com helps with both renting and planning your path to ownership.',
            'How do I get started?': 'How do I get started?',
            'Simply contact us, provide basic documents, and we\'ll guide you from there.': 'Simply contact us, provide basic documents, and we\'ll guide you from there.',
            'What areas do you serve?': 'What areas do you serve?',
            'We proudly serve Miami-Dade, Broward, Palm Beach, and surrounding areas of South Florida communities.': 'We proudly serve Miami-Dade, Broward, Palm Beach, and surrounding areas of South Florida communities.',
            
            // Footer
            'Contact Information': 'Contact Information',
            'Quick Links': 'Quick Links',
            'Privacy Policy': 'Privacy Policy',
            'Terms of Service': 'Terms of Service',
            'Follow Us': 'Follow Us',
            'All rights reserved.': 'All rights reserved.',
            
            // Modal Form
            'Start Your Journey<br>Apply Today': 'Start Your Journey<br>Apply Today',
            'Fill out this quick application so we can better understand your situation and guide you toward renting or buying a home.': 'Fill out this quick application so we can better understand your situation and guide you toward renting or buying a home.',
            'Full Name': 'Full Name',
            'Phone Number': 'Phone Number',
            'Email Address': 'Email Address',
            'Current Address (optional)': 'Current Address (optional)',
            'Are you looking to:': 'Are you looking to:',
            'Buy a Home': 'Buy a Home',
            'Rent a Home': 'Rent a Home',
            'Not Sure Yet': 'Not Sure Yet',
            'Estimated Credit Score Range': 'Estimated Credit Score Range',
            'Below 580': 'Below 580',
            '580-619': '580-619',
            '620-659': '620-659',
            '660-699': '660-699',
            '700-739': '700-739',
            '740-779': '740-779',
            '780+': '780+',
            'Employment Status': 'Employment Status',
            'Employed Full-Time': 'Employed Full-Time',
            'Employed Part-Time': 'Employed Part-Time',
            'Self-Employed': 'Self-Employed',
            'Unemployed': 'Unemployed',
            'Retired': 'Retired',
            'Student': 'Student',
            'Do you currently have a budget for down payment or deposit?': 'Do you currently have a budget for down payment or deposit?',
            'Yes': 'Yes',
            'No': 'No',
            'Message / Notes': 'Message / Notes',
            'Tell us more about your situation...': 'Tell us more about your situation...',
            'Submit': 'Submit'
        },
        es: {
            // Header
            'Home': 'Inicio',
            'Services': 'Servicios',
            'About': 'Nosotros',
            'Contact': 'Contacto',
            'Call us now': 'Llámanos ahora',
            'Start Your Journey Today': 'Comienza tu Viaje Hoy',
            
            // Hero Section
            'Your Trusted Destination to Buy or Rent Your Dream Home': 'Tu Destino de Confianza para Comprar o Alquilar tu Casa Soñada',
            'At DestinationBuyRent.com, we simplify the process of buying or renting. From credit guidance to closing the deal, we make sure your journey to a new home is smooth and stress-free.': 'En DestinationBuyRent.com, simplificamos el proceso de compra o alquiler. Desde orientación crediticia hasta cerrar el trato, nos aseguramos de que tu viaje hacia una nueva casa sea suave y sin estrés.',
            '👉 Start Your Journey Today': '👉 Comienza tu Viaje Hoy',
            
            // Services Section
            'Our Main Services': 'Nuestros Servicios Principales',
            'Comprehensive solutions to make your home buying or renting journey successful': 'Soluciones integrales para hacer exitoso tu viaje de compra o alquiler de casa',
            'Credit Improvement': 'Mejora de Crédito',
            'Tools and strategies to qualify for better loan terms and improve your financial standing.': 'Herramientas y estrategias para calificar para mejores términos de préstamo y mejorar tu situación financiera.',
            'Document Support': 'Apoyo de Documentos',
            'Step-by-step organization and preparation of all paperwork needed for your transaction.': 'Organización y preparación paso a paso de toda la documentación necesaria para tu transacción.',
            'Personalized Guidance': 'Orientación Personalizada',
            'Clear explanations and support tailored for buyers, renters, or investors at every step.': 'Explicaciones claras y apoyo adaptado para compradores, inquilinos o inversores en cada paso.',
            'Flexible Loan Options': 'Opciones de Préstamo Flexibles',
            'FHA, Conventional, Non-QM, DSCR, and more options tailored to your specific needs.': 'FHA, Convencional, Non-QM, DSCR y más opciones adaptadas a tus necesidades específicas.',
            
            // CTA Sections
            'Find out if you qualify to buy or rent today—your dream home is closer than you think.': 'Descubre si calificas para comprar o alquilar hoy—tu casa soñada está más cerca de lo que piensas.',
            '👉 Check Your Eligibility Now': '👉 Verifica tu Elegibilidad Ahora',
            'Whether you\'re buying or renting, DestinationBuyRent.com is your trusted partner.': 'Ya sea que estés comprando o alquilando, DestinationBuyRent.com es tu socio de confianza.',
            '👉 Contact Us Today': '👉 Contáctanos Hoy',
            
            // Why Choose Us Section
            'Why Choose Us': 'Por Qué Elegirnos',
            'Trust, expertise, and personalized support for your home journey': 'Confianza, experiencia y apoyo personalizado para tu viaje hacia el hogar',
            'Key Advantages': 'Ventajas Clave',
            'Fast preparation and processing': 'Preparación y procesamiento rápido',
            'Step-by-step clarity throughout the process': 'Claridad paso a paso durante todo el proceso',
            'Personalized support and guidance': 'Apoyo y orientación personalizada',
            'Easy-to-follow checklists': 'Listas de verificación fáciles de seguir',
            'Trust & Security': 'Confianza y Seguridad',
            'Jose L. Figueroa, NMLS #371526, Licensed Mortgage Loan Originator in Florida': 'Jose L. Figueroa, NMLS #371526, Agente hipotecario con licencia en Florida',
            'FHA, Fannie Mae, Freddie Mac, VA, USDA, Non-Conforming programs': 'FHA, Fannie Mae, Freddie Mac, VA, USDA, Préstamos no conformes',
            'Member of national and local mortgage and real estate associations': 'Miembro de asociaciones hipotecarias y de bienes raíces nacionales y locales',
            'Trusted by thousands of first-time buyers & investors in South Florida': 'Confiado por miles de compradores primerizos e inversores en el Sur de Florida',
            'Equal Housing Opportunity': 'Igualdad de Oportunidad de Vivienda',
            'FHA': 'FHA',
            'NMLS': 'NMLS',
            'USDA': 'USDA',
            'VA': 'VA',
            
            // Testimonials Section
            'What Our Clients Say': 'Lo Que Dicen Nuestros Clientes',
            'Real experiences from satisfied clients across South Florida': 'Experiencias reales de clientes satisfechos en todo el Sur de Florida',
            'DestinationBuyRent.com made everything so simple! I found the perfect home in less than 2 months. Highly recommended.': '¡DestinationBuyRent.com hizo todo tan simple! Encontré la casa perfecta en menos de 2 meses. Altamente recomendado.',
            'Laura T.': 'Laura T.',
            'First-time Homebuyer': 'Compradora Primeriza',
            'I never thought I could qualify to buy, but they guided me step by step. Thanks to their help, I\'m now a proud homeowner.': 'Nunca pensé que podría calificar para comprar, pero me guiaron paso a paso. Gracias a su ayuda, ahora soy un orgulloso propietario.',
            'Carlos M.': 'Carlos M.',
            'New Homeowner': 'Nuevo Propietario',
            'Professional, transparent, and supportive from start to finish. Renting has never been easier.': 'Profesional, transparente y solidario de principio a fin. Alquilar nunca ha sido más fácil.',
            'Andres G.': 'Andres G.',
            'Rental Client': 'Cliente de Alquiler',
            
            // FAQ Section
            'Frequently Asked Questions': 'Preguntas Frecuentes',
            'Get answers to common questions about our services': 'Obtén respuestas a preguntas comunes sobre nuestros servicios',
            'Do I need high credit to buy a house?': '¿Necesito un crédito alto para comprar una casa?',
            'Not always. We\'ll review your situation and give you clear steps to improve and qualify.': 'No siempre. Revisaremos tu situación y te daremos pasos claros para mejorar y calificar.',
            'Can I rent while preparing to buy?': '¿Puedo alquilar mientras me preparo para comprar?',
            'Yes! DestinationBuyRent.com helps with both renting and planning your path to ownership.': '¡Sí! DestinationBuyRent.com te ayuda tanto con el alquiler como con la planificación de tu camino hacia la propiedad.',
            'How do I get started?': '¿Cómo empiezo?',
            'Simply contact us, provide basic documents, and we\'ll guide you from there.': 'Simplemente contáctanos, proporciona documentos básicos y te guiaremos desde ahí.',
            'What areas do you serve?': '¿Qué áreas sirven?',
            'We proudly serve Miami-Dade, Broward, Palm Beach, and surrounding areas of South Florida communities.': 'Servimos con orgullo a Miami-Dade, Broward, Palm Beach y las áreas circundantes de las comunidades del Sur de Florida.',
            
            // Footer
            'Contact Information': 'Información de Contacto',
            'Quick Links': 'Enlaces Rápidos',
            'Privacy Policy': 'Política de Privacidad',
            'Terms of Service': 'Términos de Servicio',
            'Follow Us': 'Síguenos',
            'All rights reserved.': 'Todos los derechos reservados.',
            
            // Modal Form
            'Start Your Journey<br>Apply Today': 'Comienza tu Viaje<br>Aplica Hoy',
            'Fill out this quick application so we can better understand your situation and guide you toward renting or buying a home.': 'Completa esta aplicación rápida para que podamos entender mejor tu situación y guiarte hacia el alquiler o compra de una casa.',
            'Full Name': 'Nombre Completo',
            'Phone Number': 'Número de Teléfono',
            'Email Address': 'Dirección de Correo',
            'Current Address (optional)': 'Dirección Actual (opcional)',
            'Are you looking to:': '¿Estás buscando:',
            'Buy a Home': 'Comprar una Casa',
            'Rent a Home': 'Alquilar una Casa',
            'Not Sure Yet': 'No Estoy Seguro Aún',
            'Estimated Credit Score Range': 'Rango Estimado de Puntuación Crediticia',
            'Below 580': 'Menos de 580',
            '580-619': '580-619',
            '620-659': '620-659',
            '660-699': '660-699',
            '700-739': '700-739',
            '740-779': '740-779',
            '780+': '780+',
            'Employment Status': 'Estado de Empleo',
            'Employed Full-Time': 'Empleado Tiempo Completo',
            'Employed Part-Time': 'Empleado Tiempo Parcial',
            'Self-Employed': 'Trabajador Independiente',
            'Unemployed': 'Desempleado',
            'Retired': 'Jubilado',
            'Student': 'Estudiante',
            'Do you currently have a budget for down payment or deposit?': '¿Tienes actualmente un presupuesto para el pago inicial o depósito?',
            'Yes': 'Sí',
            'No': 'No',
            'Message / Notes': 'Mensaje / Notas',
            'Tell us more about your situation...': 'Cuéntanos más sobre tu situación...',
            'Submit': 'Enviar'
        }
    };
    
    function translatePage(lang) {
        const elements = document.querySelectorAll('[data-en][data-es]');
        elements.forEach(element => {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = translations[lang][element.getAttribute('data-en')] || element.placeholder;
            } else if (element.classList.contains('modal-title')) {
                // Special handling for modal title with HTML content
                element.innerHTML = element.getAttribute(`data-${lang}`);
            } else {
                element.textContent = translations[lang][element.getAttribute('data-en')] || element.textContent;
            }
        });
    }
    
    function toggleLanguage() {
        if (currentLang === 'en') {
            currentLang = 'es';
            ukFlag.style.display = 'block';  // Show UK flag when in Spanish (to switch to English)
            spainFlag.style.display = 'none';
            translatePage('es');
        } else {
            currentLang = 'en';
            ukFlag.style.display = 'none';
            spainFlag.style.display = 'block';  // Show Spain flag when in English (to switch to Spanish)
            translatePage('en');
        }
        
        // Save language preference to localStorage
        localStorage.setItem('preferredLanguage', currentLang);
    }
    
    // Add event listener to language toggle button
    if (langToggle) {
        langToggle.addEventListener('click', toggleLanguage);
    }
    
    // Load saved language preference
    const savedLang = localStorage.getItem('preferredLanguage');
    if (savedLang && savedLang !== 'en') {
        currentLang = savedLang;
        if (currentLang === 'es') {
            ukFlag.style.display = 'block';  // Show UK flag when in Spanish (to switch to English)
            spainFlag.style.display = 'none';
            translatePage('es');
        }
    } else {
        // Default to English, show Spain flag (to switch to Spanish)
        ukFlag.style.display = 'none';
        spainFlag.style.display = 'block';
    }
    
    // Modal Functionality
    const modal = document.getElementById('applicationModal');
    const heroButton = document.querySelector('.hero .btn-primary');
    
    // Open modal when hero button is clicked
    if (heroButton && modal) {
        heroButton.addEventListener('click', function(e) {
            e.preventDefault();
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden'; // Prevent background scrolling
        });
    }
    
    // Close modal when clicking outside of it
    if (modal) {
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                modal.style.display = 'none';
                document.body.style.overflow = 'auto'; // Restore scrolling
            }
        });
    }
    
    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal && modal.style.display === 'block') {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto'; // Restore scrolling
        }
    });
    
    // Form validation and submit button functionality
    const applicationForm = document.getElementById('applicationForm');
    const submitBtn = document.getElementById('submitBtn');
    
    // Add click handler for submit button
    if (submitBtn && applicationForm) {
        submitBtn.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Basic form validation
            const requiredFields = applicationForm.querySelectorAll('[required]');
            let isValid = true;
            
            requiredFields.forEach(field => {
                if (!field.value.trim()) {
                    isValid = false;
                    field.style.borderColor = '#dc2626';
                } else {
                    field.style.borderColor = '#e5e7eb';
                }
            });
            
            if (isValid) {
                // Submit form to Netlify
                applicationForm.submit();
            } else {
                alert('Please fill in all required fields.');
            }
        });
    }
    
    // Form submission handled by Netlify
    
    // Initialize any additional functionality
    console.log('DestinationBuyRent.com website initialized successfully!');
});
