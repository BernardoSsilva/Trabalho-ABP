import { Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { DoorOpen, House, User } from 'lucide-react';
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { NavBar } from "../../../components/NavBar";
import { ImmobileList } from "./immobiles/ImmobilesList/Immobiles";
import { UsersList } from "./users/UsersList/Users";
import { UserServices } from "../../../services/user-services";
import { UserRolesEnum } from "../../../models/types/userRolesEnum";
const screensEnum = {
    immobileScreen: "immobileScreen",
    usersScreen: "usersScreen"
}
type ScreensEnum = keyof typeof screensEnum;
export function AdminPages() {
    const navigator = useNavigate();

    const [activeScreen, setActiveScreen] = useState<ScreensEnum>("usersScreen")

    const [userIsAdmin, setUserIsAdmin] = useState(true);
    const service = new UserServices();

    const checkUserIsAdmin = async () => {
        const user = await service.findUser(localStorage.getItem("userId") ?? "")

        if (user) {
            setUserIsAdmin(user.role == UserRolesEnum.ADMIN)
        } else {
            localStorage.removeItem("token")
            navigator("/admin")
        }
    }
    useEffect(() => {
        checkUserIsAdmin()
    }, [])
    return (
        <div className="w-screen h-screen " >
            <NavBar nameTitle={activeScreen == "immobileScreen" ? "imóveis" : "usuários"} />
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
                        {userIsAdmin &&
                            <ListItem className="flex mt-2 align-middle">
                                <ListItemButton onClick={() => setActiveScreen("immobileScreen")}>
                                    <ListItemIcon>
                                        <House color="black" size={24} />
                                    </ListItemIcon>
                                    <ListItemText primary={"Imóveis"} />
                                </ListItemButton>
                            </ListItem >
                        }
                        <ListItem className="flex mt-2 align-middle">
                            <ListItemButton onClick={() => setActiveScreen("usersScreen")}>
                                <ListItemIcon>
                                    <User color="black" size={24} />
                                </ListItemIcon>
                                <ListItemText primary={"Usuários"} />
                            </ListItemButton>
                        </ListItem >
                        <ListItem>
                            <ListItemButton onClick={() => {
                                localStorage.removeItem("token")
                                navigator("/admin")
                            }}>
                                <ListItemIcon>
                                    <DoorOpen color="red" size={24} />
                                </ListItemIcon>
                                <ListItemText primary={"Logout"} color="red" />
                            </ListItemButton>
                        </ListItem>
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