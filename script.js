const btn = document.getElementById('revBtn');

btn.addEventListener('click', () => {
    // Butona basınca küçük animasyon
    btn.style.transform = 'scale(0.95)';
    setTimeout(() => {
        btn.style.transform = 'scale(1)';
        // Linke yönlendirme
        window.open('https://www.mediafire.com/file/m1a5lfql56074g7/REV-BLES01807.pkg/file', '_blank');
    }, 150);
});
