const ScrollIndicator = () => {
  return (
    <div
      className="absolute left-0 right-0 top-[80px] z-[1000] mx-auto inline-flex
        h-[50px] w-[25px] rounded-[20px] border-2 border-white"
    >
      <div
        className="animate-moveWheel mx-auto inline-block h-[10px] w-[10px]
          rounded-full bg-white"
      ></div>
    </div>
  );
};

export default ScrollIndicator;
