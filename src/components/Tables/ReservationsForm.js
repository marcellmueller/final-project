import { useEffect, useState } from 'react';
import './ReservationsForm.scss';

export default function ReservationsForm(props) {
  const [reservations, setReservations] = useState({
    timeHour: false,
    time00: false,
    time15: false,
    time30: false,
    time45: false,
    bgActive: 'darkgrey',
    bgInActive: 'lightgrey',
    showForm: false,
  });

  const timeHour = () => {
    setReservations({
      ...reservations,
      timeHour: true,
      time00: true,
      time15: false,
      time30: false,
      time45: false,
    });
  };
  const time00Click = () => {
    setReservations({
      ...reservations,
      timeHour: true,
      time00: true,
      time15: false,
      time30: false,
      time45: false,
    });
  };

  const time15Click = () => {
    setReservations({
      ...reservations,
      timeHour: true,
      time00: false,
      time15: true,
      time30: false,
      time45: false,
    });
  };

  const time30Click = () => {
    setReservations({
      ...reservations,
      timeHour: true,
      time00: false,
      time15: false,
      time30: true,
      time45: false,
    });
  };

  const time45Click = () => {
    setReservations({
      ...reservations,
      timeHour: true,
      time00: false,
      time15: false,
      time30: false,
      time45: true,
    });
  };

  const cancel = () => {
    setReservations({
      ...reservations,
      timeHour: false,
      time00: false,
      time15: false,
      time30: false,
      time45: false,
      showForm: false,
    });
  };

  const showForm = () => {
    setReservations({
      ...reservations,
      showForm: true,
    });
  };
  return (
    <div className="reservations-form">
      <h2>Reservations:</h2>
      <form className="reservations-form-time">
        <div
          onClick={timeHour}
          style={{
            backgroundColor: reservations.timeHour
              ? reservations.bgActive
              : reservations.bgInActive,
          }}
          className="reservations-form-hour"
        >
          11
        </div>
        <div
          onClick={time00Click}
          style={{
            backgroundColor: reservations.time00
              ? reservations.bgActive
              : reservations.bgInActive,
          }}
          className="reservations-form-00"
        >
          00
        </div>
        <div
          onClick={time15Click}
          style={{
            backgroundColor: reservations.time15
              ? reservations.bgActive
              : reservations.bgInActive,
          }}
          className="reservations-form-15"
        >
          15
        </div>
        <div
          onClick={time30Click}
          style={{
            backgroundColor: reservations.time30
              ? reservations.bgActive
              : reservations.bgInActive,
          }}
          className="reservations-form-30"
        >
          30
        </div>
        <div
          onClick={time45Click}
          style={{
            backgroundColor: reservations.time45
              ? reservations.bgActive
              : reservations.bgInActive,
          }}
          className="reservations-form-45"
        >
          45
        </div>
        <div onClick={showForm} className="reserve-button">
          Reserve
        </div>
        <div onClick={cancel} className="cancel-button">
          Cancel
        </div>
      </form>
      {reservations.showForm ? (
        <form className="reserve-form">
          <input
            type="text"
            className="reservation-name"
            required
            placeholder="Name"
            name="name"
          />
          <input
            type="text"
            className="reservation-phone"
            required
            placeholder="Phone"
            name="name"
          />
          <button>Submit</button>
        </form>
      ) : null}
    </div>
  );
}
