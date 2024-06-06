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
            Welcome to Smart tenders, your premier platform for seamless tendering and procurement solutions. Whether you are a business looking to post or bid on tenders, we streamline the process with our intuitive and user-friendly interface. Our platform ensures transparency, efficiency, and accessibility, 
            connecting you to the right opportunities effortlessly. Join Smart tenders today and take your tendering experience to the next level.
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
