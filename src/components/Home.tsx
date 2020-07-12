import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Layout, Input, Spin, Alert, List, Avatar } from 'antd';
const { Header, Content, Footer } = Layout;
const { Search } = Input;


const Home: React.FC = () => {
  const [searchInput, setSearchInput] = useState<string>('');
  const [resultList, setResultList] = useState<any[]>([]);

  return (
    <Layout className="app">
      <Layout>
        <Header className="site-layout-sub-header-background">
          <h1 className="title">Movie API </h1>
        </Header>
        <Content style={{ margin: '24px 16px 0' }}>
          <div className="site-layout-background" style={{ padding: 24, minHeight: 450 }}>
            <div style={{ display: 'flex', justifyContent: 'space-around', }}>
              <Search
                style={{ width: '75%', marginTop: 15 }}
                placeholder="Input locality"
                onSearch={value => {
                  setSearchInput(value);
                  fetch('https://api.themoviedb.org/3/search/movie?api_key=13a97d57eebc906ddedaa42c832ec61e&language=en-US&query=' + value)
                    .then(res => res.json())
                    .then(data => {
                      setResultList(data.results ?? [])
                      console.log(data)
                    })
                }}
              />
            </div>
            <div style={{ padding: 10 }}>
              {(resultList.length === 0 && searchInput !== "") && <div style={{ justifyContent: 'center', alignItems: 'center', display: 'flex', }}>
                <Spin tip="Loading...">
                  <Alert
                    message=""
                    description={`Searching for ${searchInput}`}
                    type="info"
                  />
                </Spin> </div>}
              {(resultList.length > 0) && <div>
                <List
                  itemLayout="vertical"
                  size="large"
                  pagination={{
                    onChange: page => {
                      console.log(page);
                    },
                    pageSize: 5,
                  }}
                  dataSource={resultList}
                  footer={
                    <div>
                      <p> {searchInput} Movie Result</p>
                    </div>
                  }
                  renderItem={item => (
                    <Link to={{
                      pathname: `/movie/${item.id}`,
                      state: item
                    }} >
                      <List.Item
                        key={item.id}
                        extra={
                          <img
                            width={272}
                            alt="logo"
                            src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                            style={{ maxHeight: '200px', }}
                          />
                        }
                      >
                        <List.Item.Meta
                          avatar={<Avatar src={`https://image.tmdb.org/t/p/w500${item.backdrop_path}`} style={{ height: '100px', width: '100px', }} />}
                          title={item.title}
                          description={item.overview}
                        />
                        {item.content}
                      </List.Item>


                    </Link>


                  )}
                />
              </div>}

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



export default Home;
