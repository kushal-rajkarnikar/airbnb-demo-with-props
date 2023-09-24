import Event from "./Event";

export default function Content() {
  return (
    <div className="container">
      <div className="flex">
        <Event
          imgSrc="life.png"
          rating={5.0}
          numOfReviewers={6}
          country="USA"
          title="Life Lessons with Katie Zafers"
          price={136}
        />
        <Event
          imgSrc="learn.png"
          rating={5.0}
          numOfReviewers={30}
          country="USA"
          title="Learn Wedding Photography"
          price={125}
        />
        <Event
          imgSrc="mountain-biking.png"
          rating={4.8}
          numOfReviewers={2}
          country="USA"
          title="Group Moutain Biking"
          price={50}
        />
      </div>
    </div>
  );
}
