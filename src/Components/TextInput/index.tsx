type textInputProp = {
  code: string;
  label: string;
};

const TextInput = (prop: textInputProp) => {
  return (
    <div className="py-2">
      <p>{prop.label}:</p>
      <input
        type="text"
        className="border border-black"
        name={prop.code}
        id={prop.code}
      />
    </div>
  );
};

export default TextInput;
