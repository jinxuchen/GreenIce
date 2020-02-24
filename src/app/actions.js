export const addItem = itemInfo => {
  return {
    type: "ADD_ITEM",
    ...itemInfo
  };
};

export const addGridPiece = (coords, maxWidth, maxHeight) => {
  return {
    type: "ADD_GRID_PIECE",
    ...coords,
    maxWidth,
    maxHeight
  };
};

export const addLoadArea = coords => {
  return {
    type: "ADD_LOAD_AREA",
    ...coords
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

export const updateCover = (cover, x, y) => {
  return {
    type: "UPDATE_COVER",
    cover,
    x,
    y
  };
};
