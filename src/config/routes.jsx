import React from 'react'

import HomeIcon from '@material-ui/icons/Home';
import Home from "../pages/Home";
import Blocks from "../pages/Blocks";
import Addresses from "../pages/Addresses";
import Dao from "../pages/Dao";
import SoftForks from "../pages/SoftForks";
import NavPool from "../pages/NavPool";

export const routes = {
    HOMEPAGE: {
        component: <Home />,
        path: "/",
        name: "Home",
        icon: <HomeIcon/>,
    },
    BLOCKS: {
        component: <Blocks />,
        path: "/Blocks",
        name: "Blocks",
    },
    ADDRESSES: {
        component: <Addresses />,
        path: "/addresses",
        name: "Addresses",
    },
    DAO: {
        component: <Dao />,
        path: "/dao",
        name: "Dao",
    },
    SOFT_FORKS: {
        component: <SoftForks />,
        path: "/soft-forks",
        name: "Soft Forks",
    },
    NavPool: {
        component: <NavPool />,
        path: "/pool",
        name: "NavPool",
    },
};
