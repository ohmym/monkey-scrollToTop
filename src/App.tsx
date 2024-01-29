import clsx from 'clsx';
import { useWindowScroll } from 'react-use';
import './App.css';

function App() {
  const { y } = useWindowScroll();

  const wrapperCls = clsx('fixed bottom-8 right-8 w-10 h-10 bg-black/60 text-white rounded-full cursor-pointer', {
    hidden: y < 300,
  });

  const onClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className={wrapperCls} onClick={onClick}>
      <div className='w-full h-full flex justify-center items-center'>Top</div>
    </div>
  );
}

export default App;
