export default function DailyEvents() {
    const events = [
      { id: 1, title: 'Event 1', time: '10:00 AM' },
      { id: 2, title: 'Event 2', time: '12:00 PM' },
      { id: 3, title: 'Event 3', time: '02:00 PM' },
    ];
  
    return (
      <div className="mt-8">
        <h2 className="text-2xl font-bold">Today's Events</h2>
        <ul className="list-disc list-inside mt-4">
          {events.map(event => (
            <li key={event.id} className="mt-2">
              {event.time} - {event.title}
            </li>
          ))}
        </ul>
      </div>
    );
  }
  