import React from 'react'
import axios from 'axios'
import ItemsBlogs from './ItemsBlogs.jsx'
import $ from 'jquery'

class PostBlogs extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            items: [],
            title: '',
            text: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount(){
        this.fetchData()
      }
    
      fetchData() {
        $.ajax({
          url: '/PostBlogs',
          success: (data) => {
            this.setState({
              items: data
            })
          },
          error: (err) => {
            console.log('err', err);
          }
        });
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit() {
        axios.post('/PostBlogs', this.state)
            .then(({ data }) => {
                console.log("blogs", data);
            })
    }

    render() {
        return (
            <div>
                <div>
                    <label htmlFor="input1">Title: </label>
                    <br />
                    <input type='text' id='input1' name='title' value={this.state.title} onChange={this.handleChange} placeholder='The title of your blog...' />
                    <br />
                    <label htmlFor="input1">Blog:</label>
                    <br />
                    <textarea type='text' name='text' id='input1' value={this.state.text} onChange={this.handleChange} placeholder='Write your blog here...' />
                    <br />
                    <button type='button' onClick={() => { this.handleSubmit() }}> Post </button>
                </div>
                <div>
                    <ItemsBlogs items={this.state.items}/>
                </div>
            </div>

        )
    }
}

export default PostBlogs;