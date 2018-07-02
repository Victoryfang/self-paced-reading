# Formats experimental items for use with IBEX farm :: Acceptability task
#
# Dan Parker June 2012
#
# Items in txt file, one item per line, no number or whatnot, just the item/sentence: Sentence > response (1 = Yes, 0 = No) > Question
#
# To run :: open terminal, cd to directory with this script, execute 'python ibex-format.py'

import string
import os
import sys
import re

# Prompt for Items file
myFile = input("Name of items file (enter full path): ")
myItems = open(myFile)

# Count the number of lines (i.e. items) from the file
def file_len(fName):
    with open(fName) as f:
        for i, l in enumerate(f):
            pass
    return i + 1

numItems = file_len(myFile)


# Item start number
start = 1

# Prompt for number of conditions 
# (raw_input for text)
conds = int(input("Number of conditions: "))

# Determine number of item sets 
sets = numItems//conds

# Create output file
outputFile = input("Name of output file (enter full path): ")
output = open(outputFile, 'w')

choice =  input("Item or Filler Formatting? enter item/filler: ")

if choice == "item":
	for i in range(start,sets+1):
		for x in string.ascii_letters[0:conds]:		
			line = myItems.readline().replace('\n', '')
			line = re.split(r'\t', line)
			item = line[0]
			question = line[2]
			answer = line[1]
			output.write("[[\"" + x + "\", " + repr(i) + "], \"DashedSentence\", {s: \"" + item + "\"},\n\t\"Question\", {hasCorrect: " + answer +", randomOrder: false, q: \"" + question + "\", as: [\"Press 1 or click here for Yes.\", \"Press 2 or click here for No.\"]}],\n")

if choice == "filler":
	for x in range(1,numItems+1):		
		line = myItems.readline().replace('\n', '')
		line = re.split(r'\t', line)
		item = line[0]
		question = line[2]
		answer = line[1]
		output.write("[\"f" + repr(x) + "\", \"DashedSentence\", {s: \"" + item + "\"},\n\t\"Question\", {hasCorrect: " + answer +", randomOrder: false, q: \"" + question + "\", as: [\"Press 1 or click here for Yes.\", \"Press 2 or click here for No.\"]}],\n")


output.close()



