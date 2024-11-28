window.addEventListener('load', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const choice = urlParams.get('choice');
    
    setTimeout(function() {
        if (choice === 'good') {
            window.location.href = 'beach_subscenery_good.html';
        } else if (choice === 'bad') {
            window.location.href = 'beach_subscenery_bad.html';
        }
    }, 3000);
});