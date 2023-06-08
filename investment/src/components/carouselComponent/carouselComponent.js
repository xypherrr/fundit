import React, { useEffect, useRef, useState } from "react";
import styled, { css } from "styled-components";

const Wrapper = styled.div`
  .arrowButton {
    width: 54px;
    height: 54px;
    font-size: 32px;
    border-radius: 50%;
  }
`;

const LeftArrow = styled.div`
  left: -67px;
  top: ${({ carouselWrapperHeight }) => carouselWrapperHeight}px;
  ${({ hideButton }) =>
    hideButton &&
    css`
      opacity: 40%;
      pointer-events: none;
    `}
`;

const RightArrow = styled.div`
  right: -67px;
  top: ${({ carouselWrapperHeight }) => carouselWrapperHeight}px;
  ${({ hideButton }) =>
    hideButton &&
    css`
      opacity: 40%;
      pointer-events: none;
    `}
`;

const Carousel = styled.div`
  @media only screen and (min-width: 768px) {
    .itemsWrapper {
      gap: 18px;
      transition: 0.8s ease-out;
      ${({ currentIndex }) =>
        currentIndex
          ? css`
              transform: translate(${-currentIndex * 100}%);
            `
          : ""}
    }
    .eachItem {
      width: calc(${({ elementWidth }) => elementWidth}% - 12px);
      min-height: 230px;
      flex-shrink: 0;
    }
  }
  @media only screen and (max-width: 767px) {
    .xmb42 {
      margin-bottom: 42px;
    }
    ${({ singleRowMsite }) =>
      !singleRowMsite
        ? css`
            .itemsWrapper {
              flex-wrap: wrap;
              gap: 32px 16px;
              margin-bottom: 62px;
              justify-content: center;
            }
            .eachItem {
              width: 47%;
              min-height: 180px;
            }
          `
        : css`
            .itemsWrapper {
              flex-direction: column;
            }
            .eachItem {
              width: 100%;
            }
          `}
  }
  /* minmax */
  /* @media only screen and (max-width: 767px) {
    .eachItem {
      width: calc(50% - 18px);
    }
  } */
`;

const CarouselComponent = ({
  carouselItems,
  elementWidth,
  lastIdx,
  singleRowMsite,
  tabLastIdx,
  children,
}) => {
  const carouselRef = useRef(null);
  const [benefitCarouselInfo, setBenefitCarouselInfo] = useState({
    currentIdx: 0,
    lastIdx: lastIdx,
  });

  const carouselWrapperHeight =
    carouselRef.current && carouselRef.current.offsetHeight / 2 - 27;

  useEffect(() => {
    setBenefitCarouselInfo((prev) => ({
      ...prev,
      lastIdx: window.screen.availWidth < 1024 ? tabLastIdx : lastIdx,
    }));
  }, []);

  const moveToLeft = () => {
    setBenefitCarouselInfo((prev) => ({
      ...prev,
      currentIdx: prev.currentIdx - 1,
    }));
  };

  const moveToRight = () => {
    setBenefitCarouselInfo((prev) => ({
      ...prev,
      currentIdx: prev.currentIdx + 1,
    }));
  };

  return (
    <Wrapper className="pR">
      <LeftArrow
        className="dFA jcC xdN cP pA
        //  cPrimary
          arrowButton"
        hideButton={benefitCarouselInfo.currentIdx === 0}
        onClick={moveToLeft}
        carouselWrapperHeight={carouselWrapperHeight}
      >
        &#8592;
      </LeftArrow>
      <RightArrow
        className="dFA jcC xdN cP pA
        //  cPrimary
          arrowButton"
        hideButton={
          benefitCarouselInfo.currentIdx === benefitCarouselInfo.lastIdx
        }
        onClick={moveToRight}
        carouselWrapperHeight={carouselWrapperHeight}
      >
        &#8594;
      </RightArrow>
      <Carousel
        ref={carouselRef}
        className="oH"
        currentIndex={benefitCarouselInfo.currentIdx}
        elementWidth={elementWidth}
        singleRowMsite={singleRowMsite}
      >
        {children}
      </Carousel>
    </Wrapper>
  );
};

export default CarouselComponent;

{/* <div className="dF itemsWrapper">
  {carouselItems.data.map((item, index) => {
    return (
      <div className="dFA fdC taC xmb42 eachItem" key={index}>
        <div className="dFA image-wrapper">
          <ImageWrapper
            minWidth={carouselItems.minWidth}
            minHeight={carouselItems.minHeight}
            mSiteMinHeight={carouselItems.mSiteMinHeight}
            mSiteSize={carouselItems.mSiteSize}
            mSiteMinWidth={carouselItems.mSiteMinWidth}
            src={item.src}
          />
        </div>
        <p
          className="h2 fwSB mt16
      cPrimary
       "
        >
          {item.title}
        </p>
        <p className="h3 c41 mt16">{item.description}</p>
      </div>
    );
  })}
</div>; */}
