
export default function ToggleFilterButton(props) {

    let showState = props.showAll
        ? "showing all"
        : "showing only open items";

    let toggleAction = event => {
        event.preventDefault();
        props.action();
    }

    return(
        <a href='#toggle-filter' onClick={toggleAction}>Toggle Filter ({showState})</a>
    );
}