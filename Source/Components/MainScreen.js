import React, { Component } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, 
    SafeAreaView,
    button, 
    TouchableHighlight, 
    Text, 
    View,
    ScrollView,
    Dimensions,
    Image,
    } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icon2 from 'react-native-vector-icons/FontAwesome5';
import Icon3 from 'react-native-vector-icons/AntDesign';
import { Alert } from 'react-native-web';
import { useState } from 'react/cjs/react.production.min';

import { LinearGradient } from 'expo-linear-gradient';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { ProgressBar } from 'react-native-paper';
import { AntDesign, MaterialIcons, Feather } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Flatdumpling from "../image/flatdumpling.png";
import Porkcutletcurry from "../image/Porkcutletcurry.png";
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import {LocaleConfig} from 'react-native-calendars';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E5E5E5'
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
  tbox:{
    
  },
  button_1: {
    alignSelf: 'center',
    borderWidth: 1,
    borderRadius: 10,
    bottom: Dimensions.get('window').width*0.1,
    width: Dimensions.get('window').width*0.28,
    right: Dimensions.get('window').width*0.015,
    height: Dimensions.get('window').height*0.11,
    padding: 28,
    backgroundColor: "#F7F7FB",
    borderColor: "#F7F7FB",
  },
  button_2: {
    alignSelf: 'center',
    borderWidth: 1,
    borderRadius: 10,
    padding: 28,
    bottom: Dimensions.get('window').width*0.1,
    width: Dimensions.get('window').width*0.28,
    left: Dimensions.get('window').width*0.015,
    height: Dimensions.get('window').height*0.11,
    backgroundColor: "#F7F7FB",
    borderColor: "#F7F7FB",
  },
  button_3: {
    alignSelf: 'center',
    borderWidth: 1,
    borderRadius: 10,
    bottom: Dimensions.get('window').width*0.01,
    width: Dimensions.get('window').width*0.28,
    right: Dimensions.get('window').width*0.015,
    height: Dimensions.get('window').height*0.11,
    padding: 28,
    backgroundColor: "#F7F7FB",
    borderColor: "#F7F7FB",
  },
  button_4: {
    alignSelf: 'center',
    borderWidth: 1,
    bottom: Dimensions.get('window').width*0.01,
    width: Dimensions.get('window').width*0.28,
    left: Dimensions.get('window').width*0.015,
    height: Dimensions.get('window').height*0.11,
    borderRadius: 10,
    padding: 28,
    backgroundColor: "#F7F7FB",
    borderColor: "#F7F7FB",
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
  },

