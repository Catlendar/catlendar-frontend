import ReactCalendar from '../../components/Calendar/ReactCalendar';
import useCompleted from '../../hooks/useCompleted';

export default function CalendarPage() {
  const { date, setDate, dataGroup } = useCompleted();

  return <div>{dataGroup && <ReactCalendar value={date} setValue={setDate} />}</div>;
}
