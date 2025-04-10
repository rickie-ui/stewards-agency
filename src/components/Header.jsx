import { DownOutlined, SettingOutlined, EnvironmentOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';

const items = [
  {
    key: '1',
    label: 'My Account',
    disabled: true,
  },
  {
    type: 'divider',
  },
  {
    key: '2',
    label: 'Profile',
    extra: '⌘P',
  },
  {
    key: '3',
    label: 'Billing',
    extra: '⌘B',
  },
  {
    key: '4',
    label: 'Settings',
    icon: <SettingOutlined />,
    extra: '⌘S',
  },
];

const Header = () => {
  return (
    <>
      <header className="w-full flex justify-between items-center text-[#323C24] text-sm antialiased font-medium opacity-70 h-16 px-10">
         <div className="">Steward Agencies</div>
         <nav className="flex items-center space-x-14">
             <a href="#">Home</a>
             <Dropdown menu={{ items }}>
                <a onClick={e => e.preventDefault()}>
                  <Space>
                    Services
                    <DownOutlined />
                  </Space>
                </a>
            </Dropdown>
             <a href="#">About us</a>
             <a href="#">Contact</a>
         </nav>
         <div className="flex items-center gap-x-10">
             <div className="flex items-center space-x-0.5">
               <h3>EN</h3>
               <DownOutlined />
             </div>
             <div className="flex items-center space-x-0.5">
             <EnvironmentOutlined />
              <h3>KENYA</h3>
             </div>

             <a href="#" className="uppercase px-6 py-2 bg-[#323C24] text-white rounded-full">Book a free call</a>
         </div>
      </header>
    </>
  )
}

export default Header