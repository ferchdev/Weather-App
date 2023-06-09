import {
  night,
  clear,
  clouds,
  clearAfternoon,
  rain,
  snow,
} from "../../assets/images/images";
import { currentTime } from "../CurrentHour";

const bgPageOptions = (cases, timezone) => {
  const { currentDate } = currentTime(timezone);
  const hour = currentDate.getHours();

  const day = {
    Clear: clear,
    Clouds: clouds,
  };

  const global = {
    Snow: snow,
    Rain: rain,
  };

  if (hour >= 6 && hour <= 17 && (cases !== "Clear") & (cases !== "Clouds")) {
    return global[cases] || rain;
  } else if (hour >= 6 && hour <= 15) {
    return day[cases];
  } else if (hour >= 16 && hour <= 17) {
    return clearAfternoon;
  } else {
    return night;
  }
};

export default bgPageOptions;
