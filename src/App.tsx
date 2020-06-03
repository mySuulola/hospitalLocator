import React, { useState } from 'react';
import './App.css';
import { Layout, Menu, Input, TreeSelect } from 'antd';
import { AudioOutlined, UserOutlined } from '@ant-design/icons';


const { Header, Content, Footer, Sider } = Layout;
const { Search } = Input;
const { TreeNode } = TreeSelect;

const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: '#1890ff',
    }}
  />
);



const searchForHost = (searchLocation: string) => {
  console.log(searchLocation)
}

const App: React.FC = () => {
  const [searchInput, setSearchInput] = useState<string>('');
  const [searchRadius, setSearchRadius] = useState<string>('1-2km');

  const handleGeoLocationSelection = (value: string) => {
    setSearchRadius(value)
  }

  const handleSearchInputChange = (value: any) => {
    console.log(value)
    setSearchInput(value)
  }

  return (
    <Layout className="app">
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken: any) => {
          console.log(broken);
        }}
        onCollapse={(collapsed: boolean, type: string) => {
          console.log(collapsed, type);
        }}
      >
        <div className="logo" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['2']}>
          <Menu.Item key="1">

          </Menu.Item>
          <Menu.Item key="2" icon={<UserOutlined />}>
            Home
          </Menu.Item>
          {/* <Menu.Item key="3" icon={<UploadOutlined />}>
            nav 3
          </Menu.Item> */}
        </Menu>
      </Sider>
      <Layout>
        <Header className="site-layout-sub-header-background">
          <h1 className="title">Hospital Finder</h1>
        </Header>
        <Content style={{ margin: '24px 16px 0' }}>
          <div className="site-layout-background" style={{ padding: 24, minHeight: 450, display: 'flex', justifyContent: 'space-around',  }}>
           <div  style={{ width: '20%' }} >
             <h6>Geolocation Radius</h6>
           <TreeSelect
              showSearch
              style={{ width: '100%' }}
              value={searchRadius}
              dropdownStyle={{ maxHeight: 400, overflow: 'hidden' }}
              placeholder="Please select"
              allowClear
              treeDefaultExpandAll
              onChange={handleGeoLocationSelection}
            >
              <TreeNode value="1km" title="less than 1 km">
                <TreeNode value="0m - 500m" title="0m - 500m" />
                <TreeNode value="500m - 1000m" title="500m - 1000m" />
              </TreeNode>
              <TreeNode value="1-5km" title="1-5km">
                <TreeNode value="1-3km" title="1-3km" />
                <TreeNode value="3-5km" title="3-5km" />
              </TreeNode>
            </TreeSelect>
           
           </div>
            <Search
              style={{ width: '75%', marginTop: 15 }}
              placeholder="input search text"
              enterButton="Search"
              size="large"
              suffix={suffix}
              onSearch={(value: string) => searchForHost(value)}
            />

          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
    </Layout>
  )
}



export default App;
