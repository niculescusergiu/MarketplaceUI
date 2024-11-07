// Sample Advertisement Data
const ads = [
    { id: 1, title: "Ad 1", description: "This is the first ad.", contact: "contact1@example.com" },
    { id: 2, title: "Ad 2", description: "This is the second ad.", contact: "contact2@example.com" },
    { id: 3, title: "Ad 3", description: "This is the third ad.", contact: "contact3@example.com" },
    { id: 4, title: "Ad 4", description: "This is the fourth ad.", contact: "contact4@example.com" },
    { id: 5, title: "Ad 5", description: "This is the fifth ad.", contact: "contact5@example.com" },
    { id: 6, title: "Ad 6", description: "This is the sixth ad.", contact: "contact6@example.com" },
  ];
  
  // Container for Ads
  const adsContainer = document.getElementById("adsContainer");
  
  // Function to Render Ads
  function renderAds(filter = "") {
    adsContainer.innerHTML = ""; // Clear existing ads
    
    // Filter ads based on title
    const filteredAds = ads.filter(ad => ad.title.toLowerCase().includes(filter.toLowerCase()));
    
    // Render each ad
    filteredAds.forEach(ad => {
      const card = document.createElement("div");
      card.className = "card text-center";
      card.innerHTML = `
        <img src="https://via.placeholder.com/150" class="card-img-top" alt="Ad Image">
        <div class="card-body">
          <h5 class="card-title">${ad.title}</h5>
          <p class="card-text">${ad.description}</p>
          <p class="card-text contact-info">Contact: ***</p>
          <button class="btn btn-primary toggle-contact">Show Contact</button>
          <button class="btn btn-info details-btn">Details</button>
        </div>
      `;
      
      // Toggle Contact Information
      const contactBtn = card.querySelector(".toggle-contact");
      const contactInfo = card.querySelector(".contact-info");
      contactBtn.addEventListener("click", () => {
        if (contactInfo.textContent === "Contact: ***") {
          contactInfo.textContent = `Contact: ${ad.contact}`;
          contactBtn.textContent = "Hide Contact";
        } else {
          contactInfo.textContent = "Contact: ***";
          contactBtn.textContent = "Show Contact";
        }
      });
      
      // Show Details Button
      const detailsBtn = card.querySelector(".details-btn");
      detailsBtn.addEventListener("click", () => {
        alert(`Ad Details:\nTitle: ${ad.title}\nDescription: ${ad.description}\nContact: ${ad.contact}`);
      });
      
      adsContainer.appendChild(card);
    });
  }
  
  // Filter Functionality
  const filterInput = document.getElementById("filterInput");
  filterInput.addEventListener("input", () => {
    renderAds(filterInput.value);
  });
  
  // Initial Render
  renderAds();
  