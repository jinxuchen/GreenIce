export const addItem = itemInfo => {
  return {
    type: "ADD_ITEM",
    ...itemInfo
  };
};

export const updateMove = (id, move) => {
  return {
    type: "UPDATE_MOVE",
    id,
    move
  };
};

export const updateCoords = (id, coords) => {
  return {
    type: "UPDATE_COORDS",
    id,
    coords
  };
};

export const updateMoveXY = (id, moveX, moveY) => {
  return {
    type: "UPDATE_MOVE_XY",
    id,
    moveX,
    moveY
  };
};
