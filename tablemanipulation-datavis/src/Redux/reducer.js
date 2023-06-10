import * as Types from "./actionType";
const intialState = {
  data: [],
  //   taking for copy so that actuall state should
  sortData: [],
  totalbutt:0,
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
        const pageCount=action.payload.data.length;
        console.log(pageCount,"pc")
        const tPage=Math.floor(pageCount/10)
      return {
        ...state,
        isLoading: false,
        data: action.payload.data,
        sortData: action.payload.data,
        totalbutt:tPage

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
    // filtering logicc..
    case Types.FILTER_DATA:{
        console.log(action.payload,"reaching on filter")
        const filterData=state.sortData.filter((item)=>item.name.toLowerCase().includes(action.payload)||item.id.toLowerCase().includes(action.payload))
        console.log(filterData,"filterdd..")
        const pageCount=filterData.length;
        console.log(pageCount,"pc")
        const tPage=Math.floor(pageCount/10)
        return{
            ...state,
            data:filterData,
            // totalbutt:tPage

        }
    }

    case Types.PAGINATED_DATA: {
        console.log("reac pagee")
        // here pagenumber will comee..
        const npage = (action.payload - 1) * 10;
        let endPage = npage + 10-1;
        // if (endPage > state.sortData.length) {
        //   endPage = state.sortData.length - 1;
        // }
        // here basically we are making start and end page.
        let paginatedArr = state.sortData.slice(npage, endPage);
  
        return {
          ...state,
          data: paginatedArr,
        };
      }
    default:
      return state;
  }
};
