import { Button } from 'src/assets/styles/util'
import styled from 'styled-components'

export const StyledRegister = styled.div`
  background-color: rgb(238, 77, 45);
  min-width: max-content;
`
export const Container = styled.div`
  padding: 8rem;
  display: flex;
`

export const Banner = styled.div`
  flex: 0 0 50%;
  max-width: 50%;
  background-image: url('https://cf.shopee.vn/file/7666e5c7427f98a8bd1102ffea426afd');
  background-position-y: -75px;
`

export const FormWrapper = styled.div`
  flex: 0 0 50%;
  max-width: 40%;
  box-shadow: 0 3px 10px 0 rgb(0 0 0 / 14%);
  border-radius: 0%.4rem;
  background-color: #fff;
  padding: 3.5rem 3rem 5rem;
`

export const FormTitle = styled.div`
  font-size: 20px;
  margin-bottom: 3rem;
  color: #222;
  text-transform: capitalize;
`

export const Form = styled.form``

export const FormControl = styled.div`
  margin-bottom: 2.5rem;
`

export const FormButton = styled.div`
  margin-bottom: 3rem;
  ${Button} {
    width: 100%;
    height: 4rem;
    font-size: 1.4rem;
    text-transform: uppercase;
  }
`

export const FormFooter = styled.div`
  text-align: center;
  span {
    margin-right: 1rem;
    color: rgba(0, 0, 0, 0.26);
  }
`
