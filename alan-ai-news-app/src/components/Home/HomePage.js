import React, { Suspense } from 'react';
import 'antd/dist/antd.css';
import {Link} from 'react-router-dom'
import { Layout, Menu } from 'antd';
import {MenuUnfoldOutlined, MenuFoldOutlined, StockOutlined,} from '@ant-design/icons';
import './HomePage.scss';
import { fetchSources } from '../api';
import MainAlan from "../Alan/MainAlan"
import NewsSection from './NewsSection'
import News from "./News"
import Login from "../Login/Login"



const { Header, Sider, Content } = Layout;

class HomePage extends React.Component {
    state = {
    collapsed: false,
    sources: [],
    homePage: true,
    query: '',
    }


    toggle = () => {
        this.setState({
          collapsed: !this.state.collapsed,
        });
    };

    async componentDidMount() {
        const sources = await fetchSources();
        this.setState({ sources });
        // console.log(sources)
    }

    loadNews(query) {
        this.setState({
          homePage: false,
          query: query
        });
    }

    Home = () => {
      this.setState({
        homePage: true
      })
    }

    render() {
      return (
        <Layout>
              <Sider trigger={null} collapsible collapsed={!this.state.collapsed}>
                    <h2 className="logo"> {!this.state.collapsed ? "G-": <Login/> }</h2>
                    <br/>
                    <Link to="/">
                      <div className="logo" onClick={this.Home}>
                      <h2>{!this.state.collapsed ? 'A' : 'Alan Ai News'}</h2>
                      </div>
                    </Link>
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['-1']}>
                          <Menu.Item onClick={() => this.setState({ homePage: true })} key="-1" icon={<StockOutlined />}>
                            Top News
                          </Menu.Item>
                          {this.state.sources.map((source) =>
                                <Menu.Item onClick={() => this.loadNews(source.name)} key={source.name}>
                                    {source.name}
                                </Menu.Item>
                          )}
                    </Menu>
              </Sider>
              <Layout className="site-layout">
                    <Header className="site-layout-background" style={{ padding: 0 }}>
                      {React.createElement(!this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                        className: 'trigger',
                        onClick: this.toggle,
                      })}
                    </Header>
                    <Content
                      className="site-layout-background"
                      style={{
                        margin: '24px 16px',
                        padding: 24,
                        paddingRight: 0,
                        minHeight: 280,
                      }}
                    >
                      <Suspense fallback={<h1 style={{ fontSize: '30px' }}>Loading...</h1>}>

                        {this.state.homePage === true ?
                        (<div>
                          <MainAlan/> <News />
                        </div>
                        )
                        :
                        ( <NewsSection category='everything' query={'q=' + this.state.query} topHeading={this.state.query} results='100' />
                        )}
                      </Suspense>
                    </Content>
              </Layout>
        </Layout>
    );
  }
}

export default HomePage;
