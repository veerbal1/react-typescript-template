import './styles.css';

const App = () => {
  return (
    <>
      <h1>App {process.env.name}</h1>
      <TestComponent text='Test Component' />
    </>
  );
};

type TestComponentProps = {
  text: string;
};

const TestComponent = ({ text }: TestComponentProps) => {
  return <h1>{text}</h1>;
};

export default App;
