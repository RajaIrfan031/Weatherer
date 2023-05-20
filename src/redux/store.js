import { configureStore } from "@reduxjs/toolkit";
import todaysForecastSlice from "./todaysForecastSlice";

const store = configureStore(
      {
            reducer: {
                  todaysForecast: todaysForecastSlice
            }
      }
)

export default store;