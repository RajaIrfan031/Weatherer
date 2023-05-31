import { configureStore } from "@reduxjs/toolkit";
import todaysForecastSlice from "./todaysForecastSlice";
import currentForecastSlice from "./currentForecastSlice";
import threeDaysForecastSlice from "./threeDaysForecastSlice";
import ThreeHoursSlice from "./threeHoursSlice";
import getCitiesSlice from './getCitiesSlice'
import favoritesSlice from "./favoritesSlice";
import getFavoritesDataSlice from "./getFavoritesDataSlice";
import searchSlice from './search/searchSlice';
import fetchSearchedSlice from "./search/fetchSearchedSlice";

const store = configureStore(
      {
            reducer: {
                  currentForecast: currentForecastSlice,
                  todaysForecast: todaysForecastSlice,
                  threeDaysForecast: threeDaysForecastSlice,
                  threeHours: ThreeHoursSlice,
                  getCities: getCitiesSlice,
                  getFavorites: favoritesSlice,
                  getFavoritesData: getFavoritesDataSlice,
                  searchResults: searchSlice,
                  fetchSearch: fetchSearchedSlice
            }
      }
)

export default store;