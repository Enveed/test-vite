import { TextInput } from "./Components";
import useStore from "./Store";

function App() {
  const { globalData } = useStore();
  console.log(globalData);
  return (
    <>
      <TextInput
        code="firstName"
        label="First Name"
        value={globalData["firstName"]}
      />
      <TextInput
        code="lastName"
        label="Last Name"
        value={globalData["lastName"]}
      />
    </>
  );
}

export default App;
