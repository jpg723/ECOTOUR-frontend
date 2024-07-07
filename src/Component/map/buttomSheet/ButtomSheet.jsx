import useBottomSheet from "./useButtomSheet";
import * as S from "./ButtomSheet.style"
import Header from "./Header";

const BottomSheet = ({ children }) => {
  const { onDragEnd, controls } = useBottomSheet();

  return (
    <S.Wrapper
      drag="y"
      onDragEnd={onDragEnd}
      initial="hidden"
      animate={controls}
      transition={{
        type: "spring",
        damping: 40,
        stiffness: 400
      }}
      variants={{
        visible: { y: 0 },
        hidden: { y: "100%" }
      }}
      dragConstraints={{ top: 0 }}
      dragElastic={0.2}
    >
      <Header />
      <S.ContentWrapper>{children}</S.ContentWrapper>
    </S.Wrapper>
  );
};

export default BottomSheet;
