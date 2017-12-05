import {combineReducers} from 'redux';
import visibilityFilter from './visibilityFilter';
import topics from './topics';
import topic from './topic';

const newsfeedApp = combineReducers({
  topics,
  topic
});

export default newsfeedApp;
