import { findIndex } from "lodash";

const initialState = {
  data: 1,
  item: [
    {
      id: "",
      coords: {
        a: { x: 1, y: 1 },
        b: { x: 1, y: 1 },
        c: { x: 1, y: 1 },
        d: { x: 1, y: 1 }
      },
      itemInitialX: 1,
      itemInitialY: 1,
      moveX: 1,
      moveY: 1,
      cover: false
    }
  ]
};

const getTargetIndex = (state, id) => {
  const index = findIndex(state.item, { id });
  return index;
};

const getTargetItem = (state, id) => {
  const index = findIndex(state.item, { id });
  const item = state.item[index];
  return { item };
};

const addItem = (state = initialState, action) => {
  const targetIndex = getTargetIndex(state, action.id);
  switch (action.type) {
    case "ADD_ITEM":
      if (state.item[0].id === "") {
        state.item[0] = { ...action };
        return { ...state };
      }
      state.item.push({ ...action });
      return {
        ...state
      };

    case "UPDATE_MOVE":
      state.item[targetIndex].move = action.move;
      return {
        ...state
      };

    case "UPDATE_COORDS":
      state.item[targetIndex].coords = action.coords;
      return {
        ...state
      };

    case "UPDATE_MOVE_XY":
      state.item[targetIndex].moveX = action.moveX;
      state.item[targetIndex].moveY = action.moveY;

      return {
        ...state
      };

    default:
      return state;
  }
};

export default addItem;
