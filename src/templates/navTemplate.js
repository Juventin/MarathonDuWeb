import {
    faHome, faChartPie,
} from "@fortawesome/free-solid-svg-icons";

export default {
    home: {
        label: 'home',
        url: '/',
        links: [
            {
                name: 'Home',
                url: '/home',
                icon: faHome
            }
        ]
    },
    graph: {
        label: 'Exemple',
        url: "/Exemple",
        links: [
            {
                name: 'Graph',
                url: '/Exemple/graph',
                icon: faChartPie
            },

        ]
    }

}
