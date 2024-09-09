import React, { useState } from "react";



const Todolist = () => {
    const [inputs, setInputs] = useState(['']); //El array con todos los imputs que ingresen

    const handleInput = (index, event) => {
        const newInputs = [...inputs];
        newInputs[index] = event.target.value;
        setInputs(newInputs);
    };

    const handleKey = (index, event) => {
        if (event.key === 'Enter' && inputs[index]) {
            setInputs([...inputs, inputs[index]]); //Permite agregar un input al array 
        }
    };

    const handleRemove = (index) => {
        const newInputs = inputs.filter((_, i) => i !== index);
        setInputs(newInputs);
    };

    return (
        <div className="text-center">
            <label htmlFor="input">
                <h1 className="display-3" style={{ fontFamily: "'roboto'", color: "black" }}>Todos</h1>
            </label>
            {inputs.map((input, index) => (
                <div className="container-fluid" key={index}
                    style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '10px' }}>

                    <input className="form-control" id="exampleFormControlInput1" placeholder="What do you want to do today?"
                        type="text"
                        value={input}
                        onChange={e => handleInput(index, e)}
                        onKeyDown={e => handleKey(index, e)}
                        style={{ display: 'block', marginRight: '0px' }}
                        readOnly={index !== 0} />
                    {index !== 0 && (
                        <a>
                            <button type="button" className="btn btn-danger float-end"
                                onClick={() => handleRemove(index)} style={{ cursor: 'pointer' }}>Delete</button></a>

                    )}
                </div>

            ))}

            <div className="numberTask">



                <button type="button" className="btn btn-primary position-relative">
                    Total task
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                        {inputs.length -1}
                        <span className="visually-hidden">unread messages</span>
                    </span>
                </button>


            </div>


        </div>
    );
};

export default Todolist;