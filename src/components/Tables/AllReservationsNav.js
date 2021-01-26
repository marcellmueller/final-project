import { useEffect } from 'react';
import axios from 'axios';
import './AllReservationsNav.scss';

export default function ReservationsNav(props) {
  useEffect(() => {
    const day = getDay();
    props.setTab({
      ...props.tab,
      [day]: true,
    });
  }, []);

  const getDay = () => {
    const days = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
    const d = new Date();
    const dayName = days[d.getDay()];
    return dayName;
  };
  const monTab = () => {
    getDayReservations('mon');

    getDay();
    props.setTab({
      ...props.tab,
      mon: true,
      tue: false,
      wed: false,
      thu: false,
      fri: false,
      sat: false,
      sun: false,
      all: false,
    });
  };

  const tueTab = () => {
    getDayReservations('tue');

    props.setTab({
      ...props.tab,
      mon: false,
      tue: true,
      wed: false,
      thu: false,
      fri: false,
      sat: false,
      sun: false,
      all: false,
    });
  };

  const wedTab = () => {
    getDayReservations('wed');

    props.setTab({
      ...props.tab,
      mon: false,
      tue: false,
      wed: true,
      thu: false,
      fri: false,
      sat: false,
      sun: false,
      all: false,
    });
  };

  const thuTab = () => {
    getDayReservations('thu');

    props.setTab({
      ...props.tab,
      mon: false,
      tue: false,
      wed: false,
      thu: true,
      fri: false,
      sat: false,
      sun: false,
      all: false,
    });
  };

  const friTab = () => {
    getDayReservations('fri');

    props.setTab({
      ...props.tab,
      mon: false,
      tue: false,
      wed: false,
      thu: false,
      fri: true,
      sat: false,
      sun: false,
      all: false,
    });
  };

  const satTab = () => {
    getDayReservations('sat');

    props.setTab({
      ...props.tab,
      mon: false,
      tue: false,
      wed: false,
      thu: false,
      fri: false,
      sat: true,
      sun: false,
      all: false,
    });
  };

  const sunTab = () => {
    getDayReservations('sun');
    props.setTab({
      ...props.tab,
      mon: false,
      tue: false,
      wed: false,
      thu: false,
      fri: false,
      sat: false,
      sun: true,
      all: false,
    });
  };

  const getDayReservations = (dayName) => {
    const data = {
      day: dayName,
    };
    console.log(data);
    const promise = axios
      .post('/api/reservations/all', data)
      .then((response) => {
        props.setTables({
          ...props.tables,
          reservations: response.data,
        });
      })
      .catch(function (error) {
        console.log('Get reservations failed');
      });
    return promise;
  };

  return (
    <>
      <h1 className="all-reservations-title">All Reservations</h1>
      <nav className="reservations-nav-upper">
        <div
          onClick={monTab}
          style={{
            backgroundColor: props.tab.mon
              ? props.tab.bgActive
              : props.tab.bgInActive,
          }}
          className="reservations-nav-day"
          id="reservations-nav-mon"
        >
          Mon
        </div>
        <div
          onClick={tueTab}
          style={{
            backgroundColor: props.tab.tue
              ? props.tab.bgActive
              : props.tab.bgInActive,
          }}
          className="reservations-nav-day"
          id="reservations-nav-tue"
        >
          Tue
        </div>
        <div
          onClick={wedTab}
          style={{
            backgroundColor: props.tab.wed
              ? props.tab.bgActive
              : props.tab.bgInActive,
          }}
          className="reservations-nav-day"
          id="reservations-nav-wed"
        >
          Wed
        </div>
        <div
          onClick={thuTab}
          style={{
            backgroundColor: props.tab.thu
              ? props.tab.bgActive
              : props.tab.bgInActive,
          }}
          className="reservations-nav-day"
          id="reservations-nav-thurs"
        >
          Thu
        </div>
      </nav>
      <nav className="reservations-nav-lower">
        <div
          onClick={friTab}
          style={{
            backgroundColor: props.tab.fri
              ? props.tab.bgActive
              : props.tab.bgInActive,
          }}
          className="reservations-nav-day"
          id="reservations-nav-fri"
        >
          Fri
        </div>
        <div
          onClick={satTab}
          style={{
            backgroundColor: props.tab.sat
              ? props.tab.bgActive
              : props.tab.bgInActive,
          }}
          className="reservations-nav-day"
          id="reservations-nav-sat"
        >
          Sat
        </div>
        <div
          onClick={sunTab}
          style={{
            backgroundColor: props.tab.sun
              ? props.tab.bgActive
              : props.tab.bgInActive,
          }}
          className="reservations-nav-day"
          id="reservations-nav-sun"
        >
          Sun
        </div>
      </nav>
    </>
  );
}
