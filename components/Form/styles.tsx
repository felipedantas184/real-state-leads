import styled from "styled-components";

export const FormBox = styled.form`
  width: 100%;
  max-width: 400px;
  min-height: 450px;
  background-color: #FFFFFF;
  padding: 16px;
  border-radius: 20px;
  box-shadow: 4px 10px 30px 0px rgba(0, 0, 0, 0.10);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
`
export const TextInput = styled.input`
  width: 100%;
  background-color: #F6F6F6;
  padding: 12px;
  border-radius: 10px;
  border: none;
  font-family: "Poppins";
  outline: none;
`
export const Terms = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 4px;
  align-self: flex-start;
  margin-bottom: 16px;
`
export const CheckBox = styled.input`
  background-color: rgb(var(--fourth-color));
  border-radius: 10px;
  border: none;
`
export const Divider = styled.div`
  width: 100%;
  border: 1px solid #F6F6F6;
`