//MainPage CSS
    body: {
        flex: 1,
        backgroundColor: '#E5E5E5',
    },
    Rectangle4723 : {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height/4.3,
        borderStyle: 'solid',
        borderColor: '#ffffff',
        borderWidth: 1,
        borderRadius: 1,
        borderBottomRightRadius: 30,      
        backgroundColor: '#6C6EC9',
    },
    Rectangle4741: {
        width: Dimensions.get('window').width/1.1,
        height: Dimensions.get('window').height/7,
        backgroundColor: '#f7f7fb',
        borderStyle: 'solid',
        borderColor: '#f7f7fb',
        borderWidth: 1,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 20,
        marginTop: 15,
        marginBottom: 15,
    },
    Rectangle4734: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height*1.2,
        backgroundColor: '#ffffff',
        borderStyle: 'solid',
        borderColor: '#ffffff',
        borderTopLeftRadius: 30,
        borderWidth: 1,
        borderRadius: 1,
        marginBottom: Dimensions.get('window').height/2,
        alignItems: 'center',
    },
    footer:{
        flex: 0.55,
        backgroundColor: "#ffffff",
        borderTopRightRadius: 30,
        flexDirection: 'row',
        position: 'absolute',
        bottom: 0,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height/8,
        shadowColor: "#000000",
        shadowOpacity: 0.1,
        shadowRadius: 2,
        shadowOffset: {
        height: -5,
        width: 0
        }
    },
    home:{
        marginLeft:45,
        marginTop:15,
        flex:1
    },
    Text003: {
        fontSize: 20,
        color: '#6f6d7e',
        marginTop: 25,
        marginLeft: 20,
        marginBottom: 10,
    },
    circlebar: {
        top: 15,
    },
    Text005: {
        color: "#6c6ec9",
        fontSize: 30,
        textAlign: 'center',
        marginTop: -10,
    },
    Text006: {
        color: "#6f6d7e",
        fontSize: 14,
        textAlign: 'center',
        marginTop: 10,
    },
    bodyrow: {
        flexDirection: 'row',
    },
    bodycolumn: {
        flexDirection: 'column',
    },
    Frame111: {
        width: 40,
        height: 40,
        backgroundColor: '#051898',
        borderStyle: 'solid',
        borderColor: '#051898',
        borderWidth: 1,
        borderRadius: 40,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
    },
    Frame112: {
        width: 70,
        height: 70,
        backgroundColor: '#FFFFFF',
        borderStyle: 'solid',
        borderColor: '#FFFFFF',
        borderWidth: 1,
        borderRadius: 70,
        marginLeft: 20,
        marginTop: 30,
    },
    Frame113: {
        width: 160,
        height: 50,
        backgroundColor: '#4A52B9',
        borderStyle: 'solid',
        borderColor: '#4A52B9',
        borderWidth: 1,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
        marginLeft: 20,
    },
    Frame147: {
        width: Dimensions.get('window').width/1.8,
        height: Dimensions.get('window').height/9,
        backgroundColor: '#ffffff',
        borderStyle: 'solid',
        borderColor: '#f7f7fb',
        borderWidth: 1,
        borderRadius: 10,
        borderBottomLeftRadius: 0,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 20,
        marginTop: 15,
        marginBottom: 15,
        shadowColor: "#000000",
        shadowOpacity: 0.1,
        shadowRadius: 2,
        shadowOffset: {
        height: 8,
        width: 6
        }
    },
    bar: {
        width: Dimensions.get('window').width/4,
    },
    Frame168: {
        width: Dimensions.get('window').width/12,
        height: Dimensions.get('window').height/25,
        backgroundColor: '#FFFFFF',
        borderStyle: 'solid',
        borderColor: '#ffffff',
        borderWidth: 1,
        borderRadius: 15,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: Dimensions.get('window').width/30,
        marginTop: 20,
        marginBottom: 5,
    },
    Frame1681: {
        width: Dimensions.get('window').width/30,
        height: Dimensions.get('window').height/25,
        backgroundColor: '#ffffff',
        borderStyle: 'solid',
        borderColor: '#ffffff',
        borderWidth: 1,
        borderRadius: 15,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: Dimensions.get('window').width/30,
        marginTop: 20,
        marginBottom: 5,
    },
    Frame169: {
        width: Dimensions.get('window').width/3.5,
        height: Dimensions.get('window').height/14,
        backgroundColor: '#ffffff',
        borderStyle: 'solid',
        borderColor: '#ffffff',
        borderWidth: 1,
        borderRadius: 15,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        marginLeft: 15,
        marginRight: 5,
        marginTop: 5,
        marginBottom: 5,
    },
    Frame170: {
        width: Dimensions.get('window').width/3.5,
        height: Dimensions.get('window').height/14,
        backgroundColor: '#ffffff',
        borderStyle: 'solid',
        borderColor: '#ffffff',
        borderWidth: 1,
        borderRadius: 15,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        marginLeft: 15,
        marginRight: 5,
        marginTop: 20,
        marginBottom: 5,
    },
    Rectangle4750: {
        width: Dimensions.get('window').width/1.1,
        height: Dimensions.get('window').height/7,
        backgroundColor: '#ffffff',
        borderStyle: 'solid',
        borderColor: '#f7f7fb',
        borderWidth: 1,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 15,
        shadowColor: "#000000",
        shadowOpacity: 0.1,
        shadowRadius: 2,
        shadowOffset: {
        height: 8,
        width: 6,
        }
    },
    Rectangle47501: {
        width: Dimensions.get('window').width/1.1,
        height: Dimensions.get('window').height/7,
        backgroundColor: '#ffffff',
        borderStyle: 'solid',
        borderColor: '#ffffff',
        borderWidth: 1,
        borderRadius: 10,
    },
    Rectangle47502: {
        width: Dimensions.get('window').width/1.1,
        height: Dimensions.get('window').height/7,
        backgroundColor: '#ffffff',
        borderStyle: 'solid',
        borderColor: '#ffffff',
        borderWidth: 1,
        justifyContent: 'center',
    },
    image: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        borderBottomLeftRadius: 10,
        borderTopLeftRadius: 10,
    },
});

