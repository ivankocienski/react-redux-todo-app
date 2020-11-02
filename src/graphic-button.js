
export default function GraphicButton(props) {    
    return(
        <button onClick={props.action}>
            <img src={props.source} alt={props.title} title={props.title} />
        </button>
    );
}