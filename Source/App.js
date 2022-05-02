//import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Platform, SafeAreaView, StatusBar, Dimensions, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const { width: SCREEN_WIDTH } = Dimensions.get("window");
const { height: SCREEN_HEIGHT } = Dimensions.get("window");
export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar />
      <SafeAreaView style={styles.AndroidSafeArea}>
          <View style={styles.TopNavigation}>
            <Icon name="arrow-back" size={40} color="black" style={styles.arrowBack}/>
            <Text style={styles.Top_Text2}>식사 촬영</Text>
            <Text style={styles.Top_Text}>다음</Text>
          </View>
          <View style={styles.CameraView}>
          <View style={styles.OnMiddle_camera}>
          <Text style={styles.middle_text1}>음식인식 완료!</Text>
          <Text style={styles.middle_text2}>음식이름이 다르다면, 보기에서 골라보아요 </Text>
          </View>
          <View style={styles.middle_camera}>
            
          </View>

          <ScrollView  showsHorizontalScrollIndicator={false} horizontal style={styles.word}>
            <View style={styles.little_word}><Text style={styles.little_text}>치아바타</Text></View>
            <View style={styles.little_word}><Text style={styles.little_text}>호밀빵 샌드위치</Text></View>
            <View style={styles.little_word}><Text style={styles.little_text}>햄 샐러드</Text></View>
            <View style={styles.little_word}><Text style={styles.little_text}>목살구이</Text></View>
            <View style={styles.little_word}><Text style={styles.little_text}>봉구스 밥버거</Text></View>
          </ScrollView>    
            
          </View>
        

          <View style={styles.BottomNavigation}>
            <Text>테스트</Text>
          </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  AndroidSafeArea: {
    flex: 1,
    backgroundColor: "orange",
    //paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  },
  TopNavigation: {
    position: 'relative',
    height: 70,
    backgroundColor: "red",
    width: Dimensions.get('window').width,
    
    justifyContent: "center",
  },
  Top_Text:{
    position:"absolute",
    right:0,
    marginRight:5, 
    fontSize: 30,
  },
  Top_Text2:{
    position:"absolute",
    left:55,
    marginRight:5, 
    fontSize: 30,
  },
  arrowBack: {
    marginLeft: 10,
  },

  CameraView: {
    position: 'relative',
    flex: 5,
    justifyContent: 'center',
    backgroundColor: 'orange',
  },

  BottomNavigation: {
    position: 'relative',
    flex: 1,
    backgroundColor: "green",
    width: Dimensions.get('window').width,
    bottom: 0,
    
  },

  middle_camera:{
    marginTop:-10,
    marginBottom: 30,
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: "pink",
    flex: 0.7,
    position: 'relative',
    borderRadius : 20
  },
  middle_text1:{
    fontSize: 30,
    textAlign: "center",
    marginTop: 10,
    color:"white"
  },
  middle_text2:{
    fontSize: 18,
    marginTop: 15,
    textAlign: "center",
    color:"white"
  },
  OnMiddle_camera:{
    
    marginBottom: 30,
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: "teal",
    flex: 0.2,
    position: 'relative',
    borderRadius : 20
  },
  word:{
    backgroundColor: "orange",
    flexGrow:0,
    marginBottom:10 
  },
  little_word:{
    justifyContent: 'center',
    alignContent:"center",
    borderRadius : 40,
    width: SCREEN_WIDTH/5,
    height: 40,
    backgroundColor: "purple",
    marginLeft: 5,
    marginRight: 5
  },
  little_text:{
    textAlign:'center',
    fontSize:15
  }
});