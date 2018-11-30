import React from 'react'

export default function(props){
    return (
        <div id="one" className="page">
              <h1>哦呢</h1>
              <ul className="list">

                  {
                      props.data.map((item,index)=>{
                          return (
                              <li key={index} className="item" onClick={props.click.bind(this,index)}> 
                              {item}
                              </li>
                          )
                      })
                  }
              </ul>
        </div>
    )
}