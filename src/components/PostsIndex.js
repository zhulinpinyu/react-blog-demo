import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router'

import {fetchPosts} from '../actions/index'

class PostsIndex extends Component {

  componentWillMount(){
    this.props.fetchPosts()
  }

  render(){
    console.log(this.props.posts)
    return (
      <div>
        <div className="text-xs-right">
          <Link to="posts/new" className="btn btn-primary">Add Post</Link>
        </div>
        This is Posts List
      </div>
    )
  }
}

function mapStateToProps({posts}){
  return {posts}
}

export default connect(mapStateToProps,{fetchPosts})(PostsIndex)