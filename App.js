import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity
} from 'react-native';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      number: 0,
      button: 'START',
      lastTimer: null
    };

    this.timer = null;
    this.startStop = this.startStop.bind(this);
    this.clean = this.clean.bind(this);

  }

  startStop() {
    if(this.timer != null) {
      clearInterval(this.timer);
      this.timer = null;
      this.setState({button: 'START'})
    }else{
      this.timer = setInterval(() => {
        this.setState({number: this.state.number + 0.1})
      }, 100);
      this.setState({button: 'PAUSE'})
    }
  }

  clean() {
    if(this.timer != null){
      clearInterval(this.timer);
      this.timer = null;
    }
    this.setState({
      lastTimer: this.state.number,
      number: 0, 
      button: 'START',
    });    
  }

  render() {
    return (
      <View style={styles.container}>
        <Image 
          source={require('./src/stopwatch.png')}
          style={styles.cronometro}/>

        <Text style={styles.timer}>{this.state.number.toFixed(1)}</Text>

        <View style={styles.btnArea}>

          <TouchableOpacity style={styles.btn} onPress={this.startStop}>
            <Text style={styles.btnText}>{this.state.button}</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.btn} onPress={this.clean}>
            <Text style={styles.btnText}>CLEAN</Text>
          </TouchableOpacity>

        </View>

        <View style={styles.lastTimeArea}>
            <Text style={styles.textLastTimer}>
              {this.state.lastTime > 0 ? 'Last time: ' + this.state.lastTimer.toFixed(2) + 's' : ''}
              </Text>
        </View>
      </View>      
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00aeef'
  },
  timer: {
    marginTop: -160,
    color: '#fff',
    fontSize: 65,
    fontWeight: 'bold'
  },
  btnArea: {
    flexDirection: 'row',
    marginTop: 70,
    height: 40
  },
  btn: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    height: 40,
    margin: 17,
    borderRadius: 9
  },
  btnText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#00aeef'
  },
  lastTimeArea: {
    marginTop: 40
  },
  textLastTimer: {
    fontSize: 25,
    fontStyle: 'italic',
    color: '#fff'
  },
})

export default App;
