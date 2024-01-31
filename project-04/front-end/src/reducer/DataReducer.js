export function DataReducer(state, action) {
  switch (action.type) {
    case "load_data":
      return {
        isLoading: false,
        data: [...action.res],
      };
    case "delete_item":
      return {
        ...state,
        data: state.data.filter((item) => item.id !== action.id),
      };
    case "add_item":
      return { ...state, data: [...state.data, action.res] };
    default:
      throw new Error("Not supported action!");
  }
}
