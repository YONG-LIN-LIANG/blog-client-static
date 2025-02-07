import Markdown from "react-markdown";
import remarkGfm from "remark-gfm"; // 支持表格、~~刪除線~~ 等 Markdown 擴展
import rehypeRaw from "rehype-raw";

const MarkdownField = ({ markdown }: { markdown: string }) => {
  return (
    <Markdown
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[rehypeRaw]}
    >
      {markdown}
    </Markdown>
  );
};

export default MarkdownField;
