import { Route, Routes, useLocation } from "react-router-dom";
import HomePage from "./Homepage";
import BoookingPage from "./BookingPage";
import { useState, useReducer, useEffect } from "react";
import { fetchAPI } from "../utils";
import ConfirmedBooking from "./ConfirmedBooking";

export const initializeTimes = () => {
  return process.env?.test ? [
  {
    time: '17:00',
    reserved: false
  },
  {
    time: '18:00',
    reserved: false
  },
  {
    time: '19:00',
    reserved: false
  },
  // eslint-disable-next-line no-undef
] : fetchAPI(new Date()).map((d) => {
  return { time: d, reserved: false }
})
}

export const updateTimes = (state, action) => {
  switch (action.type) {
    case "UPDATE_TIME":
      return state.map((sdate) => {
        if (sdate.time === action.time) {
          return { ...sdate, reserved: !sdate.reserved };
        } else {
          return sdate;
        }
      });
    default:
      return state;
  }
};

export default function Main() {
  const [date, setDate] = useState(null);
  const [time, setTime] = useState(null);
  const [guestCount, setGuestCount] = useState(null);
  const [occasion, setOccasion] = useState(null);
  const [reservedTime, setReserveTime] = useState(null)

  useEffect(() => {
    const submittedData = localStorage.getItem('submittedFormValue')
    if (submittedData) {
      setReserveTime(submittedData[`time`])
    }
  }, [])

  let location = useLocation();

  useEffect(() => {
    setDate(null)
    setTime(null)
    setGuestCount(null)
    setOccasion(null)
  }, [location]);

  const initialDate = reservedTime ? [...initializeTimes().map(d => {
    return (d.time === reservedTime) ? {
      time: d.time,
      reserved: true
    } : d
  })] : initializeTimes()

  const [availableTimes, dispatch] = useReducer(updateTimes, initialDate);

  return (
   <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/booking" element={<BoookingPage
       date={date}
       setDate={setDate}
       time={time}
       setTime={setTime}
       guestCount={guestCount}
       setGuestCount={setGuestCount}
       occasion={occasion}
       setOccasion={setOccasion}
       availableTimes={availableTimes.filter(d => !d.reserved)}
       totalTimes={availableTimes}
       dispatch={dispatch}
        />} />
      <Route path="/confirmedBooking" element={<ConfirmedBooking />}  />
   </Routes>
  );
}
