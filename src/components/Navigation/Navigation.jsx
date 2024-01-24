import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import PriceChangeIcon from "@mui/icons-material/PriceChange";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import CloseIcon from "@mui/icons-material/Close";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { styled } from "@mui/material/styles";

const StyledOpenButton = styled(Button)`
    position: absolute;
    margin-top: 1.5rem;
    color: #f5f7ff;
    @media (max-width: 600px) {
        position: static;
        margin-top: 0;
    }
`;

const StyledOpenButtonIcon = styled(MenuIcon)`
    font-size: 2rem;
`;

const StyledCloseButton = styled(Button)`
    color: #f5f7ff;
`;

const StyledCloseButtonIcon = styled(CloseIcon)`
    font-size: 2rem;
    color: #f5f7ff;
`;

const StyledDrawer = styled(Drawer)`
    & .MuiDrawer-paper {
        padding: 1rem;
        background-color: #0390fc;
    }
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

const StyledCurrencyExchangeIcon = styled(CurrencyExchangeIcon)`
    font-size: 2rem;
    color: #f5f7ff;
`;

const StyledPriceChangeIcon = styled(PriceChangeIcon)`
    font-size: 2rem;
    color: #f5f7ff;
`;

const Navigation = () => {
    const [openDrawer, setOpenDrawer] = useState(false);

    const handleToggleDrawer = () => {
        setOpenDrawer(!openDrawer);
    };

    return (
        <>
            <StyledDrawer open={openDrawer}>
                <StyledButtonBox>
                    <StyledCloseButton onClick={handleToggleDrawer}>
                        <StyledCloseButtonIcon />
                    </StyledCloseButton>
                </StyledButtonBox>
                <StyledListBox>
                    <List>
                        <ListItem>
                            <StyledListItemButton>
                                <ListItemIcon>
                                    <StyledCurrencyExchangeIcon />
                                </ListItemIcon>
                                <StyledListItemText>
                                    Currency Converter
                                </StyledListItemText>
                            </StyledListItemButton>
                        </ListItem>
                        <ListItem>
                            <StyledListItemButton>
                                <ListItemIcon>
                                    <StyledPriceChangeIcon />
                                </ListItemIcon>
                                <StyledListItemText>
                                    Exchange Rates
                                </StyledListItemText>
                            </StyledListItemButton>
                        </ListItem>
                    </List>
                </StyledListBox>
            </StyledDrawer>
            <StyledOpenButton onClick={handleToggleDrawer}>
                <StyledOpenButtonIcon />
            </StyledOpenButton>
        </>
    );
};

export default Navigation;
