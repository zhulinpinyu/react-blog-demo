import React, {Component} from 'react'
import {connect} from 'react-redux'

import {fetchPosts} from '../actions/index'

class PostsIndex extends Component {

  componentWillMount(){
    this.props.fetchPosts()
  }

  render(){
    console.log(this.props.posts)
    return (
      <div>This is Posts List</div>
    )
  }
}

function mapStateToProps({posts}){
  return {posts}
}

export default connect(mapStateToProps,{fetchPosts})(PostsIndex)