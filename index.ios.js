/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import FQAList from './BaseFQAList/BaseFQAList';
const beforeData = [
    {
        title:'1.借款前需要准备什么资料？',
        detail:[
            {
                title:'身份认证：',
                content:'在光线充足的环境下进行人脸识别；申请者本人的二代身份证及银行储蓄卡；'
            },
            {
                title:'基本信息：',
                content:'需要您打开通讯录授权和定位授权；保证您的手机通讯录中有联系人。'
            },
            {
                title:'学信网：',
                content:'申请者本人的学信网账号和密码；'
            },
            {
                title:'手机认证：',
                content:'需要申请者本人的实名手机号；'
            },
        ]
    },
    {
        title:'2.如何提高借款申请成功率？',
        detail:[
            {
                title:'',
                content:'请如实填写相关信息，保证证件资料清晰，并开启相应的手机通讯录及地理位置授权。此外，基础认证完成后，完成越多选填资料，成功率越高。'
            }
        ]
    },
    {
        title:'3.借款审批时间多久？',
        detail:[
            {
                title:'',
                content:'借款审批由系统进行自动审批，部分需要人工抽查的借款申请，一般在1个工作日内审批完成。'
            }
        ]
    },
    {
        title:'4.申请区域有哪些？',
        detail:[
            {
                title:'',
                content:'中国大陆内地符合条件用户均可申请借款，风控系统会根据借款风险实时调整高危地区，高危地区用户会出现借款失败。'
            }
        ]
    },
]


export default class FQAListDemo extends Component {
  render() {
    return (
      <View style={styles.container}>
        <FQAList tabLabel="借款前" ListData={beforeData}/>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('FQAListDemo', () => FQAListDemo);
