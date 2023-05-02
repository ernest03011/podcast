// Testing data

const data = [
  {
    name: "The Power of Now",
    category: "Self-Help",
    language: "English",
    host: "Eckhart Tolle",
    description: "A guide to spiritual enlightenment",
    isLocal: true,
    platform: {
      spotify: "https://open.spotify.com/show/5tANnwwtEUgtCxiFCvI0ow",
      youtube: "https://www.youtube.com/watch?v=QSsWn9AMbgk",
      itunes:
        "https://podcasts.apple.com/us/podcast/the-power-of-now-a-guide-to-spiritual-enlightenment/id1369812815",
    },
  },
  {
    name: "La Casa de Papel",
    category: "TV Show",
    language: "Spanish",
    host: "Álex Pina",
    description:
      "A group of robbers attempt to execute the most perfect robbery in Spanish history",
    isLocal: true,
    platform: {
      spotify: "https://open.spotify.com/show/4IUztB2q3ZwfzvSCd2S8bh",
      youtube: "https://www.youtube.com/watch?v=To_kVMMu-Ls",
      itunes:
        "https://podcasts.apple.com/us/podcast/la-casa-de-papel-podcast/id1479721871",
    },
  },
  {
    name: "Serial",
    category: "True Crime",
    language: "English",
    host: "Sarah Koenig",
    description: "A nonfiction investigation into a murder case in Baltimore",
    isLocal: false,
    platform: {
      spotify: "https://open.spotify.com/show/7Fj5wCx1zIvGAjiD8n0B5X",
      youtube: "https://www.youtube.com/watch?v=lfQ2HEupd1w",
      itunes: "https://podcasts.apple.com/us/podcast/serial/id917918570",
    },
  },
  {
    name: "The Power of Now",
    category: "Self-Help",
    language: "English",
    host: "Eckhart Tolle",
    description: "A guide to spiritual enlightenment",
    isLocal: true,
    platform: {
      spotify: "https://open.spotify.com/show/5tANnwwtEUgtCxiFCvI0ow",
      youtube: "https://www.youtube.com/watch?v=QSsWn9AMbgk",
      itunes:
        "https://podcasts.apple.com/us/podcast/the-power-of-now-a-guide-to-spiritual-enlightenment/id1369812815",
    },
  },
  {
    name: "La Casa de Papel",
    category: "TV Show",
    language: "Spanish",
    host: "Álex Pina",
    description:
      "A group of robbers attempt to execute the most perfect robbery in Spanish history",
    isLocal: false,
    platform: {
      spotify: "https://open.spotify.com/show/4IUztB2q3ZwfzvSCd2S8bh",
      youtube: "https://www.youtube.com/watch?v=To_kVMMu-Ls",
      itunes:
        "https://podcasts.apple.com/us/podcast/la-casa-de-papel-podcast/id1479721871",
    },
  },
  {
    name: "Serial",
    category: "True Crime",
    language: "English",
    host: "Sarah Koenig",
    description: "A nonfiction investigation into a murder case in Baltimore",
    isLocal: false,
    platform: {
      spotify: "https://open.spotify.com/show/7Fj5wCx1zIvGAjiD8n0B5X",
      youtube: "https://www.youtube.com/watch?v=lfQ2HEupd1w",
      itunes: "https://podcasts.apple.com/us/podcast/serial/id917918570",
    },
  },
  {
    name: "Just Kidding",
    category: "Health",
    language: "Spanish",
    host: "Kidding",
    description: "This is a test, you know what I mean. ",
    isLocal: true,
    platform: {
      spotify: "https://open.spotify.com/show/5tANnwwtEUgtCxiFCvI0ow",
      youtube: "https://www.youtube.com/watch?v=QSsWn9AMbgk",
      itunes:
        "https://podcasts.apple.com/us/podcast/the-power-of-now-a-guide-to-spiritual-enlightenment/id1369812815",
    },
  },
  {
    name: "Just Kidding x2",
    category: "Random",
    language: "Spanish",
    host: "Kidding",
    description: "This is a test, you know what I mean. ",
    isLocal: false,
    platform: {
      spotify: "https://open.spotify.com/show/5tANnwwtEUgtCxiFCvI0ow",
      youtube: "https://www.youtube.com/watch?v=QSsWn9AMbgk",
      itunes:
        "https://podcasts.apple.com/us/podcast/the-power-of-now-a-guide-to-spiritual-enlightenment/id1369812815",
    },
  },
  {
    name: "Just Kidding x3",
    category: "Ted Talk",
    language: "Spanish",
    host: "Kidding",
    description: "This is a test, you know what I mean. ",
    isLocal: false,
    platform: {
      spotify: "https://open.spotify.com/show/5tANnwwtEUgtCxiFCvI0ow",
      youtube: "https://www.youtube.com/watch?v=QSsWn9AMbgk",
      itunes:
        "https://podcasts.apple.com/us/podcast/the-power-of-now-a-guide-to-spiritual-enlightenment/id1369812815",
    },
  },
];

