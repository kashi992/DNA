$(document).ready(function () {
    // Event listener for box click
    $('.pricingBox').click(function () {
        // Remove active class from all boxes
        $('.pricingBox').removeClass('activeBox');
        // Add active class to the clicked box
        $(this).addClass('activeBox');
    });
});



$(document).ready(function () {
    // Get the switch element
    const switchElement = $('.switch #checkProd');

    // Get the toogleRadio element
    const toogleRadio = $('.toogleRadio');

    // Get the price elements
    const modifyPrice1 = $('#modifyPrice1');
    const modifyPrice2 = $('#modifyPrice2');
    const modifyPrice3 = $('#modifyPrice3');
    const modifyShipping = $('.modifyShipping');
    const savePrice1 = $('#savePrice1');
    const savePrice2 = $('#savePrice2');
    const savePrice3 = $('#savePrice3');

    // Add click event listener to the switch element
    switchElement.on('click', function () {
        // Toggle the class on toogleRadio element
        toogleRadio.toggleClass('activeRadio');

        // Check if the class is present on toogleRadio element
        if (toogleRadio.hasClass('activeRadio')) {
            // Update the prices
            modifyPrice1.text('$74');
            modifyPrice2.text('$64');
            modifyPrice3.text('$71');
            modifyShipping.text('+ Shipping $4.95');
            savePrice1.text('$20');
            savePrice2.text('$176');
            savePrice3.text('$84');
        } else {
            // Reset the prices to their original values
            modifyPrice1.text('$79');
            modifyPrice2.text('$63');
            modifyPrice3.text('$69');
            modifyShipping.text('Free Shipping');
            savePrice1.text('$25');
            savePrice2.text('$180');
            savePrice3.text('$90');
        }
    });
});


jQuery(document).ready(function () {
    var d = $(".productSteps").first()
    var offsets = d.position();
    var positions = offsets.top;
    jQuery(window).scroll(function () {
        var scroll = jQuery(window).scrollTop();
        if (scroll >= positions) {
            jQuery(".hurryOrder").addClass("destop-visible");
        } else {
            jQuery(".hurryOrder").removeClass("destop-visible");
        }
        $(".hurryOrder").parents().css("overflow", "visible");
    });
});


$(document).ready(function () {
    let modifyPrice1 = $('#modifyPrice1');
    let modifyPrice2 = $('#modifyPrice2');
    let modifyPrice3 = $('#modifyPrice3');
    let modifyShipping = $('.modifyShipping');
    let savePrice1 = $('#savePrice1');
    let savePrice2 = $('#savePrice2');
    let savePrice3 = $('#savePrice3');

    $(".purchaseBtn").click(function () {
        var purchaseLi = $(this).parent();

        // Remove the "activeBox" class from all purchaseLi elements
        $(".purchaseLi").removeClass("activeBox");

        // Add the "activeBox" class to the clicked purchaseLi element
        purchaseLi.addClass("activeBox");

        // Check if the first purchaseLi has the "activeBox" class
        if ($(".purchaseLi:first").hasClass('activeBox')) {
            // Update the prices for the first case
            modifyPrice1.text('$79');
            modifyPrice2.text('$63');
            modifyPrice3.text('$69');
            modifyShipping.text('Free Shipping');
            savePrice1.text('$20');
            savePrice2.text('$176');
            savePrice3.text('$84');
        } else if ($(".purchaseLi:last").hasClass('activeBox')) {
            // Update the prices for the second case
            modifyPrice1.text('$74');
            modifyPrice2.text('$64');
            modifyPrice3.text('$71');
            modifyShipping.text('+ Shipping $4.95');
            savePrice1.text('$25');
            savePrice2.text('$180');
            savePrice3.text('$90');
        }
    });
});