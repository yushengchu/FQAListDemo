/**
 * Created by joker on 2017/6/19.
 */

import React, { Component } from 'react';
import {
    ListView
} from 'react-native';

import FQA from './FQACell';

/**
 *  data:FQA数据
 */
export default class BaseFQAList extends Component{
    constructor(props){
        super(props);
        this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            currentShowIndex:-1
        }
    }

    render(){
        return(
                <ListView
                    dataSource={this.ds.cloneWithRows(this.props.ListData || [])}
                    renderRow={this.renderItem}
                    style={{marginTop:10}}
                />
        )
    }

    renderItem =(item, sid, rid) =>{
        return(
            <FQA data={item}
                 rid={rid}
                 key={rid}
                 isShow={rid == this.state.currentShowIndex}
                 DidSelectRowAtIndexPath={(index) => this.didSelectRowAtIndexPath(index)}
            />
        )
    }

    didSelectRowAtIndexPath(index){
        if(this.state.currentShowIndex == index){
            this.setState({currentShowIndex:-1});
        }else{
            this.setState({currentShowIndex:index});
        }
    }

}
