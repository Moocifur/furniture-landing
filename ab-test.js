$(function () {
    const variants = {
        A: { headline: 'Furniture for the way you live', cta: 'Shop the sale' },
        B: { headline: 'Make your home feel finished', cta: 'Find your style'}
    };

    const forced = new URLSearchParams(window.location.search).get('variant');
    let variant;

    if (forced && (forced.toUpperCase() === 'A' || forced.toUpperCase() === 'B')) {
        variant = forced.toUpperCase();
    } else {
        variant = localStorage.getItem('ab-variant');
        if (variant !== 'A' && variant !== 'B') {
            variant = Math.random() < 0.5 ? 'A' : 'B';
            localStorage.setItem('ab-variant', variant);
        }
    }

    $('#headline').text(variants[variant].headline);
    $('#cta').text(variants[variant].cta);
});