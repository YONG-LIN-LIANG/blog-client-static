import {
  LinkedinFilled,
  GithubFilled,
  MediumSquareFilled,
} from "@ant-design/icons";
import MarkdownField from "@/components/Markdown";
import { useState } from "react";
import { useAppDispatch } from "@/features/hooks";
import { on } from "@/features/dialog/dialogSlice";
import { portfolio } from "@/utils/portfolio";

const ShowcaseWindow = () => {
  const dispatch = useAppDispatch();
  const [tabInfo, setTabInfo] = useState({
    activate: 0,
    list: [
      {
        id: 0,
        name: "project",
      },
      {
        id: 1,
        name: "about",
      },
    ],
  });
  const media_list = [
    {
      component: <LinkedinFilled className="text-[30px] text-[#E7B345]" />,
      url: "https://www.linkedin.com/in/yonglin-liang",
    },
    {
      component: <MediumSquareFilled className="text-[30px] text-[#E7B345]" />,
      url: "https://medium.com/@steven841221",
    },
    {
      component: <GithubFilled className="text-[30px] text-[#E7B345]" />,
      url: "https://github.com/YONG-LIN-LIANG",
    },
  ];

  const handleOpenDialog = (content: string) => {
    document.body.style.overflow = "hidden";
    const projectInfo = {
      type: "main",
      dialogName: "project",
      content,
    };
    dispatch(on(projectInfo));
  };

  return (
    <section
      className="mx-auto w-[900px] overflow-hidden rounded-[10px]
        bg-[#D9D9D9]/[.7] text-[#000]"
    >
      <div
        id="project"
        className="flex items-center justify-between bg-[#202243]/[.8]"
      >
        <ul className="flex">
          {tabInfo.list.map((i) => (
            <li
              onClick={() =>
                setTabInfo((prev) => ({ ...prev, activate: i.id }))
              }
              className={`flex-center h-[60px] w-[120px] cursor-pointer
              uppercase ${i.id === tabInfo.activate ? "bg-[#D9D9D9]/[.7]" : ""}`}
            >
              {i.name}
            </li>
          ))}
        </ul>
        <div className="pr-[20px]">
          {media_list.map((i, idx) => (
            <a
              key={idx}
              href={i.url}
              target="_blank"
              className="[&:not(:first-child)]:ml-[12px]"
            >
              {i.component}
            </a>
          ))}
        </div>
      </div>

      {tabInfo.activate === 0 ? (
        portfolio.data_engineer.subject_list.map((i) => (
          <div className="p-[40px]">
            <h2
              className="mb-[20px] text-center text-[20px] font-extrabold
                tracking-wide"
            >
              {i.subject}
            </h2>
            <div
              className={`mt-[50px] grid ${
                i.project_list.length > 1 ? "grid-cols-2" : "mx-auto w-[500px]"
                } gap-12`}
            >
              {i.project_list.map((p) => (
                <div className="flex flex-col items-center">
                  <div className="aspect-[6/4] overflow-hidden rounded-[20px]">
                    <img
                      className="h-full w-full object-cover"
                      src={p.thumbnail}
                      alt="project thumbnail"
                    />
                  </div>
                  <button
                    className="mx-auto mt-[24px] h-[50px] w-[200px] border-[2px]
                      border-[#202243] uppercase"
                    onClick={() => handleOpenDialog(p.content)}
                  >
                    view project
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))
      ) : (
        <div className="aboutme min-h-[400px] p-[40px]">
          <MarkdownField markdown={portfolio.data_engineer.about} />
        </div>
      )}
    </section>
  );
};

export default ShowcaseWindow;
