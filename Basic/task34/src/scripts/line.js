﻿import {sourceData} from "./ife31data.js";
import {addLoadEvent} from "./global.js";
import {getHDSJData} from "./bar.js";

function prepareCanvas(){
	var line_wrapper = document.querySelector('#app #line-wrapper');
	line_wrapper.innerHTML = "<canvas width = '558' height = '300'></canvas>";
	line_wrapper.style.height = "300px";
	var can = line_wrapper.querySelector('canvas');
}

let color = ['Aqua','Black','Blue','Brown','Chartreusus','Red','Coral','Crimson','DarkCyan'];

function drawALine(data) {
	var canvas = document.querySelector('#app #line-wrapper canvas');
	var max = 0,t = 1;
	for(let i in data[0]['sale']) {
		if(max < data[0]['sale'][i]) {
			max = data[0]['sale'][i];
		}
	}
	t = 200/max;
	if(canvas.getContext) {
		var ctx = canvas.getContext('2d');
		ctx.clearRect(0,0,558,300);
		ctx.beginPath();
		ctx.moveTo(50,50);
		ctx.lineTo(50,250);
		ctx.moveTo(45,250);
		ctx.lineTo(500,250);
		for (let i in data[0]['sale']) {
			if(i == 0 ) {
				ctx.moveTo(51,(250-data[0]['sale'][i]*t));
			}else {
				ctx.lineTo(51+40*i,(250-data[0]['sale'][i]*t));
			}
		}
		ctx.strokeStyle = "black";
		ctx.stroke();
	}
}

function drawManyLine(data) {
	var canvas = document.querySelector('#app #line-wrapper canvas');
	var max = 0,t = 1;
	for (let j = 0 ;j<data.length ;j++) {
		for(let i in data[j]['sale']) {
			if(max < data[j]['sale'][i]) {
				max = data[j]['sale'][i];
			}
		}
	}
	t = 200/max;
	if(canvas.getContext) {
		var ctx = canvas.getContext('2d');
		ctx.clearRect(0,0,500,300);
		ctx.beginPath();
		ctx.moveTo(50,50);
		ctx.lineTo(50,250);
		ctx.moveTo(45,250);
		ctx.lineTo(500,250);
		ctx.strokeStyle = 'black';
		ctx.stroke();
		for(let j = 0 ; j < data.length ; j ++) {
			for (let i in data[j]['sale']) {
				if(i == 0 ) {
					ctx.stroke();
					ctx.beginPath();
					ctx.strokeStyle = color[j];
					ctx.moveTo(51,(250-data[j]['sale'][i]*t));
				}else {
					ctx.lineTo(51+40*i,(250-data[j]['sale'][i]*t));
				}
			}	
		}
		ctx.stroke();		
	}
}



export { prepareCanvas,drawALine,drawManyLine,color }

addLoadEvent(prepareCanvas());
addLoadEvent(drawALine(getHDSJData()));