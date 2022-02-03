import React from "react";

const ItemsBlogs = (props) => {
    return (
        <div>
            <h1>feed</h1>
            <div>
                {props.items.map((elem, i)=>{
                    <div key={i}>
                        <h1>{elem.title}</h1>
                        <p>{elem.text}</p>
                    </div>  
                })}
            </div>
        </div>
    )
}

export default ItemsBlogs;