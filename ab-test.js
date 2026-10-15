$(function () {
    const variants = {
        A: { headline: 'Furniture for the way you live', cta: 'Shop the sale' },
        B: { headline: 'Make your home feel finished', cta: 'Find your style'}
    };

    const forced = new URLSearchParams(window.location.search).get('variant');
    let variant;

    let isPreview = false;

    if (forced && (forced.toUpperCase() === 'A' || forced.toUpperCase() === 'B')) {
        variant = forced.toUpperCase();
        isPreview = true;
    } else {
        variant = localStorage.getItem('ab-variant');
        if (variant !== 'A' && variant !== 'B') {
            variant = Math.random() < 0.5 ? 'A' : 'B';
            localStorage.setItem('ab-variant', variant);
        }
    }

    $('#headline').text(variants[variant].headline);
    $('#cta').text(variants[variant].cta);

    function track(eventName) {
        if (isPreview) {
            console.log('[preview, not tracked]', eventName, variant);
            return;
        }
        console.log('[tracked]', eventName, 'variant', variant);
    }

    track('impression');

    $('#cta').on('click', function (e) {
        e.preventDefault();
        track('click');
    });
});