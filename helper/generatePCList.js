// used to generate a formatted list for programme_committee.yml

// a list of PC members, formatted as 'name	 affiliation'
const list = ` Aaron Sújar	Universidad Rey Juan Carlos
 Aidan Slingsby	City University London
 Alexandra Diehl	University of Zurich
 Alfie Abdul-Rahman	King's College London
 Amal Dev Parakkat	Delft University of Technology
 Benjamin Bach	University of Edinburgh
 Benjamin Mora	Swansea University
 Benjamin Williams	University of Lincoln
 Bernard Tiddeman	Aberystwyth University
 Cagatay Turkay	University of Warwick
 Daniel Archambault	Swansea University
 Danielle Threlfall	University of Lincoln
 Franck Vidal	Bangor University
 Frédéric Labrosse	Aberystwyth University
 Frederick W. B. Li	Durham University
 Gary KL Tam	Swansea University
 George Alex Koulieris	Durham University
 Giuseppe Claudio Guarnera	University of York
 Hamish Carr	University of Leeds
 Helen Miles	Aberystwyth University
 Hui Fang	Loughborough University
 Ioannis Ivrissimtzis	Durham University
 Jason Dykes	City University London
 Jian Jun Zhang	Bournemouth University
 Jing Wu	Cardiff University
 Jingjing Deng	Swansea University
 Kenny Mitchell	Edinburgh Napier University
 Llyr Ap Cenydd	Bangor University
 Luc Bidaut	University of Lincoln
 Mark Jones	Swansea University
 Min Chen	University of Oxford
 Nicholas Costen	Manchester Metropolitan University
 Nick Holliman	Newcastle University
 Nigel W. John	University of Chester
 Panagiotis D. Ritsos	Bangor University
 Peter Passmore	Middlesex University London
 Peter Vangorp	Utrecht University
 Pierre-Frederic Villard	University of Lorraine
 Ran Song	University of Brighton
 Reyer Zwiggelaar	Aberystwyth University
 Roy Ruddle	University of Leeds
 Sara Fernstad	Newcastle University
 Sean Walton	Swansea University
 Steve Maddock	University of Sheffield
 Steve Pettifer	Manchester University
 Tao Wan	University of Bradford
 Tim Morris	Manchester University
 Titas De	Indian Institute of Technology, Kharagpur
 Wen Tang	Bournemouth University
 Xianfang Sun	Cardiff University
 Yu-Kun Lai	Cardiff University
 Yufeng Zhu	University of British Columbia`;

let result = "";

list.split("\n").forEach((m) => {
  result += `- name: ${m.split("\t")[0].trim()}
  affiliation: ${m.split("\t")[1].trim()} \n\n`;
});

// copy the result into clipboard
var proc = require("child_process").spawn("pbcopy");
proc.stdin.write(result);
proc.stdin.end();
