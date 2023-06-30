import "./App.css";

const App = () => {
  return (
    <div className="bg-custom-main-bg min-h-screen px-5 flex items-center justify-center">
      <main className="bg-custom-card-bg rounded-2xl overflow-hidden p-6 shadow-lg max-w-xs">
        {/* Image Box */}
        <div className="rounded-lg overflow-hidden relative cursor-pointer group">
          {/* Image */}
          <img src="./images/image-equilibrium.jpg" alt="main image" />

          {/* Overlay on hover */}
          <div className="absolute inset-0 bg-custom-cyan/50 grid place-items-center my-transition opacity-0 group-hover:opacity-100">
            <img src="./images/icon-view.svg" alt="" />
          </div>
        </div>

        <h1 className="text-custom-white text-2xl font-[600] pt-6 pb-3 hover:text-custom-cyan my-transition">
          <a className="block" href="#">
            Equilibrium #3429
          </a>
        </h1>

        <p className="text-custom-soft-blue font-[300] text-md">
          Our Equilibrium collection promotes balance and calm.
        </p>

        <section className="flex-cb py-3">
          <div className="flex-cb space-x-2">
            <img src="./images/icon-ethereum.svg" alt="icon ethereum" />
            <span className="text-custom-cyan font-[600] text-sm">
              0.041 ETH
            </span>
          </div>

          <div className="flex-cb space-x-2">
            <img src="./images/icon-clock.svg" alt="icon clock" />
            <span className="text-custom-soft-blue font-[400] text-sm">
              3 days left
            </span>
          </div>
        </section>

        <hr className="mt-2 border-white/20" />

        <section className="flex-cb space-x-5 mt-5">
          <img
            src="./images/image-avatar.png"
            alt="avatar image"
            className="block h-8 w-h-8 rounded-full overflow-hidden border-[1px] border-custom-white/25"
          />

          <span className="flex-1 text-custom-soft-blue text-[1rem]">
            Creation of{" "}
            <a
              href="#"
              className="text-custom-white hover:text-custom-cyan my-transition"
            >
              Jules Wyvern
            </a>
          </span>
        </section>
      </main>
    </div>
  );
};

export default App;
