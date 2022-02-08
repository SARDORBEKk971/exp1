const Form = ( { colorValue, hexValue, isColorValue } ) => {
  return (
    <section className='square' style={{
        backgroundColor: colorValue,
        color: isColorValue ? "#000" : "#fff"
        }}>
        <p>{colorValue ? colorValue : 'Empty Value'}</p>
        <p>{hexValue ? hexValue : null}</p>
    </section>
  );
};

export default Form;
