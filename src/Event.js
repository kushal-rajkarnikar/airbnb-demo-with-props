export default function Event(props) {
  console.log(props);
  return (
    <div className="event-block">
      <img src={props.imgSrc} />
      <br />
      {/* <img src="" /> */}
      {props.rating} ({props.numOfReviewers}) . {props.country} <br />
      {props.title}
      <br />
      <b>From ${props.price} </b> / per person
    </div>
  );
}
