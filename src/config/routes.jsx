import React from 'react'

import HomeIcon from '@material-ui/icons/Home';

export const routes = {
    HOMEPAGE: {
        component: <div>Home</div>,
        path: "/",
        name: "Home",
        icon: <HomeIcon/>,
    },
    ADDRESSES: {
        component: <div>Addresses</div>,
        path: "/addresses",
        name: "Addresses",
        icon: <HomeIcon/>,
    },
    DAO: {
        component: <div>DAO</div>,
        path: "/dao",
        name: "Dao",
        icon: <HomeIcon/>,
    },
    SOFT_FORKS: {
        component: <div>Soft Forks</div>,
        path: "/soft-forks",
        name: "Soft Forks",
        icon: <HomeIcon/>,
    },
    NavPool: {
        component: <div>NavPool</div>,
        path: "/pool",
        name: "NavPool",
        icon: <HomeIcon/>,
    },
};
