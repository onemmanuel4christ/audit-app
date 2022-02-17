import styled from 'styled-components'

const Container = styled.div`
    width: 100;
    background-color: #0F0F0F;
    position: sticky;
    top: 0;
    left: 0;
    z-index: 10;
    padding: 20px;
    display: flex;
    align-items: center;

`;
const Contents = styled.div`
    width: 100%;
    display: flex;
    color: #ffff;
    justify-content: center;
`
const Left = styled.div`
    display: flex;
    gap: 68;
`
const MailWrapper = styled.div`
    display: flex;
    align-items: center;
        
`
const MailIcon = styled.img`
    width: 41px;
    height: 33px;
    margin-right: 20px;
    margin-left: 20px;

`
const MailUrl = styled.a`
    font-size: 14px;
`
const Center = styled.div`
 margin-left: 64px;
 margin-right: 313px;   
`
const Right = styled.div`
    display: flex;
    align-items: center;
`
const Navbar = () => {
    return(
        <Container>
           <Contents>
                <Left>
                    <MailWrapper>
                        <MailIcon src='./images/mail-icon.svg' alt="mail-icon" />
                        <MailUrl>
                            <p> <span> Email Address: </span><br />
                            info@njc.gov.ng</p>
                        </MailUrl>
                    </MailWrapper>
                    <MailWrapper>
                        <MailIcon src='./images/tel-icon.svg' alt="mail-icon" />
                        <MailUrl>
                            <p> <span>Quick Contact:</span> <br />
                                09-4603190</p>
                        </MailUrl>
                    </MailWrapper>
                </Left>
                <Center>
                    <h3>AUDIT MANAGEMENT SYSTEM</h3>
                </Center>
                <Right>
                    <span>Login</span>
                </Right>
           </Contents>
        </Container>
    )
}

export default Navbar;