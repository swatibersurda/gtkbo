import * as Types from "./actionType";
const intialState = {
  data: [],
  //   taking for copy so that actuall state should
  sortData: [],
  isLoading: false,
  isError: false,
};
export const reducer = (state = intialState, action) => {
  switch (action.type) {
    case Types.GET_ALL_DATA_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case Types.GET_ALL_DATA_SUCESS: {
      return {
        ...state,
        isLoading: false,
        data: action.payload.data,
        sortData: action.payload.data,
      };
    }
    case Types.GET_ALL_DATA_FAILURE: {
      return {
        ...state,
        isError: true,
      };
    }
    case Types.SORT_DATA: {
      console.log(action.payload, "i am at sortreducer..");
      const { sort, val } = action.payload;
      let sorted;
    //   this sort for string.
      if (val === "name") {
        if (sort === "asc") {
          sorted = state.sortData.sort((a, b) => {
            if (a.name.toLowerCase() > b.name.toLowerCase()) {
              return 1;
            } 
            else{
                return -1;
            }
          });
        }
         if(sort==="desc"){
            sorted = state.sortData.sort((a, b) => {
                if (a.name.toLowerCase() < b.name.toLowerCase()) {
                  return 1;
                }
                else{
                    return -1;
                } 
              }); 
        }
      }
    //   this sort for numbers
      if (sort === "asc") {
        console.log(sort, "sss");
        sorted = state.sortData.sort((a, b) => a[val] - b[val]);
        //  console.log(sorted,"sortedd..")
      } else if (sort === "desc") {
        sorted = state.sortData.sort((a, b) => b[val] - a[val]);
      }
      console.log(sorted, "sortedd..");
      return {
        ...state,
        data:sorted,
      };
    }
    default:
      return state;
  }
};
