const isValidCep = require('@brazilian-utils/is-valid-cep');
const axios = require('axios').default;

interface ZipCodeObject {
  state: string;
  range: { start: number; finish: number }[];
}

interface ZipCodeAddress {
  zipCode: string;
  address: string;
  complement: string;
  district: string;
  city: string;
  state: string;
  ibge: string;
  gia: string;
}

const zipCodeAndStates = {
  SP: { state: 'São Paulo', range: [{ start: 11000000, finish: 19999999 }] },
  RJ: { state: 'Rio de Janeiro', range: [{ start: 20000000, finish: 28999999 }] },
  ES: { state: 'Espírito Santo', range: [{ start: 29000000, finish: 29999999 }] },
  MG: { state: 'Minas Gerais', range: [{ start: 30000000, finish: 39999999 }] },
  BA: { state: 'Bahia', range: [{ start: 40000000, finish: 48999999 }] },
  SE: { state: 'Sergipe', range: [{ start: 49000000, finish: 49999999 }] },
  PE: { state: 'Pernambuco', range: [{ start: 50000000, finish: 56999999 }] },
  AL: { state: 'Alagoas', range: [{ start: 57000000, finish: 57999999 }] },
  PB: { state: 'Paraíba', range: [{ start: 58000000, finish: 58999999 }] },
  RN: { state: 'Rio Grande do Norte', range: [{ start: 59000000, finish: 59999999 }] },
  CE: { state: 'Ceará', range: [{ start: 60000000, finish: 63999999 }] },
  PI: { state: 'Piauí', range: [{ start: 64000000, finish: 64999999 }] },
  MA: { state: 'Maranhão', range: [{ start: 65000000, finish: 65999999 }] },
  PA: { state: 'Pará', range: [{ start: 66000000, finish: 68899999 }] },
  AP: { state: 'Amapá', range: [{ start: 68900000, finish: 68999999 }] },
  AM: {
    state: 'Amazonas',
    range: [
      { start: 69000000, finish: 69299999 },
      { start: 69400000, finish: 69899999 },
    ],
  },
  AC: { state: 'Acre', range: [{ start: 69900000, finish: 69999999 }] },
  RR: { state: 'Roraima', range: [{ start: 69300000, finish: 69399999 }] },
  DF: {
    state: 'Distrito Federal',
    range: [
      { start: 70000000, finish: 72799999 },
      { start: 73000000, finish: 73699999 },
    ],
  },
  GO: {
    state: 'Goiás',
    range: [
      { start: 72800000, finish: 72999999 },
      { start: 73700000, finish: 76799999 },
    ],
  },
  RO: {
    state: 'Rondônia',
    range: [
      { start: 76800000, finish: 76999999 },
      { start: 78900000, finish: 78999999 },
    ],
  },
  TO: { state: 'Tocantins', range: [{ start: 77000000, finish: 77999999 }] },
  MT: { state: 'Mato Grosso', range: [{ start: 78000000, finish: 78899999 }] },
  MS: { state: 'Mato Grosso do Sul', range: [{ start: 79000000, finish: 79999999 }] },
  PR: { state: 'Paraná', range: [{ start: 80000000, finish: 87999999 }] },
  SC: { state: 'Santa Catarina', range: [{ start: 88000000, finish: 89999999 }] },
  RS: { state: 'Rio Grande do Sul', range: [{ start: 90000000, finish: 99999999 }] },
};

/**
 * This method takes an state as argument and return it's ZipCode
 * @param state  Use the abbreviation. For example "SP" for São Paulo, "RJ" for Rio de Janeiro.
 */
function ZipCodesFromGivenState(state: string): ZipCodeObject {
  return zipCodeAndStates[state] || `${state} is not an valid brazilian state.`;
}

/**
 * This method takes an ZipCode as argument and return it's state
 * @param zipCode Use the number format, without minus operator and without 0 on the left. For example: 1001001 for "Praça da Sé (01001-001)"
 */
