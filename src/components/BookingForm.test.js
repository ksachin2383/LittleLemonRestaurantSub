import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from './BookingForm';

test('Renders the BookingForm heading', () => {
  render(<BookingForm
    time={null}
    date={null}
    occasion={null}
    guestCount={null}
    onDateSelect={jest.fn()}
    onTimeSelect={jest.fn()}
    onOccasionSelect={jest.fn()}
    onGuestCountSelect={jest.fn()}
    onSubmit={jest.fn()}
    dispatch={jest.fn()}
    totalTimes={[{
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
    }]}
/>);
    const headingElement = screen.getByText("Book Now");
    expect(headingElement).toBeInTheDocument();
})

test('Submits the BookingForm', () => {
  render(<BookingForm
      time={null}
      date={null}
      occasion={null}
      guestCount={null}
      onDateSelect={jest.fn()}
      onTimeSelect={jest.fn()}
      onOccasionSelect={jest.fn()}
      onGuestCountSelect={jest.fn()}
      onSubmit={jest.fn()}
      dispatch={jest.fn()}
      totalTimes={[{
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
      }]}
  />);
  const dateField = screen.getByTestId("date");
  fireEvent.change(dateField, { target: { value: '2024-06-02' } })

  const timeField = screen.getByTestId("time");
  fireEvent.change(timeField, { target: { value: '18:00' } })

  const guestCount = screen.getByTestId("guestCount");
  fireEvent.change(guestCount, { target: { value: '3' } })

  const occasion = screen.getByTestId("occasion");
  fireEvent.change(occasion, { target: { value: 'Anniversary' } })

  const submitBtn = screen.getByTestId("submitBtn");
  fireEvent.click(submitBtn)
})