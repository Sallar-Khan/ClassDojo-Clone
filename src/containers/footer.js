import React from 'react'
import Footer from '../components/footer'
import Icon from '../components/icons'

export function FooterContainer() {
    return (
        <Footer>
            <Footer.Wrapper>
            <Footer.Row>
                <Footer.Column>
                <Footer.Title>About Us</Footer.Title>
                    <Footer.Link href="#">Press</Footer.Link>
                    <Footer.Link href="#">Careers</Footer.Link>
                    <Footer.Link href="#">Accessibillity</Footer.Link>
                    <Footer.Link href="#">Engineering</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                <Footer.Title>Support</Footer.Title>
                    <Footer.Link href="#">Contact</Footer.Link>
                    <Footer.Link href="#">Privacy Centre</Footer.Link>
                    <Footer.Link href="#">Cookies settings</Footer.Link>
                    <Footer.Link href="#">Terms of services</Footer.Link>
                    <Footer.Link href="#">Product privacy policy</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                <Footer.Title>Resources</Footer.Title>
                    <Footer.Link href="#">Big ideas</Footer.Link>
                    <Footer.Link href="#">Resources</Footer.Link>
                    <Footer.Link href="#">Training</Footer.Link>
                    <Footer.Link href="#">Remote learning</Footer.Link>
                    <Footer.Link href="#">ClassDojo Plus</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                <Footer.Title>Community</Footer.Title>
                    <Footer.Link href="#"><Icon className="fab fa-facebook-f" />Facebook</Footer.Link>
                    <Footer.Link href="#"><Icon className="fab fa-instagram" />Instagram</Footer.Link>
                    <Footer.Link href="#"><Icon className="fab fa-youtube" />Youtube</Footer.Link>
                    <Footer.Link href="#"><Icon className="fab fa-twitter" />Twitter</Footer.Link>
                </Footer.Column>
            </Footer.Row>
            </Footer.Wrapper>
        </Footer>
    )
}