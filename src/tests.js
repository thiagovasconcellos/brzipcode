const {ZipCodesFromGivenState, StateFromZipCode, isZipCodeInState} = require('./dist');

const states = ["AC","AL","AP","AM","BA","CE","DF","ES","GO","MA","MT","MS","MG","PA","PB","PR","PE","PI","RJ","RN","RS","RO","RR","SC","SP","SE","TO"];

states.map(state => console.log(ZipCodesFromGivenState(state)));


console.log(ZipCodesFromGivenState('SP'));
// console.log(StateFromZipCode(20550142));
// console.log(isZipCodeInState(20550142, 'RJ'));
