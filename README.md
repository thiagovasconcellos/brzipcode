# Brazilian ZipCode Validator <img src="https://cdn.countryflags.com/thumbs/brazil/flag-button-round-250.png" width="32" height="32" title="Brazil" />
[![TypeScript](https://camo.githubusercontent.com/56e4a1d9c38168bd7b1520246d6ee084ab9abbbb/68747470733a2f2f62616467656e2e6e65742f62616467652f69636f6e2f547970655363726970743f69636f6e3d74797065736372697074266c6162656c266c6162656c436f6c6f723d626c756526636f6c6f723d353535353535)](https://github.com/ellerbrock/typescript-badges/) [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Need some validation using Brazilian ZipCodes? I can help you with that!

## Getting Started

You can install the package via npm or yarn

```bash
npm install brzipcode
```

```bash
yarn add brzipcode
```

### Usage

There are some methods you can use:

  * ZipCodesFromGivenState
  * StateFromZipCode
  * isZipCodeInState
  * GenerateRandomZipCode
  * GetAddressFromZipCode

### Examples

**ZipCodesFromGivenState** returns an object as it follows:

**state**: Name of state

**range**: Array of ZipCodes with Start and Finish (Some brazilians states has 2 arrays)
```js
import {ZipCodesFromGivenState} from 'brzipcodes'

const data = ZipCodesFromGivenState('SP')

console.log(data)
```
output
``` output
{
  state: 'São Paulo',
  range: [ { start: '11000-000', finish: '19999-999' } ]
}
```

**StateFromZipCode** returns an string with the state abbreviation of given ZipCode:

**Work with numbers only**

```js
import {StateFromZipCode} from 'brzipcodes'

const data = StateFromZipCode(11320130)

console.log(data)
```
output
``` output
SP
```

**isZipCodeInState** a boolean that uses the two methods above to determinated either a ZipCode belongs to a State or not

```js
import {isZipCodeInState} from 'brzipcodes'

const data = isZipCodeInState(11320130, 'RJ')

console.log(data)
```
output
``` output
false
```

**GenerateRandomZipCode** a helper that generates a random ZipCode from a given state

```js
import {GenerateRandomZipCode} from 'brzipcodes'

const zipCode = GenerateRandomZipCode('SP')

console.log(zipCode)
```
output
``` output
11320130
```

**GetAddressFromZipCode** returns an object as it follows.
(Note that this is a async function...remember to use async/await. Otherwise you will received invalid return)

**zipCode**: Formated Zip Code

**address**: Complete address from given Zip Code

**complement**: Complement from address

**district**: District from address

**city**: City from address

**state**: State from address

**ibge**: Ibge code from given Zip Code

**gia**: GIA code from given Zip Code


```js
import {GetAddressFromZipCode} from 'brzipcodes'

const response = await GetAddressFromZipCode(01001000)

console.log(response)
```
output
``` output
{
  zipCode: '01001-000',
  address: 'Praça da Sé',
  complement: 'lado ímpar',
  district: 'Sé',
  city: 'São Paulo',
  state: 'SP',
  ibge: '3550308',
  gia: '1004'
}
```

## Authors

* **Thiago Vasconcellos** - *Initial work* - [brzipcode](https://github.com/thiagovasconcellos/brzipcode)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
