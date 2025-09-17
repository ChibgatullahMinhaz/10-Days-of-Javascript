const incrementButton = document.getElementById("btn");

        incrementButton.addEventListener('click', () => {
            // Get the current value from the span and convert it to an integer
            let currentValue = parseInt(incrementButton.innerText);

            // Increment the value
            currentValue++;

            // Update the span's content with the new value
            incrementButton.innerText = currentValue;
        });