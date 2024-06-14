import heroImg from "../images/heroimg.png";
import './Home.css'

export default function Home() {
  return (
    <main className="mx-10">
      <section className="heroSection">
        <div style={{ backgroundImage: `url(${heroImg})` }} className="bg-cover bg-center h-screen pb-[25px] shadow-2xl md:relative ">
          <div className="backdrop-filter backdrop-blur-[13px] h-[inherit] flex flex-col justify-center">
            <div className="text-center ">
              <h1 className="uppercase text-5xl text-[#145289] font-semibold">
                Smart Tendering <br /> Platform
              </h1>
            </div>
            <div className="text-center ">
              <div className="brush-effect text-xl text-white">
                Simplify, Connect, Succeed in <span className="brush-text">Tendering Excellence</span>
              </div>

            </div>
          </div>

          <div className="border border-black items-center flex-col md:flex-row md:mx-auto flex md:items-center md:justify-around md:w-11/12 md:absolute bottom-[-42px] left-0 right-0 bg-[#fff] 
          rounded-md p-3
          ">
            <div className="w-full p-2">
              <input type="text " placeholder="Search" className="p-2 border w-full  border-black rounded-sm" />
            </div>
            <div className="w-full p-2">
              <input type="text" placeholder="Select a procurement" className="p-2 border w-full  border-black rounded-sm" />
            </div>
            <div className="w-full p-2">
              <input type="text" placeholder="Select a department" className="p-2 border w-full  border-black rounded-sm" />
            </div>
            <div className="w-full p-2">
              <button className="bg-[#145289] text-white p-3 rounded-md w-full ">Search</button>
            </div>
          </div>

        </div>
      </section>

      <section className="tendersSection flex flex-col gap-[75px] mt-[260px] md:mt-[90px] md:p-10">
        <div className="shadow-2xl  pb-2">
          <div className="flex justify-between transition-shadow drop-shadow-2xl ">
            <div>
              <p className="font-semibold">Tender Name</p>
            </div>
            <div>
              <p className="font-semibold">Starting Date</p>
              <br />
              <p className="font-semibold" >Due Date</p>
            </div>
          </div>

          <div className="flex justify-between mt-6 items-center">
            <div>
              <p className="font-semibold" >Place</p>
            </div>
            <div>
              <p className="font-semibold"  >TOT Reference NO</p>
            </div>
            <div>
              <button className="bg-[#145289] text-[#fff] p-2">View Details</button>
            </div>
          </div>
        </div>
        <div className="shadow-2xl  pb-2">
          <div className="flex justify-between transition-shadow drop-shadow-2xl ">
            <div>
              <p className="font-semibold">Tender Name</p>
            </div>
            <div>
              <p className="font-semibold">Starting Date</p>
              <br />
              <p className="font-semibold">Due Date</p>
            </div>
          </div>

          <div className="flex justify-between mt-6 items-center">
            <div>
              <p className="font-semibold">Place</p>
            </div>
            <div>
              <p className="font-semibold">TOT Reference NO</p>
            </div>
            <div>
              <button className="bg-[#145289] text-[#fff] p-2">View Details</button>
            </div>
          </div>
        </div>
        <div className="shadow-2xl  pb-2">
          <div className="flex justify-between transition-shadow drop-shadow-2xl ">
            <div>
              <p className="font-semibold">Tender Name</p>
            </div>
            <div>
              <p className="font-semibold">Starting Date</p>
              <br />
              <p className="font-semibold">Due Date</p>
            </div>
          </div>

          <div className="flex justify-between mt-6 items-center">
            <div>
              <p className="font-semibold">Place</p>
            </div>
            <div>
              <p className="font-semibold">TOT Reference NO</p>
            </div>
            <div>
              <button className="bg-[#145289] text-[#fff] p-2">View Details</button>
            </div>
          </div>
        </div>

      </section>

    </main>
  );
}