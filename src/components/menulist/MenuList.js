import React from "react";
import DUMMY_MEALS from "./dummy-meals";
import classes from './MenuList.module.css';
import MenuListItem from "./MenuListItem";
import { v4 as uuidv4 } from 'uuid';

const MenuList = () => {

    return (
        <div className={classes['menu-list']}>
            <h3>Choose dishes:</h3>
            <ul>
            { DUMMY_MEALS.map( item => (
                <MenuListItem
                    key={uuidv4()}
                    id={item.id} 
                    name={item.name} 
                    description={item.description}
                    price={item.price} 
                />
            ) )}
            </ul>
        </div>
    )
}

export default MenuList;