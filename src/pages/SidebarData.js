import React from 'react'
import * as FaIcons from "react-icons/fa";
import * as MdIcons from "react-icons/md";

export const SidebarData = [
    {
        title: "Tasks",
        path: "/tasks",
        icon: <FaIcons.FaTasks />,
        cName: "nav-text"
    },
    {
        title: "Notifications",
        path: "/notifications",
        icon: <MdIcons.MdNotifications />,
        cName: "nav-text"
    }
];  