import React from "react";

class ItemBlogs extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            items: this.props.items
        }
        this.remove = this.remove.bind(this)
    }

    remove(_id) {
        console.log(_id);
        axios.delete(`/removeBlogs/${_id}`)
            .then((response) => {
                console.log(response)
            }).catch((error) => {
                console.log(error)
            })
        
    }

    render() {
        return (
            <div>
                <h1>feed</h1>
                <div>
                    {this.props.items.map((elem, i) => (
                        <div key={i}>
                            <h3>{elem.title}</h3>
                            <p>{elem.text}</p>
                            <button onClick={()=>{this.remove(elem._id)}}>update</button>
                            <button>delete</button>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}

export default ItemBlogs;