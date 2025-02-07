import { ComponentType } from "react";
import { useAppDispatch } from "@/features/hooks";
import { off } from "@/features/dialog/dialogSlice";
interface LightboxProps {
  title?: string;
  content?: string;
  icon?: React.ReactNode | string;
  type: string;
  border?: string;
  extraStyle?: string;
}

export const withLightbox =
  <T,>(Component: ComponentType<T>, partialProps: LightboxProps) =>
  (props: T) => {
    const { type, content, extraStyle } = partialProps;
    const dispatch = useAppDispatch();
    const handleCloseDialog = (e: React.MouseEvent<HTMLElement>) => {
      if (e.target === e.currentTarget) {
        document.body.style.overflow = "auto";
        console.log("close");
        dispatch(off("main"));
      }
    };

    // 燈箱沒有背後遮罩
    return type === "warning" ? (
      <Component
        content={content}
        extraStyle={extraStyle}
        {...props}
      />
    ) : (
      // 燈箱有背後遮罩
      <section
        onClick={handleCloseDialog}
        className="fixed left-0 right-0 top-0 z-[1200] h-screen w-full
          overflow-y-auto bg-[#0000004D] py-[80px] backdrop-blur-lg"
      >
        {type === "main" ? (
          <Component
            {...partialProps}
            {...props}
          />
        ) : null}
      </section>
    );
  };
