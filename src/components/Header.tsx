import { useState } from 'react'; 
import { DownOutlined, GlobalOutlined, SearchOutlined } from '@ant-design/icons'; // Til uchun GlobalOutlined mosroq
import type { MenuProps } from 'antd';
import copy from "../img/copy.svg"
import shop from "../img/shop.svg"
import logo from "../img/logo.png"
import user from "../img/user.svg"
import { Dropdown, Input, message, Space } from "antd";
import { NavLink } from 'react-router-dom';

const cityItems: MenuProps['items'] = [
  { label: 'Tashkent', key: 'Tashkent' },
  { label: 'Navoiy', key: 'Navoiy' },
  { label: 'Surxondaryo', key: 'Surxondaryo' },
];
const languageItems: MenuProps['items'] = [
  { label: 'O‘zbekcha', key: 'UZ' },
  { label: 'Русский', key: 'RU' },
  { label: 'English', key: 'EN' },
];

const Header = () => {
  const [selectedCity, setSelectedCity] = useState('Tashkent');
  
  const [selectedLang, setSelectedLang] = useState('UZ');

  const onCityClick: MenuProps['onClick'] = ({ key }) => {
    setSelectedCity(key);
    message.success(`Shahar o'zgartirildi: ${key}`);
  };

  const onLangClick: MenuProps['onClick'] = ({ key }) => {
    setSelectedLang(key);
    message.info(`Til tanlandi: ${key}`);
  };

  return (
    <div>
      <div style={{ padding: '10px' }} className='flex items-center justify-between bg-[#182041] !pl-20 text-[14px] !pr-20 !text-[white]'>
      <div>
        <Dropdown 
        className='text-white'
          menu={{ 
            items: cityItems, 
            onClick: onCityClick, 
            selectable: true,
            selectedKeys: [selectedCity] 
          }}
        >
          <a onClick={(e) => e.preventDefault()} style={{ cursor: 'pointer', color: 'black' }}>
            <Space className='text-white'>
              {selectedCity} 
              <DownOutlined />
            </Space>
          </a>
        </Dropdown>
      </div>
      <div className='flex gap-10'>
        <p>Yo‘riqnoma</p>
        <Dropdown
          menu={{
            items: languageItems,
            onClick: onLangClick,
            selectable: true,
            selectedKeys: [selectedLang]
          }}
        >
          <a onClick={(e) => e.preventDefault()} style={{ cursor: "pointer", color: 'blue' }}>
            <Space className='text-white'>
              {selectedLang === 'UZ' ? 'O‘zbekcha' : selectedLang === 'RU' ? 'Русский' : 'English'}
              <GlobalOutlined />
            </Space>
          </a>
        </Dropdown>
      </div>
    </div>
    <div className='flex w-full items-center justify-between pl-20 pr-20 bg-[#202B57] p-3'>
      <div>
        <div className='flex items-center gap-3'>
          <img className='w-9' src={logo} alt="" />
          <h1 className='text-[15px] text-[white] font-[700] max-w-[217px]'>Qurilishda texnik me’yorlash
va standartlashtirish 
ilmiy-tadqiqot instituti</h1>
        </div>
      </div>
      <div className='w-[40%]'>
        <Input className='w-full !bg-[#202B57] !text-white ' size='large' prefix={<SearchOutlined/>}/>
      </div>
      <div className='flex items-center gap-4'>
        <div><img className='w-9' src={copy} alt="" /></div>
        <div><img className='w-8' src={shop} alt="" /></div>
        <div className='flex gap-2 items-center'>
          <div>
            <img className='w-9' src={user} alt="" />
          </div>
          <div><h1 className='text-[15px] text-white'>Kirish <br />
Ro’yhatdan o’tish</h1></div>
        </div>
      </div>
    </div>
    <div className='pl-20 pr-20 bg-[#28366D] w-full p-3 text-[#8D97AD]'>
        <ul className='w-full flex items-center justify-between gap-2 text-[15px] !font-800'>
          <NavLink to={"/materials"} className={({isActive}) => isActive ? "border-b-1 text-white border-[#1890FF]" : "border-b-1 border-[#ffffff00]"}>Materiallar va buyumlar</NavLink>
          <NavLink to={"/cars"} className={({isActive}) => isActive ? "border-b-1 text-white border-[#1890FF]" : "border-b-1 border-[#ffffff00]"}>Mashina mexanizmlar</NavLink>
          <NavLink to={"/qurulish"} className={({isActive}) => isActive ? "border-b-1 text-white border-[#1890FF]" : "border-b-1 border-[#ffffff00]"}>Qurilish ishlari</NavLink>
          <NavLink to={"/kichik"} className={({isActive}) => isActive ? "border-b-1 text-white border-[#1890FF]" : "border-b-1 border-[#ffffff00]"}>Kichik mexanizatsiya</NavLink>
          <NavLink to={"/uskuna"} className={({isActive}) => isActive ? "border-b-1 text-white border-[#1890FF]" : "border-b-1 border-[#ffffff00]"}>Uskuna va qurilmalar</NavLink>
          <NavLink to={"/klassifikator"} className={({isActive}) => isActive ? "border-b-1 text-white border-[#1890FF]" : "border-b-1 border-[#ffffff00]"}>Klassifikator</NavLink>
          <NavLink to={"/bolmlar"} className={({isActive}) => isActive ? "border-b-1 text-white border-[#1890FF]" : "border-b-1 border-[#ffffff00]"}>Bo’limlar</NavLink>
        </ul>
    </div>
    </div>
   
  );
};

export default Header;