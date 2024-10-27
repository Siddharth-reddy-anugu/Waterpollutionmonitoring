document.getElementById('river-report-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Getting input values
    const riverName = document.getElementById('riverName').value;
    const riverDetails = document.getElementById('riverDetails').value;
    const riverImage = document.getElementById('riverImage').files[0];

    // Create a unique image URL from the uploaded file
    const reader = new FileReader();
    reader.onload = function(e) {
        const imgURL = e.target.result;

        // Creating a new block for the report
        const reportBlock = document.createElement('div');
        reportBlock.classList.add('report-block');

        // Creating the image element
        const imgElement = document.createElement('img');
        imgElement.src = imgURL;
        imgElement.classList.add('report-image');

        // Creating the details section
        const detailsDiv = document.createElement('div');
        detailsDiv.classList.add('report-details');

        const titleElement = document.createElement('h3');
        titleElement.classList.add('report-title');
        titleElement.innerText = riverName;

        const detailsElement = document.createElement('p');
        detailsElement.innerText = riverDetails;

        detailsDiv.appendChild(titleElement);
        detailsDiv.appendChild(detailsElement);

        // Appending the image and details to the block
        reportBlock.appendChild(imgElement);
        reportBlock.appendChild(detailsDiv);

        // Adding the report block to the community grid
        document.getElementById('communityGrid').appendChild(reportBlock);
    };

    reader.readAsDataURL(riverImage);

    // Clear the form after submission
    document.getElementById('river-report-form').reset();
});