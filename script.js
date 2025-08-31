// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar background on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Download button functionality
document.getElementById('downloadBtn').addEventListener('click', function(e) {
    e.preventDefault();
    
    // Show download modal or redirect to GitHub releases
    showDownloadModal();
});

function showDownloadModal() {
    // Create modal
    const modal = document.createElement('div');
    modal.className = 'download-modal';
    modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <h3><i class="fas fa-download"></i> İndirme Seçenekleri</h3>
                <button class="close-modal">&times;</button>
            </div>
            <div class="modal-body">
                <p>Programı indirmek için aşağıdaki seçeneklerden birini kullanabilirsiniz:</p>
                <div class="download-options">
                    <a href="#" class="download-option" onclick="downloadFromGitHub()">
                        <i class="fab fa-github"></i>
                        <div>
                            <h4>GitHub Releases</h4>
                            <p>En güncel sürümü GitHub'dan indirin</p>
                        </div>
                    </a>
                    <a href="#" class="download-option" onclick="downloadFromDrive()">
                        <i class="fab fa-google-drive"></i>
                        <div>
                            <h4>Google Drive</h4>
                            <p>Alternatif indirme linki</p>
                        </div>
                    </a>
                </div>
                <div class="download-info">
                    <p><i class="fas fa-info-circle"></i> Dosya boyutu: ~85MB</p>
                    <p><i class="fas fa-shield-alt"></i> Virüs taramasından geçmiş</p>
                    <p><i class="fas fa-windows"></i> Windows 10/11 uyumlu</p>
                </div>
            </div>
        </div>
    `;
    
    // Add modal styles
    const modalStyles = `
        .download-modal {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.8);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 10000;
            animation: fadeIn 0.3s ease;
        }
        
        .modal-content {
            background: white;
            border-radius: 16px;
            max-width: 500px;
            width: 90%;
            max-height: 90vh;
            overflow-y: auto;
            animation: slideUp 0.3s ease;
        }
        
        .modal-header {
            padding: 1.5rem;
            border-bottom: 1px solid #e2e8f0;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        
        .modal-header h3 {
            color: #1e293b;
            font-size: 1.25rem;
            font-weight: 600;
        }
        
        .close-modal {
            background: none;
            border: none;
            font-size: 1.5rem;
            cursor: pointer;
            color: #64748b;
            padding: 0;
            width: 30px;
            height: 30px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            transition: all 0.3s ease;
        }
        
        .close-modal:hover {
            background: #f1f5f9;
            color: #1e293b;
        }
        
        .modal-body {
            padding: 1.5rem;
        }
        
        .modal-body p {
            color: #64748b;
            margin-bottom: 1.5rem;
        }
        
        .download-options {
            display: flex;
            flex-direction: column;
            gap: 1rem;
            margin-bottom: 2rem;
        }
        
        .download-option {
            display: flex;
            align-items: center;
            gap: 1rem;
            padding: 1rem;
            border: 2px solid #e2e8f0;
            border-radius: 12px;
            text-decoration: none;
            color: #1e293b;
            transition: all 0.3s ease;
        }
        
        .download-option:hover {
            border-color: #667eea;
            background: #f8fafc;
        }
        
        .download-option i {
            font-size: 2rem;
            color: #667eea;
        }
        
        .download-option h4 {
            font-size: 1rem;
            font-weight: 600;
            margin-bottom: 0.25rem;
        }
        
        .download-option p {
            font-size: 0.85rem;
            color: #64748b;
            margin: 0;
        }
        
        .download-info {
            background: #f8fafc;
            padding: 1rem;
            border-radius: 8px;
            border-left: 4px solid #667eea;
        }
        
        .download-info p {
            margin: 0.25rem 0;
            font-size: 0.9rem;
            color: #64748b;
        }
        
        .download-info i {
            color: #667eea;
            margin-right: 0.5rem;
        }
        
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
        
        @keyframes slideUp {
            from { 
                opacity: 0;
                transform: translateY(30px);
            }
            to { 
                opacity: 1;
                transform: translateY(0);
            }
        }
    `;
    
    // Add styles to head
    const styleSheet = document.createElement('style');
    styleSheet.textContent = modalStyles;
    document.head.appendChild(styleSheet);
    
    // Add modal to body
    document.body.appendChild(modal);
    
    // Close modal functionality
    const closeBtn = modal.querySelector('.close-modal');
    closeBtn.addEventListener('click', () => {
        modal.remove();
        styleSheet.remove();
    });
    
    // Close on outside click
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.remove();
            styleSheet.remove();
        }
    });
    
    // Close on escape key
    document.addEventListener('keydown', function escapeHandler(e) {
        if (e.key === 'Escape') {
            modal.remove();
            styleSheet.remove();
            document.removeEventListener('keydown', escapeHandler);
        }
    });
}

function downloadFromGitHub() {
    // GitHub releases sayfasına yönlendir
    window.open('https://github.com/cihangir83/lesson-scheduler/releases', '_blank');
}

function downloadFromDrive() {
    // Google Drive direkt indirme linki
    window.open('https://drive.google.com/uc?export=download&id=1fEctjsM7svzqzY1ZDbJydn82KcISwmos', '_blank');
}

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.feature-card, .step, .guide-card');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s ease';
        observer.observe(el);
    });
});

// Copy to clipboard functionality for guide
function copyGuideLink() {
    const guideUrl = window.location.href + 'KULLANIM_KLAVUZU.md';
    navigator.clipboard.writeText(guideUrl).then(() => {
        showNotification('Kullanım klavuzu linki kopyalandı!');
    });
}

function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #10b981;
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
        z-index: 10001;
        animation: slideInRight 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Add notification animations
const notificationStyles = `
    @keyframes slideInRight {
        from {
            opacity: 0;
            transform: translateX(100%);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }
    
    @keyframes slideOutRight {
        from {
            opacity: 1;
            transform: translateX(0);
        }
        to {
            opacity: 0;
            transform: translateX(100%);
        }
    }
`;

const notificationStyleSheet = document.createElement('style');
notificationStyleSheet.textContent = notificationStyles;
document.head.appendChild(notificationStyleSheet);