// ******* SETUP *********

// ******* SELECT ITEMS *******

const containerBtns = document.querySelector(".container__btns");
const menu = document.getElementById("menu");

// ******* EVENT LISTENERS *********

// ******* FUNCTIONS *********

const getPodcast = (podcasts) => {
  podcasts.forEach((podcast) => {
    const newPodcast = document.createElement("article");
    newPodcast.classList.add("menu__content");

    newPodcast.innerHTML = `
  
    <picture class="menu__content-image flex">
      <img class="card-image" src="https://picsum.photos/id/96/150" alt="One of the images" srcset="https://picsum.photos/id/96/200">
    </picture>

    <h3 class="menu__content-title flex">${podcast.name}</h2>

    <div class="menu__content-description flex">

      <dl >
        <dt>Nombre: ${podcast.name}</dt>
        <dt>Categoria: ${podcast.category}</dt>
        <dt>Host: ${podcast.host}</dt>
        <dt>Descripcion: ${podcast.description}</dt>
        <dt>Idioma: ${podcast.language}</dt>
        <dt class="menu__content-icons">Plataforma:

          <svg 
            role="img" viewBox="0 0 26 24" aria-label="Spotify" height="32" preserveAspectRatio="xMidYMid meet" focusable="false" class="icons-platform" data-id="spotify">
            <title>Spotify</title>
            <a href="${podcast.platform.spotify}">
            
              <path 
                d="M18.616 10.639c-3.77-2.297-9.99-2.509-13.59-1.388a1.077 1.077 0 0 1-1.164-.363 1.14 1.14 0 0 1-.119-1.237c.136-.262.37-.46.648-.548 4.132-1.287 11-1.038 15.342 1.605a1.138 1.138 0 0 1 .099 1.863 1.081 1.081 0 0 1-.813.213c-.142-.02-.28-.07-.403-.145Zm-.124 3.402a.915.915 0 0 1-.563.42.894.894 0 0 1-.69-.112c-3.144-1.983-7.937-2.557-11.657-1.398a.898.898 0 0 1-.971-.303.952.952 0 0 1-.098-1.03.929.929 0 0 1 .54-.458c4.248-1.323 9.53-.682 13.14 1.595a.95.95 0 0 1 .3 1.286Zm-1.43 3.267a.73.73 0 0 1-.45.338.712.712 0 0 1-.553-.089c-2.748-1.722-6.204-2.111-10.276-1.156a.718.718 0 0 1-.758-.298.745.745 0 0 1-.115-.265.757.757 0 0 1 .092-.563.737.737 0 0 1 .457-.333c4.455-1.045 8.277-.595 11.361 1.338a.762.762 0 0 1 .241 1.028ZM11.696 0C5.237 0 0 5.373 0 12c0 6.628 5.236 12 11.697 12 6.46 0 11.698-5.372 11.698-12 0-6.627-5.238-12-11.699-12h.001Zm20.126 11.078c-2.019-.494-2.379-.84-2.379-1.57 0-.688.633-1.151 1.572-1.151.91 0 1.814.352 2.76 1.076a.131.131 0 0 0 .187-.03l.987-1.426a.139.139 0 0 0-.025-.185c-1.127-.928-2.396-1.378-3.88-1.378-2.18 0-3.703 1.342-3.703 3.263 0 2.06 1.315 2.788 3.585 3.352 1.932.457 2.258.84 2.258 1.524 0 .757-.659 1.229-1.72 1.229-1.18 0-2.141-.408-3.216-1.364a.13.13 0 0 0-.188.016l-1.106 1.35a.137.137 0 0 0 .013.188c1.252 1.147 2.79 1.752 4.451 1.752 2.35 0 3.869-1.317 3.869-3.356 0-1.723-1.003-2.676-3.465-3.29Zm10.487 2.31c0 1.454-.874 2.47-2.125 2.47-1.235 0-2.169-1.061-2.169-2.47 0-1.41.933-2.47 2.17-2.47 1.23 0 2.124 1.038 2.124 2.47Zm-1.706-4.354c-1.018 0-1.854.412-2.543 1.256v-.95a.136.136 0 0 0-.038-.095.132.132 0 0 0-.093-.04h-1.81a.131.131 0 0 0-.093.04.136.136 0 0 0-.039.096v10.546c0 .076.06.137.133.137h1.809a.132.132 0 0 0 .093-.041.136.136 0 0 0 .038-.096v-3.329c.69.794 1.525 1.18 2.543 1.18 1.893 0 3.808-1.494 3.808-4.35 0-2.858-1.915-4.354-3.808-4.354Zm8.72 6.839c-1.297 0-2.274-1.068-2.274-2.486 0-1.422.943-2.455 2.244-2.455 1.305 0 2.288 1.069 2.288 2.487 0 1.422-.949 2.454-2.258 2.454Zm0-6.838c-2.438 0-4.347 1.926-4.347 4.383 0 2.432 1.896 4.338 4.317 4.338 2.445 0 4.36-1.92 4.36-4.369 0-2.44-1.901-4.353-4.33-4.353Zm9.535.17h-1.99V7.117a.136.136 0 0 0-.08-.126.13.13 0 0 0-.052-.01h-1.809a.133.133 0 0 0-.093.04.136.136 0 0 0-.038.095v2.087h-.87a.131.131 0 0 0-.122.085.139.139 0 0 0-.01.052v1.595c0 .074.06.135.132.135h.87v4.126c0 1.667.809 2.513 2.404 2.513.648 0 1.186-.138 1.694-.434a.135.135 0 0 0 .067-.117V15.64a.137.137 0 0 0-.063-.115.13.13 0 0 0-.129-.006c-.349.18-.685.263-1.061.263-.58 0-.84-.271-.84-.876V11.07h1.99a.13.13 0 0 0 .094-.04.136.136 0 0 0 .039-.096V9.339a.137.137 0 0 0-.039-.096.132.132 0 0 0-.094-.04v.001Zm6.934.007v-.255c0-.755.281-1.092.914-1.092.376 0 .68.077 1.019.194a.13.13 0 0 0 .118-.02.135.135 0 0 0 .056-.11V6.365a.137.137 0 0 0-.026-.081.133.133 0 0 0-.068-.05 4.852 4.852 0 0 0-1.502-.22c-1.67 0-2.554.965-2.554 2.788v.393h-.87a.132.132 0 0 0-.093.04.136.136 0 0 0-.038.096v1.603c0 .075.059.136.132.136h.87v6.364c0 .075.058.135.131.135h1.809c.072 0 .131-.06.131-.135V11.07h1.69l2.586 6.362c-.294.669-.583.802-.977.802-.319 0-.654-.098-.998-.29a.133.133 0 0 0-.105-.01.135.135 0 0 0-.078.072l-.612 1.38a.137.137 0 0 0 .056.175 3.733 3.733 0 0 0 1.932.508c1.334 0 2.073-.638 2.724-2.355l3.137-8.317a.14.14 0 0 0-.014-.126.131.131 0 0 0-.108-.06h-1.883a.132.132 0 0 0-.126.092l-1.928 5.651L69.006 9.3a.133.133 0 0 0-.124-.088h-3.09v.001Zm-4.02-.008h-1.809a.132.132 0 0 0-.093.041.136.136 0 0 0-.038.096v8.094c0 .075.06.135.132.135h1.809c.072 0 .131-.06.131-.135V9.34a.136.136 0 0 0-.038-.096.133.133 0 0 0-.094-.04Zm-.896-3.685a1.295 1.295 0 0 0-.919.393c-.243.25-.379.586-.377.937a1.342 1.342 0 0 0 .377.938 1.304 1.304 0 0 0 .92.393c.346-.002.677-.143.92-.393s.379-.587.377-.938c0-.735-.581-1.33-1.296-1.33h-.002Zm15.918 4.49h-.331v.434h.331c.165 0 .264-.083.264-.216 0-.142-.099-.217-.264-.217Zm.215.619.36.517h-.304l-.323-.474h-.279v.474h-.254v-1.37h.595c.31 0 .515.163.515.436a.412.412 0 0 1-.31.417Zm-.282-1.31c-.652 0-1.146.532-1.146 1.183 0 .65.49 1.175 1.139 1.175.652 0 1.147-.532 1.147-1.183 0-.65-.492-1.174-1.14-1.174Zm-.007 2.488a1.259 1.259 0 0 1-.904-.384 1.296 1.296 0 0 1-.368-.92c0-.717.563-1.314 1.279-1.314a1.259 1.259 0 0 1 .903.384 1.295 1.295 0 0 1 .369.921c0 .717-.563 1.314-1.279 1.314Z"
              />
              
              </path>
            </a>
          </svg>
      
          <svg 
            role="img" viewBox="0 0 35 20" aria-label="Youtube" height="32" preserveAspectRatio="xMidYMid meet" focusable="false" class="icons-platform" data-id="youtube">
            <title>Youtube</title>

            <a href="${podcast.platform.youtube}">
              <g viewBox="0 0 35 20" preserveAspectRatio="xMidYMid meet">
              
                <path d="M27.9727 3.12324C27.6435 1.89323 26.6768 0.926623 25.4468 0.597366C23.2197 2.24288e-07 14.285 0 14.285 0C14.285 0 5.35042 2.24288e-07 3.12323 0.597366C1.89323 0.926623 0.926623 1.89323 0.597366 3.12324C2.24288e-07 5.35042 0 10 0 10C0 10 2.24288e-07 14.6496 0.597366 16.8768C0.926623 18.1068 1.89323 19.0734 3.12323 19.4026C5.35042 20 14.285 20 14.285 20C14.285 20 23.2197 20 25.4468 19.4026C26.6768 19.0734 27.6435 18.1068 27.9727 16.8768C28.5701 14.6496 28.5701 10 28.5701 10C28.5701 10 28.5677 5.35042 27.9727 3.12324Z" fill="#FF0000">
        
                </path>
                <path d="M11.4253 14.2854L18.8477 10.0004L11.4253 5.71533V14.2854Z" fill="white"></path>
              </g>
            </a>
      
          </svg>
      
          <svg 
            role="img" width:"100" height="100" viewBox="0 0 17 48" aria-label="iTunes"  preserveAspectRatio="xMidYMid meet" focusable="false"   class="icons-platform" data-id="itunes">
            <title>iTunes</title>
        
            <a href="${podcast.platform.itunes}">
          
            <path class="icons-platform-itunes" d="m15.5752 19.0792a4.2055 4.2055 0 0 0 -2.01 3.5376 4.0931 4.0931 0 0 0 2.4908 3.7542 9.7779 9.7779 0 0 1 -1.2755 2.6351c-.7941 1.1431-1.6244 2.2862-2.8878 2.2862s-1.5883-.734-3.0443-.734c-1.42 0-1.9252.7581-3.08.7581s-1.9611-1.0589-2.8876-2.3584a11.3987 11.3987 0 0 1 -1.9373-6.1487c0-3.61 2.3464-5.523 4.6566-5.523 1.2274 0 2.25.8062 3.02.8062.734 0 1.8771-.8543 3.2729-.8543a4.3778 4.3778 0 0 1 3.6822 1.841zm-6.8586-2.0456a1.3865 1.3865 0 0 1 -.2527-.024 1.6557 1.6557 0 0 1 -.0361-.337 4.0341 4.0341 0 0 1 1.0228-2.5148 4.1571 4.1571 0 0 1 2.7314-1.4078 1.7815 1.7815 0 0 1 .0361.373 4.1487 4.1487 0 0 1 -.9867 2.587 3.6039 3.6039 0 0 1 -2.5148 1.3236z"></path>
           
      

            </a>
          </svg>
      
          
        </dt>
      </dl>

    </div>`;

    menu.appendChild(newPodcast);
  });
};

