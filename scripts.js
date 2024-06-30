// /* Jason SunYingjie */

document.addEventListener('DOMContentLoaded', function() {

    // Select the elements that will be used in the script
    const cartItems = document.getElementById('cart-items'); // The element where the cart items will be displayed
    const cartTotal707 = document.getElementById('cart-total'); // The element where the total price of the cart will be displayed
    const clearCartButton707 = document.getElementById('clear-cart'); // The button to clear the cart
    const checkoutButton707 = document.getElementById('checkout'); // The button to proceed to checkout
    let cart707 = []; // Initialize an empty array to store the cart items

    // Iterate over all 'add-to-cart' buttons and add click event listeners
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', function() {
            // Find the closest '.course-box' parent element of the clicked button
            const courseBox = this.closest('.course-box');
            // Get the course name from the 'h3' tag inside the '.course-box'
            const courseName = courseBox.querySelector('h3').textContent;
            // Get the course price by selecting the second 'p' tag inside the '.course-box', removing the text 'Price: $' and converting to float
            const coursePrice = parseFloat(courseBox.querySelector('p:nth-child(2)').textContent.replace('Price: $', ''));
            // Get the quantity input value as an integer
            const courseQuantity = parseInt(courseBox.querySelector('input[type=number]').value);

            // Check if the quantity is greater than 0
            if (courseQuantity > 0) {
                // Find if the cart already contains the same course
                const item707 = cart707.find(item => item.name === courseName);
                // If the course is already in the cart, increase its quantity
                if (item707) {
                    item707.quantity += courseQuantity;
                } else {
                    // If the course is not in the cart, add it to the cart array with its price and quantity
                    cart707.push({name: courseName, price: coursePrice, quantity: courseQuantity});
                }
                // Update the cart display and total price
                updateCart707();
            }
        });
    });

    function updateCart707() {
        cartItems.innerHTML = '';
        let total707 = 0;
        cart707.forEach((item707, index707) => {
            const div = document.createElement('div');
            div.textContent = `${item707.name} x ${item707.quantity}: $${item707.price * item707.quantity}`;

            const removeButton707 = document.createElement('button');
            removeButton707.textContent = 'Remove';
            removeButton707.addEventListener('click', () => {
                cart707.splice(index707, 1);
                updateCart707();
            });

            div.appendChild(removeButton707);
            cartItems.appendChild(div);

            total707 += item707.price * item707.quantity;
        });
        cartTotal707.textContent = `Total prices: $${total707.toFixed(2)}`;
    }

    clearCartButton707.addEventListener('click', function() {
        cart707 = [];
        updateCart707();
    });

    checkoutButton707.addEventListener('click', function() {
        alert('Go to checkout page');
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const registerForm707 = document.getElementById('registerForm');
    const loginForm707 = document.getElementById('loginForm');
    const switchToRegister707 = document.getElementById('switchToRegister');
    const switchToLogin707 = document.getElementById('switchToLogin');
    const goToAbout707 = document.getElementById('goToAbout');

    switchToRegister707.addEventListener('click', function() {
        registerForm707.classList.remove('hidden');
        loginForm707.classList.add('hidden');
        switchToRegister707.classList.add('hidden');
        switchToLogin707.classList.remove('hidden');
    });

    switchToLogin707.addEventListener('click', function() {
        registerForm707.classList.add('hidden');
        loginForm707.classList.remove('hidden');
        switchToRegister707.classList.remove('hidden');
        switchToLogin707.classList.add('hidden');
    });

    registerForm707.addEventListener('submit', function(e) {
        e.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);
        alert('Registration successful!');
        switchToLogin707.click();
    });

    loginForm707.addEventListener('submit', function(e) {
        e.preventDefault();
        const username = document.getElementById('loginUsername').value;
        const password = document.getElementById('loginPassword').value;
        if (localStorage.getItem('username') === username && localStorage.getItem('password') === password) {
            alert('Login successful!');
            goToAbout707.href = 'courses.html';
            goToAbout707.click();
        } else {
            alert('Invalid username or password.');
        }
    });
});