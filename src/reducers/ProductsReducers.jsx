//careerReducer
import {
  PRODUCTS_LIST_SUCCESS,
  PRODUCTS_LIST_REQUEST,
  PRODUCTS_LIST_FAIL,
  PRODUCTS_DETAILS_REQUEST,
  PRODUCTS_DETAILS_SUCCESS,
  PRODUCTS_DETAILS_FAIL,
  PRODUCTS_ONETOEIGHT_LIST_FAIL,
  PRODUCTS_ONETOEIGHT_LIST_REQUEST,
  PRODUCTS_ONETOEIGHT_LIST_SUCCESS,
  PRODUCTS_ONETOEIGHT_DETAILS_FAIL,
  PRODUCTS_ONETOEIGHT_DETAILS_SUCCESS,
  PRODUCTS_ONETOEIGHT_DETAILS_REQUEST,
} from "../constants/ProductsConstants";

export const productListReducers = (state = { products: [] }, action) => {
  switch (action.type) {
    case PRODUCTS_LIST_REQUEST:
      return { loading: true, products: [] };

    case PRODUCTS_LIST_SUCCESS:
      return { loading: false, products: action.payload };

    case PRODUCTS_LIST_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const productDetailsReducers = (state = { product: [] }, action) => {
  switch (action.type) {
    case PRODUCTS_DETAILS_REQUEST:
      return { loading: true, ...state };

    case PRODUCTS_DETAILS_SUCCESS:
      return { loading: false, product: action.payload };

    case PRODUCTS_DETAILS_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};



export const productListOnetoeightReducer = (
  state = { productonetoeight: [] },
  action
) => {
  switch (action.type) {
    case PRODUCTS_ONETOEIGHT_LIST_REQUEST:
      return { loading: true, ...state };
    case PRODUCTS_ONETOEIGHT_LIST_SUCCESS:
      return { loading: false, productonetoeight: action.payload };
    case PRODUCTS_ONETOEIGHT_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};


export const productListDetailOnetoeightReducer = (
  state = { productDonetoeight: [] },
  action
) => {
  switch (action.type) {
    case PRODUCTS_ONETOEIGHT_DETAILS_REQUEST:
      return { loading: true, ...state };
    case PRODUCTS_ONETOEIGHT_DETAILS_SUCCESS:
      return { loading: false, productonetoeight: action.payload };
    case PRODUCTS_ONETOEIGHT_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
