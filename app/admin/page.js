import AdminLogin from "@/components/admin/login";
import { Container } from "react-bootstrap";

export default function Home()
{
    return(
        <Container fluid style={{backgroundColor: 'white'}}>
            <AdminLogin/>
        </Container>
    )
}