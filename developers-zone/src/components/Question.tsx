import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { QESTION_NUM, ANSWER_LIST_NUM } from '../constants/const';
import { generate_randomx } from '../function/common';
import { Button } from 'react-native-elements';

function setResult(current_num: number, setCurrentNum: any, resultList: any, setResultList: any, answer_result: any) {
  setResultList([...resultList, answer_result]);
  setCurrentNum(current_num + 1);
}

export default function Question(
  { navigation, rank, question, shaffled_num_list, current_num, setCurrentNum, resultList, setResultList }:
    { navigation: any, rank: number, question: any, shaffled_num_list: any, current_num: number, setCurrentNum: any, resultList: any, setResultList: any }) {
  let answer_list_num = generate_randomx(ANSWER_LIST_NUM);
  let question_list = question['question_list'];

  let answer = question_list[shaffled_num_list[current_num]].answer_list.filter(function (item: any) {
    if (item.correct_flg == true) return true;
  });

  return (
    <View style={styles.contents}>
      <View>
        <Text style={styles.title}>{question.label}</Text>
      </View>
      <Text style={styles.no}>Question No.{current_num}</Text>
      <Text style={styles.question}>{
        question.question_list[shaffled_num_list[current_num]].question
      }
      </Text>
      {
        answer_list_num.map((data, index) => {
          let answer_result = {
            'question': question.question_list[shaffled_num_list[current_num]].question,
            'selected_answer': question.question_list[shaffled_num_list[current_num]].answer_list[data],
            'correct_answer': answer[0],
            'answer_description': question.question_list[shaffled_num_list[current_num]].answer_description,
          }
          return (
            <View key={index + "_view"} style={styles.buttonView}>
              <Button
                key={index}
                title={question.question_list[shaffled_num_list[current_num]].answer_list[data].description}
                type="outline"
                containerStyle={styles.containerAnswerButton}
                buttonStyle={styles.answerButton}
                titleStyle={styles.titleStyle}
                onPress={() =>
                  setResult(current_num, setCurrentNum, resultList, setResultList, answer_result)
                }
              >
              </Button>
            </View>
          )
        })
      }
    </View>
  )
};

const styles = StyleSheet.create({
  contents: {
    backgroundColor: '#ff9351',
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: '100%',
  },
  buttonView: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 35,
  },
  title: {
    fontSize: 22,
    color: '#FFF',
    fontWeight: '600',
  },
  no: {
    fontSize: 22,
    marginBottom: 15,
    color: '#FFF',
    fontWeight: '600',
  },
  question: {
    fontWeight: '600',
    fontSize: 18,
    color: '#FFF',
  },
  containerAnswerButton: {
    width: '60%',
  },
  answerButton: {
    height: 'auto',
    borderColor: '#FFF',
    color: '#FFF',
  },
  titleStyle: {
    color: '#f5f5dc',
    fontSize: 26,
  },
});
