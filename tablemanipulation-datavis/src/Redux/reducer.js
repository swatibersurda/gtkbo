import * as Types from "./actionType";
const intialState = {
  data: [],
  //taking for copy so that actuall state should be persist.
  sortData: [],
  totalbutt: 0,
  isLoading: false,
  isError: false,
  // so that filter records can persist.
  filtering: false,
  filterDataCopy: [],
  otherFiltering: false,
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
      // for making buttons for pagination as we are taking 10 records in each page.
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
        sorted = state.sortData.sort((a, b) => a[val] - b[val]);
      } else if (sort === "desc") {
        sorted = state.sortData.sort((a, b) => b[val] - a[val]);
      }
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
      const pageCount = filterData.length;
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
        filtering: true,
        filterDataCopy: filterData,
      };
    }
    // For Filtering from drop-down
    case Types.FILTER_DATA_OTHER: {
      let x;
      // if action.payload==="5" need to change into number and 1 to 5 records return
      if (typeof action.payload === "string" && action.payload === "5") {
        x = +action.payload;
      }
      const filterData = state.sortData.filter((item) => {
        if (action.payload === "all") {
          return state.sortData;
        } else {
          return item.rank <= x;
        }
      });
      const pageCount = filterData.length;
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
        filterDataCopy: filterData,
        totalbutt: tPage,
        otherFiltering: true,
      };
    }
    // will work for normally or non filter data..
    case Types.PAGINATED_DATA: {
      // making range of records from 0-9--->10 records each
      const npage = (action.payload - 1) * 10;
      let endPage = npage + 10 ;
      let paginatedArr = state.sortData.slice(npage, endPage);
      return {
        ...state,
        data: [...paginatedArr],
      };
    }
    case Types.FILTER_AND_PAGINATION: {
      const npage = (action.payload - 1) * 10;
      let endPage = npage + 10 ;
      // here actually filterDatacopy will persist the filtered data as data is keep
      let paginatedArr = state.filterDataCopy.slice(npage, endPage);
      return {
        ...state,
        data: [...paginatedArr],
      };
    }
    default:
      return state;
  }
};
