import { useState } from 'react';
import Calendar from 'react-calendar';
import './Calendar.css';
import Modal from '../Modal/Modal';
const sheetURLENV = import.meta.env.VITE_SHEET_URL;
const sheetIDENV = import.meta.env.VITE_SHEET_ID;
const sheetNameENV = encodeURIComponent(import.meta.env.VITE_SHEET_NAME);
const sheetURLENV2 = import.meta.env.VITE_SHEET_URL2;
const sheetURLFull = `${sheetURLENV}${sheetIDENV}${sheetURLENV2}${sheetNameENV}`;
let howse = [];
let test;
let objAll = [];
// let howLost;

await fetch(sheetURLFull)
	.then(response => response.text())
	.then(csvText => handleResponse(csvText));

function csvToObjects(csv) {
	const csvRows = csv.split('\n');
	const propertyNames = csvSplit(csvRows[0]);
	let objects = [];
	for (let i = 1, max = csvRows.length; i < max; i++) {
		let thisObject = {};
		let row = csvSplit(csvRows[i]);
		for (let j = 0, max = row.length; j < max; j++) {
			thisObject[propertyNames[j]] = row[j];
		}
		objects.push(thisObject);
	}
	return objects;
}
function csvSplit(row) {
	return row.split(',').map(val => val.substring(1, val.length - 1));
}

function handleResponse(csvText) {
	let sheetObjects = csvToObjects(csvText);
	for (let i = 0; i < sheetObjects.length; i++) {
		if (sheetObjects[i].dat.includes(' ')) {
			// test = sheetObjects[i].dat.match(/^(\S+)\s(.*)/).slice(1);
			test = sheetObjects[i].dat.split(' ');
		} else {
			test = [sheetObjects[i].dat];
		}

		const alls = [
			{
				month: sheetObjects[i].msc,
				day: test,
				how: sheetObjects[i].os,
				year: sheetObjects[i].rok,
				hows: 50 - Number(sheetObjects[i].os),
			},
		];
		objAll.push(...alls);
	}
	return objAll;
}

function MyApp() {
	const [value, onChange] = useState(new Date());
	let [howLost, sethowLost] = useState(0);
	const [classActive, setClassActive] = useState(false);
	function twoFunction() {
		onChange();
	}
	const apps = ({ date, view }) => {
		for (let i = 0; i < objAll.length; i++) {
			if (
				view === 'month' &&
				String(date.getFullYear()) === objAll[i].year &&
				objAll[i].day.includes(String(date.getDate())) &&
				date.getMonth() === objAll[i].month
			) {
				howse.push(objAll[i].hows);
			}
			switch (objAll[i].month) {
				case 'styczen':
					objAll[i].month = 0;
					break;
				case 'luty':
					objAll[i].month = 1;
					break;
				case 'marzec':
					objAll[i].month = 2;
					break;
				case 'kwiecien':
					objAll[i].month = 3;
					break;
				case 'maj':
					objAll[i].month = 4;
					break;
				case 'czerwiec':
					objAll[i].month = 5;
					break;
				case 'lipiec':
					objAll[i].month = 6;
					break;
				case 'sierpien':
					objAll[i].month = 7;
					break;
				case 'wrzesien':
					objAll[i].month = 8;
					break;
				case 'pazdziernik':
					objAll[i].month = 9;
					break;
				case 'listopad':
					objAll[i].month = 10;
					break;
				case 'grudzien':
					objAll[i].month = 11;
					break;
			}
			if (
				view === 'month' &&
				String(date.getFullYear()) === objAll[i].year &&
				objAll[i].day.includes(String(date.getDate())) &&
				date.getMonth() === objAll[i].month &&
				Number(objAll[i].how) >= 15 &&
				Number(objAll[i].how) <= 25
			) {
				return 'halfFor';
			} else if (
				view === 'month' &&
				String(date.getFullYear()) === objAll[i].year &&
				objAll[i].day.includes(String(date.getDate())) &&
				date.getMonth() === objAll[i].month &&
				Number(objAll[i].how) >= 26 &&
				Number(objAll[i].how) <= 40
			) {
				return 'halfPast';
			} else if (
				view === 'month' &&
				String(date.getFullYear()) === objAll[i].year &&
				objAll[i].day.includes(String(date.getDate())) &&
				date.getMonth() === objAll[i].month &&
				Number(objAll[i].how) >= 41 &&
				Number(objAll[i].how) <= 50
			) {
				return 'full';
			} else if (
				view === 'month' &&
				String(date.getFullYear()) === objAll[i].year &&
				objAll[i].day.includes(String(date.getDate())) &&
				date.getMonth() === objAll[i].month &&
				Number(objAll[i].how) <= 15
			) {
				return 'low';
			}
		}
	};
	function CheckDay(e) {
		sethowLost(50);
		objAll.map(item => {
			item.day.map(day => {
				if (`${day}.${item.month}.${item.year}` === `${e.getDate()}.${e.getMonth()}.${e.getFullYear()}`) {
					sethowLost(item.hows);
				}
			});
		});
	}
	function ChechHowDay() {
		if (howLost === 0) {
			return (
				<span
					style={{
						color: 'red',
					}}>
					Wszystkie miejsca zajęte!
				</span>
			);
		} else if (howLost === 50) {
			return (
				<span
					style={{
						color: 'green',
					}}>
					Wszystkie miejsca wolne!
				</span>
			);
		} else {
			return (
				<span
					style={{
						color: 'black',
					}}>
					Pozostało {howLost} wolnych miejsc w tym terminie
				</span>
			);
		}
	}
	return (
		<div className="header_calendar">
			<p className='modal-show'
				onMouseOver={() => {
					setClassActive(true);
				}}
				onMouseOut={() => {
					setClassActive(false);
				}}>
				?
			</p>
			<Modal classActive={classActive} />
			<Calendar onClickDay={CheckDay} tileClassName={apps} onChange={twoFunction} value={value} />
			<div className="header_value">
				<p className='calendar-howday'>{ChechHowDay()}</p>
			</div>
		</div>
	);
}

export default MyApp;
// e => {
// 	objAll.map(item =>
// 		!item.day.includes(String(e.getDate())) &&
// 		item.month == e.getMonth() &&
// 		item.year == String(e.getFullYear())
// 			? sethowLost(50)
// 			: 'sethowLost(item.hows)'
// 	);
// 	console.log(e.getDate());
// }
