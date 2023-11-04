function BookingForm({
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
    <form
      style={{ display: "grid", maxWidth: "200px", gap: "20px" }}
      onSubmit={(e) => {
        e.preventDefault();
        e.target.reset();
      }}
    >
      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <label htmlFor="res-time">Choose time</label>
      <select
        id="res-time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
      >
        {availableTimes?.map((time) => (
          <option value={time} key={time}>
            {time}
          </option>
        ))}
      </select>
      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        placeholder="1"
        min="1"
        max="10"
        id="guests"
        value={guestsCount}
        onChange={(e) => setGuestsCount(e.target.value)}
      />
      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        value={occassion}
        onChange={(e) => setOccassion(e.target.value)}
      >
        <option value="birthday">Birthday</option>
        <option value="anniversary">Anniversary</option>
      </select>
      <input type="submit" value="Make Your reservation" />
    </form>
  );
}

export default BookingForm;
