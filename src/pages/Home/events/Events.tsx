import Event from "./Event";

const Events = () => {
  return (
    <div className="p-12">
      <h1 className="md:text-4xl font-bold text-xl text-center">
        Events Schedule Upcoming <br /> Events.
      </h1>
      <div className="grid grid-cols-2 mt-6 gap-5">
        <Event
          image={
            "https://html.themehealer.com/chioary/assets/images/event/event-1-1.jpg"
          }
          title={"Summer Campain For Poor"}
          poster={"By Brooklyn Simmons 09:05AM - 01:05 AM"}
        ></Event>
        <Event
          image={
            "https://html.themehealer.com/chioary/assets/images/event/event-1-2.jpg"
          }
          title={"Learn & Thrive Campaign"}
          poster={"By Brooklyn Simmons 09:05AM - 01:05 AM"}
        ></Event>
        <Event
          image={
            "https://html.themehealer.com/chioary/assets/images/event/event-1-4.jpg"
          }
          title={"Sustain the Planet Drive"}
          poster={"By Brooklyn Simmons 09:05AM - 01:05 AM"}
        ></Event>
        <Event
          image={
            "https://html.themehealer.com/chioary/assets/images/event/event-1-3.jpg"
          }
          title={"EcoKindness Campaign"}
          poster={"By Brooklyn Simmons 09:05AM - 01:05 AM"}
        ></Event>
      </div>
    </div>
  );
};

export default Events;
