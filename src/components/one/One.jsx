import React, {Component} from 'react'
 import OneUL from './OneUL'
 import  './One.scss'

export default class One extends Component{
   constructor(){
       super();
       this.state = {
           list:['a','b','c','d','e']
       }
   }

    render(){
        let {list} = this.state;
        return  <OneUL data={list} click={this.liAction.bind(this)}/>
              
                     
    }
    liAction(index){
        console.log(index);
        console.log(this);
    }
}
