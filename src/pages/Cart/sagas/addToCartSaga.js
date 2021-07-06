// import { takeEvery } from "redux-saga/effects";
//
// import { ADD_ITEM_SUCCESS, ADD_ITEM_FAIL } from "../actions";
//
// // Add to Cart Success Saga
// function addToCartSuccessSaga() {
//   // alert('You successfully add pokemon to cart!');
// }
//
// export function* addToCartSuccessWatcher() {
//   yield takeEvery(ADD_ITEM_SUCCESS, addToCartSuccessSaga);
// }
//
// // Add to Cart Fail Saga
// function addToCartFailSaga(action) {
//   const { response } = action.payload;
//
//   // alert(response);
// }
//
// export function* addToCartFailWatcher() {
//   yield takeEvery(ADD_ITEM_FAIL, addToCartFailSaga);
// }