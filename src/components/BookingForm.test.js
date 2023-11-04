import { render, screen } from "@testing-library/react";
import BookingForm from "./BookingForm";

test("renders occassion", () => {
  render(<BookingForm />);
  // const headingElement = screen.getByText("Book Now");
  // expect(headingElement).toBeInTheDocument();

  const occassion = screen.getByText("Occasion");
  expect(occassion).toBeInTheDocument();
});
