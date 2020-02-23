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
  let index;
  switch (action.type) {
    case "ADD_ONE":
      const originData = state.data;

      return { ...state, data: originData + action.val };

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
      index = getTargetIndex(state, action.id);
      state.item[index].move = action.move;
      return {
        ...state
      };

    case "UPDATE_COORDS":
      index = getTargetIndex(state, action.id);
      state.item[index].coords = action.coords;
      return {
        ...state
      };

    case "UPDATE_MOVE_XY":
      index = getTargetIndex(state, action.id);
      state.item[index].moveX = action.moveX;
      state.item[index].moveY = action.moveY;

      return {
        ...state
      };

    default:
      return state;
  }
};

export default addItem;
