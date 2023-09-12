import Stock from "../../domain/entities/stock";

// const buyStockReducer = (state : Stock[], action) => {
//   console.log("buyStockReducer stock", action.payload);
//   if (action.payload < 0 || action.payload > state.money) return state;
//   return {
//     ...state,
//     money: state.money - action.payload,
//   };
// };
