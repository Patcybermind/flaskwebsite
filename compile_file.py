# take a .md file and compiles it to html
import os

def compile_file(name):

    filepath = 'projects/' + name
    with open(filepath, 'r') as file:
        lines = file.readlines()
        for index, line in enumerate(lines):
            if line.startswith('#'):
                line = line.strip()
                line = line[1:] # remove the #
                lines[index] = '<h1>' + line + '</h1>\n'
    
    name = name[:-3]
    
    new_filepath = 'templates/projects/' + name + '.html'
    with open(new_filepath, 'w') as new_file:
        new_file.writelines(lines)
