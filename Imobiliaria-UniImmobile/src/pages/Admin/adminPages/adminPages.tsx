import { Button, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { NavBar } from "../../../components/NavBar";
import { House, User } from 'lucide-react';
import logo from "../../../assets/ApplicationLogo.png"
import { useState } from "react";
import { Details } from "../ImmobileDetail/ImmobileDetail";
const screensEnum = {
    immobilesScreen: "immobilesScreen",
    usersScreen: "usersScreen"
}
type ScreensEnum = keyof typeof screensEnum;
export function AdminPages() {

    const [activeScreen, setActiveScreen] = useState<ScreensEnum>("immobilesScreen")
    return (
        <div className="w-screen h-screen " >
            <div className="bg-[var(--primary-color)] z-10 p-4 w-screen h-25 top-0 ">
                <div className="flex items-center justify-between w-auto">
                    <img className="w-32 h-20" src={logo} alt="" />
                    <div>
                        <h3 className="text-[var(--color-font-title)] font-semibold text-[25px] drop-shadow shadow-gray-800">
                            {activeScreen == "immobilesScreen" ? "imóveis" : "usuários"}
                        </h3>
                    </div>
                </div>
            </div>
            <div className="flex ">
                <Drawer open variant="persistent" anchor="left" sx={{
                    width: "15rem",
                    flexShrink: 0,
                    "& .MuiDrawer-paper": {
                        width: "15rem",
                        marginTop: "100px",
                    },
                }}>
                    <List className="py-5 px-3 pr-7">
                        <ListItem className="flex mt-2 align-middle">
                            <ListItemButton onClick={() => setActiveScreen("immobilesScreen")}>
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
                <main className="flex-1 px-6">
                    {activeScreen == "immobilesScreen" ?
                        <div>
                            <h1>Bernardo vai fazer isso depois da tela de usuários</h1>
                            <img width={500} src={"https://s2-g1.glbimg.com/WqcIP4YnDXQO7NgXg3RJv8W3rw4=/0x0:906x1024/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2024/5/1/qma8NKRpmPb0LNsTnP1A/450174271-1043008523860895-7372650739287554244-n.jpg"} />
                        </div>
                        :
                        <div>
                            <h1>Bernardo ta trabalhando aqui nos usuários</h1>
                            <img width={500} src={"data:image/webp;base64,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"} />
                        </div>}
                </main>
            </ div >
        </div>
    )
}