document.addEventListener('DOMContentLoaded', function() {
    // Handle dropdown toggles
    const dropdowns = document.querySelectorAll('.header_dropdown');

    dropdowns.forEach(dropdown => {
        const toggle = dropdown.querySelector('.header_dropdown-toggle');
        const list = dropdown.querySelector('.header_dropdown-list');

        toggle.addEventListener('click', function() {
            list.style.display = (list.style.display === 'block') ? 'none' : 'block';
        });
    });

    // Language change handler
    window.changeLanguage = function(language) {
        // Redirect to the corresponding language route
        const currentPath = window.location.pathname;
        const newPath = currentPath.replace(/\/(ge|eng)\//, `/${language}/`);
        window.location.href = newPath;
    };

    // Routing
    function loadView(view) {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', `/views/${view}.html`, true);
        xhr.onload = function() {
            if (xhr.status >= 200 && xhr.status < 300) {
                document.querySelector('#app').innerHTML = xhr.responseText;
            } else {
                document.querySelector('#app').innerHTML = `<p>Error loading view: ${view}</p>`;
            }
        };
        xhr.send();
    }

    // Handle routing based on hash
    function handleRouting() {
        const path = window.location.hash.substring(1); // Remove the '#' from the hash
        const view = path || 'home'; // Default to 'home' if no hash is present
        loadView(view);
    }

    // Listen for hash changes
    window.addEventListener('hashchange', handleRouting);

    // Initial load
    handleRouting();
});