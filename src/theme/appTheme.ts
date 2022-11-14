import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  boxG: {
    backgroundColor: '#1e1e1e',
    height: '100%',
    flex: 1,
    justifyContent: 'center',
  },
  fondo: {
    flex: 1,
    backgroundColor: 'black',
    paddingHorizontal: 20,
    justifyContent: 'flex-end',
  },
  container: {
    paddingHorizontal: 20,
    justifyContent: 'flex-end',
    backgroundColor: '#1e1e1e',
    marginBottom: 15,
  },
  result: {
    color: 'white',
    fontSize: 60,
    textAlign: 'right',
  },
  resultSmall: {
    color: 'rgba(255,255,255,0.5)',
    fontSize: 30,
    textAlign: 'right',
  },
  btn: {
    height: 80,
    width: 80,
    backgroundColor: '#9b9b9b',
    borderRadius: 100,
    justifyContent: 'center',
    marginHorizontal: 8,
    marginBottom: 8,
  },
  btnText: {
    textAlign: 'center',
    padding: 10,
    fontSize: 30,
    color: 'white',
    fontWeight: '500',
  },
  boxRowBtns: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  btnYellow: {
    backgroundColor: '#ff9427',
  },
  btnRect: {
    width: 160,
  },
  alignLeft: {
    textAlign: 'left',
    paddingLeft: 25,
  },
});
