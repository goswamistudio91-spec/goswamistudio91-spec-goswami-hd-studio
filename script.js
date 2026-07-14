// Goswami HD Studio Website

// Smooth Scroll

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener('click', function(e){

        e.preventDefault();

        document.querySelector(this.getAttribute('href'))
        .scrollIntoView({
            behavior:'smooth'
        });

    });

});


// Welcome Message

console.log("Welcome to Goswami HD Studio Rawatsar");