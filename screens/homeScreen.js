import React from "react";
import {TouchableOpacity , Text , Image , StyleSheet , View, TextInput, Alert , Modal, ScrollView , KeyboardAvoidingView} from "react-native"

export default class HomeScreen extends React.Component{
    renderItem = ({item , i})=>{
        console.log(item.item_name);
        return(

            <ListItem key={i} title={item.item_name} subtitile={item.description} titleStyle={{color : "black"}} >

              <TouchableOpacity style={{height:20 , width:20 , alignItems:"center"}}>
                <Text style={{color:"#ffff"}}>
                    Exchange
                </Text>
              </TouchableOpacity>

              </ListItem>
            
            
             
            
        )
    }
    render(){
        return(
            <View>
                <FlatList
                keyExtractor={this.keyExtractor}
                data={this.state.allRequests}
                renderItem={this.renderItem}
                 />
            </View>
        )
    }
}


