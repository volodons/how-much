import { useState } from "react";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import { styled } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-regular-svg-icons";

const Navigation = () => {
    const [openDrawer, setOpenDrawer] = useState(null);

    const handleOpenDrawer = () => {
        setOpenDrawer(true);
    };

    const StyledButton = styled(Button)`
        position: absolute;
    `;

    return (
        <>
            <Drawer open={openDrawer}>
                <FontAwesomeIcon icon={faStar} />
            </Drawer>
            <StyledButton onClick={handleOpenDrawer}>Click me</StyledButton>
        </>
    );
};

export default Navigation;
