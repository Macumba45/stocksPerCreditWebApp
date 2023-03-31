import { FC, memo } from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TelegramIcon from '@mui/icons-material/Telegram';
import {
     FooterContainer,
     FooterSection,
     FooterLinks,
     FooterLinksDiv,
     H2,
     H4,
     Link,
     Paragraph,
     SocialMedia,
     HR,
     FooterAboutUsDiv,
     ParagraphIcon,
     InvestDiv,
     EmpDiv,
     UsDiv,
     ParagraphUs,
     LogoFooter,
     ContainerLogoBranding,
} from './style';

const Footer: FC = () => {
     const logo = require('../../../src/components/NavBar/assets/logo.png');

     return (
          <FooterContainer>
               <FooterSection>
                    <FooterLinks>
                         <FooterAboutUsDiv>
                              <ContainerLogoBranding>
                                   <LogoFooter src={logo} />
                                   <H2>Stocks</H2>
                              </ContainerLogoBranding>
                              <ParagraphUs>
                                   Inversores y emprendedores
                              </ParagraphUs>
                              <ParagraphUs> conectados para</ParagraphUs>
                              <ParagraphUs> un futuro mejor.</ParagraphUs>

                              <SocialMedia>
                                   <ParagraphIcon>
                                        <FacebookIcon
                                             style={{
                                                  fontSize: 30,
                                                  color: '#F1D4F6',
                                             }}
                                        />
                                   </ParagraphIcon>
                                   <ParagraphIcon>
                                        <InstagramIcon
                                             style={{
                                                  fontSize: 30,
                                                  color: '#F1D4F6',
                                             }}
                                        />
                                   </ParagraphIcon>
                                   <ParagraphIcon>
                                        <TwitterIcon
                                             style={{
                                                  fontSize: 30,
                                                  color: '#F1D4F6',
                                             }}
                                        />
                                   </ParagraphIcon>
                                   <ParagraphIcon>
                                        <LinkedInIcon
                                             style={{
                                                  fontSize: 30,
                                                  color: '#F1D4F6',
                                             }}
                                        />
                                   </ParagraphIcon>
                                   <ParagraphIcon>
                                        <TelegramIcon
                                             style={{
                                                  fontSize: 30,
                                                  color: '#F1D4F6',
                                             }}
                                        />
                                   </ParagraphIcon>
                              </SocialMedia>
                         </FooterAboutUsDiv>
                         <FooterLinksDiv>
                              <InvestDiv>
                                   <H4>Inversores</H4>
                                   <HR></HR>
                                   <Link href="/dashboardInv">
                                        <Paragraph>Cómo funciona</Paragraph>
                                        <Paragraph>FAQ</Paragraph>
                                        <Paragraph>Riesgos</Paragraph>
                                        <Paragraph>Garantía Stocks</Paragraph>
                                   </Link>
                              </InvestDiv>
                              <EmpDiv>
                                   <H4>Emprendedores</H4>
                                   <HR></HR>
                                   <Link href="/dashboardEmp">
                                        <Paragraph>
                                             Por qué con Stocks
                                        </Paragraph>
                                        <Paragraph>Simulador</Paragraph>
                                        <Paragraph>FAQ</Paragraph>
                                   </Link>
                              </EmpDiv>
                              <UsDiv>
                                   <H4>Sobre nosotros</H4>
                                   <HR></HR>
                                   <Paragraph>Quiénes somos</Paragraph>
                                   <Paragraph>Nuestro rating</Paragraph>
                                   <Paragraph>Contacto</Paragraph>
                                   <Paragraph>CNMV</Paragraph>
                              </UsDiv>
                         </FooterLinksDiv>
                    </FooterLinks>
               </FooterSection>
          </FooterContainer>
     );
};

export default memo(Footer);
