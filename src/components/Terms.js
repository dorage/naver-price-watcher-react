import { useEffect, useState } from 'react';
import styled from 'styled-components';
import mainApi from '../api';

const Container = styled.div`
    padding: 20px 0;
`;
const TermSection = styled.div`
    display: flex;
`;
const Term = styled.div`
    color: grey;
    padding: 10px;
    border: 2px solid;
    border-radius: 50px;
    &.selected_term {
        color: black;
    }
    &:hover {
        cursor: pointer;
    }
    &:active {
        background-color: darkgrey;
    }
`;
const SelectSection = styled.div``;

const Terms = ({ setProducts }) => {
    const [terms, setTerms] = useState([]);
    const [selectedTerm, selectTerm] = useState('');
    const [tasks, setTasks] = useState([]);

    /**
     * 컴포넌트 생성시점 최초 실행(componentDidMount)
     * terms를 api로 받아와서 초기화
     */
    const initialize = () => {
        const resolvedAction = (resolved) => {
            const {
                data: { okay, terms },
            } = resolved;
            if (!okay) return;
            setTerms(terms);
        };
        mainApi.getTerms().then(resolvedAction).catch(console.error);
    };
    useEffect(initialize, []);

    /**
     * term 클릭 이벤트
     */
    const termOnClick = (event, term) => {
        if (term === selectedTerm) return;
        // selectedTerm에 현재 term 할당
        selectTerm(term);
        // className을 selected_term으로 변경
        event.currentTarget.className = 'selected_term';
        // task를 불러오는 api 호출
        const resolvedAction = (resolved) => {
            const {
                data: { okay, tasks },
            } = resolved;
            console.log(tasks);
            if (!okay) return;
            setTasks(tasks);
        };
        mainApi.getTasks(term).then(resolvedAction).catch(console.error);
    };

    const getPrettyDate = (dateString) => {
        const date = new Date(dateString);
        const month = date.getMonth() + 1;
        const day = date.getDate();
        const ampm = date.getHours() > 12 ? '오후' : '오전';
        const hour =
            date.getHours() > 12 ? date.getHours() - 12 : date.getHours();
        const minutes = date.getMinutes();
        return `${month}월 ${day}일 ${ampm} ${hour}시 ${minutes}분`;
    };

    /**
     * Task 변경 이벤트
     * @param {*} event
     */
    const taskOnChanged = (event) => {
        const value = event.currentTarget.value;
        mainApi
            .getCrawl(selectedTerm, value)
            .then(({ data }) => {
                console.log(data);
                setProducts(data);
            })
            .catch(console.error);
    };

    return (
        <Container>
            <TermSection>
                {terms.length ? (
                    terms.map((term) => (
                        <Term
                            key={term}
                            className={
                                term === selectedTerm ? 'selected_term' : ''
                            }
                            onClick={(event) => termOnClick(event, term)}
                        >
                            #<span>{term}</span>
                        </Term>
                    ))
                ) : (
                    <div>로딩중</div>
                )}
            </TermSection>
            <SelectSection>
                <select name="tasks" onChange={taskOnChanged} defaultValue={''}>
                    <option value="" disabled>
                        {' '}
                    </option>
                    {tasks.length ? (
                        tasks.map((task) => (
                            <option
                                key={task.created_at}
                                value={task.created_at}
                            >
                                {`[${task.progress}] ${getPrettyDate(
                                    task.created_at,
                                )}`}
                            </option>
                        ))
                    ) : (
                        <option></option>
                    )}
                </select>
            </SelectSection>
        </Container>
    );
};

export default Terms;
