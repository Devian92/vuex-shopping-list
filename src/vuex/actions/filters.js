import ProductService from '_services/product';

import * as mutations from './../mutation-types';

export const updateFilters = ({ dispatch, state }, filter_field, product_field, prop, enabled) => {
    dispatch(mutations.FILTER_CHANGED, filter_field, product_field, prop, enabled);
    dispatch(mutations.FILTER_PRODUCTS, state.filters.values);
};
