'use strict';

var toMatrix = require( 'compute-to-matrix' ),
	mean = require( 'compute-mean' ),
	variance = require( 'compute-variance' ),
	data = require( './../lib' );


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
