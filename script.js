$(function () {
    $.getJSON('products.json', function (products) {
        $.each(products, function (i, p) {
            $('#products').append(`
                <div class="col-12 col-md-4">
                    <div class="card h-100">
                        <img src="${p.image}" class="card-img-top img-fluid" alt="${p.alt}" width="600" height="400" loading="lazy">
                        <div class="card-body">
                            <h3 class="card-title h5">${p.name}</h3>
                            <p class="card-text">$${p.price}</p>
                            <a href="#" class="btn btn-outline-primary">View</a>
                        </div>
                    </div>
                </div>`);
        });
    });
});