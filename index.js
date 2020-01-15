// let name = 'Mosh';
// console.log(name);

// const intrestRate = 0.3;
// console.log(intrestRate);

// let person = {
// 	name: 'Rafa',
// 	age: '24'
// };

// person.name = 'the guy';

// console.log(person.name);

// let selectedColors = ['red', 'blue'];
// selectedColors[2] = '1';
// console.log(selectedColors);

// // Easy Task
// function greet(name, lastName) {
// 	console.log('Hello ' + name + '' + lastName);
// }

// //calc value
// function square(number) {
// 	return number * number;
// }

// console.log(square(3));

const express = require('express');
// const connectDB= require('./config/db');
const path = require('path');

const app = express();

connectDB();

app.use(express.json({ extended: false }));

//routes
app.use('/api/users', require('./routes/api/users'));

//assets
if (process.env.NODE_ENV === 'production') {
	app.use(express.static('client/build'));

	app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
	});
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`server connected at port ${PORT}`));

// const express = require('express');
// const connectDB = require('./config/db');
// const path = require('path');

// const app = express();

// // Connect DB
// connectDB();

// // init middleware
// app.use(express.json({ extended: false }));

// // define routes
// app.use('/api/users', require('./routes/api/users'));
// app.use('/api/auth', require('./routes/api/auth'));
// app.use('/api/profile', require('./routes/api/profile'));
// app.use('/api/posts', require('./routes/api/posts'));

// // serve static assets in production
// if (process.env.NODE_ENV === 'production') {
// 	//Set static folder
// 	app.use(express.static('client/build'));

// 	app.get('*', (req, res) => {
// 		res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
// 	});
// }

// const PORT = process.env.PORT || 5000;

// app.listen(PORT, () => console.log(`Server connected at port ${PORT}`));
