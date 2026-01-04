import Badge from "./components/Badge";

function App() {
  return (
   <dev>
     <h2> Badgee</h2>
      <Badge label="Course" value="React" />
      <Badge label="Week" value={1}  />
      <Badge label="Topic" value="Props"/>
      <Badge label="Level" value="Beginner" />
   </dev>
  );
}

export default App;

