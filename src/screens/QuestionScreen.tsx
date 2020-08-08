import React, { useState } from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {QUESTION_LIST, QESTION_NUM, ANSWER_LIST_NUM} from '../constants/const';
import {generate_randomx} from '../function/common';
import {Button} from 'react-native-elements';
import Question from '../components/Question';
import ShowResult from '../components/ShowResult';

function setQuestion(){

};
export default function QuestionScreen(
  {route, navigation}: {route: any, navigation: any}) {
    let rank = route.params.rank;
    let question = QUESTION_LIST[rank];
    const [current_num, setCurrentNum] = useState(1);
    const [resultList, setResultList] = useState([]);
    const [shaffled_num_list, setShaffledNumList] = useState(generate_randomx(question['question_list'].length));

    if(current_num <= 10){
      return (<Question key="Question" navigation={navigation} rank={rank} question={question} shaffled_num_list={shaffled_num_list} current_num={current_num} setCurrentNum={setCurrentNum} resultList={resultList} setResultList={setResultList}></Question>);
    }else{
      return (<ShowResult key="showResult" navigation={navigation} resultList={resultList}></ShowResult>);

    }
}

const styles = StyleSheet.create({
  contents: {
    //fontFamily: 'serif',

    alignItems: 'center', 
    justifyContent: 'center',
    height: '100%',
  },
  title: {
    fontSize: 22,
  },
});
