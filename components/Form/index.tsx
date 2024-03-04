import { FormEvent, useState } from "react";
import { ButtonTitle, PrimaryButton, SmallButtonTitle } from "../Elements";
import { CheckBox, Divider, FormBox, Terms, TextInput } from "./styles";

const Form = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')


  const handleSubmit = async ( e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = {
      name,
      email,
      phone,
    }

    const response = await fetch('/api/submit', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(form)
    })

    const content = await response.json()

    console.log(content)
    alert(content.data.tableRange)

    setName('')
    setEmail('')
    setPhone('')
  }
  
  return ( 
    <FormBox onSubmit={handleSubmit} >
      <ButtonTitle style={{alignSelf: 'flex-start', fontWeight: 600, textTransform: 'capitalize'}} >Receba mais informações</ButtonTitle>
      <Divider />
      <TextInput type="text" placeholder="Digite seu nome" value={name} onChange={e => setName(e.target.value)} required />
      <TextInput type="email" placeholder="Digite seu melhor email" value={email} onChange={e => setEmail(e.target.value)} required />
      <TextInput type="tel" placeholder="Telefone ou WhatsApp" value={phone} onChange={e => setPhone(e.target.value.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3'))} required />
      <Terms>
        <CheckBox type="checkbox" required/>
        <SmallButtonTitle>Concordo com os Termos de Uso</SmallButtonTitle>
      </Terms>
      <PrimaryButton type="submit">Entrar em Contato</PrimaryButton>
    </FormBox>
   );
}
 
export default Form;