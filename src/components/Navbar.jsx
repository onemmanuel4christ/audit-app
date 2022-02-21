import { Link } from 'react-router-dom';
import styled from 'styled-components'

const Container = styled.div`
    background-color: #0F0F0F;
    position: sticky;
    height: 86px;
    padding: auto;
    top: 0;
    left: 0;
    z-index: 10;
    display: flex;
    align-items: center;
    justify-content: center;  
`;
const Contents = styled.div`
    display: flex;
    color: #ffff;
    align-items: center;
    justify-content: center;
    justify-content: space-between;
`
const Left = styled.div`
    display: flex;
    gap: 68;
`
const MailWrapper = styled.div`
   a{
    display: flex;
    align-items: center;
    text-decoration: none;
    color: inherit;
   }
        
`
const MailIcon = styled.img`
    width: 35px;
    height: 30px;
    margin-right: 20px;
    margin-left: 20px;

`
const MailUrl = styled.a`
    p{
        font-weight: 700;
        font-size: 16px;

    span{
            font-weight: 100;
            font-size: 12px;
        }
    }
    

`
const Center = styled.div`
 margin-left: 64px;
 margin-right: 313px;   
 h3{
     font-weight: 700;
     font-size: 24px;
 }
`
const Right = styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;
    font-size: 16px;
`
const Navbar = () => {
    return(
        <Container>
           <Contents>
                <Left>
                    <MailWrapper>
                        <a href="mailto:info@njc.gov.ng">
                        
                        <MailIcon src='./images/mail-icon.svg' alt="mail-icon" />
                        <MailUrl>
                            <p> <span> Email Address: </span><br />
                            info@njc.gov.ng</p>
                        </MailUrl>
                    </a>
                    </MailWrapper>
                    <MailWrapper>
                    <a href="tel:09-4603190">
                       <MailIcon src='./images/tel-icon.svg' alt="mail-icon" />
                        <MailUrl>
                            <p> <span>Quick Contact:</span> <br />
                                09-4603190</p>
                        </MailUrl>
                    </a>
                    </MailWrapper>
                </Left>
                <Center>
                    <h3>
                        <Link to="/" style={{color: 'inherit', textDecoration: 'none'}}>
                            AUDIT MANAGEMENT SYSTEM
                        </Link>
                    </h3>
                </Center>
                <Right>
                    <Link to="/login" style={{textDecoration: 'none', color: 'inherit'}}>
                        <span>Login</span>
                    </Link>
                </Right>
           </Contents>
        </Container>
    )
}

export default Navbar;