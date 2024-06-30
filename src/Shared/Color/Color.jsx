const Color = () => {
  return (
    <div className="my-10">
      <p className=" text-center">Color Schemes</p>
      <div className="grid grid-cols-2 gap-4 space-y-4">
        <div className="w-1/2 space-y-4">
          <p>1. Classic and Professional</p>
          <section className="grid grid-cols-2 gap-4">
            <button className="btn bg-[#0A192F] text-white">
              Primary Color: Navy Blue (#0A192F)
            </button>
            <button className="btn bg-[#00A9E0] text-white">
              Secondary Color: Sky Blue (#00A9E0)
            </button>
            <button className="btn bg-[#FFFFFF]">
              Accent Color: White (#FFFFFF)
            </button>
            <button className="btn bg-[#F5F5F5]">
              Background Color: Light Gray (#F5F5F5)
            </button>
            <button className="btn bg-[#333333] text-white">
              Text Color: Dark Gray (#333333)
            </button>
          </section>
        </div>
        <div className="w-1/2 space-y-4">
          <p>2. Modern and Minimalistic</p>
          <section className="grid grid-cols-2 gap-4">
            <button className="btn bg-[#333333] text-white">
              Primary Color: Charcoal (#333333)
            </button>
            <button className="btn bg-[#E1E1E1]">
              Secondary Color: Soft Gray (#E1E1E1)
            </button>
            <button className="btn bg-[#FF6F61] text-white">
              Accent Color: Coral (#FF6F61)
            </button>
            <button className="btn bg-[#FFFFFF]">
              Background Color: White (#FFFFFF)
            </button>
            <button className="btn bg-[#000000] text-white">
              Text Color: Black (#000000)
            </button>
          </section>
        </div>
        <div className="w-1/2 space-y-4">
          <p>3. Vibrant and Creative</p>
          <section className="grid grid-cols-2 gap-4">
            <button className="btn bg-[#6A0DAD] text-white">
              Primary Color: Purple (#6A0DAD)
            </button>
            <button className="btn bg-[#008080] text-white">
              Secondary Color: Teal (#008080)
            </button>
            <button className="btn bg-[#FFD700]">
              Accent Color: Yellow (#FFD700)
            </button>
            <button className="btn bg-[#FFFFFF]">
              Background Color: White (#FFFFFF)
            </button>
            <button className="btn bg-[#4B0082] text-white">
              Text Color: Dark Purple (#4B0082)
            </button>
          </section>
        </div>
        <div className="w-1/2 space-y-4">
          <p>4. Clean and Elegant</p>
          <section className="grid grid-cols-2 gap-4">
            <button className="btn bg-[#013220] text-white">
              Primary Color: Dark Green (#013220)
            </button>
            <button className="btn bg-[#9DC183] text-white">
              Secondary Color: Sage Green (#9DC183)
            </button>
            <button className="btn bg-[#FFD700]">
              Accent Color: Gold (#FFD700)
            </button>
            <button className="btn bg-[#FFFFFF]">
              Background Color: White (#FFFFFF)
            </button>
            <button className="btn bg-[#333333] text-white">
              Text Color: Charcoal (#333333)
            </button>
          </section>
        </div>
        <div className="w-1/2 space-y-4">
          <p>5. Clean and Elegant</p>
          <section className="grid grid-cols-2 gap-4">
            <button className="btn bg-[#12B788] text-white">
              Usage: Used for primary buttons, links, and highlights.
            </button>
            <button className="btn bg-[#0a0d37] text-white">
              Used for secondary buttons, icons, and hover states.
            </button>
            <button className="btn bg-[#F7F7F7]">
              Usage: Used for the main background to maintain a clean and
              minimal look.
            </button>
            <button className="btn bg-[#333333]">
              Usage: Used for main text to ensure readability.
            </button>
            <button className="btn bg-[#FF6363] text-white">
              Usage: Used for accents such as small icons or elements that need
              to stand out.
            </button>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Color;
