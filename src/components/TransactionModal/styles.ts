import styled from "styled-components";
import { darken } from "polished";

export const Container = styled.form`
h2{
    color:var(--text-title);
    font-size: 1.5rem;
    margin-bottom: 2rem;
}
input{
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    border-radius: 0.5rem;
    background-color: #e7e9ee;
    border:1px solid #d7d7d7;
    font-weight: 400;
    font-size:1rem;
    

    &::placeholder{
        color:var(--text);

    }
    & + input{
        margin-top: 1rem;
    }
}
button[type="submit"]{
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    background-color: var(--green);
    border-radius: 0.25rem;
    color: var(--shape);
    font-weight: 600;
    border:none;
    margin-top: 1.5rem;
    transition: filter 0.2s;

    &:hover{
        filter: brightness(0.9);
    }

}

`;
export const TypeContaeiner = styled.div`
margin: 1rem 0;
display: grid;
grid-template-columns: 1fr 1fr;
gap: 0.5rem;

    
`;



interface ButtonBoxProps {
    isActive: boolean;
     colors :{
        'green':'#33CC95',
        'red':'#E62E4D',
    
    }
}
export const ButtonBox = styled.button<ButtonBoxProps>`


        height: 4rem;
        border: 1px solid #d7d7d7;
        border-radius: 0.25rem;
        background-color: ${(props) => props.isActive
        ? transparentize(0.6, colors[props.activeColor]) : 'trasparent'};
        display: flex;
        align-items: center;
        justify-content: center;
        transition: border-color 0.2s;


        &:hover{
            border-color:${darken(0.2, "#d7d7d7")} ;
        }

        img{
            width: 20px;
            height: 20px;
        }
        span{
            display: block;
            margin-left: 1rem;
            font-size: 1rem;
            color:var(--text-title);

        }
    


`;