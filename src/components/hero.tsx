const navLinks = ["Company", "Solutions", "Projects", "Contact"];

export default function Hero() {
  return (
    <main className="min-h-screen bg-white">
      <nav className=" px-[124px] flex justify-between items-center">
        <img
          src="/images/logo.png"
          alt="logo"
          className="w-[100px] h-[100px]"
        />

        <div className="flex gap-[64px]">
          {navLinks.map((item, idx) => (
            <a className="text-black text-sm font-normal" key={idx} href="#">
              {item}
            </a>
          ))}
        </div>
      </nav>

      <div className="relative h-[calc(100vh-140px)] overflow-hidden rounded-3xl mx-[27px] ">
        <div className="absolute inset-0 z-0 rounded-3xl overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/video/background.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        <div className="relative z-10 h-full px-[100px] flex flex-col items-start pt-[40vh] gap-1">
          <h1 className="text-white text-5xl font-bold uppercase leading-tight font-unbounded">
            BUILD THE UNSEEN, <br />
            MOVE THE FUTURE!!!
          </h1>

          <div className=" flex flex-col gap-5">
            <p className="text-white text-xl font-normal max-w-[510px]">
              We use software intelligence to deploy modular systems that
              strengthen critical infrastructure.
            </p>
            <button className="bg-[#268fff] text-white px-5 py-3 rounded-[50px] font-semibold text-base hover:bg-blue-700 transition-colors w-fit cursor-pointer">
              Explore Our Work
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
