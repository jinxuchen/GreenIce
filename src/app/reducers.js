const state = {
  itemCount: 1
};

const addItem = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      console.log("ADD_ITEM");

      return { ...state, itemCount: action.id };

    default:
      return state;
  }
};

export default addItem;
