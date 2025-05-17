import React from 'react'
import { TiHome } from "react-icons/ti";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { useSelector } from 'react-redux';

const Sidebar = () => {

    const open = useSelector((store) => store.app.open);


    const SidebarTitle = [
        {
            icon: <TiHome size={"23px"} />,
            title: "home"
        },
        {
            icon: <SiYoutubeshorts size={"23px"} />,
            title: "shorts"
        },
        {
            icon: <MdOutlineSubscriptions size={"23px"} />,
            title: "subscriptions"
        },
        {
            icon: <TiHome size={"23px"} />,
            title: "home"
        },
        {
            icon: <SiYoutubeshorts size={"23px"} />,
            title: "shorts"
        },
        {
            icon: <MdOutlineSubscriptions size={"23px"} />,
            title: "subscriptions"
        },
        {
            icon: <TiHome size={"23px"} />,
            title: "home"
        },
        {
            icon: <SiYoutubeshorts size={"23px"} />,
            title: "shorts"
        },
        {
            icon: <MdOutlineSubscriptions size={"23px"} />,
            title: "subscriptions"
        },
        {
            icon: <TiHome size={"23px"} />,
            title: "home"
        },
        {
            icon: <SiYoutubeshorts size={"23px"} />,
            title: "shorts"
        },
        {
            icon: <MdOutlineSubscriptions size={"23px"} />,
            title: "subscriptions"
        },
        {
            icon: <TiHome size={"23px"} />,
            title: "home"
        },
        {
            icon: <SiYoutubeshorts size={"23px"} />,
            title: "shorts"
        },
        {
            icon: <MdOutlineSubscriptions size={"23px"} />,
            title: "subscriptions"
        },
    ]

    return (
        <div style={{ height: "calc(100vh - 64px)"}} id={open ? 'sidebar' : 'nosidebar'} className={`${open ? 'w-[15.5%] p-3':'w-[5%] p-2' } fixed top-0 left-0 bg-white  flex flex-col gap-2 mt-[64px] overflow-y-auto overflow-hidden`}>
            {
                SidebarTitle.map((item, idx) => (
                    <div key={idx} className={`flex ${open ? 'flex-row gap-5 text-sm p-2 px-3':'flex-col gap-0 text-[10px] font-normal py-2'} ${idx === 0 ? 'bg-gray-100':''} hover:bg-gray-100 cursor-pointer items-center    rounded-lg capitalize font-medium`}>
                        {item.icon}
                        {item.title}
                    </div>
                ))
            }
        </div>
    )
}

export default Sidebar