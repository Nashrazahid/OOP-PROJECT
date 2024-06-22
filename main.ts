#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

class Person{
    private personality : string;
    constructor(){
         this.personality = "mystry"
    }

public askQuestion (ans:number){
    if(ans === 1){
        this.personality = "Extrovert"
  }else if(ans === 2){
    this.personality = "Introvert"
  } 
else{
    this.personality = "still a mystery"
}
  }
public getPersonality(){
    return this.personality

}
}
class student extends Person{
    private name :string =""

    public setName(name:string){
        this.name = name
    }
    public getName(){
        return this.name
    }
}
let answer = await inquirer.prompt([{
    name: "Names",
    type:"input",
    message:chalk.blue("enter your name"),
    validate:(value)=>{
        if(value.trim() ===""){
            return "this feild is required";
        }
            return true;
        }
    },

{
    name:"personans",
    type:"number",
    message:chalk.yellow("Type 1 if you like to talk others and type 2 if you would rather keep to Yourself:"),
    validate:(input)=>{
        if(isNaN(input)){
            return "pleaase enter an integer value"
        }else{
            return true
        }
    },
}])

let ans : number 
ans = answer.personans
const myPerson = new Person()
myPerson.askQuestion(ans)
console.log(chalk.green(`${answer.Names} your personality is ${myPerson.getPersonality()}`))
