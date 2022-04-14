export function reducer(state, { type, payload }) {
  switch (type) {
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
