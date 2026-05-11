import prayerwar from "../images/projects/prayerwar.jpeg"
import blackraters from "../images/projects/blackraters.jpeg"
import tailwindCSS from "../images/projects/tailwind-css.jpeg"
import thinkersnews from "../images/projects/thinkersnews.jpeg"
import vitamizlabs from "../images/projects/vitamizlabs.jpeg"

const DataCard = [
    {
        id: "0",
        image: thinkersnews,
        heading: "Thinkers News",
        detail:
            "A fully API-driven news aggregation platform that fetches real-time content from multiple third-party services including NewsAPI, Feedspot, Feedly, Spotify, and Inoreader. Features categorized live news feeds with no local database dependency.",
        demo: "https://kiethponders.customwebsitedemo.host",
        // github: "",
        techused: ['Laravel', 'PHP', 'REST APIs', 'Bootstrap']
    },
    {
        id: "1",
        image: vitamizlabs,
        heading: "Vitamiz Labs",
        detail:
            "A fully functional eCommerce platform built end-to-end with Add to Cart, Checkout, Shipping, and Payment Integration. Features a custom Admin Panel for dynamic product management, order tracking, customer records, and sales analytics.",
        demo: "https://vitamizlabs.com/",
        // github: "",
        techused: ['Laravel', 'PHP', 'MySQL', 'Bootstrap']
    },
    {
        id: "2",
        image: prayerwar,
        heading: "Prayer War",
        detail:
            "PrayerWar is a platform where Christians can share their prayer requests and comment on their acceptance. It is a supportive Christian community that offers many other features through faith and prayer.",
        // demo: "https://prayerwars.customwebsitedemo.host/",
        // demo: "https://prayerwars.com/",
        // github: "",
        techused: ['Laravel']
    },
    {
        id: "3",
        image: blackraters,
        heading: "Black Raters",
        detail:
            "Black Raters is a site for movie lovers, where you can rate, review, and talk about films. It's a great place to watch movies and share what you think about them.",
        // demo: "https://blackraters.com/",
        // github: "",
        techused: ['Laravel']
    },
    {
        id: "4",
        image: tailwindCSS,
        heading: "Landing Page",
        detail:
            "This landing page is created using Tailwind CSS as a practice project. It showcases responsive design and modern UI components, demonstrating the power and flexibility of Tailwind for building beautiful web interfaces.",
        demo: "https://tailwind-landing-page-github-io.vercel.app/",
        // github: "",
        techused: ['Tailwind CSS']
    }
];

export default DataCard;
