import {
    faHome, faChartPie,
} from "@fortawesome/free-solid-svg-icons";

export default {
    home: {
        label: 'home',
        url: '/home',
        links: [
            {
                name: 'Home',
                url: '/home',
                icon: faHome
            }
        ]
    },
    Exemple: {
        label: 'Exemple',
        url: "/Exemple/graph",
        links: [
            {
                name: 'Graph',
                url: '/Exemple/graph',
                icon: faChartPie
            },

        ]
    }

}
