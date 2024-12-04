import React, { useState } from 'react'
import './Sidebar.css'
import letterV from '/src/assets/letter-v.png';
import AdjustOutlinedIcon from '@mui/icons-material/AdjustOutlined';
import DraftsOutlinedIcon from '@mui/icons-material/DraftsOutlined';
import FiberManualRecordOutlinedIcon from '@mui/icons-material/FiberManualRecordOutlined';
import AutoAwesomeMosaicOutlinedIcon from '@mui/icons-material/AutoAwesomeMosaicOutlined';
import FileCopyOutlinedIcon from '@mui/icons-material/FileCopyOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import ViewKanbanOutlinedIcon from '@mui/icons-material/ViewKanbanOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import ImportContactsTwoToneIcon from '@mui/icons-material/ImportContactsTwoTone';
import AirportShuttleOutlinedIcon from '@mui/icons-material/AirportShuttleOutlined';

const Sidebar = () => {
  const [activeMenu, setActiveMenu] = useState({ list: null, index: null });
  const [expandedItem, setExpandedItem] = useState(null);

  const handleClick = (listName, index) => {
    setActiveMenu({ list: listName, index });
    setExpandedItem((prev) => (prev === index ? null : index));
  };

  const listFirst = [
    {
      icon: DraftsOutlinedIcon,
      item: 'Dashboards',
      arrowDefault: ChevronRightOutlinedIcon,
      arrowActive: KeyboardArrowDownOutlinedIcon,
    },
    { icon: FiberManualRecordOutlinedIcon, item: 'Analytics', arrowDefault: null },
    { icon: FiberManualRecordOutlinedIcon, item: 'CRM', arrowDefault: null },
    { icon: FiberManualRecordOutlinedIcon, item: 'eCommerce', arrowDefault: null },
    { icon: FiberManualRecordOutlinedIcon, item: 'Logistics', arrowDefault: null },
    { icon: FiberManualRecordOutlinedIcon, item: 'Academy', arrowDefault: null },
    { icon: AutoAwesomeMosaicOutlinedIcon, item: 'Layouts', arrowDefault: ChevronRightOutlinedIcon, arrowActive: KeyboardArrowDownOutlinedIcon, },
    { icon: FileCopyOutlinedIcon, item: 'Front Pages', arrowDefault: ChevronRightOutlinedIcon, arrowActive: KeyboardArrowDownOutlinedIcon, },
  ];
  const listSecond = [
    {icon: EmailOutlinedIcon, item:"Email", arrow:null},
    {icon: ChatOutlinedIcon, item:"Chat", arrow:null},
    {icon: CalendarMonthOutlinedIcon, item:"Calender", arrow:null},
    {icon: ViewKanbanOutlinedIcon, item:"Kanban", arrow:null},
    {icon: ShoppingCartOutlinedIcon, item:"eCommerce", arrowDefault: ChevronRightOutlinedIcon, arrowActive: KeyboardArrowDownOutlinedIcon,},
    {icon: ImportContactsTwoToneIcon, item:"Academy", arrowDefault: ChevronRightOutlinedIcon, arrowActive: KeyboardArrowDownOutlinedIcon,},
    {icon: AirportShuttleOutlinedIcon, item:"Logistics Pages", arrowDefault: ChevronRightOutlinedIcon, arrowActive: KeyboardArrowDownOutlinedIcon,},
  ]
  return (
    <div className='sidebar'>
      <div className='sidebar-head'>
        <div className='side-header'>
        <img src={letterV} alt="" />
        <p>Vuexy</p>
        </div>
        <AdjustOutlinedIcon className='side-headicon'/>
      </div>
      <div className='sidebar-list'>
        {listFirst.map((item,index)=>(
          <div key={index} className={`sidebar-listitem ${
            activeMenu.list === 'listFirst' && activeMenu.index === index ? 'active' : ''
          }`}
          onClick={() => handleClick('listFirst', index)}>
          <div className='sidebar-listleft'>
          {item.icon && <item.icon className="sidebar-listicons" />}
          <p>{item.item}</p>
          </div>
          {item.arrowDefault && (
              <div className='sidebar-arrow'>
                {expandedItem === index ? (
                  <item.arrowActive className='sidebar-arrow-icon' />
                ) : (
                  <item.arrowDefault className='sidebar-arrow-icon' />
                )}
              </div>
            )}
          </div>
        ))}
      </div>
      <div className='sidebar-bottom'>
        <p className='side-para'>APPS & PAGES</p>
        <div className='sidebar-bottomlist'>
          {listSecond.map((item,index)=>(
            <div
            key={index}
            className={`sidebar-listitem ${
              activeMenu.list === 'listSecond' && activeMenu.index === index ? 'active' : ''
            }`}
            onClick={() => handleClick('listSecond', index)}
          >
            <div className='sidebar-listleft'>
            {item.icon && <item.icon className="sidebar-listicons" />}
            <p>{item.item}</p>
            </div>
            {item.arrowDefault && (
              <div className='sidebar-arrow'>
                {expandedItem === index ? (
                  <item.arrowActive className='sidebar-arrow-icon' />
                ) : (
                  <item.arrowDefault className='sidebar-arrow-icon' />
                )}
              </div>
            )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Sidebar
