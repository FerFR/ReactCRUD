import styled from 'styled-components';
import { Desktop, Tablet } from '../../style/Responsive';

const Grid = styled.section`
    display: grid;
    max-width: 1000px;
    margin: 0 auto;
    grid-template-columns: 1fr;
    gap: 10px;
    padding: 100px 0;
    place-items: center;
    ${Tablet({
        gridTemplateColumns: '1fr 1fr',
    })}
    ${Desktop({
        gridTemplateColumns: '1fr 1fr 1fr',
    })}
`;

export default Grid;
