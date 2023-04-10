import React from 'react';

// material-ui
import { Button } from "antd"

type ButtonTypes = {
    label: string,
    handleClick: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
}

const ButtonComponent = ({ label, handleClick }: ButtonTypes) => {
    return (
        <Button onClick={handleClick}>
            {label}
        </Button>
    );
};

export default ButtonComponent;
