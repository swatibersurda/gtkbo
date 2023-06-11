import * as Types from "./actionType";
const intialState = {
  data: [],
  //taking for copy so that actuall state should be persist.
  sortData: [],
  totalbutt: 0,
  isLoading: false,
  isError: false,
  page: 1,
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
      const pageCount = action.payload.data.length;
      const tPage = Math.floor(pageCount / 10);
      return {
        ...state,
        isLoading: false,
        data: action.payload.data,
        sortData: action.payload.data,
        totalbutt: tPage,
      };
    }

    case Types.GET_ALL_DATA_FAILURE: {
      return {
        ...state,
        isError: true,
      };
    }

    case Types.SORT_DATA: {
      const pageCount = state.sortData.length;
      const tPage = Math.floor(pageCount / 10);
      // console.log(action.payload, "i am at sortreducer..");
      const { sort, val } = action.payload;
      let sorted;
      //   this sort for string.
      if (val === "name") {
        if (sort === "asc") {
          sorted = state.sortData.sort((a, b) => {
            if (a.name.toLowerCase() > b.name.toLowerCase()) {
              return 1;
            } else {
              return -1;
            }
          });
        }
        if (sort === "desc") {
          sorted = state.sortData.sort((a, b) => {
            if (a.name.toLowerCase() < b.name.toLowerCase()) {
              return 1;
            } else {
              return -1;
            }
          });
        }
      }
      //   this sort for numbers
      if (sort === "asc") {
        // console.log(sort, "sss");
        sorted = state.sortData.sort((a, b) => a[val] - b[val]);
      } else if (sort === "desc") {
        sorted = state.sortData.sort((a, b) => b[val] - a[val]);
      }
      // console.log(sorted, "sortedd..",state.sortData.length);
      return {
        ...state,
        data: sorted,
        totalbutt: tPage,
      };
    }

    // filtering logicc..
    case Types.FILTER_DATA: {
      const filterData = state.sortData.filter(
        (item) =>
          item.name.toLowerCase().includes(action.payload) ||
          item.id.toLowerCase().includes(action.payload)
      );
      // console.log(filterData, "filterdd..");
      const pageCount = filterData.length;
      // console.log(pageCount, "pc");
      let tPage;
      // this case will handle it you have only 5 or 6 records to display on that time need only
      // one button for that will use this for filter+pagination work together.
      if (tPage % 10 === 0) {
        tPage = Math.floor(pageCount / 10);
      } else {
        tPage = Math.floor(pageCount / 10) + 1;
      }
      return {
        ...state,
        data: filterData,
        totalbutt: tPage,
      };
    }


  

    case Types.PAGINATED_DATA: {
      console.log(action.payload, "kkk i am reching shivaaa...");
      // console.log("reac pagee");
      // here pagenumber will comee..
      const npage = (action.payload - 1) * 10;
      let endPage = npage + 10 - 1;
      // here basically we are making start and end page.
      let paginatedArr = state.sortData.slice(npage, endPage);
      // this case will handle it you have only 5 or 6 records to display on that time need only
      // one button for that will use this for filter+pagination work together.
      console.log("runing here...,",paginatedArr)
      return {
        ...state,
        data: paginatedArr,
      };
    }

    default:
      return state;
  }
};
