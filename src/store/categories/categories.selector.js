//used for memorized "selector" function
import { createSelector } from 'reselect';

//input selector
function selectCategoryReducer(state) {
  //console.log('selector 1 fired');
  return state.categories;
}

/*
EXTRA STEP because to future proof architecture 
*/
//1st arg: input selector array
//2nd arg (callback): output selector ==> 1st arg: result of 1st el of input selector array, etc...
//if 1st arg is changed, callback will be called
export const selectCategories = createSelector(
  [selectCategoryReducer],
  function (categoriesSlice) {
    //console.log('selector 2 fired');
    return categoriesSlice.categories;
  }
);

export const selectIsLoading = createSelector(
  [selectCategoryReducer],
  function (categoriesSlice) {
    return categoriesSlice.isLoading;
  }
);

export const selectCategoriesMap = createSelector(
  [selectCategories],
  selectCategoriesMapHelper
);

function selectCategoriesMapHelper(categories) {
  //console.log('selector 3 fired');
  return categories.reduce((acc, category) => {
    const { title, items } = category;
    acc[title.toLowerCase()] = items;
    return acc;
  }, {});
}

// function mapStatetoProps(state) {
//   return {
//     categoriesMap: state.categories.categoriesMap,
//   };
// }