// Show buttons based on categories

const showButtons = () => {
  const categories = getCategoryBtns(data);
  const allCategoriesBtns = categories
    .map((category) => {
      return `<button type="button" data-id="${category}" class="filter-button">${category}</button>`;
    })
    .join("");

  containerBtns.innerHTML = allCategoriesBtns;

  const AllCategoryButtons = containerBtns.querySelectorAll("[data-id]");

  handleClickCategory(AllCategoryButtons);
};

const handleClickCategory = (categories) => {
  const allPodcasts = data;

  console.log("it works");

  categories.forEach((category) => {
    category.addEventListener("click", () => {
      console.log("This is also working");
      console.log(category.textContent);

      const filteredPodcasts = allPodcasts.filter(
        (podcast) => category.textContent === podcast.category
      );

      if (filteredPodcasts && category.textContent !== "Todos") {
        menu.innerHTML = "";
        console.log(filteredPodcasts);
        getPodcast(filteredPodcasts);
      } else {
        menu.innerHTML = "";
        getPodcast(allPodcasts);
      }
    });
  });
};

// Get all categories from the data
const getCategoryBtns = (podcasts) => {
  const allButtons = podcasts.reduce(
    (allCategories, currentPodcast) => {
      if (!allCategories.includes(currentPodcast.category)) {
        allCategories.push(currentPodcast.category);
      }

      return allCategories;
    },
    ["Todos"]
  );

  return allButtons;
};
// ******* EXECUTION *********

window.addEventListener("DOMContentLoaded", () => {
  console.log("The page has loaded");

  getPodcast(data);
  showButtons();
});
