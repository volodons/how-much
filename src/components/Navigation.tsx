import React, { useState } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';

import {
    StyledOpenButton,
    StyledOpenButtonIcon,
    StyledCloseButton,
    StyledCloseButtonIcon,
    StyledDrawer,
    StyledButtonBox,
    StyledLink,
    StyledListBox,
    StyledListItemButton,
    StyledListItemText,
    StyledCurrencyExchangeIcon,
    StyledPriceChangeIcon,
} from '../styled/styledNavigation';

const Navigation: React.FC = () => {
    const [openDrawer, setOpenDrawer] = useState<boolean>(false);

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
                            <StyledLink to="/">
                                <StyledListItemButton>
                                    <ListItemIcon>
                                        <StyledCurrencyExchangeIcon />
                                    </ListItemIcon>
                                    <StyledListItemText>
                                        Currency Converter
                                    </StyledListItemText>
                                </StyledListItemButton>
                            </StyledLink>
                        </ListItem>
                        <ListItem>
                            <StyledLink to="/rates">
                                <StyledListItemButton>
                                    <ListItemIcon>
                                        <StyledPriceChangeIcon />
                                    </ListItemIcon>
                                    <StyledListItemText>
                                        Exchange Rates
                                    </StyledListItemText>
                                </StyledListItemButton>
                            </StyledLink>
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
