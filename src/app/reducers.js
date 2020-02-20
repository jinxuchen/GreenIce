import { findIndex } from "lodash";

const initialState = {
  data: 0,
  item: [
    {
      id: "",
      coords: {
        a: { x: 0, y: 0 },
        b: { x: 0, y: 0 },
        c: { x: 0, y: 0 },
        d: { x: 0, y: 0 }
      },
      itemInitialX: 0,
      itemInitialY: 0,
      moveX: 0,
      moveY: 0,
      cover: false
    }
  ]
};

const addItem = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_ONE":
      const originData = state.data;
      console.log("state.value", state.data);
      console.log("action.data", action.val);

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

    case "UPDATE_ITEM":
      const targetIndex = findIndex(state.item, { id: action.id });
      state.item[targetIndex] = { ...action };
      return {
        ...state
      };

    default:
      return state;
  }
};

export default addItem;
