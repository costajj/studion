$(document).ready(() => {
    const slickOptions = {
        autoplay: true,
        dots: false,
        prevArrow: '<button type="button" class="slick-prev slider__prev-arrow">Previous</button>;',
        nextArrow: '<button type="button" class="slick-next slider__next-arrow">Next</button>;',
    };
    $('.slider').slick(slickOptions);

$('.footer__form-button').on('click', () => {
    const email = $('#email').val; 
    Email.send ({
        Host: "smtp.yoursip.com",
        Username: "username",
        Password: "password",
        To: "contact@studion.com",
        From: email,
        Subject: "Please add me to the newsletter",
        Body: `Hi, I would like to be added to the newsletter.
        My address is ${email}.
        Obrigado!
        `,
    }).then(
        (message) => alert(message),
    );

    });
});