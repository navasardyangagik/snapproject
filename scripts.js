/**
 * Data Catalog Project Starter Code - SEA Stage 2
 *
 * This file is where you should be doing most of your work. You should
 * also make changes to the HTML and CSS files, but we want you to prioritize
 * demonstrating your understanding of data structures, and you'll do that
 * with the JavaScript code you write in this file.
 *
 * The comments in this file are only to help you learn how the starter code
 * works. The instructions for the project are in the README. That said, here
 * are the three things you should do first to learn about the starter code:
 * - 1 - Change something small in index.html or style.css, then reload your
 *    browser and make sure you can see that change.
 * - 2 - On your browser, right click anywhere on the page and select
 *    "Inspect" to open the browser developer tools. Then, go to the "console"
 *    tab in the new window that opened up. This console is where you will see
 *    JavaScript errors and logs, which is extremely helpful for debugging.
 *    (These instructions assume you're using Chrome, opening developer tools
 *    may be different on other browsers. We suggest using Chrome.)
 * - 3 - Add another string to the titles array a few lines down. Reload your
 *    browser and observe what happens. You should see a fourth "card" appear
 *    with the string you added to the array, but a broken image.
 *
 */

// Aray consisting of various objects for my data (cards).
let runwayCards = [
  {
    brand_name: 'Ann Demeulemeester',
    look_images: [
      './images/annd/annd3.webp', 
      './images/annd/annd5.webp',
      './images/annd/annd10.webp',
      './images/annd/annd16.webp',
      './images/annd/annd30.webp'
    ],
    season: 'F/W 25 Ready-to-Wear',
    creative_director: 'Stefano Gallici',
    runway_date: '2025-03-08'
  },
  {
    brand_name: 'Maison Margiela',
    look_images: [
      './images/margiela/mm1.webp', 
      './images/margiela/mm8.webp',
      './images/margiela/mm11.webp',
      './images/margiela/mm19.webp',
      './images/margiela/mm21.webp'
    ],
    season: 'Fall 22 Couture',
    creative_director: 'John Galliano',
    runway_date: '2022-07-07'
  },
  {
    brand_name: 'Enfants Riches Déprimés',
    look_images: [
      './images/erd/erd2.webp', 
      './images/erd/erd11.webp',
      './images/erd/erd23.webp',
      './images/erd/erd31.webp',
      './images/erd/erd37.webp'
    ],
    season: 'Fall 25 Ready-to-Wear',
    creative_director: 'Henri Alexander Levy',
    runway_date: '2025-03-10'
  },
  {
    brand_name: 'Ralph Lauren',
    look_images: [
      './images/ralphlauren/ralph3.webp', 
      './images/ralphlauren/ralph13.webp',
      './images/ralphlauren/ralph14.webp',
      './images/ralphlauren/ralph24.webp',
      './images/ralphlauren/ralph35.webp'
    ],
    season: 'S/S 17 Ready-to-Wear',
    creative_director: 'Ralph Lauren',
    runway_date: '2017-02-15'
  },
  {
    brand_name: 'Saint Laurent',
    look_images: [
      './images/saintlaurent/ysl11.webp', 
      './images/saintlaurent/ysl22.webp',
      './images/saintlaurent/ysl37.webp',
      './images/saintlaurent/ysl41.webp',
      './images/saintlaurent/ysl50.webp'
    ],
    season: 'Fall 2014 Ready-to-Wear',
    creative_director: 'Hedi Slimane',
    runway_date: '2014-03-02' 
  },
  {
    brand_name: 'Rick Owens',
    look_images: [
      './images/rickowens/rick2.webp', 
      './images/rickowens/rick16.webp',
      './images/rickowens/rick18.webp',
      './images/rickowens/rick22.webp',
      './images/rickowens/rick25.webp'
    ],
    season: 'Spring 23 Menswear',
    creative_director: 'Rick Owens',
    runway_date: '2023-06-23'
  },
  {
    brand_name: 'Miu Miu',
    look_images: [
      './images/miumiu/miumiu1.webp',
      './images/miumiu/miumiu19.webp',
      './images/miumiu/miumiu26.webp',
      './images/miumiu/miumiu43.webp',
      './images/miumiu/miumiu48.webp'
    ],
    season: 'Spring 2022 Ready-to-Wear',
    creative_director: 'Miuccia Prada',
    runway_date: '2021-10-05'
  },
  {
    brand_name: 'Christian Dior',
    look_images: [
      './images/christiandior/cd2.webp',
      './images/christiandior/cd15.webp',
      './images/christiandior/cd20.webp',
      './images/christiandior/cd31.webp',
      './images/christiandior/cd40.webp'
    ],
    season: 'Fall 2011 Ready-to-Wear',
    creative_director: 'John Galliano',
    runway_date: '2011-03-03'
  },
  {
    brand_name: 'Yohji Yamamoto',
    look_images: [
      './images/yohji/yohji1.webp',
      './images/yohji/yohji9.webp',
      './images/yohji/yohji21.webp',
      './images/yohji/yohji25.webp',
      './images/yohji/yohji32.webp'
    ],
    season: 'Fall 2020 Menswear',
    creative_director: 'Yohji Yamamoto',
    runway_date: '2020-01-16'
  }
];

