export default function ProductOverviewView() {
    // Create a container for the view
    const container = document.createElement('div');
    container.classList.add('view-container');

    // Add content to the view
    container.innerHTML = `
        <h1>Product Overview</h1>
        <p>Welcome to the product overview page. Here you can find information about our products.</p>
        <!-- More content and HTML elements -->
    `;

    // Return the container
    return container;
}