import {
  ADD_TO_CART,
  REMOVE_CART_ITEM,
  CART_RESET,
  FAVOURITE_TO_CART,
  FAVOURITE_REMOVE_CART_ITEM,
  FAVOURITE_RESET,
  SAVE_SHIPPING_INFO,
} from "../constant/cartConstants";

export const cartReducer = (
  state = { cartItems: [], shippingInfo: {}, favouriteItems: [] },
  action
) => {
  switch (action.type) {
    case ADD_TO_CART:
      const item = action.payload;
      const isItemExist = state.cartItems.find(
        (i) => i.product === item.product
      );
      if (isItemExist) {
        return {
          ...state,
          cartItems: state.cartItems.map((i) =>
            i.product === isItemExist.product ? item : i
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, item],
        };
      }

    case REMOVE_CART_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter((i) => i.product !== action.payload),
      };
    case CART_RESET:
      return {
        ...state,
        success: false,
      };

    case SAVE_SHIPPING_INFO:
      return {
        ...state,
        shippingInfo: action.payload,
      };

    case FAVOURITE_TO_CART:
      const ite = action.payload;
      const isIteExist = state.favouriteItems.find(
        (i) => i.product === ite.product
      );
      if (isIteExist) {
        return {
          ...state,
          favouriteItems: state.favouriteItems.map((i) =>
            i.product === isIteExist.product ? ite : i
          ),
        };
      } else {
        return {
          ...state,
          favouriteItems: [...state.favouriteItems, ite],
        };
      }

    case FAVOURITE_REMOVE_CART_ITEM:
      return {
        ...state,
        favouriteItems: state.favouriteItems.filter(
          (i) => i.product !== action.payload
        ),
      };
    case FAVOURITE_RESET:
      return {
        ...state,
        success: false,
      };

    default:
      return state;
  }
};
