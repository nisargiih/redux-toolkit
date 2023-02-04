import {call,put,takeEvery } from 'redux-saga/effects'
import { getCatsSuccess } from './reducer'

function* getCatWatcher(){
    console.log('adsfdfadsfjfj')
    const cats = yield call(() => fetch('https://api.thecatapi.com/v1/breeds'))
    console.log(cats)
    const formatedCats = yield cats.json()
    const formatedCatsShorthands = formatedCats.slice(0,10)
    yield put(getCatsSuccess(formatedCatsShorthands))
}

export default function* catWatcher(){
    yield takeEvery('cats/getCatsFetch',getCatWatcher)
}