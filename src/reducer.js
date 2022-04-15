export function reducer(state, { type, payload }) {
  switch (type) {
    case "SHOW_BASKET":
      return {
        ...state,
        visibleBasket: !state.visibleBasket,
      };
    case "INCREMENT":
      return {
        ...state,
        order: state.order.map((element) => {
          if (payload.id === element.mainId) {
            return {
              ...element,
              quantity: element.quantity + 1,
            };
          } else return element;
        }),
      };
    case "DECREMENT":
      return {
        ...state,
        order: state.order.map((element) => {
          if (payload.id === element.mainId) {
            const newQuantity = element.quantity - 1;
            return {
              ...element,
              quantity: newQuantity >= 0 ? newQuantity : 0,
            };
          } else return element;
        }),
      };
    case "ADD_TO_BASKET": {
      const itemIndex = state.order.findIndex((e) => e.mainId === payload.id);

      let newOrder = null;

      if (itemIndex < 0) {
        const newItem = {
          ...payload,
          quantity: 1,
        };
        newOrder = [...state.order, newItem];
      } else {
        newOrder = state.order.map((element, index) => {
          if (itemIndex === index) {
            return {
              ...element,
              quantity: element.quantity + 1,
            };
          } else return element;
        });
      }
      return {
        ...state,
        order: newOrder,
        alertName: payload.name,
      };
    }
    case "REMOVE_FROM_BASKET":
      return {
        ...state,
        order: state.order.filter((elem) => elem.mainId !== payload.id),
      };
    case "DELETE_NAME":
      return {
        ...state,
        alert: "",
      };
    default:
      return state;
  }
}
