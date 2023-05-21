import { configureStore } from "@reduxjs/toolkit";
import todaysForecastSlice from "./todaysForecastSlice";
import currentForecastSlice from "./currentForecastSlice";
import threeDaysForecastSlice from "./threeDaysForecastSlice";

const store = configureStore(
      {
            reducer: {
                  currentForecast: currentForecastSlice,
                  todaysForecast: todaysForecastSlice,
                  threeDaysForecast: threeDaysForecastSlice,
            }
      }
)

export default store;