//import components
import styled from "styled-components";
import Button from "../Button";
import Container from "../Style";

//import BASE_URL path
import Path from "../../Path";

const SearchResult = ({ data }) => {
  return (
    <FoodCardContainer>
      <Container>
        <FoodCards>
          {data?.map(({ image, name, text, price }) => (
            <FoodCard key={name}>
              <div className="food_image">
                <img src={Path + image} alt="food_image" />
              </div>
              <div className="food_info">
                <h3>{name}</h3>
                <p>{text}</p>
                <div className="button">
                  <Button>${price.toFixed(2)}</Button>
                </div>
              </div>
            </FoodCard>
          ))}
        </FoodCards>
      </Container>
    </FoodCardContainer>
  );
};

export default SearchResult;
const FoodCardContainer = styled.section`
  min-height: calc(100vh - 190px);
  background-image: url("/bg.png");
  background-size: cover;
`;
const FoodCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  row-gap: 32px;
  column-gap: 20px;
  justify-content: center;
  align-items: center;
  padding-top: 80px;
  
  :hover {
    border-color: black;
  }
`;
const FoodCard = styled.div`
  width: 340px;
  height: 167px;
  border: 0.66px solid;
  cursor: pointer;

  border-image-source: radial-gradient(
      80.69% 208.78% at 108.28% 112.58%,
      #eabfff 0%,
      rgba(135, 38, 183, 0) 100%
    ),
    radial-gradient(
      80.38% 222.5% at -13.75% -12.36%,
      #98f9ff 0%,
      rgba(255, 255, 255, 0) 100%
    );

  background: url(.png),
    radial-gradient(
      90.16% 143.01% at 15.32% 21.04%,
      rgba(165, 239, 255, 0.2) 0%,
      rgba(110, 191, 244, 0.0447917) 77.08%,
      rgba(70, 144, 213, 0) 100%
    );
  background-blend-mode: overlay, normal;
  backdrop-filter: blur(13.1842px);

  border-radius: 20px;

  display: flex;
  padding: 16px;

  .food_info {
    display: flex;
    flex-direction: column;

    h3 {
      margin-top: 8px;
      font-size: 16px;
      font-weight: 500;
    }
    p {
      margin-top: 10px;
      font-size: 11px;
    }
    .button {
      display: flex;
      margin-top: 30px;
      justify-content: end;
    }
  }
`;
