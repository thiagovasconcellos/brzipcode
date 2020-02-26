/**
 * This method takes an state as argument and return it's ZipCode
 * @param state  Use the abbreviation. For example "SP" for São Paulo, "RJ" for Rio de Janeiro.
 */
function ZipCodesFromGivenState(state: string):object  {
  switch(state) {
    case 'SP':
      return {state: 'São Paulo', range: [{start : '11000-000', finish: '19999-999'}]};
    case 'RJ':
      return {state: 'Rio de Janeiro', range: [{start : '20000-000', finish: '28999-999'}]};
    case 'ES':
      return {state: 'Espírito Santo', range: [{start : '29000-000', finish: '29999-999'}]};
    case 'MG':
      return {state: 'Minas Gerais', range: [{start : '30000-000', finish: '39999-999'}]};
    case 'BA':
      return {state: 'Bahia', range: [{start : '40000-000', finish: '48999-999'}]};
    case 'SE':
      return {state: 'Sergipe', range: [{start : '49000-000', finish: '49999-999'}]};
    case 'PE':
      return {state: 'Pernambuco', range: [{start : '50000-000', finish: '56999-999'}]};
    case 'AL':
      return {state: 'Alagoas', range: [{start : '57000-000', finish: '57999-999'}]};
    case 'PB':
      return {state: 'Paraíba', range: [{start : '58000-000', finish: '58999-999'}]};
    case 'RN':
      return {state: 'Rio Grande do Norte', range: [{start : '59000-000', finish: '59999-999'}]};
    case 'CE':
      return {state: 'Ceará', range: [{start : '60000-000', finish: '63999-999'}]};
    case 'PI':
      return {state: 'Piauí', range: [{start : '64000-000', finish: '64999-999'}]};
    case 'MA':
      return {state: 'Maranhão', range: [{start : '65000-000', finish: '65999-999'}]};
    case 'PA':
      return {state: 'Pará', range: [{start : '66000-000', finish: '68899-999'}]};
    case 'AP':
      return {state: 'Amapá', range: [{start : '68900-000', finish: '68999-999'}]};
    case 'AM':
      return {state: 'Amazonas', range: [{start : '69000-000', finish: '69299-999'}, {start: '69400-000', finish: '69899-999'}]};
    case 'AC':
      return {state: 'Acre', range: [{start : '69900-000', finish: '69999-999'}]};
    case 'RR':
      return {state: 'Roraima', range: [{start : '69300-000', finish: '69399-999'}]};
    case 'DF':
      return {state: 'Distrito Federal', range: [{start : '70000-000', finish: '72799-999'}, {start: '73000-000', finish: '73699-999'}]};
    case 'GO':
      return {state: 'Goiás', range: [{start : '72800-000', finish: '72999-999'}, {start: '73700-000', finish: '76799-999'}]};
    case 'RO':
      return {state: 'Rondônia', range: [{start : '76800-000', finish: '76999-999'}, {start: '78900-000', finish: '78999-999'}]};
    case 'TO':
      return {state: 'Tocantins', range: [{start : '77000-000', finish: '77999-999'}]};
    case 'MT':
      return {state: 'Mato Grosso', range: [{start : '78000-000', finish: '78899-999'}]};
    case 'MS':
      return {state: 'Mato Grosso do Sul', range: [{start : '79000-000', finish: '79999-999'}]};
    case 'PR':
      return {state: 'Paraná', range: [{start : '80000-000', finish: '87999-999'}]};
    case 'SC':
      return {state: 'Santa Catarina', range: [{start : '88000-000', finish: '89999-999'}]};
    case 'RS':
      return {state: 'Rio Grande do Sul', range: [{start : '90000-000', finish: '99999-999'}]};
    default:
    return {error: 'Invalid Zip-Code'};
  }
}

/**
 * This method takes an ZipCode as argument and return it's state
 * @param zipCode Use the number format, without minus operator and without 0 on the left. For example: 1001001 for "Praça da Sé (01001-001)"
 */
function StateFromZipCode(zipCode: number):string {    
  switch(true) {
    case (zipCode >= 11000000 && zipCode <= 19999999):
      return 'SP';
    case (zipCode >= 20000000 && zipCode <= 28999999):
      return 'RJ';
    case (zipCode >= 29000000 && zipCode <= 29999999):
      return 'ES';
    case (zipCode >= 30000000 && zipCode <= 39999999):
      return 'MG';
    case (zipCode >= 40000000 && zipCode <= 48999999):
      return 'BA';
    case (zipCode >= 49000000 && zipCode <= 49999999):
      return 'SE';
    case (zipCode >= 50000000 && zipCode <= 56999999):
      return 'PE';
    case (zipCode >= 57000000 && zipCode <= 57999999):
      return 'AL';
    case (zipCode >= 58000000 && zipCode <= 58999999):
      return 'PB';
    case (zipCode >= 59000000 && zipCode <= 59999999):
      return 'RN';
    case (zipCode >= 60000000 && zipCode <= 63999999):
      return 'CE';
    case (zipCode >= 64000000 && zipCode <= 64999999):
      return 'PI';
    case (zipCode >= 65000000 && zipCode <= 65999999):
      return 'MA';
    case (zipCode >= 66000000 && zipCode <= 68899999):
      return 'PA';
    case (zipCode >= 68900000 && zipCode <= 68999999):
      return 'AP';
    case (zipCode >= 69000000 && zipCode <= 69299999):
      return 'AM';
    case (zipCode >= 69300000 && zipCode <= 69399999):
      return 'RR';
    case (zipCode >= 69400000 && zipCode <= 69899999):
      return 'AM';
    case (zipCode >= 69900000 && zipCode <= 69999999):
      return 'AC';
    case (zipCode >= 70000000 && zipCode <= 72799999):
      return 'DF';
    case (zipCode >= 72800000 && zipCode <= 72999999):
      return 'GO';
    case (zipCode >= 73000000 && zipCode <= 73699999):
      return 'DF';
    case (zipCode >= 73700000 && zipCode <= 76799999):
      return 'GO';
    case (zipCode >= 76800000 && zipCode <= 76999999):
      return 'RO';
    case (zipCode >= 77000000 && zipCode <= 77999999):
      return 'TO';
    case (zipCode >= 78000000 && zipCode <= 78899999):
      return 'MT';
    case (zipCode >= 78900000 && zipCode <= 78999999):
      return 'RO';
    case (zipCode >= 79000000 && zipCode <= 79999999):
      return 'MS';
    case (zipCode >= 80000000 && zipCode <= 87999999):
      return 'PR';
    case (zipCode >= 88000000 && zipCode <= 89999999):
      return 'SC';
    case (zipCode >= 90000000 && zipCode <= 99999999):
      return 'RS';
    default:
      return 'error';
  }
}

/**
 * This method takes an ZipCode and an State as argument and return true or false based if the ZipCode belongs to given State
 * @param zipCode Use the number format, without minus operator and without 0 on the left. For example: 1001001 for "Praça da Sé (01001-001)"
 * @param state  Use the abbreviation. For example "SP" for São Paulo, "RJ" for Rio de Janeiro.
 */
function isZipCodeInState(zipCode: number, state: string):boolean {
  const realState = StateFromZipCode(zipCode);
  if (realState === state) {
    return true;
  }
  return false;
}

export = {ZipCodesFromGivenState, StateFromZipCode, isZipCodeInState};