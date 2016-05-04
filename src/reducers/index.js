import {combineReducers} from 'redux'
import { reducer as reducerForm } from 'redux-form'

import reducerPosts from './reducerPosts'

const rootReducer = combineReducers({
    posts: reducerPosts,
    form: reducerForm
})

export default rootReducer
