// Calendar.jsx
import React, { useState } from 'react';
import './Calendar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import {
  Calendar as BigCalendar,
  dateFnsLocalizer,
} from 'react-big-calendar';
import format from 'date-fns/format';
import parse from 'date-fns/parse';
import startOfWeek from 'date-fns/startOfWeek';
import getDay from 'date-fns/getDay';
import fr from 'date-fns/locale/fr';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const locales = { fr };
const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
  locale: 'fr',
});

const events = [
  {
    title: 'Insta Post',
    start: new Date(2025, 7, 15, 9, 0),
    end: new Date(2025, 7, 15, 9, 30),
  },
  
  {
    title: 'Tweet',
    start: new Date(2025, 7, 18, 16, 0),
    end: new Date(2025, 7, 18, 16, 30),
  },
  {
    title: 'Insta Story',
    start: new Date(2025, 7, 22, 11, 30),
    end: new Date(2025, 7, 22, 12, 0),
  },
];

const Calendar = () => {
  const [view, setView] = useState('month'); // current view
  const [date, setDate] = useState(new Date()); // current date displayed

  return (
    <div className="main-content calendar-page">
      <div className="calendar-header">
        <div>
          <h1>Calendrier</h1>
          <p>Planifiez et visualisez vos publications sociales</p>
        </div>
        <button className="schedule-btn">
          <FontAwesomeIcon icon={faPlus} /> Programmer une publication
        </button>
      </div>

      <div className="calendar-content">
       <BigCalendar
       localizer={localizer}
       events={events}
       startAccessor="start"
       endAccessor="end"
       toolbar={true}
       views={['month', 'week', 'day', 'agenda']}
       view={view}
       onView={setView}
       date={date}
       onNavigate={setDate}
       style={{ height: '100%', backgroundColor: 'white', padding: '1rem', borderRadius: '16px' }}
  />
</div>

    </div>
  );
};

export default Calendar;
