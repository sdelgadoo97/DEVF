function InfoPersona (props) {
const {info} = props;
console.log(info);

if (props.campo === 'Hobbies') {

    const hobbies = info.split(', ');

    return (
        <div className = 'info_container'>
            <strong>{props.campo}: 
            </strong><span className="list_hobbies">{hobbies.map((hobby, index) => <li key={index}>{hobby}</li>)}</span>
         </div>
    );
} else {
    return (
        <div className = 'info_container'>
            <strong>{props.campo}: </strong><span>{info}</span>
         </div>
    );
}
}

export default InfoPersona