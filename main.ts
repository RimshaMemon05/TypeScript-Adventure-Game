#! /usr/bin/env node

import inquirer from "inquirer";

class Player{
    name: string;
    fuel: number = 100;
    constructor(name: string){
        this.name = name;
    }
    fuelDecrease() {
        let fuel = this.fuel - 20;
        this.fuel = fuel;
    }
    fuelIncrease() {
        this.fuel = 100;
    }
}

class Enemy{
    name: string;
    fuel: number = 100;
    constructor(name: string){
        this.name = name;
    }
    fuelDecrease() {
        let fuel = this.fuel - 20;
        this.fuel = fuel;
    }
}

let player = await inquirer.prompt([
    {
        name: "name",
        type: "input",
        message: "Enter Your Name:"
    }
])

let enemy = await inquirer.prompt([
    {
        name: "select",
        type: "list",
        message: "Select Your Enemy You Fight With",
        choices: ["Allien", "Witch", "Zombie"]
    }
])

let p1 = new Player(player.name);
let e1 = new Enemy(enemy.select);

do{
    // Allien:
    if (enemy.select === "Allien") {
        let ask = await inquirer.prompt([
            {
                name: "opt",
                type: "list",
                message: "What would you like to do",
                choices: ["Attack", "Drink Portion", "Run For Your Life.."]
            }
        ]);
        if (ask.opt == "Attack") {
            let num = Math.floor(Math.random() * 2)
            if(num > 0){
                p1.fuelDecrease()
                console.log(`${p1.name} fuel is ${p1.fuel}`);
                console.log(`${e1.name} fuel is ${e1.fuel}`);
                if(p1.fuel <= 0) {
                    console.log("You Loose, Better Luck For Next Time");
                    process.exit();
                }
                
            }
            if(num <= 0){
                e1.fuelDecrease()
                console.log(`${p1.name} fuel is ${p1.fuel}`);
                console.log(`${e1.name} fuel is ${e1.fuel}`);
                if(e1.fuel <= 0) {
                    console.log("You Win");
                    process.exit();
                }
            }
        }
        if(ask.opt == "Drink Portion"){
            p1.fuelIncrease()
            console.log(`You Drink Health Portion Your Fuel is ${p1.fuel}`);
        }
        if(ask.opt == "Run For Your Life..") {
            console.log("You Loose, Better Luck For Next Time");
        }
    }

    // Witch:
    if (enemy.select === "Witch") {
        let ask = await inquirer.prompt([
            {
                name: "opt",
                type: "list",
                message: "What would you like to do",
                choices: ["Attack", "Drink Portion", "Run For Your Life.."]
            }
        ]);
        if (ask.opt == "Attack") {
            let num = Math.floor(Math.random() * 2)
            if(num > 0){
                p1.fuelDecrease()
                console.log(`${p1.name} fuel is ${p1.fuel}`);
                console.log(`${e1.name} fuel is ${e1.fuel}`);
                if(p1.fuel <= 0) {
                    console.log("You Loose, Better Luck For Next Time");
                    process.exit();
                }
                
            }
            if(num <= 0){
                e1.fuelDecrease()
                console.log(`${p1.name} fuel is ${p1.fuel}`);
                console.log(`${e1.name} fuel is ${e1.fuel}`);
                if(e1.fuel <= 0) {
                    console.log("You Win");
                    process.exit();
                }
            }
        }
        if(ask.opt == "Drink Portion"){
            p1.fuelIncrease()
            console.log(`You Drink Health Portion Your Fuel is ${p1.fuel}`);
        }
        if(ask.opt == "Run For Your Life..") {
            console.log("You Loose, Better Luck For Next Time");
        }
    }

    // Zombie:
    if (enemy.select === "Zombie") {
        let ask = await inquirer.prompt([
            {
                name: "opt",
                type: "list",
                message: "What would you like to do",
                choices: ["Attack", "Drink Portion", "Run For Your Life.."]
            }
        ]);
        if (ask.opt == "Attack") {
            let num = Math.floor(Math.random() * 2)
            if(num > 0){
                p1.fuelDecrease()
                console.log(`${p1.name} fuel is ${p1.fuel}`);
                console.log(`${e1.name} fuel is ${e1.fuel}`);
                if(p1.fuel <= 0) {
                    console.log("You Loose, Better Luck For Next Time");
                    process.exit();
                }
                
            }
            if(num <= 0){
                e1.fuelDecrease()
                console.log(`${p1.name} fuel is ${p1.fuel}`);
                console.log(`${e1.name} fuel is ${e1.fuel}`);
                if(e1.fuel <= 0) {
                    console.log("You Win");
                    process.exit();
                }
            }
        }
        if(ask.opt == "Drink Portion"){
            p1.fuelIncrease()
            console.log(`You Drink Health Portion Your Fuel is ${p1.fuel}`);
        }
        if(ask.opt == "Run For Your Life..") {
            console.log("You Loose, Better Luck For Next Time");
        }
    }
}
while (true);
    


