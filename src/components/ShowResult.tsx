import React, { useState } from 'react';
import {StyleSheet, View, Text, ScrollView} from 'react-native';

export default function ResultShow(
  {navigation, resultList}: {navigation: any, resultList: any}) {
    let total_result = '不合格!';
    let total_result_sub = '';
    let totalResult = styles.totalResultNotPass;
    let totalResultSub = styles.totalResultSub
    let corrent_cnt = resultList.filter(function(item:any, index:number){
        if (item.selected_answer.correct_flg == true) return true;
    }).length;
    if (corrent_cnt > 6){
        total_result = '合格!';
        totalResult = styles.totalResult;
        totalResultSub = styles.totalResultSubNotActive;
    }else if(corrent_cnt > 4){
        total_result_sub = 'もう少し';
    }else{
        total_result_sub = '少し勉強が必要かも・・・';
    }


  return (
    <ScrollView key="ScrollView" style={{flex:1}}>
        <View key="contentsView" style={styles.contents}>
        <Text key="correctRate" style={[styles.correctRate,styles.fontStyle]}>{resultList.length}問中{corrent_cnt}問正解</Text>
        <Text key="totalResult" style={[styles.totalResult,styles.fontStyle]}>{total_result}</Text>           
        <Text key="totalResultSub" style={[totalResultSub,styles.fontStyle]}>{total_result_sub}</Text>           
        {
            resultList.map( (data:any, index:number) => {
                let result = ''
                let corrent_result = ''
                let resultStyle
                let correntResultStyle
                let answerDescriptionStyle
                let resultBackground
                let answer_description = data.answer_description
                if(answer_description == ''){
                    correntResultStyle = styles.correntResult
                    answerDescriptionStyle = styles.answerDescriptionBlank
                }else{
                    correntResultStyle = styles.correntResultBlank
                    answerDescriptionStyle = styles.answerDescription
                }
                if(data.selected_answer.correct_flg){
                    result = '○'
                    resultStyle = styles.resultSignalCorrent
                    resultBackground = styles.correctBack
                }else{
                    result = '×'
                    corrent_result = '正解は' + data.correct_answer.description
                    resultStyle = styles.resultSignalNotCorrent
                    resultBackground = styles.incorrectBack
                }
                return(
                <>
                <View key={index+"_view"} style={[styles.resultListDiv, resultBackground]}>
                    <Text key={index+"_no"}>No.{index + 1}</Text>           
                    <Text key={index+"_question"} style={[styles.questionText,styles.fontStyle]}>{data.question}</Text>           
                    <Text key={index+"_selected"} style={styles.fontStyle}>あなたの選択:{data.selected_answer.description}</Text>                
                    <Text key={index+"_result"} style={[resultStyle,styles.fontStyle]}>{result}</Text>                
                    <Text key={index+"_correct"} style={[correntResultStyle,styles.fontStyle]}>{corrent_result}</Text>
                    <Text key={index+"_desc"} style={[answerDescriptionStyle,styles.fontStyle]}>{answer_description}</Text>
                </View>
                </>
                )
            })
        }
        </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  contents: {
    backgroundColor: '#ff9351',
    alignItems: 'center', 
    justifyContent: 'center',
    //height: '100%',
  },
  totalResult:{
    fontSize: 25,
    margin: 15,
    color: '#ffffff',
    fontWeight: '600',
  },
  totalResultNotPass:{
    fontSize: 25,
    margin: 15,
    color: '#0027ff',
    fontWeight: '600',
  },
  totalResultSub:{
    marginBottom: 25,
    fontWeight: '600',
    color: '#ffffff',
  },
  totalResultSubNotActive:{
    marginBottom: 0,
    fontWeight: '600',
    color: '#ffffff',
  },
  correctRate:{
    fontSize: 20,
    color: '#ffffff',
    fontWeight: '600',
  },
  resultSignalCorrent: {
    fontSize: 28,
    color: 'red',
  },
  resultSignalNotCorrent: {
    fontSize: 35,
    color: 'blue',
    position: 'relative',
    top: -7,
  },
  correntResult:{
    marginBottom: 20,
  },
  correntResultBlank:{
    marginBottom: 0,
  },
  answerDescription:{
    marginTop: 10,
    marginBottom: 20,
  },
  answerDescriptionBlank:{
    marginBottom: 0,
  },
  resultListDiv:{
    borderRadius: 10,
    borderWidth: 0,
    alignItems: 'center', 
    justifyContent: 'center',
    width: '50%',
    marginBottom: 10,
    padding: 10,
  },
  correctBack:{
    backgroundColor:'#FFF',
  },
  incorrectBack:{
    backgroundColor:'#ffeb3b',
  },
  questionText:{
    marginBottom: 10,
  },
  fontStyle:{
   // fontFamily: 'serif',
  },
});
