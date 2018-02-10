export default (state = null, action) => {
  switch (action.type) {
    case "LOAD_FILE":
      return action.payload;
    default:
      return state;
  }
};
