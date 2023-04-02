import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-components';
const Footer: React.FC = () => {
  const defaultMessage = 'Hua 出品';
  const currentYear = new Date().getFullYear();
  return (
    <DefaultFooter
      copyright={`${currentYear} ${defaultMessage}`}
      links={[
        {
          key: 'github',
          title: <><GithubOutlined />Hua</>,
          href: 'https://github.com/JianHuaDeng',
          blankTarget: true,
        },
      ]}
    />
  );
};
export default Footer;
