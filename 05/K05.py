#Alvin Wu
#SoftDev
#K<05> -- <Random Team Member Selector>
#<2020>-<09>-<25>
import random

#Dictionary with teams and their members
KREWES = {
    'orpheus': ['ERIC', 'SAUVE', 'JONATHAN', 'PAK', 'LIAM', 'WINNIE', 'KELLY', 'JEFFREY', 'KARL', 'ISHITA', 'VICTORIA', 'BENJAMIN', 'ARIB', 'AMELIA', 'CONSTANCE', 'IAN'],
    'rex': ['ANYA', 'DUB-Y', 'JESSICA', 'ALVIN', 'HELENA', 'MICHELLE', 'SHENKER', 'ARI', 'STELLA', 'RENEE', 'MADELYN', 'MAC', 'RYAN', 'DRAGOS'],
    'endymion': ['JASON', 'DEAN', 'MADDIE', 'SAQIF', 'CINDY', 'YI LING', 'RUOSHUI', 'FB', 'MATTHEW', 'MAY', 'ERIN', 'MEIRU']
}

#Receive user input
x = input('Which team do you want a student from? (orpheus, rex, endymion)\n')
if x not in KREWES: #If the team entered is not in the dict, terminate the program and let the user know 
    print("That is not a valid team")
else: #y is the team selected
    y = KREWES[x]
    z = random.choice(y) #z is a team member picked randomly from the team
    print(z) #output



