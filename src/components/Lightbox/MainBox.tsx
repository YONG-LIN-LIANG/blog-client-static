import { FC } from "react";
import MarkdownField from "../Markdown";
interface MainProps {
  content: string;
}

const MainBox: FC<MainProps> = ({ content }): JSX.Element => {
  return (
    <section
      className={`main_box relative mx-auto max-w-[90%] rounded-[10px]
        border-[4px] bg-[#fff] px-[40px] py-[28px] text-[#000] lg:w-[60%]`}
    >
      <MarkdownField markdown={content} />
    </section>
  );
};

export default MainBox;
