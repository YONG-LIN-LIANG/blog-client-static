import { useState } from "react";
import {
  LinkedinFilled,
  GithubFilled,
  MediumSquareFilled,
} from "@ant-design/icons";
const Footer = () => {
  const [footerInfo, _] = useState([
    {
      title: "location",
      content: "Melbourne, VIC 3000",
    },
    {
      title: "email",
      content: "steven@stevenliang.tech",
    },
    {
      title: "phone",
      content: "+61468718775",
    },
    {
      title: "social media",
      content: [
        {
          component: <LinkedinFilled className="text-[20px] text-[#E7B345]" />,
          url: "https://www.linkedin.com/in/yonglin-liang",
        },
        {
          component: (
            <MediumSquareFilled className="text-[20px] text-[#E7B345]" />
          ),
          url: "https://medium.com/@steven841221",
        },
        {
          component: <GithubFilled className="text-[20px] text-[#E7B345]" />,
          url: "https://github.com/YONG-LIN-LIANG",
        },
      ],
    },
  ]);
  return (
    <section
      className="relative mt-[150px] h-[520px] overflow-hidden py-[100px]
        sm:h-[400px]"
    >
      <div
        className="glow-effect moon absolute -left-[200px] -right-[200px]
          mx-auto h-[1000px] w-[700px] rounded-full md:left-0 md:right-0
          lg:w-[1000px]"
      ></div>

      <ul
        className="absolute left-0 right-0 top-[150px] z-[1000] mx-auto grid
          w-[200px] gap-8 text-center sm:top-[200px] sm:w-[300px] md:w-[500px]
          md:grid-cols-2"
      >
        {footerInfo.map((i, idx) => {
          return (
            <li key={idx}>
              <h4
                className="h-[25px] bg-[url('/flag.svg')] bg-cover bg-center
                  bg-no-repeat uppercase"
              >
                {i.title}
              </h4>
              {i.title === "social media" && Array.isArray(i.content) ? (
                <ul className="mt-[15px]">
                  {i.content.map((media, idx) => (
                    <a
                      key={idx}
                      href={media.url}
                      target="_blank"
                      className="[&:not(:first-child)]:ml-[12px]"
                    >
                      {media.component}
                    </a>
                  ))}
                </ul>
              ) : typeof i.content === "string" ? (
                <div className="mt-[15px]">{i.content}</div>
              ) : (
                ""
              )}
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Footer;
