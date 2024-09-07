import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { AiOutlinePlus } from 'react-icons/ai';
import './calendar.css';

const Calendar = () => {
  const [selectedMeeting, setSelectedMeeting] = useState(null);
  const [meetings, setMeetings] = useState([
    { id: 1, day: 'Mon', time: '9:00 AM', client: 'William Jones', status: 'Meeting' },
    { id: 2, day: 'Wed', time: '11:00 AM', client: 'William Jones', status: 'Meeting' },
    { id: 3, day: 'Fri', time: '1:00 PM', client: 'William Jones', status: 'Meeting' },
  ]);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    client: '',
    time: '',
    day: '',
  });

  const timeSlots = [
    '8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', 
    '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM'
  ];
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  const handleMeetingClick = (meeting) => {
    setSelectedMeeting(meeting);
  };

  const handleSlotClick = (time, day) => {
    setShowForm(true);
    setFormData({ ...formData, time, day });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const newMeeting = {
      id: meetings.length + 1,
      day: formData.day,
      time: formData.time,
      client: formData.client,
      status: 'Meeting',
    };
    setMeetings([...meetings, newMeeting]);
    setShowForm(false);
  };

  return (
    <div className="calendar-main-container">
      <div className="schedule-container">
        <header className="schedule-header">
          <div className="header-left">
            <h2 className='fw-bold fs-4 mx-3'>Schedules</h2>
            <div className="month-navigation">
              <FaChevronLeft />
              <span>January</span>
              <FaChevronRight />
            </div>
            <span className="date-range">01/01/24 - 07/01/24</span>
          </div>
          <div className="header-right">
            <button className="btn btn-white dropdown border-outline">Weekly</button>
            <button className="btn btn-primary">
              <AiOutlinePlus /> Add Meeting
            </button>
          </div>
        </header>
      </div>

      <div className="calendar-and-details">
        <div className="calendar-container">
          <div className="calendar-header">
            <div className="time-slot-header d-flex justify-content-center align-items-center "> Time</div>
            {days.map((day) => (
              <div key={day} className="time-slot-header d-flex justify-content-center align-items-center">
                {day}
              </div>
            ))}
          </div>

          <div className="calendar-body">
            {timeSlots.map((time) => (
              <div key={time} className="time-slot-row ">
                <div className="time-slot-label fw-light    ">{time}</div>
                {days.map((day) => (
                  <div key={`${day}-${time}`} className="day-slot  " onClick={() => handleSlotClick(time, day)}>
                    {meetings
                      .filter((meeting) => meeting.day === day && meeting.time === time)
                      .map((meeting) => (
                        <div
                          key={meeting.id}
                          className={`meeting ${meeting.status} text-white bg-primary` }
                          onClick={(e) => {
                            e.stopPropagation();
                            handleMeetingClick(meeting);
                          }}
                        >
                          {meeting.status === 'Blocked' ? 'Blocked' : `Meeting: ${meeting.client}`}
                        </div>
                      ))}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {selectedMeeting && (
          <div className="meeting-details">
            <img src="pic.png" alt="Trainer" className="trainer-image mx-5 mb-3" />
            <h3>{selectedMeeting.client}</h3>
            <div className="meeting-info">
              <p>Biceps Training</p>
              <p>{`${selectedMeeting.time}`}</p>
              <p>Recurring Meeting</p>
            </div>
            <div className="meeting-actions">
              <button className="btn btn-primary" style={{ borderRadius: '2px solid green' }}>Reschedule</button>
              <button className="cancel-button">Cancel Meeting</button>
              <button className="approve-button">Approve</button>
              <button className="decline-button">Decline</button>
            </div>
          </div>
        )}

        {showForm && (
          <div className="form-popup">
            <form onSubmit={handleFormSubmit}>
              <h3>Book a Slot</h3>
              <label>
                Client Name:
                <input
                  type="text"
                  className='form-control'
                  value={formData.client}
                  onChange={(e) => setFormData({ ...formData, client: e.target.value })}
                  required
                />
              </label>
              <label>
                Time Slot:
                <input
                  type="text"
                  className='form-control'
                  value={formData.time}
                  readOnly
                />
              </label>
              <label>
                Day:
                <input
                  type="text"
                  className='form-control'
                  value={formData.day}
                  readOnly
                />
              </label>
              <button type="submit btn btn-primary" className='btn btn-primary'>Book Slot</button>
              <button type="button btn btn-danger" className='btn btn-danger' onClick={() => setShowForm(false)}>Cancel</button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default Calendar;