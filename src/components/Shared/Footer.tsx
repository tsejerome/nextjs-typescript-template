import { COMPANY_EMAIL, COMPANY_NAME } from '../../config/constant';
import { P1 } from './GeneralComponents';

const year = new Date().getFullYear();

const Footer = () => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
    }}
  >
    <P1 style={{ paddingBottom: 20 }}>
      <a style={{ marginRight: 20 }} href={`/terms`}>
        Terms & Conditions
      </a>
      <a href={`/privacy`}>Privacy Policy</a>
    </P1>
    <P1>
      <div>© {COMPANY_NAME} {year} All Rights Reserved</div>
      <a href={`mailto:${COMPANY_EMAIL}`}>{COMPANY_EMAIL}</a>
    </P1>
  </div >
);

export default Footer;
