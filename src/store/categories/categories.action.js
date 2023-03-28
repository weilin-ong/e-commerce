import { CATEGORIES_ACTION_TYPE } from './categories.types';
import { getCategoriesAndDocuments } from '../../utils/firebase.utils';

export function setCategories(categoriesArray) {
   return { type: CATEGORIES_ACTION_TYPE.SET_CATEGORIES, payload: categoriesArray }; 
}

export default function fetchCategoriesAsync() {
  return async function (dispatch) {
    dispatch(fetchCategoriesStart());
    getCategoriesAndDocuments()
      .then((data) => {
        // console.log(data);
        return dispatch(fetchCategoriesSuccess(data));
      })
      .catch((err) => dispatch(fetchCategoriesFailed(err)));
  };
}


export function fetchCategoriesStart() {
  return {
    type: CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_START,
  };
}

export function fetchCategoriesSuccess(categories) {
  return {
    type: CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_SUCCESS,
    payload: categories,
  };
}

export function fetchCategoriesFailed(error) {
  return {
    type: CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_FAILED,
    payload: error,
  };
}
