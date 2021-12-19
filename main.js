// type it plugin configuration 

$(document).ready(function () {

    new TypeIt('#textContainer', {
        loop: true,
        loopDelay: 50
    }).type('something to type', "hello world")
        .delete()
        .options({ speed: 100, deleteSpeed: 100 })
        .go()
});
// typed plugin configuration
$(document).ready(function () {
    var typed = new Typed('.container', {

        strings: [
            'These are the default values...',
            'You know what you should do?',
            'Use your own!',
            'Have a great day!'
        ],
        stringsElement: null,
        typeSpeed: 50,
        startDelay: 0,
        backSpeed: 20,
        loop: true,


    });

    typed.start();

});

console.log("hello");