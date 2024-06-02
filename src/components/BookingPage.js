import BookingForm from "./BookingForm"
import { submitAPI } from "../utils";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import BookingSlot from "./BookingSlot ";

export default function BoookingPage({ date, setDate, time, setTime, guestCount, setGuestCount, occasion, setOccasion, availableTimes, totalTimes, dispatch}) {
    const navigate = useNavigate();

    useEffect(() => {
        return () => {
            if (date && time && guestCount && occasion) {
                localStorage.setItem('submittedFormValue', JSON.stringify({
                    date,
                    time,
                    guestCount,
                    occasion
                }))
            }
        }
    }, [date, guestCount, occasion, time])

    const handleSubmit = () => {
        if (submitAPI({
                date,
                time,
                guestCount,
                occasion
            })) {
                navigate("/confirmedBooking");
            }
        }
    return (
        <div className="w-full h-full">
            <div className="w-full mb-10 ml-14">
                <h2 className="font-semibold text-xl mb-2 mt-1">Available Time Slots</h2>
                <ul className="flex justify-between">
                {availableTimes.map((item) => {
                    return <BookingSlot item={item.time} />
                })}
            </ul>
            </div>
            <BookingForm
            date={date}
            time={time}
            occasion={occasion}
            guestCount={guestCount}
            onDateSelect={setDate}
            onTimeSelect={setTime}
            onOccasionSelect={setOccasion}
            onGuestCountSelect={setGuestCount}
            onSubmit={handleSubmit}
            totalTimes={totalTimes}
            dispatch={dispatch}
            />
        </div>
    )
}