import styled,{css} from "styled-components";

const Title= styled.h1`

    font-size: 3rem;
    font-weight: 700;
    text-decoration: underline;
    ${props => props.theme==='dark' && css `
        color: white;
        background-color: black;`}
`;

export default Title;