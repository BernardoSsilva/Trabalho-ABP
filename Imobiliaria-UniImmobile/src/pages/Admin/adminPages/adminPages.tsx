import { Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { House, User } from 'lucide-react';
import { useState } from "react";
import logo from "../../../assets/ApplicationLogo.png";
import { UsersList } from "./users/UsersList/Users";
import { ImmobileList } from "./immobiles/ImmobilesList/Immobiles";
const screensEnum = {
    immobileScreen: "immobileScreen",
    usersScreen: "usersScreen"
}
type ScreensEnum = keyof typeof screensEnum;
export function AdminPages() {

    const [activeScreen, setActiveScreen] = useState<ScreensEnum>("immobileScreen")
    return (
        <div className="w-screen h-screen " >
            <div className="bg-[var(--primary-color)] z-10 p-4 w-screen h-25 top-0 ">
                <div className="flex items-center justify-between w-auto">
                    <img className="w-32 h-20" src={logo} alt="" />
                    <div>
                        <h3 className="text-[var(--color-font-title)] font-semibold text-[25px] drop-shadow shadow-gray-800">
                            {activeScreen == "immobileScreen" ? "imóveis" : "usuários"}
                        </h3>
                    </div>
                </div>
            </div>
            <div className="flex ">
                <Drawer open variant="persistent" anchor="left" sx={{
                    width: "12rem",
                    flexShrink: 0,
                    "& .MuiDrawer-paper": {
                        width: "12rem",
                        marginTop: "100px",
                    },
                }}>
                    <List className="py-5 px-3 pr-7">
                        <ListItem className="flex mt-2 align-middle">
                            <ListItemButton onClick={() => setActiveScreen("immobileScreen")}>
                                <ListItemIcon>
                                    <House color="black" size={24} />
                                </ListItemIcon>
                                <ListItemText primary={"Imóveis"} />
                            </ListItemButton>
                        </ListItem >
                        <ListItem className="flex mt-2 align-middle">
                            <ListItemButton onClick={() => setActiveScreen("usersScreen")}>
                                <ListItemIcon>
                                    <User color="black" size={24} />
                                </ListItemIcon>
                                <ListItemText primary={"Usuários"} />
                            </ListItemButton>
                        </ListItem >
                    </List>
                </Drawer>
                <main className="flex-1">
                    {activeScreen == "immobileScreen" ?
                        <ImmobileList />
                        :
                        <UsersList />
                    }
                </main>
            </ div >
        </div>
    )
}