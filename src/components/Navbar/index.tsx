import { Menu } from "antd";
import {
  MailOutlined,
  AppstoreOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import Link from "next/link";

const Navbar = () => (
  <Menu mode='horizontal' defaultSelectedKeys={["mail"]}>
    <Menu.Item key='mail' icon={<MailOutlined />}>
      <Link href='/'>Home</Link>
    </Menu.Item>
    <Menu.SubMenu
      key='SubMenu'
      title='Navigation Two - Submenu'
      icon={<SettingOutlined />}
    >
      <Menu.Item key='two' icon={<AppstoreOutlined />}>
        <Link href='/about'>About</Link>
      </Menu.Item>
      <Menu.Item key='three' icon={<AppstoreOutlined />}>
        <Link href='/articles'>Articles List</Link>
      </Menu.Item>
      <Menu.ItemGroup title='Item Group'>
        <Menu.Item key='four' icon={<AppstoreOutlined />}>
          Navigation Four
        </Menu.Item>
        <Menu.Item key='five' icon={<AppstoreOutlined />}>
          Navigation Five
        </Menu.Item>
      </Menu.ItemGroup>
    </Menu.SubMenu>
  </Menu>
);

export default Navbar;
