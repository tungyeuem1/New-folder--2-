function printMultiplicationTable() {
	let content = "";
	for (let i = 1; i <= 10; i++) {
		for (let j = 1; j <= 10; j++) {
			
			content += `${i} * ${j} = ${i * j} \n`;
		}
		
		content += "-------------------------------------\n";
		content += "bang cuu truong\n";
	}
	console.log(content) ;
}

printMultiplicationTable();