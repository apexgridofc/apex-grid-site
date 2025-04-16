/**
 * Main JavaScript file for Apex Grid website
 */

document.addEventListener('DOMContentLoaded', function() {
    // Inicialização do site
    initNavigation();
    initWhatsAppButton();
    initContactForm();
    initScrollAnimations();
});

/**
 * Inicializa a navegação responsiva
 */
function initNavigation() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', function() {
            menuToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
        
        // Fechar menu ao clicar em links de navegação
        const navLinks = document.querySelectorAll('.nav-menu a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                menuToggle.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }
}

/**
 * Inicializa o botão flutuante de WhatsApp
 */
function initWhatsAppButton() {
    // O botão será adicionado via HTML/CSS
    // Esta função pode ser usada para comportamentos adicionais no futuro
}

/**
 * Inicializa o formulário de contato
 */
function initContactForm() {
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Validação básica do formulário
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            if (!name || !email || !message) {
                showFormMessage('Por favor, preencha todos os campos obrigatórios.', 'error');
                return;
            }
            
            if (!isValidEmail(email)) {
                showFormMessage('Por favor, insira um e-mail válido.', 'error');
                return;
            }
            
            // Aqui seria implementado o envio do formulário
            // Como é um exemplo, apenas mostramos uma mensagem de sucesso
            showFormMessage('Mensagem enviada com sucesso! Entraremos em contato em breve.', 'success');
            contactForm.reset();
        });
    }
}

/**
 * Verifica se um email é válido
 */
function isValidEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

/**
 * Exibe mensagem de feedback do formulário
 */
function showFormMessage(message, type) {
    const formMessage = document.querySelector('.form-message');
    
    if (formMessage) {
        formMessage.textContent = message;
        formMessage.className = 'form-message';
        formMessage.classList.add(type);
        formMessage.style.display = 'block';
        
        setTimeout(() => {
            formMessage.style.display = 'none';
        }, 5000);
    }
}

/**
 * Inicializa animações de scroll
 */
function initScrollAnimations() {
    // Animação para elementos aparecerem ao rolar a página
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    
    if (animatedElements.length > 0) {
        // Função para verificar se elemento está visível na viewport
        function isElementInViewport(el) {
            const rect = el.getBoundingClientRect();
            return (
                rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.8 &&
                rect.bottom >= 0
            );
        }
        
        // Verificar elementos visíveis ao carregar a página
        animatedElements.forEach(element => {
            if (isElementInViewport(element)) {
                element.classList.add('animated');
            }
        });
        
        // Verificar elementos visíveis ao rolar a página
        window.addEventListener('scroll', function() {
            animatedElements.forEach(element => {
                if (isElementInViewport(element) && !element.classList.contains('animated')) {
                    element.classList.add('animated');
                }
            });
        });
    }
}
