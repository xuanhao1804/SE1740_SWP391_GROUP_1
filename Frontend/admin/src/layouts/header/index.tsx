import { theme } from "antd";
import { Header } from "antd/es/layout/layout";

const HeaderApp = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return <Header style={{ padding: 0, background: colorBgContainer }} />;
};

export default HeaderApp;
