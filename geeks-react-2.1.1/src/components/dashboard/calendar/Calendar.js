// import node module libraries
import { Fragment, useState, useRef, useEffect } from 'react';
import { Col, Row, Breadcrumb, Card, Button } from 'react-bootstrap';

// import full calendar and it's plugins
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import interactionPlugin from '@fullcalendar/interaction';

// import sub components
import AddEditEvent from './AddEditEvent';

// import required data files
import { EventsData } from 'data/dashboard/calendar/EventsData';

const Calendar = () => {
	// Define required states
	const [showEventOffcanvas, setShowEventOffcanvas] = useState(false);
	const [isEditEvent, setIsEditEvent] = useState(false);
	const [calendarApi, setCalendarApi] = useState(null);
	const [selectedEvent, setSelectedEvent] = useState();

	// Methods / Functions
	const handleCloseEventOffcanvas = () => setShowEventOffcanvas(false);

	// Calendar Refs
	const calendarRef = useRef(null);

	// useEffect hook to check calendarApi Update
	useEffect(() => {
		if (calendarApi === null) {
			setCalendarApi(calendarRef.current.getApi());
		}
	}, [calendarApi]);

	// Blank Event Object
	var date = new Date();
	const blankEvent = {
		title: '',
		start: date.setDate(date.getDate()),
		end: date.setDate(date.getDate() + 1),
		allDay: false,
		url: '',
		extendedProps: {
			category: '',
			location: '',
			description: ''
		}
	};

	// Calendar Options or Properties
	const calendarOptions = {
		ref: calendarRef,
		events: EventsData,
		plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin, listPlugin],
		initialView: 'dayGridMonth',
		headerToolbar: {
			left: 'prev,next today',
			center: 'title',
			right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
		},
		editable: true,
		eventResizableFromStart: true,
		dayMaxEvents: 2,
		navLinks: true,
		eventClick({ event: clickedEvent }) {
			setIsEditEvent(true);
			setShowEventOffcanvas(true);
			setSelectedEvent(clickedEvent);
		},
		dateClick(info) {
			const ev = blankEvent;
			var date = new Date(info.date);
			date.setDate(date.getDate() + 1);
			ev.start = info.date;
			ev.end = date;
			setSelectedEvent(ev);
			setIsEditEvent(false);
			setShowEventOffcanvas(true);
		},
		eventClassNames({ event: calendarEvent }) {
			return [`text-white bg-${calendarEvent.extendedProps.category}`];
		}
	};

	return (
		<Fragment>
			<Row>
				<Col lg={12} md={12} sm={12}>
					<div className="border-bottom pb-4 mb-4 d-md-flex align-items-center justify-content-between">
						<div className="mb-3 mb-md-0">
							<h1 className="mb-1 h2 fw-bold">Calendar</h1>
							<Breadcrumb>
								<Breadcrumb.Item href="#">Dashboard</Breadcrumb.Item>
								<Breadcrumb.Item active>Calendar</Breadcrumb.Item>
							</Breadcrumb>
						</div>
						<div>
							<Button
								onClick={() => {
									setIsEditEvent(false);
									setSelectedEvent(blankEvent);
									setShowEventOffcanvas(true);
								}}
							>
								Create new Events
							</Button>

							<AddEditEvent
								show={showEventOffcanvas}
								setShowEventOffcanvas={setShowEventOffcanvas}
								onHide={handleCloseEventOffcanvas}
								calendarApi={calendarApi}
								isEditEvent={isEditEvent}
								selectedEvent={selectedEvent}
							/>
						</div>
					</div>
				</Col>
			</Row>

			<Row>
				<Col xl={12} lg={12} md={12} xs={12}>
					<Card>
						{/* Calendar */}
						<FullCalendar {...calendarOptions} />
					</Card>
				</Col>
			</Row>
		</Fragment>
	);
};

export default Calendar;