function clickBtnFunction(navigation){
  /* ?????? ?????? */
  navigation.navigate('ScanFood');
}

LocaleConfig.locales['fr'] = {
    monthNames: ['Janvier','F??vrier','Mars','Avril','May','Juin','Juillet','Ao??t','Septembre','Octobre','Novembre','D??cembre'],
    monthNamesShort: ['Janv.','F??vr.','Mars','Avril','May','Juin','Juil.','Ao??t','Sept.','Oct.','Nov.','D??c.'],
    dayNames: ['?????????','?????????', '?????????','?????????','?????????','?????????','?????????'],
    dayNamesShort: ['???', '???','???','???','???','???','???'],
    today: 'Aujourd\'hui'
  };
  LocaleConfig.defaultLocale = 'fr';

export default function AppView ({route, navigation}){
    
    const [isShowTest, setIsShowTest] = React.useState(false);
    const [mealtime, setMealtime] = React.useState(0);
    const [isBackgroundShow, setIsBackgroundShow] =React.useState(false);

    const ?????? = () => {
        isShowTest=== false ? setIsShowTest(true) : setIsShowTest(false);
        isBackgroundShow === false ? setIsBackgroundShow(true) : setIsBackgroundShow(false);
    }

    return (
      <View style={styles.container}>
        <StatusBar style="dark" />
        <SafeAreaView>
            <View style={styles.Rectangle4723}>
                <View style={styles.bodyrow}>
                    <View style={{flex:1.2}}>
                        <View style={styles.Frame112}>

                        </View>
                    </View>
                    <View style={{flex: 2.8}}>
                        <Text style={{color: "#FFFFFF", fontSize: Dimensions.get("window").width/20, marginTop: 40}}>Linda Kim</Text>
                    </View>
                    <View style={{flex: 0.7}}>
                        <View style={styles.Frame111}>
                            <Feather name="bell" size={Dimensions.get("window").width/20} color="#FFFFFF" />
                        </View>
                    </View>
                </View>
                <View style={styles.Frame113}>
                    <Text style={{color: "#FFFFFF", fontSize: 20}}>??? ???????????? ??????</Text>
                </View>
            </View>
            </SafeAreaView>


            <Calendar/>
            
            <View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.Rectangle4734}>
                    <View style={styles.bodyrow}>
                        <TouchableOpacity onPress={() => setMealtime(1)}>
                            <View style={styles.Frame168}>
                                <Text style={{fontSize:Dimensions.get("window").width/24, color: mealtime===1 ? "#6C6EC9" : "#888888"}}>All</Text>
                            </View>
                        </TouchableOpacity>
                        <View style={styles.Frame1681}>
                            <Text style={{fontSize: Dimensions.get("window").width/24, color: "#DFDFF3"}}>|</Text>
                        </View>
                        <TouchableOpacity onPress={() => setMealtime(2)}>
                            <View style={styles.Frame168}>
                                <Text style={{fontSize:Dimensions.get("window").width/24, color: mealtime===2 ? "#6C6EC9" : "#888888"}}>??????</Text>
                            </View>
                        </TouchableOpacity>
                        <View style={styles.Frame1681}>
                            <Text style={{fontSize: Dimensions.get("window").width/24, color: "#DFDFF3"}}>|</Text>
                        </View>
                        <TouchableOpacity onPress={() => setMealtime(3)}>
                            <View style={styles.Frame168}>
                                <Text style={{fontSize: Dimensions.get("window").width/24, color: mealtime===3 ? "#6C6EC9" : "#888888"}}>??????</Text>
                            </View>
                        </TouchableOpacity>
                        <View style={styles.Frame1681}>
                            <Text style={{fontSize: Dimensions.get("window").width/24, color: "#DFDFF3"}}>|</Text>
                        </View>
                        <TouchableOpacity onPress={() => setMealtime(4)}>
                            <View style={styles.Frame168}>
                                <Text style={{fontSize: Dimensions.get("window").width/24, color: mealtime===4 ? "#6C6EC9" : "#888888"}}>??????</Text>
                            </View>
                        </TouchableOpacity>
                        <View style={styles.Frame1681}>
                            <Text style={{fontSize: Dimensions.get("window").width/24, color: "#DFDFF3"}}>|</Text>
                        </View>
                        <TouchableOpacity onPress={() => setMealtime(5)}>
                            <View style={styles.Frame168}>
                                <AntDesign name="plus" size={Dimensions.get("window").width/24} style={{color: mealtime===5 ? "#6C6EC9" : "#888888"}} />
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.bodyrow}>
                        <AnimatedCircularProgress
                            size={130}
                            width={7}
                            backgroundWidth={7}
                            fill={65}
                            tintColor="#6C6EC9"
                            backgroundColor="#DFDFF3"
                            arcSweepAngle={240}
                            rotation={240}
                            lineCap="round"
                            style={styles.circlebar}>
                            {
                                ()=>
                                <View>
                                <Text style={styles.Text005}>1216</Text>
                                <Text style={styles.Text006}>?????? ?????????</Text>
                                </View>
                            }
                        </AnimatedCircularProgress>
                        <View style={styles.Frame147}>
                            <View style={styles.bodycolumn}>
                                <Text style={{fontSize: 16, color:'#6F6D7E', fontWeight:'bold'}}>????????? AI?????????</Text>
                                <Text style={{fontSize: 16, color:'#6F6D7E', marginTop: 10}}>????????????, ?????? ????????? ?????????{"\n"}?????? ????????? ????????? ????????????!</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.bodyrow}>
                        <View style={styles.Frame169}>
                            <ProgressBar progress={0.52} color="#6C6EC9" style={styles.bar}/>
                            <Text style={{fontSize: 16, color: '#6F6D7E', marginTop: 10}}>???????????? 52%</Text>
                        </View>
                        <View style={styles.Frame169}>
                            <ProgressBar progress={0.6} color="#6C6EC9" style={styles.bar}/>
                            <Text style={{fontSize: 16, color: '#6F6D7E', marginTop: 10}}>????????? 60%</Text>
                        </View>
                        <View style={styles.Frame169}>
                            <ProgressBar progress={0.25} color="#6C6EC9" style={styles.bar}/>
                            <Text style={{fontSize: 16, color: '#6F6D7E', marginTop: 10}}>?????? 25%</Text>
                        </View>
                    </View>
                    <View style={styles.bodyrow}>
                        <View style={styles.Frame169}>
                            <ProgressBar progress={0.8} color="#6C6EC9" style={styles.bar}/>
                            <Text style={{fontSize: 16, color: '#6F6D7E', marginTop: 10}}>????????? 80%</Text>
                        </View>
                        <View style={styles.Frame169}>
                            <ProgressBar progress={0.9} color="#6C6EC9" style={styles.bar}/>
                            <Text style={{fontSize: 16, color: '#6F6D7E', marginTop: 10}}>??? 90%</Text>
                        </View>
                        <View style={styles.Frame169}>
                            <ProgressBar progress={0.5} color="#6C6EC9" style={styles.bar}/>
                            <Text style={{fontSize: 16, color: '#6F6D7E', marginTop: 10}}>????????? 50%</Text>
                        </View>
                    </View>
                    <View style={styles.Rectangle4750}>
                        <View style={{...styles.Rectangle47501, flex: 1.2}}>
                            <Image source={Flatdumpling} style={styles.image} />
                        </View>
                        <View style={{...styles.Rectangle47502, flex: 2.3}}>
                            <View style={{...styles.bodyrow, alignItems: 'center'}}>
                                <Text style={{fontSize: 20, color: '#3D3B4C', marginLeft: 15}}>?????? ??????</Text>
                                <Text style={{fontSize: 15, color: '#888888', marginLeft: 10}}>?????? 8:47</Text>
                            </View>
                            <View style={{...styles.bodyrow, alignItems: 'center'}}>
                                <Text style={{fontSize: 15, color: '#3D3B4C', marginLeft: 15, marginTop: 15}}>?????????</Text>
                                <Text style={{fontSize: 15, color: '#6C6EC9', marginLeft: 10, marginTop: 15}}>2/3???</Text>
                            </View>
                            <View style={{...styles.bodyrow, alignItems: 'center'}}>
                                <Text style={{fontSize: 15, color: '#3D3B4C', marginLeft: 15, marginTop: 10}}>????????????</Text>
                                <Text style={{fontSize: 15, color: '#6C6EC9', marginLeft: 10, marginTop: 10}}>????????????</Text>
                            </View>
                        </View>
                        <View style={{flex: 0.5, flexDirection: 'row'}}>
                                <Text style={{fontSize: 15, color: '#888888'}}>?????? </Text>
                                <MaterialIcons name="keyboard-arrow-right" size={15} color="#888888" />
                        </View>
                    </View>
                    
                    <View style={styles.bodyrow}>
                        <View style={styles.Frame170}>
                            <ProgressBar progress={0.17} color="#6C6EC9" style={styles.bar}/>
                            <Text style={{fontSize: 16, color: '#6F6D7E', marginTop: 10}}>???????????? 17%</Text>
                        </View>
                        <View style={styles.Frame170}>
                            <ProgressBar progress={0.3} color="#6C6EC9" style={styles.bar}/>
                            <Text style={{fontSize: 16, color: '#6F6D7E', marginTop: 10}}>????????? 30%</Text>
                        </View>
                        <View style={styles.Frame170}>
                            <ProgressBar progress={0.12} color="#6C6EC9" style={styles.bar}/>
                            <Text style={{fontSize: 16, color: '#6F6D7E', marginTop: 10}}>?????? 12%</Text>
                        </View>
                    </View>

                    <View style={{...styles.Rectangle4750}}>
                        <View style={{...styles.Rectangle47501, flex: 1.2}}>
                            <Image source={Porkcutletcurry} style={styles.image} />
                        </View>
                        <View style={{...styles.Rectangle47502, flex: 2.3}}>
                            <View style={{...styles.bodyrow, alignItems: 'center'}}>
                                <Text style={{fontSize: 20, color: '#3D3B4C', marginLeft: 15}}>????????? ??????</Text>
                                <Text style={{fontSize: 15, color: '#888888', marginLeft: 10}}>?????? 12:05</Text>
                            </View>
                            <View style={{...styles.bodyrow, alignItems: 'center'}}>
                                <Text style={{fontSize: 15, color: '#3D3B4C', marginLeft: 15, marginTop: 15}}>?????????</Text>
                                <Text style={{fontSize: 15, color: '#6C6EC9', marginLeft: 10, marginTop: 15}}>1???</Text>
                            </View>
                            <View style={{...styles.bodyrow, alignItems: 'center'}}>
                                <Text style={{fontSize: 15, color: '#3D3B4C', marginLeft: 15, marginTop: 10}}>????????????</Text>
                                <Text style={{fontSize: 15, color: '#6C6EC9', marginLeft: 10, marginTop: 10}}>????????????</Text>
                            </View>
                        </View>
                        <View style={{flex: 0.5, flexDirection: 'row'}}>
                                <Text style={{fontSize: 15, color: '#888888'}}>?????? </Text>
                                <MaterialIcons name="keyboard-arrow-right" size={15} color="#888888" />
                        </View>
                    </View>         

                    <View style={styles.bodyrow}>
                        <View style={styles.Frame170}>
                            <ProgressBar progress={0.35} color="#6C6EC9" style={styles.bar}/>
                            <Text style={{fontSize: 16, color: '#6F6D7E', marginTop: 10}}>???????????? 35%</Text>
                        </View>
                        <View style={styles.Frame170}>
                            <ProgressBar progress={0.3} color="#6C6EC9" style={styles.bar}/>
                            <Text style={{fontSize: 16, color: '#6F6D7E', marginTop: 10}}>????????? 30%</Text>
                        </View>
                        <View style={styles.Frame170}>
                            <ProgressBar progress={0.13} color="#6C6EC9" style={styles.bar}/>
                            <Text style={{fontSize: 16, color: '#6F6D7E', marginTop: 10}}>?????? 13%</Text>
                        </View>
                    </View>
                </View>
                </ScrollView>
            
            </View>
            {isBackgroundShow && <View style={{backgroundColor:'rgba( 0, 0, 0, 0.5 )', position: "absolute", 
            width:Dimensions.get('window').width, height:Dimensions.get('window').height}}>
            {isShowTest && <View style={{position:'absolute', alignItems: 'center',
            borderRadius: 15, marginLeft: 40,
            backgroundColor: 'white',
            
            bottom:Dimensions.get('window').width*0.3,
            width: Dimensions.get('window').width*0.65,
            height: Dimensions.get('window').height*0.33,
            left: Dimensions.get('window').width*0.07 }}>
            <Text style={{ fontWeight: 'bold'}}>????????? ????????? ?????????</Text>
            <View style={styles.container_2}>
                <TouchableHighlight  
                    onPress={()=>{clickBtnFunction(navigation)}}
                    underlayColor="#DFDFF3"
                    style={styles.button_1}>
                    <Text style={{fontWeight: 'bold'}}>??????????</Text>
                    
                </TouchableHighlight>
 
                <TouchableHighlight 
                    onPress={()=>{clickBtnFunction(navigation)}}
                    underlayColor="#DFDFF3"
                    style={styles.button_2}>
                    <Text style={{fontWeight: 'bold'}}>??????????</Text>
            </TouchableHighlight>
            
            </View>

            <View style={styles.container_3}>
            
                <TouchableHighlight 
                    onPress={()=>{clickBtnFunction(navigation)}}
                    underlayColor="#DFDFF3"
                    style={styles.button_3}>
                    <Text style={{fontWeight: 'bold'}}>??????????</Text>
                        
                </TouchableHighlight>
                
                <TouchableHighlight 
                    onPress={()=>{clickBtnFunction(navigation)}}
                    underlayColor="#DFDFF3"
                    style={styles.button_4}>
                    <Text style={{fontWeight: 'bold'}}>??????????</Text>
                </TouchableHighlight>
            </View>  
            </View>
            
            }
        </View>}

        <View style={styles.footer}>
           <Icon name="home" size={50} color="#6C6EC9" style={styles.home}/>
           <Icon3 name="pluscircleo" size={50} color="#6C6EC9" style={styles.home} 
            onPress={() => ??????()}
            />
           <Icon2 name="user-circle" size={50} color="#6C6EC9" style={styles.home} />
        </View>
      </View>
    );
  }