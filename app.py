#!/bin/python3

from flask import Flask, render_template
import requests
import json
import os
import logging
import compile_file

app = Flask(__name__)
app.config['TEMPLATES_AUTO_RELOAD'] = True
app.logger.setLevel(logging.DEBUG)



@app.errorhandler(404)
def page_not_found(e):
    return render_template('404.html'), 404

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/projects')
def projects():
    return render_template('/hugo/projects/public/index.html')

#@app.route('/projects/<path:subpath>')
#def handle_project(subpath):
#    # subpath contains the part of the URL after projects/
#    subpathmd = subpath
#    if not subpath.endswith('.md'): subpathmd += '.md'
#
#    app.logger.debug(subpath)
#
#    file_path = os.path.join('projects/', subpathmd)
#
#    if os.path.exists(file_path):
#        compile_file.compile_file(subpathmd)
#        app.logger.debug(subpathmd)
#        return render_template(f'projects/{subpath}.html')
#    else:
#        return render_template('didntwork.html')
        
    




        
    






    



    
