// Tab functionality
const tabBtns = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class from all buttons and contents
        tabBtns.forEach(b => b.classList.remove('active', 'text-green-700', 'border-green-700'));
        tabContents.forEach(c => c.classList.remove('active'));

        // Add active class to clicked button and corresponding content
        btn.classList.add('active', 'text-green-700', 'border-green-700');
        const tabId = btn.getAttribute('data-tab');
        document.getElementById(tabId).classList.add('active');
    });
});

// Accordion functionality
const accordionBtns = document.querySelectorAll('.accordion-btn');

accordionBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const accordionContent = btn.nextElementSibling;
        const icon = btn.querySelector('i.fa-chevron-down');

        // Toggle accordion content
        if (accordionContent.style.maxHeight) {
            accordionContent.style.maxHeight = null;
            icon.style.transform = 'rotate(0deg)';
        } else {
            accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
            icon.style.transform = 'rotate(180deg)';
        }
    });
});