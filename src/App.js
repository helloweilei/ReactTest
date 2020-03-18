import React from 'react';
import './App.css';
import { Row, Col } from 'antd';
import NavLeft from './components/navLeft';
import MainBody from './components/mainBody';

function App() {
  return (
    <div className="app-body">
      <Row>
        <Col span={4}>
          <NavLeft></NavLeft>
        </Col>
        <Col span={20}>
          <MainBody></MainBody>
        </Col>
      </Row>
    </div>
  );
}

export default App;
