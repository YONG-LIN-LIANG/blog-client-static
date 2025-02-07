// 未登入使用 給 stage one 使用
import { FC } from "react";
import { Outlet } from "react-router-dom";
import { MainDialog } from "@/components/Lightbox";
import { selectDialogList } from "@/features/dialog/dialogSlice";
import { useAppSelector } from "@/features/hooks";
const PortfolioLayout: FC = () => {
  const dialogList = useAppSelector(selectDialogList);
  const mainDialog = dialogList.find((i) => i.type === "main") ?? null;
  return (
    <>
      <Outlet />
      {mainDialog && <MainDialog content={mainDialog.content} />}
    </>
  );
};

export default PortfolioLayout;
