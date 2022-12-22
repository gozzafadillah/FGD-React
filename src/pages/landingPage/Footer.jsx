import React from 'react';
import { Layout, Col, Row, Image, Typography, List } from "antd";
import FooterLogoIcon from "../landingPage/img/footerLogoIcon.png";
import FooterLogoType from "../landingPage/img/footerLogoType.png";

import {
    FacebookFilled,
    TwitterSquareFilled,
    InstagramFilled

} from '@ant-design/icons';

const { Content } = Layout;
const{ Title } = Typography;

const Footer = () => {
    return(
        <>
        <Content style={{background: "#178066", minHeight: 350, padding: '30px', textAlign: 'left'}}>
            <Row>
                <Col xl={12} xs={24} className="footer-custom" style={{height: '350px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    <div style={{display: 'inline-block'}}>
                        <Image style={{paddingRight: 30}} src={FooterLogoIcon} width={120} preview={false} />
                        <Image src={FooterLogoType} width={213} preview={false}  />
                    </div>
                </Col>
                <Col xl={4} xs={24} md={8} className="footer-custom" style={{height: '350px', display: 'flex', flexDirection: 'column', alignItems: 'start', justifyContent: 'center'}}>
                    <Title style={{fontSize: 24, color: '#FDFDFD'}}>SERVICE</Title>
                    <List>
                        <li style={{marginBottom: 10}}><a style={{color: '#FDFDFD', fontSize: 20}} href='/'>Experience</a></li>
                        <li style={{marginBottom: 10}}><a style={{color: '#FDFDFD', fontSize: 20}} href='/'>Products</a></li>
                        <li style={{marginBottom: 10}}><a style={{color: '#FDFDFD', fontSize: 20}} href='/'>Information</a></li>
                    </List>
                </Col>
                <Col xl={4} xs={24} md={8} className="footer-custom" style={{height: '350px', display: 'flex', flexDirection: 'column', alignItems: 'start', justifyContent: 'center'}}>
                    <Title style={{fontSize: 24, color: '#FDFDFD'}}>LEGALS</Title>
                    <List>
                        <li style={{marginBottom: 10}}><a style={{color: '#FDFDFD', fontSize: 20}} href='/'>Cookies Policies</a></li>
                        <li style={{marginBottom: 10}}><a style={{color: '#FDFDFD', fontSize: 20}} href='/'>Terms of User</a></li>
                        <li style={{marginBottom: 10}}><a style={{color: '#FDFDFD', fontSize: 20}} href='/'>Privacy Policy</a></li>
                    </List>
                </Col>
                <Col xl={4} xs={24} md={8} className="footer-custom" style={{height: '350px', display: 'flex', flexDirection: 'column', alignItems: 'start', justifyContent: 'center'}}>
                    <Title style={{fontSize: 24, color: '#FDFDFD'}}>GET NEWS UPDATE</Title>
                    <List>
                        <li style={{marginBottom: 10}}><a style={{color: '#FDFDFD', fontSize: 20}} href='/'><FacebookFilled /> Facebook</a></li>
                        <li style={{marginBottom: 10}}><a style={{color: '#FDFDFD', fontSize: 20}} href='/'><TwitterSquareFilled />Twitter</a></li>
                        <li style={{marginBottom: 10}}><a style={{color: '#FDFDFD', fontSize: 20}} href='/'><InstagramFilled /> Twitter</a></li>
                    </List>
                </Col>
            </Row>
        </Content>
        <div style={{display: "flex", alignItems: "center", justifyContent: "center", height: 82, fontSize: 18, background: "#D1E6E0", color: "#178066"}}>COPYRIGHT 2022. ALL RIGHT RESERVED</div>
        </>
    )
}

export default Footer;