document.addEventListener("DOMContentLoaded", function () {
  // Predefined categories
  const categories = ["Lunch", "Dinner", "Sushi", "Desserts", "Drinks"];

  // Function to get a random category
  function getRandomCategory() {
    const randomIndex = Math.floor(Math.random() * categories.length);
    return categories[randomIndex];
  }

  // Function to set up the Specials tile
  function setupSpecialsTile() {
    const specialsTile = document.querySelector("#specials-tile");
    specialsTile.addEventListener("click", function () {
      const randomCategory = getRandomCategory();
      loadCategoryPage(randomCategory);
    });
  }

  // Function to load category page dynamically
  function loadCategoryPage(category) {
    const mainContent = document.querySelector("#main-content");
    mainContent.innerHTML = `
      <h2>Category: ${category}</h2>
      <p>Here are the items available in the ${category} menu:</p>
      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
      </ul>
      <a href="#" id="go-home">Go Back Home</a>
    `;

    // Add event listener to go back home
    document.querySelector("#go-home").addEventListener("click", loadHomePage);
  }

  // Function to load home page
  function loadHomePage() {
    const mainContent = document.querySelector("#main-content");
    mainContent.innerHTML = `
      <div class="home-page">
        <h2>Welcome to Our Restaurant</h2>
        <div class="tiles">
          <div class="tile" id="specials-tile">
            <a href="#">Specials</a>
          </div>
          <div class="tile">
            <a href="#" onclick="alert('Lunch menu coming soon!');">Lunch</a>
          </div>
          <div class="tile">
            <a href="#" onclick="alert('Dinner menu coming soon!');">Dinner</a>
          </div>
        </div>
      </div>
    `;
    setupSpecialsTile(); // Reattach the event listener for the Specials tile
  }

  // Initialize the home page
  loadHomePage();
});
