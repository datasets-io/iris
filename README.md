Iris
===
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage Status][codecov-image]][codecov-url] [![Dependencies][dependencies-image]][dependencies-url]

> Edgar Anderson's iris [data](https://en.wikipedia.org/wiki/Iris_flower_data_set).


## Installation

``` bash
$ npm install datasets-iris
```

For use in the browser, use [browserify](https://github.com/substack/node-browserify).


## Usage

``` javascript
var data = require( 'datasets-iris' );
```

#### data.setosa

Edgar Anderson's [data](https://en.wikipedia.org/wiki/Iris_flower_data_set) for *[Iris setosa](https://github.com/datasets-io/iris-setosa)*.

``` javascript
console.log( data.setosa );
/* returns
	{
		'sepal': {
			'len': [...],
			'width': [...]
		},
		'petal': {
			'len': [...],
			'width': [...]
		}
	}
*/
```

#### data.versicolor

Edgar Anderson's [data](https://en.wikipedia.org/wiki/Iris_flower_data_set) for *[Iris versicolor](https://github.com/datasets-io/iris-versicolor)*.

``` javascript
console.log( data.versicolor );
/* returns
	{
		'sepal': {
			'len': [...],
			'width': [...]
		},
		'petal': {
			'len': [...],
			'width': [...]
		}
	}
*/
```

#### data.virginica

Edgar Anderson's [data](https://en.wikipedia.org/wiki/Iris_flower_data_set) for *[Iris virginica](https://github.com/datasets-io/iris-virginica)*.

``` javascript
console.log( data.virginica );
/* returns
	{
		'sepal': {
			'len': [...],
			'width': [...]
		},
		'petal': {
			'len': [...],
			'width': [...]
		}
	}
*/
```


## Examples

``` javascript
var toMatrix = require( 'compute-to-matrix' ),
	mean = require( 'compute-mean' ),
	variance = require( 'compute-variance' ),
	data = require( 'datasets-iris' );


var submat,
	mat,
	mu,
	s2;

// Create one large matrix containing all iris data...
mat = toMatrix([
	data.setosa.sepal.len,
	data.setosa.sepal.width,
	data.setosa.petal.len,
	data.setosa.petal.width,
	data.versicolor.sepal.len,
	data.versicolor.sepal.width,
	data.versicolor.petal.len,
	data.versicolor.petal.width,
	data.virginica.sepal.len,
	data.virginica.sepal.width,
	data.virginica.petal.len,
	data.virginica.petal.width
]);

// Calculate sample statistics for the various features across species...

// Sepal lengths:
submat = mat.sget( '::4,:' );

mu = mean( submat );
console.log( 'Sepal length means: %s', mu.toString() );

s2 = variance( submat );
console.log( 'Sepal length variances: %s', s2.toString() );

// Sepal widths:
submat = mat.sget( '1::4,:' );

mu = mean( submat );
console.log( 'Sepal width means: %s', mu.toString() );

s2 = variance( submat );
console.log( 'Sepal width variances: %s', s2.toString() );

// Petal lengths:
submat = mat.sget( '2::4,:' );

mu = mean( submat );
console.log( 'Petal length means: %s', mu.toString() );

s2 = variance( submat );
console.log( 'Petal length variances: %s', s2.toString() );

// Petal widths:
submat = mat.sget( '3::4,:' );

mu = mean( submat );
console.log( 'Petal width means: %s', mu.toString() );

s2 = variance( submat );
console.log( 'Petal width variances: %s', s2.toString() );
```

To run the example code from the top-level application directory,

``` bash
$ node ./examples/index.js
```


## References

*	Anderson, Edgar (1935). "The irises of the Gaspe Peninsula," *Bulletin of the American Iris Society*, __59__, 2–5.
*	Fisher, Ronald A. (1936). "The use of multiple measurements in taxonomic problems." *Annals of Eugenics*, __7__, Part II, 179–188.


## See Also

*	[iris-setosa](https://github.com/datasets-io/iris-setosa)
*	[iris-versicolor](https://github.com/datasets-io/iris-versicolor)
*	[iris-virginica](https://github.com/datasets-io/iris-virginica)


## Tests

### Unit

Unit tests use the [Mocha](http://mochajs.org/) test framework with [Chai](http://chaijs.com) assertions. To run the tests, execute the following command in the top-level application directory:

``` bash
$ make test
```

All new feature development should have corresponding unit tests to validate correct functionality.


### Test Coverage

This repository uses [Istanbul](https://github.com/gotwarlost/istanbul) as its code coverage tool. To generate a test coverage report, execute the following command in the top-level application directory:

``` bash
$ make test-cov
```

Istanbul creates a `./reports/coverage` directory. To access an HTML version of the report,

``` bash
$ make view-cov
```


---
## License

[MIT license](http://opensource.org/licenses/MIT).


## Copyright

Copyright &copy; 2015. The [Compute.io](https://github.com/compute-io) Authors.


[npm-image]: http://img.shields.io/npm/v/datasets-iris.svg
[npm-url]: https://npmjs.org/package/datasets-iris

[travis-image]: http://img.shields.io/travis/datasets-io/iris/master.svg
[travis-url]: https://travis-ci.org/datasets-io/iris

[codecov-image]: https://img.shields.io/codecov/c/github/datasets-io/iris/master.svg
[codecov-url]: https://codecov.io/github/datasets-io/iris?branch=master

[dependencies-image]: http://img.shields.io/david/datasets-io/iris.svg
[dependencies-url]: https://david-dm.org/datasets-io/iris

[dev-dependencies-image]: http://img.shields.io/david/dev/datasets-io/iris.svg
[dev-dependencies-url]: https://david-dm.org/dev/datasets-io/iris

[github-issues-image]: http://img.shields.io/github/issues/datasets-io/iris.svg
[github-issues-url]: https://github.com/datasets-io/iris/issues
