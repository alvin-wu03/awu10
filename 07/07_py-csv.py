'''
Team AMA-Zing (Alvin Wu, Madelyn Mao, Arib Chowdhury
Softdev
K07 -- Divine your Destiny
2020--09--30

'''

from random import choices
import csv

file =  csv.DictReader(open("occupations.csv")) #Opens file

Dict = {'Job Title': [], 'Percentage': []} #create a new dictionary

for line in file:
    Dict['Job Title'].append(line['Job Class'])
    Dict['Percentage'].append(float(line['Percentage']))

Dict['Job Title'].pop()
Dict['Percentage'].pop()

def returnRandomByWeight(dictionary):
    population = Dict['Job Title'] #The things we can randomize from
    weights = Dict['Percentage'] #The percent chances of each thing
    return choices(population, weights, k=1)[0] #Uses choices from Random library for output

print(returnRandomByWeight(Dict))
