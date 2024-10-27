from flask import Flask, request, render_template
import pandas as pd
import os

app = Flask(__name__)

# Set the absolute path to your CSV file
file_path = 'water_dataX.csv'

# Function to load data, excluding the 'year' column
def load_data():
    if os.path.exists(file_path):
        # Load the data, excluding the 'year' column if it exists
        data = pd.read_csv(file_path, encoding='latin1')
        if 'year' in data.columns:
            data = data.drop(columns=['year'])
        return data
    else:
        return None

# Route for home page
@app.route('/')
def home():
    return render_template('index.html')

# Route for fetching river data
@app.route('/get_data', methods=['POST'])
def get_data():
    state_input = request.form['state']
    data = load_data()
    
    if data is None:
        return "Error: Data file not found.", 500
    
    # Ensure both state_input and STATE column are stripped and in lower case for comparison
    river_info = data[data['STATE'].str.strip().str.lower() == state_input.strip().lower()]

    return render_template('data.html', river_info=river_info)

if __name__ == '__main__':
    app.run(debug=True)
