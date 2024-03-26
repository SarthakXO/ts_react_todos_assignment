import "./App.css";
interface TodosProp {
  title: string;
  desc: string;
}
function App() {
  const title = "Sarthak";
  const desc = "Sarthak Todo";
  return (
    <div>
      <Todos title={title} desc={desc} />
    </div>
  );
}

//create a component that takes todos as an input and renders them

const Todos = (props: TodosProp) => {
  return (
    <div>
      <h1>{props.title}</h1>
      <h2>{props.desc}</h2>
    </div>
  );
};
export default App;
