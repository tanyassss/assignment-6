document.getElementById('fetchData').addEventListener('click', () => {
    const dataDiv = document.getElementById('data');
    dataDiv.textContent = 'Fetching data...'; // Displaying loading message

    // Example API: Dog API for fetching random dog images
    const apiUrl = 'https://dog.ceo/api/breeds/image/random';

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok.');
            }
            return response.json();
        })
        .then(data => {
            const imageUrl = data.message;
            dataDiv.innerHTML = `<img src="${imageUrl}" alt="Random Dog" style="max-width: 100%; height: auto;">`;
        })
        .catch(error => {
            dataDiv.textContent = `Error: ${error.message}`;
        });
});
