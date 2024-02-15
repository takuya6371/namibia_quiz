import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import { Button } from 'react-native-elements';
export function HomeScreen({ navigation }: { navigation: any }) {
  const windowWidth = Dimensions.get('window').width;
  const flagWidth = windowWidth * 0.9;
  return (
    <View style={styles.homeView}>
      <View style={{ width: flagWidth, top: -25, position: 'relative', }}>
        <View style={{ position: 'absolute', zIndex: 50, top: '0%', left: '0%', marginRight: '0%', }}><Text style={{ fontSize: 15, color: '#083580' }}>初級</Text></View>
        <View style={{ position: 'absolute', zIndex: 50, top: '0%', left: '45%', marginRight: '0%', }}><Text style={{ fontSize: 15, color: '#d33835' }}>中級</Text></View>
        <View style={{ position: 'absolute', zIndex: 50, top: '0%', right: '0%', marginRight: '0%', }}><Text style={{ fontSize: 15, color: '#489644' }}>上級</Text></View>
      </View>

      <View style={{ flexDirection: 'row', overflow: 'hidden', display: 'flex', width: flagWidth, height: flagWidth / 1.6, position: 'relative', }}>
        <View
          style={{ zIndex: 15, position: 'absolute', width: '33%', height: '59%', backgroundColor: '#083580', }}
        >
          <Button
            title=""
            containerStyle={{ backgroundColor: 'unset', }}
            buttonStyle={{ backgroundColor: 'unset', minHeight: 100 }}
            onPress={() =>
              navigation.push('Question', {
                rank: 1,
              })
            }
          >
          </Button>
        </View>
        <View
          style={{ zIndex: 20, width: '33%', backgroundColor: '#083580', transform: [{ skewX: "-32deg" }], }}
        >
          <Button
            title=""
            containerStyle={{ backgroundColor: 'unset', }}
            buttonStyle={{ backgroundColor: 'unset', minHeight: windowWidth * 0.8 }}
            onPress={() =>
              navigation.push('Question', {
                rank: 1,
              })
            }
          >
          </Button>
        </View>
        <Image
          source={require('../images/sun_icon.png')}
          style={{ zIndex: 100, position: 'absolute', top: '33%', left: '7%', tintColor: '#f8ce4b', width: windowWidth * 0.15, height: windowWidth * 0.15 }}
        />
        <View
          style={{
            overflow: 'hidden',
            zIndex: 30,
            width: '33%',
            backgroundColor: '#d33835',
            transform: [{ skewX: "-62deg" }],
          }}
        >
          <Button
            title=""
            containerStyle={{ transform: [{ skewX: "-62deg" }] }}
            buttonStyle={{ transform: [{ skewX: "-62deg" }], backgroundColor: '#d33835', minHeight: windowWidth * 0.8 }}
            onPress={() =>
              navigation.push('Question', {
                rank: 2,
              })
            }
          >
          </Button>
        </View>
        <View
          style={{ zIndex: 20, width: '33%', height: '100%', backgroundColor: '#489644', transform: [{ skewX: "-62deg" }] }}
        >
          <Button
            title=""
            containerStyle={{ backgroundColor: 'unset', }}
            buttonStyle={{ backgroundColor: 'unset', minHeight: windowWidth * 0.8 }}
            onPress={() =>
              navigation.push('Question', {
                rank: 3,
              })
            }
          >
          </Button>
        </View>

        <View
          style={{ zIndex: 15, bottom: 0, right: 20, position: 'absolute', width: '20%', height: '30%', backgroundColor: '#489644', }}
        >
          <Button
            title=""
            containerStyle={{ backgroundColor: 'unset', }}
            buttonStyle={{ backgroundColor: 'unset', minHeight: windowWidth * 0.8 }}
            onPress={() =>
              navigation.push('Question', {
                rank: 3,
              })
            }
          >
          </Button>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  homeView: {
    //fontFamily: 'serif',
    backgroundColor: '#ff9351',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 400,
  },
  buttonView: {
    display: 'flex',
    transform: [{ 'rotate': '90deg' }],
  },
  ContainerMenuQuestionBtnLow: {
    width: "33%",
    backgroundColor: '#083580',
  },
  ContainerMenuQuestionBtnMiddle: {
    width: "33%",
    backgroundColor: '#d33835',
  },
  ContainerMenuQuestionBtnHigh: {
    width: "33%",
    backgroundColor: '#489644',
    color: '#f8ce4b',

  },
  menuQuestionBtn: {
    height: 70,
    //border:'unset !important',
    color: '#f8ce4b',
  },
  buttonTitleStyle: {
    color: '#f8ce4b',
    fontSize: 26,
  },
  box: {
    height: 100,
    width: 100,
    borderRadius: 5,
    marginVertical: 40,
    backgroundColor: "#61dafb",
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    fontSize: 14,
    fontWeight: "bold",
    margin: 8,
    color: "#000",
    textAlign: "center"
  }
});
