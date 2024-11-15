const fs = require('fs');

// Path to the HTML file
const filePath = 'LICENSES.html';

// Read the HTML file
fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }

    // Use a regular expression to remove "mailto:" links entirely
    const updatedData = data.replace(/<a\s+href="mailto:[^"]*">([^<]+)<\/a>/g, '$1');

    // Write the updated content back to the file
    fs.writeFile(filePath, updatedData, 'utf8', (err) => {
        if (err) {
            console.error('Error writing file:', err);
        } else {
            console.log('File updated successfully.');
        }
    });
});