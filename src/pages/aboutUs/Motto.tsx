import poverty from "../../assets/images/poverty.png";
import unite from "../../assets/images/unite.png";
import impact from "../../assets/images/impact.png";
import { FaLongArrowAltRight } from "react-icons/fa";

const Motto = () => {
  return (
    <div className="mx-6 md:mx-12 grid py-6 grid-cols-3 gap-4">
      <div className="flex flex-col">
        <img className="h-24 w-32 " src={impact} alt="" />
        <h1 className="font-bold py-6">Tackling Poverty</h1>
        <p className="font-extralight">
          Every action we take is geared towards creating meaningful and
          measurable change. We strive to make a tangible difference in people's
          lives, leaving a lasting impact on society.
        </p>
        <button className="flex mt-auto text-green-500 text-xl py-6 items-center gap-3">
          LEARN MORE <FaLongArrowAltRight />
        </button>
      </div>
      <div>
        <img className="h-24 w-32 " src={unite} alt="" />
        <h1 className="font-bold py-6">Make Big Impact</h1>
        <p className="font-extralight">
          Our mission transcends boundaries and divisions, aiming to foster
          unity and inclusivity. By bringing people together from all walks of
          life, we cultivate a sense of solidarity and collective responsibility
          towards building a more equitable and harmonious world.
        </p>
        <button className="flex text-green-500 text-xl py-6 items-center gap-3">
          LEARN MORE <FaLongArrowAltRight />
        </button>
      </div>
      <div className="flex flex-col ">
        <img className="h-24 w-32 " src={poverty} alt="" />
        <h1 className="font-bold py-6">Unite The Society</h1>
        <p className="font-extralight">
          We are dedicated to eradicating poverty through sustainable
          initiatives, empowering individuals and communities to break free from
          the cycle of deprivation and build a better future.
        </p>
        <button className="flex mt-auto text-green-500 text-xl py-6 items-center gap-3">
          LEARN MORE <FaLongArrowAltRight />
        </button>
      </div>
    </div>
  );
};

export default Motto;
