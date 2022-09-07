import { useEffect, useState } from "react";

function App() {
  const [activeSection, setActiveSection] = useState(0);
  const sections = [1,2,3,4,5,6,7,8,9];

  const decrement = () => activeSection > 0 && setActiveSection(activeSection - 1);
  const increment = () => activeSection < sections.length - 1 && setActiveSection(activeSection + 1);

  useEffect(() => {
    const handleKeypress = ({ key }: any) => {
      if (key === 'ArrowLeft') {
        decrement();
      } else if (key === 'ArrowRight') {
        increment();
      }
    };
    window.addEventListener('keydown', handleKeypress);
    return () => {
      window.removeEventListener('keydown', handleKeypress);
    };
  }, [activeSection]);

  console.log(activeSection);


  return (
    <div className="progress">
      {sections.map((s, i) => <div key={i} className={`section${i <= activeSection ? ' active' : ''}`}></div>)}
    </div>
  );
}

export default App;
