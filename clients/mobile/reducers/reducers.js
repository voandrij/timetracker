import { combineReducers } from 'redux'
import projectsReducer from './projects';
import tasksReducer from './tasks';
import timelogsReducer from './timelogs';

const rootReducer = combineReducers({
	projectsReducer,
	tasksReducer,
	timelogsReducer
})

export default rootReducer
