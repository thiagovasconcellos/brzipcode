/**
 * This method takes an state as argument and return it's ZipCode
 * @param state  Use the abbreviation. For example "SP" for São Paulo, "RJ" for Rio de Janeiro.
 */
declare function ZipCodesFromGivenState(state: string): object;
/**
 * This method takes an ZipCode as argument and return it's state
 * @param zipCode Use the number format, without minus operator and without 0 on the left. For example: 1001001 for "Praça da Sé (01001-001)"
 */
declare function StateFromZipCode(zipCode: number): string;
/**
 * This method takes an ZipCode and an State as argument and return true or false based if the ZipCode belongs to given State
 * @param zipCode Use the number format, without minus operator and without 0 on the left. For example: 1001001 for "Praça da Sé (01001-001)"
 * @param state  Use the abbreviation. For example "SP" for São Paulo, "RJ" for Rio de Janeiro.
 */
declare function isZipCodeInState(zipCode: number, state: string): boolean;
declare const _default: {
    ZipCodesFromGivenState: typeof ZipCodesFromGivenState;
    StateFromZipCode: typeof StateFromZipCode;
    isZipCodeInState: typeof isZipCodeInState;
};
export = _default;
