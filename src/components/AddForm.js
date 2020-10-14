import React, { useState }  from 'react';

function AddForm({initialState}) {

    const [inputText,setInputText] = useState('')
    const [listInputText,setListInputText] = useState(initialState)



    return (
        <div className="App">


            <input value={inputText} onChange={event => setInputText(event.target.value)}/>
            <h1>{inputText}</h1>

            {listInputText.map(item => <div key={item.id}>{item.article}</div>)}

            <button
                onClick={() => {
                    setListInputText([...listInputText,{id: listInputText.length + 1,article: inputText}]);
                }}
            >Hier klicken!</button>

            <button
                onClick={() => {
                    console.log(listInputText)
                }}
            >Output Console!</button>

        </div>

    );
}

export default AddForm;
