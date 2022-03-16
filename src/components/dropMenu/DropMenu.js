import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom'

export default function PositionedMenu() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <Button className='dropmenu__button'
                id="demo-positioned-button"
                aria-controls={open ? 'demo-positioned-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                ES6
            </Button>
            <Menu
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
            >

                <Link to='/ES6'><MenuItem onClick={handleClose}>ES6 Intro ( ͡° ͜ʖ ͡°) </MenuItem></Link>
                <Link to='/Classes'><MenuItem onClick={handleClose}>Classes</MenuItem></Link>
                <Link to='/ArrowFunctions'><MenuItem onClick={handleClose}>Arrow Functions</MenuItem></Link>
                <Link to='/Variables'><MenuItem onClick={handleClose}>Variables</MenuItem></Link>
                <Link to='/ArrayMethods'><MenuItem onClick={handleClose}>Array Methods</MenuItem></Link>
                <Link to='/Destructuring'><MenuItem onClick={handleClose}>Destructuring</MenuItem></Link>
                <Link to='/SpreadOperator'><MenuItem onClick={handleClose}>Spread Operator</MenuItem></Link>
                <Link to='/Modules'><MenuItem onClick={handleClose}>Modules</MenuItem></Link>
                <Link to='/TernaryOperator'><MenuItem onClick={handleClose}>Ternary Operator</MenuItem></Link>

            </Menu>
        </div>
    );
}