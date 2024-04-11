import styled, { keyframes, css } from "styled-components";


const Carousel = () => {

    
      return (
        <AppContainer>
          <Wrapper>
            <Marquee>
              <MarqueeGroup>
                <span className="flex items-center space-x-5">
                    <span className=" w-[10px] h-[10px] rounded-[50%] bg-white"></span>
                    <p className="text-white font-BlackMango pr-3 text-xl md:text-4xl capitalize">
                    Rich in taste
                    </p>
                </span>
                
                <span className="flex items-center space-x-5">
                    <span className=" w-[10px] h-[10px] rounded-[50%] bg-white"></span>
                    <p className="text-white font-BlackMango pr-3 text-xl md:text-4xl capitalize">
                    High standard
                    </p>
                </span>
                
                <span className="flex items-center space-x-5">
                    <span className=" w-[10px] h-[10px] rounded-[50%] bg-white"></span>
                    <p className="text-white font-BlackMango pr-6 text-xl md:text-4xl capitalize">
                    Reliable
                    </p>
                </span>
                
                <span className="flex items-center space-x-5">
                    <span className=" w-[10px] h-[10px] rounded-[50%] bg-white"></span>
                    <p className="text-white font-BlackMango pr-6 text-xl md:text-4xl capitalize">
                    Nutrient-rich
                    </p>
                </span>
              </MarqueeGroup>
              <MarqueeGroup>
                <span className="flex items-center space-x-5">
                    <span className=" w-[10px] h-[10px] rounded-[50%] bg-white"></span>
                    <p className="text-white font-BlackMango pr-6 text-xl md:text-4xl capitalize">
                    Rich in taste
                    </p>
                </span>
                
                <span className="flex items-center space-x-5">
                    <span className=" w-[10px] h-[10px] rounded-[50%] bg-white"></span>
                    <p className="text-white font-BlackMango pr-6 text-xl md:text-4xl capitalize">
                    High standard
                    </p>
                </span>
                
                <span className="flex items-center space-x-5">
                    <span className=" w-[10px] h-[10px] rounded-[50%] bg-white"></span>
                    <p className="text-white font-BlackMango pr-6 text-xl md:text-4xl capitalize">
                    Reliable
                    </p>
                </span>
                
                <span className="flex items-center space-x-5">
                    <span className=" w-[10px] h-[10px] rounded-[50%] bg-white"></span>
                    <p className="text-white font-BlackMango pr-6 text-xl md:text-4xl capitalize">
                    Nutrient-rich
                    </p>
                </span>
              </MarqueeGroup>
            </Marquee>
          
          </Wrapper>
        </AppContainer>
      );
    }



export default Carousel;


const AppContainer = styled.div`
  width: 100%;
  margin-top: 64px;
  margin-bottom: 64px;
  color: #000000;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100px;
  background: #094935;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Marquee = styled.div`
  display: flex;
  width: 100%;
  overflow: hidden;
  user-select: none;

`;

const scrollX = keyframes`
  from {
    left: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
`;

const common = css`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  white-space: nowrap;
  width: 100%;
  animation: ${scrollX} 30s linear infinite;
`;

const MarqueeGroup = styled.div`
  ${common}
  
`;
const MarqueeGroup2 = styled.div`
  ${common}
  animation-direction: reverse;
  animation-delay: -3s;
`;

const ImageGroup = styled.div`
  display: grid;
  place-items: center;
  width: clamp(10rem, 1rem + 40vmin, 30rem);
  padding: calc(clamp(10rem, 1rem + 30vmin, 30rem) / 10);
`;

const Image = styled.img`
  object-fit: contain;
  width: 100%;
  height: 100%;
  /* border: 1px solid black; */
  border-radius: 0.5rem;
  aspect-ratio: 16/9;
  padding: 5px 20px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;

