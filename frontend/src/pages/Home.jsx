import heroImg from "../images/heroimg.png";

export default function Home() {
  return (
    <main>
      <div className="pt-[85px] pb-[25px] pl-5 pr-5 shadow-2xl">
        <div className="w-[50%] text-center ">
          <h1 className="uppercase text-[64px] text-[#145289] font-semibold">
            Smart Tendering <br /> Platform
          </h1>
        </div>
        <div className="grid grid-cols-2  mb-2  ">
          <div className="">
            <p className="text-[20px]">
              Smart tendering refers to the use of advanced technologies like
              artificial intelligence, machine learning, and data analytics in
              the procurement process. It streamlines the bidding process by
              automating tasks such as bid evaluation, supplier selection, and
              contract management. By leveraging data insights, smart tendering
              helps organizations make more informed decisions, reduce errors,
              and improve efficiency. It also enhances transparency and fairness
              by ensuring compliance with regulations and standards throughout
              the tendering cycle. Overall, smart tendering revolutionizes
              procurement by optimizing resource allocation and driving better
              outcomes for both
            </p>
            <p></p>
          </div>
          <div className="self-end ">
            <img src={heroImg} alt="hero-img" height="0px" />
          </div>
        </div>
      </div>
      <br />
    </main>
  );
}
