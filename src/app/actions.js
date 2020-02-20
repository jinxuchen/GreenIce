let itemCount = 0;

export const addItem = () => {
  console.log("actions");
  return {
    type: "ADD_ITEM",
    id: (itemCount = itemCount + 1)
  };
};

/*
const itemPush = {
  foo: "bar"
};
const arr = this.state.item;
arr.push(itemPush);
console.log(arr);
*/
