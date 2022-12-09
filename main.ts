game.splash("We are going to calculate the cost of making a pizza")
let diameter = game.askForNumber("what is the diameter of your pizza")
let labour_cost = 0.75
let rent_cost_per_pizza = 1
let materials = 0.5
let subtotal = labour_cost + rent_cost_per_pizza + materials
let HST = 0.13
let Tax = subtotal + HST
let total = subtotal * Tax
game.splash("Your total comes out to ", total)
