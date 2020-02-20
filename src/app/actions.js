export const addOne = id => {
  console.log("id", id);
  return {
    type: "ADD_ONE",
    val: id
  };
};

export const addItem = itemInfo => {
  console.log(itemInfo);
  return {
    type: "ADD_ITEM",
    itemInfo: itemInfo
  };
};

export const updateItem = itemInfo => {
  console.log(itemInfo);
  return {
    type: "UPDATE_ITEM",
    id: itemInfo.id,
    moveX: itemInfo.moveX
  };
};
