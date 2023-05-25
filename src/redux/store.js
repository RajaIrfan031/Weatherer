import { configureStore } from "@reduxjs/toolkit";
import todaysForecastSlice from "./todaysForecastSlice";
import currentForecastSlice from "./currentForecastSlice";
import threeDaysForecastSlice from "./threeDaysForecastSlice";
import ThreeHoursSlice from "./threeHoursSlice";
import getCitiesSlice from './getCitiesSlice'

const store = configureStore(
      {
            reducer: {
                  currentForecast: currentForecastSlice,
                  todaysForecast: todaysForecastSlice,
                  threeDaysForecast: threeDaysForecastSlice,
                  threeHours: ThreeHoursSlice,
                  getCities: getCitiesSlice,
            }
      }
)

export default store;