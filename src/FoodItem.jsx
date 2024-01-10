import React, {Component} from 'react';

class FoodItem extends Component{
    constructor(ss, cal, fg, smg, cg, sg, pg, fig, name, daysServed) {
        super();
        this.state = {
           ss:ss,
           cal:cal,
           fg:fg,
           smg:smg,
           cg:cg,
           sg:sg,
           pg:pg,
           fig:fig,
           name:name,
           daysServed:daysServed 
        };
        this.name = name;
    }
}

export default FoodItem;