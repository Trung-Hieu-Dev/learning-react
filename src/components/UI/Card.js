function Card(props) {

    var classes = props.className;

    return (
        <div className={classes}>
            {props.children} {/*same slot in vuejs*/}
        </div>
    )
}

export default Card;