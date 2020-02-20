export const addOne = id => {
  console.log("id", id);
  return {
    type: "ADD_ONE",
    val: id
  };
};

export const addItem = itemInfo => {
  return {
    type: "ADD_ITEM",
    ...itemInfo
  };
};

export const updateItem = itemInfo => {
  return {
    type: "UPDATE_ITEM",
    ...itemInfo
  };
};
