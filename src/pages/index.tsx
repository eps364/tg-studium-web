import styled from 'styled-components'

const Title = styled.h1`
  color: blue;
  font-size: 50px;
`

export default function Home() {
  return <Title>{process.env.NEXT_PUBLIC_NAME}</Title>
}
