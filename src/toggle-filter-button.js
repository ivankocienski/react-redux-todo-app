
export default function ToggleFilterButton(props) {

    let showState = props.showAll
        ? "showing all"
        : "showing only open items";

    return(
        <a href='#' onClick={props.action}>Toggle Filter ({showState})</a>
    );
}