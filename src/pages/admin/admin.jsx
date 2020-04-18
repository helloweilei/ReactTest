import React from 'react';
import { Layout } from 'antd';
import NavLeft from '../../components/navLeft';
import Home from './home';
import User from './user';
import Category from './category';
import './style.less';
import BaseHeader from "../../components/header";

import { Route, Switch, Redirect } from 'react-router-dom';

const { Sider, Header, Content, Footer } = Layout;

function Admin() {
  return (
    <Layout style={{ height: '100vh' }}>
      <Sider>
        <NavLeft/>
      </Sider>
      <Layout>
        <Header>
          <BaseHeader/>
        </Header>
        <Content>
          <div className='admin-content'>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/user" component={User} />
              <Route path="/category" component={Category} />
              <Redirect to="/" />
            </Switch>
          </div>
        </Content>
        <Footer>
          <div style={{textAlign: 'center'}}>
            版权所有，违者必究
          </div>
        </Footer>
      </Layout>
    </Layout>
  );
}

export default Admin;
