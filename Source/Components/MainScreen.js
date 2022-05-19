import React, { Component } from 'react';
import { StyleSheet, SafeAreaView, button, TouchableHighlight, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icon2 from 'react-native-vector-icons/FontAwesome5';
import Icon3 from 'react-native-vector-icons/AntDesign';
import { Alert } from 'react-native-web';
import { useState } from 'react/cjs/react.production.min';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  container_2:{
    flex: 1,
    flexDirection:'row',
    marginBottom: -150
  },
  container_3: {
    flex: 1,
    flexDirection:'row',
    marginBottom: -20
  },

  container_4:{
    flex: 1,
  },

  button_1: {
    marginTop: 30,
    alignSelf: 'center',
    borderWidth: 1,
    borderRadius: 10,
    padding: 40,
    marginLeft:82,
    backgroundColor: "#F7F7FB",
  },
  button_2: {
    marginTop: 30,
    alignSelf: 'center',
    borderWidth: 1,
    borderRadius: 10,
    padding: 40,
    backgroundColor: "#F7F7FB",
    marginRight:82,
  },
  button_3: {
    marginTop: 30,
    alignSelf: 'center',
    borderWidth: 1,
    borderRadius: 10,
    padding: 40,
    backgroundColor: "#F7F7FB",
    marginLeft:82,
  },
  button_4: {
    marginTop: 30,
    alignSelf: 'center',
    borderWidth: 1,
    borderRadius: 10,
    padding: 40,
    backgroundColor: "#F7F7FB",
    marginRight:82
  },
  footer:{
    flex: 0.55,
    backgroundColor: "white",
    borderTopRightRadius: 16,
    flexDirection: 'row'
    
  },
  home:{
    marginLeft:45,
    marginTop:15,
    flex:1
  },
  user:{
    marginRight:30,
    flex:1,
    
  },
  middle:{
    marginLeft:35,
    marginTop:15,
    flex:1,
  }
});

function clickBtnFunction(navigation){
  /* 코드 작성 */
  navigation.navigate('ScanFood');
}

export default function AppView ({navigation}){
    
    const [isShowTest, setIsShowTest] = React.useState(false);

    return (
      <View style={styles.container}>
        <View style={{ flex: 1, backgroundColor: '#6C6EC9' }} />
        
        <View style={{ flex: 2, backgroundColor: 'gray' }}>
        <Text>Main page css</Text>
        </View>
        
        {isShowTest && <View style={{position:'absolute', alignItems: 'center',borderRadius: 15, marginLeft: 40, marginTop:300 ,width: 300, height: 350, backgroundColor: 'white' }}>
        <Text>식사를 기록해 주세요</Text>
          <View style={styles.container_2}>
           
              <TouchableHighlight 
                
                onPress={()=>{clickBtnFunction(navigation)}}
                underlayColor="#DFDFF3"
                style={styles.button_1}>
                <Text>아침🍎</Text>
                
              </TouchableHighlight>
              
              <TouchableHighlight 
                onPress={()=>{clickBtnFunction(navigation)}}
                underlayColor="#DFDFF3"
                style={styles.button_2}>
                <Text>점심🍲</Text>
          </TouchableHighlight>
          
          </View>

          <View style={styles.container_3}>
         
              <TouchableHighlight 
                onPress={()=>{clickBtnFunction(navigation)}}
                underlayColor="#DFDFF3"
                style={styles.button_3}>
                <Text>저녁🥗</Text>
              </TouchableHighlight>
            
              <TouchableHighlight 
                onPress={()=>{clickBtnFunction(navigation)}}
                underlayColor="#DFDFF3"
                style={styles.button_4}>
                <Text>간식🍓</Text>
              </TouchableHighlight>
          </View>  
        </View>}

        <View style={styles.footer}>
           <Icon name="home" size={50} color="#6C6EC9" style={styles.home} onPress={() => isShowTest=== false ? setIsShowTest(false): setIsShowTest(false)}/>
           <Icon3 name="pluscircleo" size={50} color="#6C6EC9" style={styles.home} onPress={() => isShowTest=== false ? setIsShowTest(true) : setIsShowTest(false)}/>
           <Icon2 name="user-circle" size={50} color="#6C6EC9" style={styles.home} />
        </View>
      </View>
    );
  }
