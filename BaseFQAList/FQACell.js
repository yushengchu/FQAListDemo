/**
 * Created by joker on 2017/6/1.
 */


import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Animated,
  Dimensions,
  TouchableOpacity,
  PixelRatio,
  LayoutAnimation,
  UIManager,
  Platform
} from 'react-native';

export default class FQACell extends Component{

  constructor(props){
    super(props);
    this.icons = {
      'right': require('./images/list_arrow_right.png'),
      'down': require('./images/list_arrow_down.png')
    };
    this.state = {
        MaxHeight : 54,
    };

    if (Platform.OS === 'android') {
        UIManager.setLayoutAnimationEnabledExperimental(true)
    }
  }

  render(){
      console.log('render');
    return(
        <Animated.View style={[!this.props.isShow ? {height:this.state.MaxHeight}:null,{overflow:'hidden',backgroundColor:'white'}]}>
          {this.renderHead()}
          {this.renderContent()}
        </Animated.View>
    )
  }

  renderHead(){
    let icon = this.props.isShow ? this.icons['down'] : this.icons['right'];
    return(
      <TouchableOpacity onPress={this.showDetail}>
        <View style={styles.ContainerStyle}>
            <View style={{height:53, width:Dimensions.get('window').width-50,justifyContent:'center'}}>
                <Text style={styles.TitleStyle}>{this.props.data.title}</Text>
            </View>
          <Image source={icon} style={{width:20,height:20,position:'absolute',right:10,bottom:17}}/>
        </View>
      </TouchableOpacity>
    )
  }

  showDetail = () =>{
      console.log('showDetail');

      if (!this.props.isShow){
        this.MaxHeight = 54;
      }
      LayoutAnimation.configureNext({
          duration:200,
          update:{
              type: 'linear',
              springDamping: 1
          }
      });
      this.setState({
          MaxHeight:this.MaxHeight
      })

      this.props.DidSelectRowAtIndexPath && this.props.DidSelectRowAtIndexPath(this.props.rid);
  }

  renderContent(){
    return(
        <View style={{borderBottomWidth:1 / PixelRatio.get(), borderBottomColor:'#DAE4EC',paddingTop:10,paddingBottom:10,backgroundColor:'#EFF2F7'}}
              onLayout={this._contentOnLayout}
        >
          {this.renderDetialRow()}
        </View>
    )
  }

  _contentOnLayout = (e) =>{
      //执行动画
      console.log('-------高度:' + e.nativeEvent.layout.height);
      this.MaxHeight = e.nativeEvent.layout.height + 54;
  }

  renderDetialRow= () => {
    let detail = this.props.data.detail;
    return(
        detail.map((item, index) =>{
          return(
              <View style={{marginBottom:3,marginLeft:15,marginRight:15}} key={index}>
                <Text style={styles.DetailStyle}>
                  {
                    item.title && item.title !='' ?
                      <Text style={styles.DetailTitleStyle}>
                        {item.title}
                      </Text>:null
                  }
                  <Text style={styles.DetailContentStyle}>
                    {item.content}
                  </Text>

                </Text>
              </View>
          )
        })
    )
  }

}

const styles = StyleSheet.create({
  ContainerStyle:{
    height:54,
    width:Dimensions.get('window').width,
    flexDirection:'row',
    borderBottomWidth:1 / PixelRatio.get(),
    borderBottomColor:'#DAE4EC',
  },
  TitleStyle:{
    paddingLeft:10,
    fontSize:16,
    color:'rgb(73, 73, 73)',
  },
  Default:{
    height:54,
  },
  showDetail:{

  },
  DetailStyle:{
    fontSize:14,
    lineHeight:21,
    letterSpacing:0.5,
  },
  DetailContentStyle:{
    color:'#8A94A6',
  },
  DetailTitleStyle:{
    color:'#8A94A6',
    fontWeight:'bold'
  }
});