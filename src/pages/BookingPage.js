import BookingForm from "../components/BookingForm";

function BookingPage({
  date,
  setDate,
  time,
  setTime,
  availableTimes,
  guestsCount,
  setGuestsCount,
  occassion,
  setOccassion,
  dispatch,
}) {
  return (
    <BookingForm
      date={date}
      setDate={setDate}
      time={time}
      setTime={setTime}
      guestsCount={guestsCount}
      setGuestsCount={setGuestsCount}
      occassion={occassion}
      setOccassion={setOccassion}
      availableTimes={availableTimes}
      dispatch={dispatch}
    />
  );
}

export default BookingPage;
