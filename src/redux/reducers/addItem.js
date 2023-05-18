const addItem = [];



const addItems = (state = addItem, action) => {
  const product = action.payload;
  switch (action.type) {
    case "ADDITEM":
      const exist = state.find((x) => x.id === product.id);
      //checking if the item is present in the cart, if so, quantity increases by 1
      //if not, the quantity is initaialized for the 
      if (exist) {
        return state.map((x) =>
          x.id === product.id ? { ...x, qty: x.qty + 1 } : x
        );
      } 
      else {
        const product = action.payload;
        return [
          ...state,
          //creates a copy of the previous state and then updates the state
          {
            ...product,
            qty: 1,
          },
        ];
      }
      break;

    case "DELITEM":
      const exist1 = state.find((x) => x.id === product.id);
      if (exist1.qty === 1) {
        return state.filter((x) => x.id !== exist1.id);
      } else {
        return state.map((x) =>
          x.id === product.id ? { ...x, qty: x.qty - 1 } : x
        );
      }
      break;
    default:
        return state
      break;
  }
};

export default addItems;
