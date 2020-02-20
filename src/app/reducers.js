const initialState = {
  data: 0,
  item: {
    id: 0,
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
};

const addItem = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_ONE":
      const originData = state.data;
      console.log("state.value", state.data);
      console.log("action.data", action.val);

      return { ...state, data: originData + action.val };

    case "ADD_ITEM":
      console.log("action: ", action);
      console.log("state: ", state);
      return {
        ...state,
        item: {
          moveX: action.moveX,
          id: action.id
        }
      };

    case "UPDATE_ITEM":
      console.log("action: ", action);
      console.log("state: ", state);
      return {
        ...state,
        item: {}
      };

    default:
      return state;
  }
};

export default addItem;
