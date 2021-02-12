import { useEffect, useState } from 'react';
import styled from 'styled-components';
import mainApi from './api';
import ListElement from './components/ListElement';
import Terms from './components/Terms';

const Title = styled.div`
    padding: 50px 0;
    text-align: center;
    font-size: 6em;
    font-weight: 700;
`;
const List = styled.div`
    width: 50%;
`;

function App() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        mainApi.getTerms().then(console.log).catch(console.error);
    }, []);
    return (
        <div className="App">
            <Title>✊꽉잡아</Title>
            <Terms setProducts={setProducts} />
            <div>
                <List>
                    {products.length ? (
                        products.map((data) => (
                            <ListElement key={data._id} data={data} />
                        ))
                    ) : (
                        <div>EMPTY</div>
                    )}
                </List>
            </div>
        </div>
    );
}

export default App;
