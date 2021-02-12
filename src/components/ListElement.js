import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    padding: 10px 10px;

    border: 1px solid;
`;
const ThumbnailBox = styled.div`
    flex: 2;
    & > img {
        width: 140px;
        height: 140px;
    }
`;
const ProductInfoBox = styled.div`
    flex: 10;
    padding-left: 10px;
    & > .mall_name {
        font-size: 14px;
    }
    & > .product_name {
        padding-top: 5px;
        font-size: 24px;
        font-weight: 600;
    }
    & > .price_namer {
        padding-top: 5px;
    }
    & > .price_mall {
        padding-top: 5px;
    }
`;

const ListElement = ({ data }) => {
    return (
        <Container>
            <ThumbnailBox>
                <img src={data.img_url} alt="dummyimage" />
            </ThumbnailBox>
            <ProductInfoBox>
                <div className={'mall_name'}>{data.mall}</div>
                <div className={'product_name'}>{data.title}</div>
                <div className={'price_naver'}>
                    노출가격: <span>{data.price}원</span>
                </div>
                <div className={'price_mall'}>
                    쇼핑몰 내 가격: <span>{data.price}원</span>
                </div>
            </ProductInfoBox>
            <div>
                <a target="_" href={data.mall_url}>
                    <button>Mall</button>
                </a>
            </div>
        </Container>
    );
};

export default ListElement;
