import React, { useState } from 'react';
import Box from '@mui/material/Box';
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
        <Box data-testid="navigation-component">
            <StyledDrawer open={openDrawer} data-testid="drawer">
                <StyledButtonBox>
                    <StyledCloseButton
                        onClick={handleToggleDrawer}
                        data-testid="close-button"
                    >
                        <StyledCloseButtonIcon />
                    </StyledCloseButton>
                </StyledButtonBox>
                <StyledListBox>
                    <List>
                        <ListItem>
                            <StyledLink
                                to="/"
                                data-testid="currency-converter-link"
                            >
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
                            <StyledLink
                                to="/rates"
                                data-testid="exchange-rates-link"
                            >
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
                <StyledOpenButtonIcon data-testid="open-button" />
            </StyledOpenButton>
        </Box>
    );
};

export default Navigation;
