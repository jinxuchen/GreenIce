import { findIndex } from "lodash";

const initialState = {
  loadArea: {
    coords: {
      a: { x: 0, y: 0 },
      b: { x: 0, y: 0 },
      c: { x: 0, y: 0 },
      d: { x: 0, y: 0 }
    }
  },
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
  ],
  //1x1 template grid[0][0]
  /*    [
          [
            {
              coords: {
                a: { x: 0, y: 0 },
                b: { x: 0, y: 0 },
                c: { x: 0, y: 0 },
                d: { x: 0, y: 0 }
              },
              cover: false
            }
          ]
        ]*/
  grid: [
    [
      {
        coords: {
          a: { x: 0, y: 0 },
          b: { x: 0, y: 0 },
          c: { x: 0, y: 0 },
          d: { x: 0, y: 0 }
        },
        cover: false
      }
    ]
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

    case "ADD_GRID_PIECE":
      //add coords of grid pieces into LoadAre
      if (state.grid.length !== action.maxHeight) {
        state.grid = [];
        for (let i = 0; i < action.maxHeight; i++) {
          state.grid.push([]);
        }
      }

      for (let i = 0; i < action.maxHeight; i++) {
        for (let j = 0; j < action.maxWidth; j++) {
          if (state.grid[j].length < action.maxWidth) {
            state.grid[j].push({ ...action.coords });
            return { ...state };
          }
        }
      }

    case "ADD_LOAD_AREA":
      return {
        ...state,
        loadArea: {
          coords: action.coords
        }
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

    case "UPDATE_COVER":
      state.grid[action.x][action.y].cover = action.cover;

      return {
        ...state
      };

    default:
      return state;
  }
};

export default addItem;
