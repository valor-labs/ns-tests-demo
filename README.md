# An example of NativeScript Application that contains proper Medium Tests


## How to prepare

First of all, you should install NativeScript CLI globally and run `npm i`.

## How to run the application

### Android

`tns run android`

### Debug under Android

`tns debug android`

### iOS

`tns run ios`

### Debug under iOS

`tns debug ios`

## How to run tests

It's quite easy: `npm test`

## Pay attention to:

* Tests here are based on `Mocha` and they are asynchronous.
* Here is a [test runner](https://github.com/VS-work/ns-tests-demo/blob/master/package.json#L15). Change `android` to `ios` if you want to test under iOS.
* Put tests [here](https://github.com/VS-work/ns-tests-demo/blob/master/src/tests/example.ts)
* You can apply timeout (as a maximum test execution limit) for [all tests](https://github.com/VS-work/ns-tests-demo/blob/master/src/tests/example.ts#L6) and for [individual test](https://github.com/VS-work/ns-tests-demo/blob/master/src/tests/example.ts#L31).
* NativeScript has own `Test Bed` [tools](https://github.com/VS-work/ns-tests-demo/blob/master/src/tests/example.ts#L2)

