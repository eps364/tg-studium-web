import { Container, Title } from '../styles/components'

export default function Home() {
    return (
        <Container>
            <Title>{process.env.NEXT_PUBLIC_NAME}</Title>
        </Container>
    )
}
