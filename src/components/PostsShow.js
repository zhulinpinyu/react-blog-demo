import React, {Component,PropTypes} from 'react'
import {connect} from 'react-redux'

import {fetchPost,deletePost} from '../actions/index'
import {Link} from 'react-router'

class PostsShow extends Component{
  static contextTypes = {
    router: PropTypes.object
  }

  componentWillMount(){
    this.props.fetchPost(this.props.params.id)
  }

  deletePost(){
    this.props.deletePost(this.props.params.id).then(() => {
      this.context.router.push('/')
    })
  }

  render(){
    const {post} = this.props

    if(!post){
      return (
        <div>Loading</div>
      )
    }

    return (
      <div>
        <Link to="/">Back To Home</Link>
        <div className="pull-xs-right">
          <button className="btn btn-danger" onClick={this.deletePost.bind(this)}>Delete Post</button>
        </div>
        <h3>{post.title}</h3>
        <h6>{post.categories}</h6>
        <p>{post.content}</p>
      </div>
    )
  }
}

function mapStateToProps({posts}){
  return {post: posts.post}
}

export default connect(mapStateToProps,{fetchPost,deletePost})(PostsShow)