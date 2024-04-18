document.addEventListener('DOMContentLoaded', function() {
    const sidebar = document.getElementById('sidebar');
    const main = document.getElementById('main');
    const closeButton = document.querySelector('.close-button');
    const hamburger = document.querySelector('.hamburger');
    const categoryContainer = document.getElementById('categoryContainer');

    const categories = [
        { id: "GXX", description: "Guitars", page: "guitar.html" },
        { id: "DRXX", description: "Drums", page: "drums.html" },
        { id: "VIXX", description: "Violin", page: "violin.html" },
        { id: "KYXX", description: "Keyboard", page: "keyboard.html" },
        { id: "ACXX", description: "Accessories", page: "accessories.html" }
    ];

    function toggleMenu() {
        sidebar.classList.toggle('active');
        main.style.opacity = sidebar.classList.contains('active') ? '0.5' : '1';
    }

    function closeSidebar() {
        sidebar.classList.remove('active');
        main.style.opacity = '1';
    }

    function populateCategories() {
        categories.forEach(category => {
            const li = document.createElement('li');
            const link = document.createElement('a');
            link.href = category.page;
            link.textContent = category.description;
            li.appendChild(link);
            categoryContainer.appendChild(li);
        });

        const contactLi = document.createElement('li');
    const contactLink = document.createElement('a');
    contactLink.href = 'contactUs.html'; 
    contactLink.textContent = 'Contact Us';
    contactLi.appendChild(contactLink);
    categoryContainer.appendChild(contactLi)
    }

    hamburger.addEventListener('click', toggleMenu);
    closeButton.addEventListener('click', closeSidebar);
    main.addEventListener('click', function(event) {
        if (event.target === main && sidebar.classList.contains('active')) {
            closeSidebar();
        }
    });

    populateCategories();
});

const productCards = document.querySelectorAll('#BX .product-card');

//BX CARDS
productCards.forEach(card => {
    card.addEventListener('click', () => {
        const productName = card.querySelector('p').textContent.trim().toLowerCase();
        window.location.href = productName + '.html';
    });
});





