import { Route, Routes } from "react-router-dom";
import { useReducer, useState } from "react";

import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import MenuPage from "../pages/MenuPage";
import BookingPage from "../pages/BookingPage";
import OrderPage from "../pages/OrderPage";
import LoginPage from "../pages/LoginPage";

function Main() {
  function updateTimes() {
    return availableTimes;
  }

  function initializeTimes() {
    return availableTimes;
  }

  const availableTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
  const [state, dispatch] = useReducer(updateTimes, initializeTimes());

  const [date, setDate] = useState("");
  const [time, setTime] = useState(availableTimes[0]);
  const [guestsCount, setGuestsCount] = useState("1");
  const [occassion, setOccassion] = useState("birthday");

  return (
    <main>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/about" element={<AboutPage />}></Route>
        <Route path="/menu" element={<MenuPage />}></Route>
        <Route
          path="/booking"
          element={
            <BookingPage
              date={date}
              setDate={setDate}
              availableTimes={state}
              time={time}
              setTime={setTime}
              guestsCount={guestsCount}
              setGuestsCount={setGuestsCount}
              occassion={occassion}
              setOccassion={setOccassion}
              dispatch={dispatch}
            />
          }
        ></Route>
        <Route path="/order" element={<OrderPage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
      </Routes>
    </main>
  );
}

export default Main;
