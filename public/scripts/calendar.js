$(document).ready(function () {
    /************************************
	*				Default				*
	************************************/
    $('#fc-default').fullCalendar({
		defaultDate: '2019-04-04',
		editable: true,
		eventLimit: true, // allow "more" link when too many events
		events: [
			{
				title: 'All Day Event',
				start: '2019-04-01'
			},
			{
				title: 'Long Event',
				start: '2019-04-07',
				end: '2019-04-15'
			},
			{
				id: 999,
				title: 'Repeating Event',
				start: '2019-04-09T16:00:00'
			},
			{
				id: 999,
				title: 'Repeating Event',
				start: '2019-04-16T16:00:00'
			},
			{
				title: 'Conference',
				start: '2019-04-11',
				end: '2019-04-13'
			},
			{
				title: 'Meeting',
				start: '2019-04-12T10:30:00',
				end: '2019-04-12T12:30:00'
			},
			{
				title: 'Lunch',
				start: '2019-04-12T12:00:00'
			},
			{
				title: 'Meeting',
				start: '2019-04-12T14:30:00'
			},
			{
				title: 'Happy Hour',
				start: '2019-04-12T17:30:00'
			},
			{
				title: 'Dinner',
				start: '2019-04-12T20:00:00'
			},
			{
				title: 'Birthday Party',
				start: '2019-04-13T07:00:00'
			},
			{
				title: 'Click for Google',
				url: 'http://google.com/',
				start: '2019-04-28'
			}
		]
	});
});