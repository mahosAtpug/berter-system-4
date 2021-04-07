import React from "react";
import {TouchableOpacity , Text , Image  , View, TextInput, Alert , Modal, ScrollView , KeyboardAvoidingView, StyleSheet} from "react-native"

export default class ExchangeScreen extends React.Component{

  

    constructor(){
        super()
        this.state={
            itemName:"",
            itemDescription:""
        }
    }

    addItem = ()=>{
      var userName  = this.state.userName
      db.collection("exchange_requests").add({
          username:this.state.userName,
          item_name:this.state.itemName,
          description:this.state.description,
          
      })
      this.setState({
          itemName:"",
          description:""
      })

      return Alert.alert("Item Ready To Exchange" , onPress=()=>{
        this.props.navigation.navigate("HomeScreen")
      })
      alert("Item Ready To Exchange")
  }

    showModal = ()=>{
        return(

          <Modal animationType={"fade"} transparent={true} visible={this.state.isModalVisible}>
            <View>
              <ScrollView style={{width:"100%"}}>
                <KeyboardAvoidingView style={styles.KeyboardAvoidingView}>
                  <Text style={styles.modalTitle}>
                    Exchange 
                  </Text>
  
                  <TextInput style={styles.formTextInput} placeholder={"Item Name"} maxLength={8} onChangeText={(text)=>{
                      this.setState({
                      itemName:text
                      })
                    }} />
  
                    
                  <TextInput style={styles.formTextInput} placeholder={"Item Description"} maxLength={8} onChangeText={(text)=>{
                      this.setState({
                      itemDescription:text
                      })
                    }} />
  
                    <View>
                      <TouchableOpacity style={{width:20 , height:20 , alignItems:'center', justifyContent:'center', marginTop:10}}  onPress ={()=>{
                        this.addItem(this.state.itemName , this.state.description)}}>
                        <Text>
                          Add Item
                        </Text>
                      </TouchableOpacity>
                    </View>
  
                </KeyboardAvoidingView>
              </ScrollView>
            </View>
          </Modal>
        )
      }
    render(){
        return(
            <View>
                <Text>
                    Exchange
                </Text>
            </View>
        )
    }
}
const styles = StyleSheet.create({

formTextInput:{
    width:"75%",
    height:35,
    alignSelf:'center',
    borderColor:'#ffab91',
    borderRadius:10,
    borderWidth:1,
    marginTop:20,
    padding:10
  },

})