// This function adds cards the page to display the data in the array
function showCards() {
  const cardContainer = document.getElementById("card-container");
  cardContainer.innerHTML = "";
  const templateCard = document.querySelector(".card");

  for (let i = 0; i < runwayCards.length; i++) {
    const cardData = runwayCards[i];
    let brand_name = cardData.brand_name;
    let season = cardData.season;
    let creative_director = cardData.creative_director;
    let images = cardData.look_images;

    const nextCard = templateCard.cloneNode(true);

    nextCard.querySelector(".close-btn").addEventListener("click", () => {
      nextCard.remove();
      const indexToRemove = runwayCards.findIndex(card => card.brand_name === brand_name);
      if (indexToRemove !== -1) {
        runwayCards.splice(indexToRemove, 1);
      }
    });

    

    editCardContent(nextCard, brand_name, images, season, creative_director); // Edit title and image
    cardContainer.appendChild(nextCard); // Add new card to the container
  }
}

function editCardContent(card, new_brand, new_images, new_season, new_CD, new_date) {
  card.style.display = "block";

  const cardBrand = card.querySelector("h2");
  cardBrand.textContent = new_brand;

  const slider = card.querySelector(".slider");
  const sliderNav = card.querySelector(".slider-nav");

  slider.innerHTML = "";
  sliderNav.innerHTML = "";

  const maxImages = Math.min(new_images.length, 5);

  for (let i = 0; i < maxImages; i++) {
    const img = document.createElement("img");
    img.classList.add("card-img");
    img.src = new_images[i] || "";
    img.alt = `${new_brand} Runway Look`;
    img.id = `slide-${i + 1}`;

    slider.appendChild(img);

    const dot = document.createElement("a");
    dot.href = `#slide-${i + 1}`;
    sliderNav.appendChild(dot);
  }

  const slideImgs = card.querySelectorAll(".card-img");
  slideImgs.forEach((img, index) => {
    img.src = new_images[index] || "";
    img.alt = `${new_brand} Runway Look`;
  });

  const cardSeason = card.querySelector(".card-season");
  cardSeason.textContent = new_season;

  const cardCD = card.querySelector(".card-designer");
  cardCD.textContent = "Director: " + new_CD;

  // You can use console.log to help you debug!
  // View the output by right clicking on your website,
  // select "Inspect", then click on the "Console" tab
  console.log("new card:", new_brand, "- html: ", card);
}

// Sorting Functions

// Sort by oldest first
function sortByOldest(cards) {
  for (let i = 0; i < cards.length - 1; i++) {
    for (let j = 0; j < cards.length - i - 1; j++) {
      if (cards[j].runway_date > cards[j+1].runway_date) {
        let temp = cards[j];
        cards[j] = cards[j+1];
        cards[j+1] = temp;
      }
    }
  }
  return cards;
}

// Sort by newest first
function sortByNewest(cards) {
  for (let i  = 0; i < cards.length - 1; i++) {
    for (let j = 0; j < cards.length - i - 1; j++) {
      if (cards[j].runway_date < cards[j+1].runway_date) {
        let temp = cards[j]
        cards[j] = cards[j+1];
        cards[j+1] = temp;
      }
    }
  }
  return cards;
}

// Sort by brand name (alphabetical order) 
function sortByName(cards) {
  for (let i  = 0; i < cards.length - 1; i++) {
    for (let j = 0; j < cards.length - i - 1; j++) {
      if (cards[j].brand_name > cards[j+1].brand_name) {
        let temp = cards[j]
        cards[j] = cards[j+1];
        cards[j+1] = temp;
      }
    }
  }
  return cards;
}

