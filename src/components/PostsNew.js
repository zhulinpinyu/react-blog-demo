import React, {Component} from 'react'
import {reduxForm} from 'redux-form'
import {Link} from 'react-router'

import {createPost} from '../actions/index'

class PostsNew extends Component{
  render(){
    const {fields: {title, categories, content}, handleSubmit, createPost } = this.props

    return (
      <form onSubmit={handleSubmit(createPost)}>
        <h3>Create a New Post</h3>
        <div className={`form-group ${title.touched && title.invalid ? 'has-danger' : ''}`}>
          <label>Title</label>
          <input type="text" className="form-control" {...title}/>
          <div className="text-help">
            {title.touched ? title.error : ''}
          </div>
        </div>
        <div className={`form-group ${categories.touched && categories.invalid ? 'has-danger' : ''}`}>
          <label>Categories</label>
          <input type="text" className="form-control" {...categories}/>
          <div className="text-help">
            {categories.touched ? categories.error : ''}
          </div>
        </div>
        <div className={`form-group ${content.touched && content.invalid ? 'has-danger' : ''}`}>
          <label>Content</label>
          <textarea className="form-control" {...content}/>
          <div className="text-help">
            {content.touched ? content.error : ''}
          </div>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
        <Link to="/" className="btn btn-danger">Cancel</Link>
      </form>
    )
  }
}

const validate = (values) => {
  const errors = {}
  if(!values.title){
    errors.title = "Pls input title."
  }
  if(!values.categories){
    errors.categories = "Pls input categories."
  }
  if(!values.content){
    errors.content = "Pls input content."
  }
  return errors
}

export default reduxForm({
  form: 'PostsNewForm',
  fields: ['title','categories','content'],
  validate
},null,{createPost})(PostsNew)