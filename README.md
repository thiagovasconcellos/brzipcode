# Brazilian ZipCode Validator

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

There are 3 methods you can use:

  * ZipCodesFromGivenState
  * StateFromZipCode
  * isZipCodeInState

### Examples

**ZipCodesFromGivenState** returns an object as it follows:
```js
import {ZipCodesFromGivenState} from 'brzipcodes'

const data = ZipCodesFromGivenState('SP')

console.log(data)
```
``` output
{
  state: 'São Paulo',
  range: [ { start: '11000-000', finish: '19999-999' } ]
}
```

## Authors

* **Thiago Vasconcellos** - *Initial work* - [PurpleBooth](https://github.com/thiagovasconcellos)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details