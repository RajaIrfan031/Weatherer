import { configureStore } from "@reduxjs/toolkit";
import todaysForecastSlice from "./todaysForecastSlice";
import currentForecastSlice from "./currentForecastSlice";
import threeDaysForecastSlice from "./threeDaysForecastSlice";
import ThreeHoursSlice from "./ThreeHoursSlice";

const store = configureStore(
      {
            reducer: {
                  currentForecast: currentForecastSlice,
                  todaysForecast: todaysForecastSlice,
                  threeDaysForecast: threeDaysForecastSlice,
                  threeHours: ThreeHoursSlice
            }
      }
)

export default store;