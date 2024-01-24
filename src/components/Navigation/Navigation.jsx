import { useState } from "react";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import {
    Box,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
} from "@mui/material";
import { styled } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import PriceChangeIcon from "@mui/icons-material/PriceChange";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import CloseIcon from "@mui/icons-material/Close";

const StyledOpenButton = styled(Button)`
    position: absolute;
    color: #f5f7ff;
`;

const StyledCloseButton = styled(Button)`
    color: #f5f7ff;
`;

const StyledButtonBox = styled(Box)`
    display: flex;
    justify-content: center;
    margin-bottom: 1rem;
`;

const StyledListBox = styled(Box)`
    color: #f5f7ff;
`;

const StyledListItemButton = styled(ListItemButton)`
    border: 2px solid #f5f7ff;
    border-radius: 10px;
`;

const StyledListItemText = styled(ListItemText)`
    & .MuiListItemText-primary {
        font-weight: bold;
    }
`;

const Navigation = () => {
    const [openDrawer, setOpenDrawer] = useState(null);

    const handleToggleDrawer = () => {
        setOpenDrawer(!openDrawer);
    };

    return (
        <>
            <Drawer
                open={openDrawer}
                sx={{
                    "& .MuiDrawer-paper": {
                        padding: "1rem",
                        backgroundColor: "#0390fc",
                    },
                }}
            >
                <StyledButtonBox>
                    <StyledCloseButton onClick={handleToggleDrawer}>
                        <CloseIcon
                            sx={{ fontSize: "2rem", color: "#f5f7ff" }}
                        />
                    </StyledCloseButton>
                </StyledButtonBox>
                <StyledListBox>
                    <List>
                        <ListItem>
                            <StyledListItemButton>
                                <ListItemIcon>
                                    <CurrencyExchangeIcon
                                        sx={{
                                            fontSize: "2rem",
                                            color: "#f5f7ff",
                                        }}
                                    />
                                </ListItemIcon>
                                <StyledListItemText>
                                    Currency Converter
                                </StyledListItemText>
                            </StyledListItemButton>
                        </ListItem>
                        <ListItem>
                            <StyledListItemButton>
                                <ListItemIcon>
                                    <PriceChangeIcon
                                        sx={{
                                            fontSize: "2rem",
                                            color: "#f5f7ff",
                                        }}
                                    />
                                </ListItemIcon>
                                <StyledListItemText>
                                    Exchange Rates
                                </StyledListItemText>
                            </StyledListItemButton>
                        </ListItem>
                    </List>
                </StyledListBox>
            </Drawer>
            <StyledOpenButton onClick={handleToggleDrawer}>
                <MenuIcon
                    sx={{
                        marginTop: "1.5rem",
                        fontSize: "2rem",
                        color: "#f5f7ff",
                    }}
                />
            </StyledOpenButton>
        </>
    );
};

export default Navigation;
