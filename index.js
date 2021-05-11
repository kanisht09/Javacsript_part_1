        // Assignment
// Lecture: Values and Variables  Date : 14/04/2021

const country="India";
const continent="Asia";
let population=1366; // (in millions)
console.log(country);
console.log(continent);
console.log(population);

// Lecture: Data Types Date : 14/04/2021

const isIsland=false;
let language;
console.log(isIsland);
console.log(population);
console.log(country);
console.log(language);

// Lecture: let,const and var Date : 14/04/2021

language='hindi';

   // variables which should be changed to const
   // are  all except population and language
    console.log(language);
     //isIsland=false;

 //  Lecture: Basic Operators Date : 14/04/2021
    
        console.log(population/2);
        population++;
        console.log(population);
        let finlandPopulation=6;
        console.log(population>finlandPopulation);
        let averagePopulation=33;
        console.log(population<averagePopulation);
        // const description=country+' is in '+continent+' and its '+population+' million people speak '+language;
        // console.log(description);

// Coding Challenge #1  Date : 15/04/2021

        let markHeight;
        let markWeight;
        let johnHeight;
        let johnWeight;

        markHeight=1.88;
        markWeight=95;
        johnHeight=1.76;
        johnWeight=85;

        const markBMI=markWeight/(markHeight*markHeight);
        const johnBMI=johnWeight/(johnHeight*johnHeight);
        console.log(markBMI,johnBMI);
        let markHigherBMI=markBMI>johnBMI;
        console.log(markHigherBMI);
    
// Lecture: Strings and Template Literals Date :15/04/2021

        const description=`${country} is in ${continent} and its ${population} million people speak ${language}`;
        console.log(description);

// for multiple line strings
// 1st (unclean) console.log('String \n\muliple \n\lines');
// 2nd (clean) 
// const mul=`Hi
// there
// hello`;
// console.log(mul);
// console.log(`hi
// bro 
// how u
// doing!`);

// Lecture : Taking decisions: if/else statements Date : 15/04/2021

        // const age=17;
        // const isOldEnough=age>=18;
        // // for emojis windows+'.' key is used
        // if(isOldEnough)
        // {
        //       console.log('Sarah can start driving license 😀')  
        // }
        // else
        // {
        //     const yearsLeft=18-age;
        //     console.log(`Sarah can start driving after ${yearsLeft} years.`)
        // }

        // const birthYear=2012;
        // let century;
        // if(birthYear<=2000)
        //     century=20;
        // else
        //     century=21;
        // console.log(century);

        if(population>33)
        console.log(`${country}'s population is above average\n`);
        else
        console.log(`${country}'s population is ${population} million below average\n`);

// Coding Challenge #2 Date : 15/04/2021
        if(markBMI>johnBMI)
        {
                console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI})!`);
        }        
        else{
                console.log(`John's BMI (${johnBMI}) is higher than Mark's (${markBMI})!`);                
        }

// Lecture : Type Conversion and Coercion Date : 15/04/2021

        // const inputYear='1991';
        // console.log(Number(inputYear),inputYear);
        // console.log(Number(inputYear)+18);        
        // // Number of(string contaning atleast 1 non-digit gives Nan )
        // console.log(String(177));

        // // Type coercion
        // console.log('I am '+23+' years old ');
        // // only for '+' type coercion doesn't works

       //Soln:
        //  i) 4
        //  ii) 617
        //  iii) 23
        //  iv) false
        //  v) 1143  (imp)
        console.log('9' - '5',
        '19' - '13' + '17',
        '19' - '13' + 17,
        '123' < 57,
        5 + 6 + '4' + 9 - 4 - 2);

// falsy values : 0,'',undefined,null,NaN

        // console.log(Boolean(0));
        // console.log(Boolean(''));
        // console.log(Boolean(undefined));
        // console.log(Boolean(null));
        // console.log(Boolean(NaN));

        // console.log(Boolean({}));
        // console.log(Boolean('Nj'));

        // let height= 0;
        // if(height)
        // console.log('height is defined!');
        // else
        // console.log('height is undefined!');

// Lecture : Equality Operators : == vs === Date : 15/04/2021

        // const age=18;
        // if(age===18)console.log('You just reached 18\n') ;
        // // ==== used for strict checking doesnt uses type coercion
        
        // if(age==18) console.log('U just reached 18');

        // const favNumber=prompt("What is your favorite number");
        // console.log(favNumber);

//         const numNeighbours=Number(prompt("How many neighbour countries does your country have?"));
//        // console.log(typeof numNeighbours);
//         if(numNeighbours===1)
//         console.log('Only 1 border!\n');
//         else if(numNeighbours>1)
//         console.log('More than 1 border\n');
//         else{
//         console.log('No borders\n');
//         }

// Lecture : Logical Operators Date: 15/04/2021

        if(language==='English' && population<50 && !isIsland)
        {
                console.log(`You should live in ${country} :)`);
        }       
        else{
                console.log(`${country} doesnot meet your criteria :(\n`);
        } 

// Coding Challenge #3 : Date : 15/04/2021

        const teamDolphins=(96+108+89)/3;
        const teamKoalas=(88+91+110)/3;
        if(teamDolphins>teamKoalas && teamDolphins>=100)
        {
             console.log('Team Dolphins\n') ;  
        }
        else if(teamKoalas>teamDolphins && teamKoalas>=100)
                console.log("Team Koalas\n");
        else
        {
                console.log('Draw\n');
        }

// Lecture : The Switch Statement Date: 15/04/2021


        switch(language)
        {
                case 'chinese':
                case 'mandarin':
                        console.log("MOST number of native speakers\n");
                        break;
                case 'spanish':
                        console.log("2nd place in number of native speakers\n");
                        break;
                case 'english':
                        console.log('3rd place\n');
                        break;
                case 'hindi':
                        console.log('Number 4\n');
                        break;
                case 'arabic':
                        console.log('5th most spoken language\n');
                        break;
                default:
                        console.log('Great language too :D\n');
                        break;
                
        }

// Lecture : The Conditional(Ternary) Operator: Date : 15/04/2021

population>33?console.log(`${country}'s population is above average\n`):console.log(`${country}'s population is below average\n`);


// Coding Challenge #4 Date : 15/04/2021

//const bill=275;
//const bill=40;
const bill=430;
const tip=(bill>=50 && bill<=300)?((bill*15)/100):(bill*0.2);
const totalValue=tip+bill;
console.log(`The bill was ${bill}, the tip was ${tip},and the total vlaue ${bill+tip}\n`);

// Lecture :







