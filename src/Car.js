function Card(props) {
    return (
        <div>
            {props.children} {/*same slot in vuejs*/}
        </div>
    )
}

export default Card;