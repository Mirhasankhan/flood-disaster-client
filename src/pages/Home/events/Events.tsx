import Event from "./Event";

const Events = () => {
  return (
    <div className="px-4 md:px-12">
      <h1 className="md:text-4xl py-12 font-bold text-xl text-center">
        Our Schedule Of Upcoming <br /> Campains.
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 mt-6 gap-5">
        <Event
          time="21 February"
          image={
            "https://html.themehealer.com/chioary/assets/images/event/event-1-1.jpg"
          }
          title={"Summer Campain For Poor"}
          poster={"By Pablo Morales 09:05AM - 01:05 AM"}
        ></Event>
        <Event
          time="1 January"
          image={
            "https://html.themehealer.com/chioary/assets/images/event/event-1-2.jpg"
          }
          title={"Learn & Thrive Campaign"}
          poster={"By Lauren 09:05AM - 01:05 AM"}
        ></Event>
        <Event
          time="30 March"
          image={
            "https://html.themehealer.com/chioary/assets/images/event/event-1-4.jpg"
          }
          title={"Sustain the Planet Drive"}
          poster={"By Pablo Morales 09:05AM - 01:05 AM"}
        ></Event>
        <Event
          time="24 July"
          image={
            "https://html.themehealer.com/chioary/assets/images/event/event-1-3.jpg"
          }
          title={"EcoKindness Campaign"}
          poster={"By Lauren 09:05AM - 01:05 AM"}
        ></Event>
      </div>
    </div>
  );
};

export default Events;
