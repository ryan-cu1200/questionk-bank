import React, { Component } from 'react';
import {
    Text,
    View,
    Button,
    ToastAndroid,
    TouchableOpacity,
    Image,
} from 'react-native';
let questions = {
    '1': [
        {
            question: 'Who is the current P.M of India?',
            choice_1: 'a. Narendra das Modi',
            choice_2: 'b. Sunder Pechai',
            choice_3: 'c. Dr.Manmohan Singh',
            choice_4: 'd. Sonia Gandhi',
            correct_choice: 1
        },
        {
            question: 'where is Taj Mahal located?',
            choice_1: 'Banglore',
            choice_2: 'Odissa',
            choice_3: 'Sydney',
            choice_4: 'Non of these',
            correct_choice: 4
        },
    ],
    '2': [
        {
            question: 'What is your Name?',
            choice_1: 'sanjay',
            choice_2: 'sanjay',
            choice_3: 'Sanjay',
            choice_4: 'Mohan',
            correct_choice: 3
        },
        {
            question: 'which is our national animal?',
            choice_1: 'elephant',
            choice_2: 'ghamsham',
            choice_3: 'dog',
            choice_4: 'parveen',
            correct_choice: 2
        },
        {
            question: "  "
        },
    ],
}
let intervalHandler;
export default class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            timer: 30,
            random: this.ra(0, 2),
            level: '1'
        }
    }
    ra(min, max) {
        return parseInt(Math.random() * (max - min) + min);
    }
    checkAnswer(choice) {
        if (questions[this.state.level][this.state.random].correct_choice == choice) {
            ToastAndroid.show('Correct Answer', ToastAndroid.SHORT);
        }
        else {
            ToastAndroid.show('Incorrect Answer', ToastAndroid.LONG);
            this.props.navigator.pop();
        }
        clearInterval(intervalHandler);
        this.setState({
            timer: 30
        });
        this.startTimer();


        this.setState({
            level: (parseInt(this.state.level) + 1).toString()
        });
    }

    startTimer() {
        intervalHandler = setInterval(() => {
            if (this.state.timer > 0) {
                this.setState({
                    timer: this.state.timer - 1
                });
            } else {
                ToastAndroid.show("Oh no! Time's Up!", ToastAndroid.SHORT);
                this.props.navigator.pop();
                this.props.navigator.push({
                    screen: 'san.TimesUp',
                    navigatorStyle: {
                        navBarHidden: true
                    }
                });
                clearInterval(intervalHandler);
            }
        }, 1000);
    }

    componentDidMount() {
        this.startTimer();
    }

    componentWillUnmount() {
        clearInterval(intervalHandler);
    }

    render() {
        let a = null;
        let b = null;
        let c = null;
        let d = null;
        let e = null;
        if (this.state.random >= 0) {
            a = questions[this.state.level][this.state.random].question;
            b = questions[this.state.level][this.state.random].choice_1;
            c = questions[this.state.level][this.state.random].choice_2;
            d = questions[this.state.level][this.state.random].choice_3;
            e = questions[this.state.level][this.state.random].choice_4;
        }
        return <View style={{ flex: 1, backgroundColor: 'yellow' }}>
            <View style={{ flexDirection: 'row' }}>
                <Text style={{ borderWidth: 1, fontSize: 30, color: 'black', margin: 20, padding: 5 }}>
                    LEVEL: {this.state.level}
                </Text>
            </View>

            <View style={{ justifyContent: 'center' }}>
                <Text style={{ fontSize: 20, color: 'black' }}>
                    5000 RS
                     </Text>
            </View>

            <Text style={{ fontSize: 20, color: 'red', textAlign: 'right' }}>
                Time Remaining: {this.state.timer}
            </Text>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <TouchableOpacity>
                    <Image style={{ height: 90, width: 90, borderRadius: 45 }} resizeMode={'contain'} source={require('../play.png')} />
                </TouchableOpacity>

                <TouchableOpacity>
                    <Image style={{ height: 80, width: 80, borderRadius: 40 }} resizeMode='contain' source={require('../quit.png')} />
                </TouchableOpacity>
            </View>

            <View>
                <Text style={{ fontSize: 30, color: 'black' }}> 1. {a}</Text>
            </View>
            <View style={{ flexDirection: 'row', margin: 10 }}>
                <View style={{ flex: 1 }}>
                    <Button title={b}
                        onPress={() => {
                            this.checkAnswer(1)
                        }}
                    />
                </View>

                <View style={{ flex: 0.25 }} />

                <View style={{ flex: 1 }}>
                    <Button title={c}
                        onPress={() => {
                            this.checkAnswer(2)
                        }}
                    />
                </View>
            </View>
            <View style={{ flexDirection: 'row', margin: 10 }}>
                <View style={{ margin: 20 }}>
                    <Button title={d}
                        onPress={() => {
                            this.checkAnswer(3)
                        }}
                    />
                </View>

                <View style={{ flex: 0.25 }} />

                <View style={{ margin: 20 }}>
                    <Button title={e}
                        onPress={() => {
                            this.checkAnswer(4)
                        }}
                    />
                </View>
            </View>

        </View >
    }
}