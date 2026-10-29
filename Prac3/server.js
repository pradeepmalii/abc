
const express = require('express');

const app = express();

const PORT = 3000;

// Handle the home page request

app.get('/', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>Node.js Practical 3</title>
        </head>
        <body>
            <h1>Welcome to Node.js Server</h1>
            <p>This is a basic server-side application.</p>

            <h2>Current Date and Time</h2>
            <p id="datetime"></p>

            <script>
                function updateDateTime() {
                    const now = new Date();

                    document.getElementById('datetime').textContent =
                        now.toLocaleString('en-IN', {
                            dateStyle: 'full',
                            timeStyle: 'medium'
                        });
                }

                updateDateTime();
                setInterval(updateDateTime, 1000);
            </script>
        </body>
        </html>
    `);
});


// Start the server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
