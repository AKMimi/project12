const toggles = document.querySelectorAll('.faq-toggle');

toggles.forEach(toggle => {
    toggle.addEventListener('clcik', () => {
        toggle.parentNode.classList.toggle('active')
    })
})