function StateFromZipCode(zipCode: number): string {
  if (!isValidCep(zipCode)) return 'Invalid ZipCode';

  switch (true) {
    case zipCode >= 11000000 && zipCode <= 19999999:
      return 'SP';
    case zipCode >= 20000000 && zipCode <= 28999999:
      return 'RJ';
    case zipCode >= 29000000 && zipCode <= 29999999:
      return 'ES';
    case zipCode >= 30000000 && zipCode <= 39999999:
      return 'MG';
    case zipCode >= 40000000 && zipCode <= 48999999:
      return 'BA';
    case zipCode >= 49000000 && zipCode <= 49999999:
      return 'SE';
    case zipCode >= 50000000 && zipCode <= 56999999:
      return 'PE';
    case zipCode >= 57000000 && zipCode <= 57999999:
      return 'AL';
    case zipCode >= 58000000 && zipCode <= 58999999:
      return 'PB';
    case zipCode >= 59000000 && zipCode <= 59999999:
      return 'RN';
    case zipCode >= 60000000 && zipCode <= 63999999:
      return 'CE';
    case zipCode >= 64000000 && zipCode <= 64999999:
      return 'PI';
    case zipCode >= 65000000 && zipCode <= 65999999:
      return 'MA';
    case zipCode >= 66000000 && zipCode <= 68899999:
      return 'PA';
    case zipCode >= 68900000 && zipCode <= 68999999:
      return 'AP';
    case zipCode >= 69000000 && zipCode <= 69299999:
      return 'AM';
    case zipCode >= 69300000 && zipCode <= 69399999:
      return 'RR';
    case zipCode >= 69400000 && zipCode <= 69899999:
      return 'AM';
    case zipCode >= 69900000 && zipCode <= 69999999:
      return 'AC';
    case zipCode >= 70000000 && zipCode <= 72799999:
      return 'DF';
    case zipCode >= 72800000 && zipCode <= 72999999:
      return 'GO';
    case zipCode >= 73000000 && zipCode <= 73699999:
      return 'DF';
    case zipCode >= 73700000 && zipCode <= 76799999:
      return 'GO';
    case zipCode >= 76800000 && zipCode <= 76999999:
      return 'RO';
    case zipCode >= 77000000 && zipCode <= 77999999:
      return 'TO';
    case zipCode >= 78000000 && zipCode <= 78899999:
      return 'MT';
    case zipCode >= 78900000 && zipCode <= 78999999:
      return 'RO';
    case zipCode >= 79000000 && zipCode <= 79999999:
      return 'MS';
    case zipCode >= 80000000 && zipCode <= 87999999:
      return 'PR';
    case zipCode >= 88000000 && zipCode <= 89999999:
      return 'SC';
    case zipCode >= 90000000 && zipCode <= 99999999:
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
function isZipCodeInState(zipCode: number, state: string): boolean {
  if (!isValidCep(zipCode)) throw new Error('Invalid ZipCode');
  const realState = StateFromZipCode(zipCode);
  if (realState === state) {
    return true;
  }
  return false;
}
/**
 * This method is a helper to generate random zip code inside a range of an given state
 * @param state  Use the abbreviation. For example "SP" for São Paulo, "RJ" for Rio de Janeiro.
 */
function GenerateRandomZipCode(state: string): number {
  const zipCodeRanges = ZipCodesFromGivenState(state);

  return Math.floor(
    Math.random() * (zipCodeRanges.range[0].finish - zipCodeRanges.range[0].start + 1) + zipCodeRanges.range[0].start,
  );
}

/**
 * This method returns a JSON with a full address of a given ZipCode.
 * @param zipCode  Use number format, without minus operator and without 0 on the left. For example: 1001001 for "Praça da Sé (01001-001).
 */
async function GetAddressFromZipCode(zipCode: number): Promise<ZipCodeAddress> {
  let zeroZipCode;
  if (zipCode.toString().length === 7) {
    zeroZipCode = `0${zipCode}`;
  }
  try {
    const response = await axios.get(`https://viacep.com.br/ws/${zeroZipCode || zipCode.toString()}/json/`);
    if (response.data.erro) throw new Error('Could not find a valid address with the given ZipCode');

    return {
      zipCode: response.data.cep,
      address: response.data.logradouro,
      complement: response.data.complemento,
      district: response.data.bairro,
      city: response.data.localidade,
      state: response.data.uf,
      ibge: response.data.ibge,
      gia: response.data.gia,
    };
  } catch (error) {
    throw new Error(error);
  }
}

export = { ZipCodesFromGivenState, StateFromZipCode, isZipCodeInState, GenerateRandomZipCode, GetAddressFromZipCode };
