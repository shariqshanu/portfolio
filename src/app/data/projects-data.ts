import prayerwar from "../images/projects/prayerwar.jpeg"
import blackraters from "../images/projects/blackraters.jpeg"
import tailwindCSS from "../images/projects/tailwind-css.jpeg"

const DataCard = [
    {
        id: "0",
        image: prayerwar,
        heading: "Prayer War",
        detail:
            "PrayerWar is a platform where Christians can share their prayer requests and comment on their acceptance. It is a supportive Christian community that offers many other features through faith and prayer.",
        demo: "https://prayerwars.customwebsitedemo.host/",
        // github: "",
        techused:['Laravel']
    },
    {
        id: "1",
        image: blackraters,
        heading: "Black Raters",
        detail:
            "Black Raters is a site for movie lovers, where you can rate, review, and talk about films. It’s a great place to watch movies and share what you think about them.",
        demo: "https://blackraters.com/",
        // github: "",
        techused: ['Laravel']
    },
    {
        id: "2",
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
