import React from "react";
import { Formik } from 'formik';

export default function BookingForm({ time, date, occasion, guestCount, onDateSelect, onTimeSelect, onOccasionSelect, onGuestCountSelect, onSubmit, dispatch, totalTimes }) {
  return (
    <React.Fragment>
      <h1 className="w-full ml-14 mt-2 text-xl font-bold">Book Now</h1>
      <Formik
       initialValues={{ FieldTime: null, FieldDate: null, FieldOccasion: null, FieldGuestCount: null }}
       validate={() => {
         const errors = {};
         if (!date) {
          errors.FieldDate = 'Required';
        }
         if (!time) {
           errors.FieldTime = 'Required';
         }
         if (guestCount === 0 || !guestCount) {
          errors.FieldGuestCount = 'Required';
        }
        if (!occasion) {
          errors.FieldOccasion = 'Required';
        }
         return errors;
       }}
       onSubmit={(values, { setSubmitting }) => {
         setTimeout(() => {
           setSubmitting(false);
           onSubmit()
         }, 100);
       }}
       onReset={() => {
        onDateSelect(null)
        onTimeSelect(null)
        onGuestCountSelect(null)
        onOccasionSelect(null)
       }}
     >
       {({
         errors,
         touched,
         handleChange,
         handleSubmit,
         handleReset,
         isSubmitting
       }) => (<form className="w-full min-w-lg justify-stretch mt-2 ml-10 p-4" onLoad={handleReset} onSubmit={handleSubmit}>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/4 sm:w-2/3 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="res-date"
              aria-label="Choose date"
            >
              Choose date
            </label>
            <input
              className={`appearance-none block w-full bg-gray-200 text-gray-700 border ${errors.FieldDate && (touched.FieldDate && !date) ? 'border-red-500' : '' } rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white`}
              type="date"
              id="res-date"
              data-testid="date"
              min="2024-06-02"
              max="2024-06-05"
              aria-required="true"
              name="FieldDate"
              value={date}
              onChange={(ev) => {
                onDateSelect(ev.target.value)
                handleChange(ev.target.value)
              }}
            />
            {errors.FieldDate && (touched.FieldDate && !date) ? <p className="text-red-500 text-xs italic">
              Please fill out date.
            </p> : <></>}
          </div>
          <div className="w-full md:w-1/4 sm:w-2/3 px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="res-time"
              aria-label="Choose time"
            >
              Choose time
            </label>
            <select
              id="res-time"
              aria-required="true"
              name={"FieldTime"}
              data-testid="time"
              value={time}
              className={`appearance-none block w-full bg-gray-200 text-gray-700 border ${errors.FieldTime && (touched.FieldTime && !time) ? 'border-red-500' : '' } rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white`}
              onChange={(ev) => {
                onTimeSelect(ev.target.value)
                handleChange(ev.target.value)
                dispatch({ type: "UPDATE_TIME", time: ev.target.value })
              }}
            >
              <option value={null}>select</option>
              {totalTimes.map(d => <option value={d.time}>{d.time}</option>)}
            </select>
            {errors.FieldTime && (touched.FieldTime && !time) ? <p className="text-red-500 text-xs italic">
              Please fill out time.
            </p> : <></>}
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/4 sm:w-2/3 px-3 mb-6 md:mb-0">
          <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="guests"
              aria-label="Number of guests"
            >
              Number of guests
            </label>
            <input
              type="number"
              placeholder="0"
              min="1"
              max="10"
              id="guests"
              name={"FieldGuestCount"}
              data-testid="guestCount"
              aria-required="true"
              value={guestCount}
              className={`appearance-none block w-full bg-gray-200 text-gray-700 border ${errors.FieldGuestCount && (touched.FieldGuestCount && (guestCount === 0 || !guestCount))? 'border-red-500' : 'border-gray-200' } rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500`}
              onChange={(ev) => {
                onGuestCountSelect(ev.target.value)
                handleChange(ev.target.value)
              }}
            />
            {errors.FieldGuestCount && (touched.FieldGuestCount && (guestCount === 0 || !guestCount)) ? <p className="text-red-500 text-xs italic">
              Please fill guest count.
            </p> : <></>}
          </div>
          <div className="w-full md:w-1/4 sm:w-2/3 px-3">
          <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="occasion"
              aria-label="Occasion"
            >
              Occasion
            </label>
            <select
              id="occasion"
              data-testid="occasion"
              aria-required="true"
              name={"FieldOccasion"}
              value={occasion}
              className={`block appearance-none w-40 bg-gray-200 border ${errors.FieldOccasion && (touched.FieldOccasion && !occasion) ? 'border-red-500' : 'border-gray-200' } text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500`}
              onChange={(ev) => {
                onOccasionSelect(ev.target.value)
                handleChange(ev.target.value)
              }}
            >
              <option value={null}>select</option>
              <option value="Birthday">Birthday</option>
              <option value="Anniversary">Anniversary</option>
            </select>
            {errors.FieldOccasion && (touched.FieldOccasion && !occasion) ? <p className="text-red-500 text-xs italic">
              Please fill out occasion.
            </p> : <></>}
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-2">
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <button
              className={`shadow siteButton focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded ${isSubmitting ? 'bg-gray-200' : ''}`}
              type="submit"
              fdprocessedid="3ly8in"
              data-testid="submitBtn"
              aria-label="Make Your reservation"
              disabled={isSubmitting}
            >
              Make Your reservation
            </button>
          </div>
        </div>
      </form>
       )}
     </Formik>
    </React.Fragment>
  );
}
