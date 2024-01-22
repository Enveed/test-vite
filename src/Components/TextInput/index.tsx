import useStore from "../../Store";

type textInputProp = {
  code: string;
  label: string;
  value: string;
};

const TextInput = (prop: textInputProp) => {
  const { setGlobalData } = useStore();
  const { code, label, value } = prop;

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGlobalData(code, e.target.value);
  };

  return (
    <div className="py-2">
      <p>{label}:</p>
      <input
        placeholder={`Please enter: `}
        type="text"
        className="border border-black"
        name={prop.code}
        id={prop.code}
        onChange={onChangeHandler}
        value={value}
      />
    </div>
  );
};

export default TextInput;
