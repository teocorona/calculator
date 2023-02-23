import { StyleSheet } from 'react-native';


export const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: 'rgb(5,5,15)',
    // backgroundColor: 'rgb(4,11,8)',
  },
  calculatorContainer: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'flex-end',
  },
  result: {
    color: 'rgb(210,210,250)',
    // color: 'rgb(80,220,160)',
    fontSize: 60,
    textAlign: 'right',
    marginBottom: 10,
  },
  resultSmall: {
    color: 'rgba(210,210,250,0.5)',
    // color: 'rgb(40,110,80)',
    fontSize: 30,
    textAlign: 'right'
  },
  row: {
    flexDirection:'row',
    height: 80,
    justifyContent: 'center',
    marginBottom: 10,
    paddingHorizontal: 5,
  },
  button: {
    textAlign: 'right',
    height: 80,
    width: 80,
    margin:5,
    borderRadius: 40,
    justifyContent: 'center'
  },
  buttonText: {
    fontSize: 30,
    textAlign:'center',
    fontWeight: '500',
  },
  light: {
    backgroundColor: 'rgb(200,200,250)',
    // backgroundColor: 'rgb(80,220,160)',
  },
  dark: {
    backgroundColor: 'rgb(20,20,60)',
    // backgroundColor: 'rgb(15,30,25)',
  },
  contrast: {
    backgroundColor: 'rgb(60,60,255)',
    // backgroundColor: 'rgb(40,110,80)',
  },
  lightT: {
    color: 'rgb(20,20,60)'
    // color: 'rgb(15,30,25)'
  },
  darkT: {
    color: 'rgb(180,180,250)'
    // color: 'rgb(80,220,160)'
  },
  contrastT: {
    color: 'rgb(180,180,250)'
    // color: 'rgb(80,220,160)'
  },
  large: {
    width: 170,
    alignItems: 'flex-start',
    paddingLeft: 30
  },
  operator: {
    color: 'rgb(60,60,255)',
    fontSize: 60,
    textAlign: 'right',
  },
  select: {
    backgroundColor: 'rgb(60,60,255)',
    borderColor: 'rgba(255,255,255,0.7 )',
    borderWidth: 5,
  },
  selectT: {
    color: 'rgb(180,180,250)'
  }
});
