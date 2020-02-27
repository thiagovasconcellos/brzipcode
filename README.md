# Brazilian ZipCode Validator <img src="https://cdn.countryflags.com/thumbs/brazil/flag-button-round-250.png" width="32" height="32" title="Brazil" />


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

There are four methods you can use:

  * ZipCodesFromGivenState
  * StateFromZipCode
  * isZipCodeInState
  * GenerateRandomZipCode

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

## Authors

* **Thiago Vasconcellos** - *Initial work* - [brzipcode](https://github.com/thiagovasconcellos/brzipcode)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details