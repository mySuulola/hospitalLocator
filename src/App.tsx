import React, { useState, useEffect } from 'react';
import './App.css';
import { Layout, Menu, Input, TreeSelect, Spin, Alert } from 'antd';
import { UserOutlined } from '@ant-design/icons';


const { Header, Content, Footer, Sider } = Layout;
const { Search } = Input;
const { TreeNode } = TreeSelect;



const searchForHost = (searchLocation: string) => {
  console.log(searchLocation)
}

const App: React.FC = () => {
  const [searchInput, setSearchInput] = useState<string>('');
  const [searchRadius, setSearchRadius] = useState<string>('1-2km');
  const [hospitalList, setHospitalList] = useState<any[]>([]);

  const handleGeoLocationSelection = (value: string) => {
    setSearchRadius(value)
  }

  const handleSearchInputChange = (e: any) => {
    console.log(e.target.value)
    setSearchInput(e.target.value)
    // make call to the googleapi here to update the setHospitalList array

  }


  // // componentDidMount()
  // useEffect(() => {
  //   console.log('mounted')
  //   // make call to 
  //   setHospitalList([1,2,3,4])
  // }, []);

  return (
    <Layout className="app">
      {/* <Sider
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
        </Menu>
      </Sider>
       */}
      <Layout>
        <Header className="site-layout-sub-header-background">
          <h1 className="title">Hospital Finder</h1>
        </Header>
        <Content style={{ margin: '24px 16px 0' }}>
          <div className="site-layout-background" style={{ padding: 24, minHeight: 450 }}>
            <div style={{ display: 'flex', justifyContent: 'space-around', }}>
              <div style={{ width: '20%' }} >
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
                  <TreeNode value="5km and above" title="5km and above">
                    <TreeNode value="5-10km" title="5-10km" />
                    <TreeNode value="above 10km" title="above 10km" />
                  </TreeNode>
                </TreeSelect>

              </div>
              <Search
                style={{ width: '75%', marginTop: 15 }}
                placeholder="Input locality"
                // enterButton="Search"
                // size="large"
                // suffix={suffix}
                onChange={handleSearchInputChange}
              />
            </div>
            <div style={{padding: 10}}>
              {(hospitalList.length === 0 && searchInput !== "") && <Spin tip="Loading...">
                <Alert
                  message="Hospital Loading..."
                  description={`List of hospitals at ${searchInput} within ${searchRadius}`}
                  type="info"
                />
              </Spin>}

              {(hospitalList.length > 0) &&  <div>
                <h1>Hospital List</h1>
                hospitalList.forEach(hospital => 
                  (
                  <p>hjk</p>
                  )                  
                );
              </div>  }

            </div>


          </div>
          <div className="row">

          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
    </Layout>
  )
}



export default App;
