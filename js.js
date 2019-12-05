$(".block").click(function (event) {
    event.preventDefault();
    var id = $(this).attr("id");
    switch (id) {
        case '1':
            document.location.href = 'CombinedCargo-1.html';
            break;
        case '2':
            document.location.href = 'VD-Complex-2.html';
            break;
        case '3':
            document.location.href = 'Loads-Belarus-3.html';
            break;
        case '4':
            document.location.href = 'Certification-4.html';
            break;
        case '5':
            document.location.href = 'International-Transportation-5.html';
            break;
        case '6':
            document.location.href = 'Cargo-Insurance-6.html';
            break;
        case '7':
            document.location.href = 'Financial-Services-7.html';
            break;
    }
});

$('.request').click(function (event) {
    event.preventDefault();

    $('.request-form').toggle();

});