// Function to handle JS for cards sliders and dots
function slidersAndDots() {
  const cards = document.querySelectorAll(".card");

  cards.forEach(card => {
    const slider = card.querySelector(".slider");
    const leftArrow = card.querySelector(".arrow-left");
    const rightArrow = card.querySelector(".arrow-right");
    const dots = card.querySelectorAll(".slider-nav a");

    const slideWidth = slider.offsetWidth;

    leftArrow.addEventListener("click", () => {
      slider.scrollBy({
        left: -slideWidth,
        behavior: "smooth"
      });
    });

    rightArrow.addEventListener("click", () => {
      slider.scrollBy({
        left: slideWidth,
        behavior: "smooth"
      });
    });

    function updateActiveDot() {
      const scrollLeft = slider.scrollLeft;
      const index = Math.round(scrollLeft / slideWidth);
      dots.forEach((dot, i) => {
        dot.classList.toggle("active", i === index);
      });
    }

    slider.addEventListener("scroll", () => {
      window.requestAnimationFrame(updateActiveDot);
    });

    dots.forEach((dot, index) => {
      dot.addEventListener("click", (e) => {
        e.preventDefault();
        slider.scrollTo({
          left: slideWidth * index,
          behavior: "smooth"
        });
      });
    });

    updateActiveDot();
  });
}


document.addEventListener("DOMContentLoaded", () => {
  showCards();
  
  const filterByOldest = document.getElementById('oldest-filter');
  filterByOldest.addEventListener('click', function () {
    runwayCards = sortByOldest(runwayCards);
    showCards();
    slidersAndDots()
  });

  const filterByNewest = document.getElementById('newest-filter');
  filterByNewest.addEventListener('click', function () {
    runwayCards = sortByNewest(runwayCards);
    showCards();
    slidersAndDots()
  });

  const filterByName = document.getElementById('brand-filter');
  filterByName.addEventListener('click', function () {
    runwayCards = sortByName(runwayCards);
    showCards();
    slidersAndDots()
  });

  const addCard = document.getElementById("add-card");
  addCard.addEventListener('click', function () {
    if (document.getElementById('card-form')) return;

    const form = document.createElement("form");
    form.id = "card-form";
    form.innerHTML = `
      <div class="form-overlay">
        <div class="form-popup">
          <label>Brand Name:<br><input class="form-brand" type="text" placeholder="e.g. Rick Owens" name="brand_name" required></label><br>
          <label>Season:<br><input class="form-season" type="text" placeholder="e.g. Fall 2023 Menswear" name="season" required></label><br>
          <label>Creative Director:<br><input class="form-cd" type="text" placeholder="e.g. Rick Owens" name="creative_director" required></label><br>
          <label>Runway Date:<br><input class="form-date" type="date" name="runway_date" required></label><br>
          <input class="choose-file" id="image-upload" type="file" name="look_images" accept="image/*" multiple style="display: none;" required>
          <label for="image-upload" class="custom-upload-btn">Upload Images</label>
          <div id="image-count-msg">No images attached</div>
          <button type="submit" class="submit-btn">Add Runway Card</button>
          <button type="button" class="cancel-btn" id="cancel-form">Cancel</button>
        </div>
      </div>
    `;

    document.body.appendChild(form);
    
    const lookImagesInput = form.querySelector("#image-upload");
    const imageCountMsg = form.querySelector("#image-count-msg");

    lookImagesInput.addEventListener('change', function () {
      const files = lookImagesInput.files;
      if (files.length > 0) {
        imageCountMsg.textContent = `${files.length} Image${files.length > 1 ? 's' : ''} Attatched`;
      }
    });

    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const formData = new FormData(form);
      const files = formData.getAll("look_images");
      const lookImagesInput = form.querySelector('input[name="look_images"]');
      const lookImageURLs = Array.from(lookImagesInput.files).map(file => URL.createObjectURL(file));
      

      const newCard = {
        brand_name: formData.get("brand_name"),
        season: formData.get("season"),
        creative_director: formData.get("creative_director"),
        runway_date: formData.get("runway_date"),
        look_images: lookImageURLs
      };
      runwayCards.push(newCard);

      showCards();
      slidersAndDots();
      form.remove();
    });

    form.querySelector("#cancel-form").addEventListener("click", () => {
      form.remove();
    });
  });

  const searchInput = document.getElementById('search-input');

  if (searchInput) {
    searchInput.addEventListener('input', function () {
      const search_query = this.value.toLowerCase();
      const runway_cards = document.querySelectorAll('#card-container .card');

      runway_cards.forEach(card => {
        const brandName = card.querySelector('h2').textContent.toLowerCase();
        card.style.display = brandName.includes(search_query) ? 'block' : 'none';
      });
    });
  }
  slidersAndDots()
});