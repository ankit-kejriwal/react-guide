
const person = (props) => {
    const {name, age} = props;
    return(
        <div>
            <h1>I am  {name} and i am {age} years old</h1>
            <h1>{props.children}</h1>    
        </div>
        
    )
}

export default person;