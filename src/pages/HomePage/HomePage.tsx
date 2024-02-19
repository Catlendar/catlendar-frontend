import TodoBox from '../../components/Common/TodoBox/TodoBox';
import MainCard from '../../components/MainCard/MainCard';

export default function HomePage() {
  return (
    <div style={{ boxShadow: 'rgba(255, 255, 0, 0.35) 0px 0px 5px 20px', width: '390px' }}>
      {/* <div style={{ height: '300px', backgroundColor: 'aqua' }}>ss</div> */}
      <MainCard />
      <TodoBox />
    </div>
  );
}
