export default function Index() {
  const item = {
    text: 'Wash clothes',
    complete: false,
    important: true
  };
  return <TodoItem {...item} />;
}

function TodoItem({ text, completed, important }) {
  const [textState, setTextState] = useState(text);
  const [completedState, setCompletedState] = useState(completed);
  useEffect(() => {
    setTextState(`${text} - ${new Date().toLocaleTimeString()}`);
  }, []);
  return (
    <div
      className={completedState ? 'completed' : ''}
      onClick={() => {
        setCompletedState(!completedState);
      }}
    >
      {important ? '*' : ''}
      {text}
    </div>
  );
}
