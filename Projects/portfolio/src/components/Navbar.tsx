import TextReveal from './TextReveal';

const Navbar = () => {
  return (
    <nav className="fixed left-0 top-0 h-[6vh] w-full z-30 flex items-center justify-between px-12 ">
      <div className="leftNameSide">
        <TextReveal>
          <h3 className="text-[1.2rem]">Shahbaz Ahmed</h3>
        </TextReveal>
      </div>
      <div className="rightLinkSide flex items-center gap-[1.6rem]">
        <TextReveal>
          <h3 className="text-[1.1rem]">Home</h3>
        </TextReveal>
        <TextReveal>
          <h3 className="text-[1.1rem]">About</h3>
        </TextReveal>
        <TextReveal>
          <h3 className="text-[1.1rem]">Contact</h3>
        </TextReveal>
      </div>
    </nav>
  );
};

export default Navbar;
