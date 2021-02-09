import styled from 'styled-components';

const Title = styled.div`
    padding: 50px 0;
    text-align: center;
    font-size: 6em;
    font-weight: 700;
`;
const List = styled.div`
    width: 50%;
`;
const ListElement = styled.div`
    display: flex;
    padding: 10px 20px;

    border: 1px solid;
`;
const ThumbnailBox = styled.div`
    flex: 2;
    & > img {
        width: 100%;
        box-shadow: 3px 3px 6px #aaaaaa;
    }
`;
const ProductInfoBox = styled.div`
    flex: 10;
    padding-left: 10px;
`;

function App() {
    return (
        <div className="App">
            <Title>✊꽉잡아</Title>
            <div>
                <List>
                    <ListElement>
                        <ThumbnailBox>
                            <img
                                src="https://dummyimage.com/400x400/26ffde/000000"
                                alt="dummyimage"
                            />
                        </ThumbnailBox>
                        <ProductInfoBox>
                            <div className={'mall_name'}>홈앤쇼핑</div>
                            <div className={'product_name'}>상품명</div>
                            <div className={'price_naver'}>
                                노출가격: <span>29800원</span>
                            </div>
                            <div className={'price_'}>
                                쇼핑몰 내 가격: <span>29800원</span>
                            </div>
                        </ProductInfoBox>
                        <div>
                            <a target="_" href="https://naver.com">
                                <button>Mall</button>
                            </a>
                        </div>
                    </ListElement>
                </List>
            </div>
        </div>
    );
}

export default App;
