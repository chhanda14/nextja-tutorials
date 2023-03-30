import Image from 'next/image';
import Link from 'next/link';
const AllEvents = ({ data }) => {
  return (
    <div className="events_page">
      <h1>Events Page</h1>

      <div>
        {data.map((ev) => (
          <Link className="card" key={ev.id} href={`/events/${ev.id}`} passHref>
            <Image width={300} height={'300'} alt={ev.title} src={ev.image} />
            <h2>{ev.title}</h2>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AllEvents;
