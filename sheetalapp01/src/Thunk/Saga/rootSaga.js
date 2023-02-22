import { put, takeEvery, takeLatest, delay, all } from 'redux-saga/effects';
import {incrementWatcher, multiplicationWatcher,devisionWatcher} from './counterSaga' 
import { workFetchPosts } from './PostSaga';
export default function* rootSaga()
{
   yield all([incrementWatcher(),multiplicationWatcher(),devisionWatcher(),workFetchPosts()])
}