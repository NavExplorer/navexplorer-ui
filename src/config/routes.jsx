import React from 'react'

import HomeIcon from '@material-ui/icons/Home';

export const routes = {
    HOMEPAGE: {
        component: <div>Home</div>,
        path: "/",
        name: "Home",
        icon: <HomeIcon/>,
    },
    BLOCKS: {
        component: <div>Blocks</div>,
        path: "/Blocks",
        name: "Blocks",
    },
    ADDRESSES: {
        component: <div>Addresses</div>,
        path: "/addresses",
        name: "Addresses",
    },
    DAO: {
        component: <div>DAO</div>,
        path: "/dao",
        name: "Dao",
    },
    SOFT_FORKS: {
        component: <div>Soft Forks</div>,
        path: "/soft-forks",
        name: "Soft Forks",
    },
    NavPool: {
        component: <div>NavPool</div>,
        path: "/pool",
        name: "NavPool",
    },
};
