import React, {Component} from 'react';

class Menu extends Component{
    constructor(itemList, username, totalList) {
        super();
        this.state = {
           itemList:itemList,
           username:username,
           totalList: totalList
        };
    }
}

export default Menu;