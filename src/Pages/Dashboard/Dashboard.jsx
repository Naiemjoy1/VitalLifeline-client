const Dashboard = () => {
  return (
    <div className="bg-[#b5c2ca] min-h-[calc(100vh-246px)]">
      <div className="container mx-auto py-12 flex gap-4">
        <div className="w-1/4 bg-[#eff3f4] px-10 py-6 rounded-xl flex flex-col justify-between gap-5">
          <section>
            <p className=" uppercase font-bold">blood hero</p>
            <div className="divider"></div>
          </section>
          <section>
            <p>pages</p>
            <p>pages</p>
            <p>pages</p>
            <p>pages</p>
          </section>
          <section className="flex flex-col items-center text-center">
            <div className="avatar online">
              <div className="w-14 rounded-full">
                <img
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                  alt="Profile"
                />
              </div>
            </div>
            <p>Naiem Hasan</p>
            <p>naiemunhasan@gmail.com</p>
          </section>
        </div>
        <div className="w-3/4 bg-white px-10 py-6 rounded-xl">right side</div>
      </div>
    </div>
  );
};

export default Dashboard;
