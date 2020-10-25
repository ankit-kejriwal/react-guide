
const person = (props) => {
    const {name, age} = props;
    return(
        <div>
            <h1 onClick={props.click}>I am  {name} and i am {age} years old</h1>
            <h1>{props.children}</h1>
            <input type="text" name="text" id="text" value={props.name} onChange={props.change} />    
        </div>
        
    )
}

export default person;