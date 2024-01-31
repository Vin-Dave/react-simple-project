export function DataReducer(data, action) {
  switch (action.type) {
    case "load_data":
      return [...action.res];
    case "delete_item":
      return data.filter((item) => item.id !== action.id);
    case "add_item":
      return [...data, action.res];
    default:
      throw new Error("Not supported action!");
  }
}
