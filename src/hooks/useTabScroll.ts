import { useRef, useState, useEffect } from "react";

export const useTabScroll = (tabListRef: React.RefObject<HTMLDivElement>) => {
  const [isLeftArrowVisible, setIsLeftArrowVisible] = useState(false);
  const [isRightArrowVisible, setIsRightArrowVisible] = useState(false);

  const handleScroll = (scrollOffset: number) => {
    if (tabListRef.current) {
      const newScrollPosition = tabListRef.current.scrollLeft + scrollOffset;
      tabListRef.current.scrollTo({
        left: newScrollPosition,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const handleScrollVisibility = () => {
      if (tabListRef.current) {
        setIsLeftArrowVisible(tabListRef.current.scrollLeft > 0);
        setIsRightArrowVisible(
          tabListRef.current.scrollLeft <
            tabListRef.current.scrollWidth - tabListRef.current.clientWidth
        );
      }
    };

    const handleResize = () => {
      handleScrollVisibility();
    };

    if (tabListRef.current) {
      tabListRef.current.addEventListener("scroll", handleScrollVisibility);
    }

    window.addEventListener("resize", handleResize);

    handleScrollVisibility();

    return () => {
      if (tabListRef.current) {
        tabListRef.current.removeEventListener(
          "scroll",
          handleScrollVisibility
        );
      }

      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return {
    isLeftArrowVisible,
    isRightArrowVisible,
    handleScroll,
  };
};
