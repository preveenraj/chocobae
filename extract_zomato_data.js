const fs = require('fs');

try {
  const html = fs.readFileSync('zomato_page.html', 'utf8');
  const startMarker = 'JSON.parse("';
  const startIndex = html.indexOf(startMarker);

  if (startIndex !== -1) {
    let cursor = startIndex + startMarker.length;
    let extracted = '';
    let isEscaped = false;

    // Loop until we find the closing quote that isn't escaped
    while (cursor < html.length) {
      const char = html[cursor];
      
      if (isEscaped) {
        extracted += char;
        isEscaped = false;
      } else {
        if (char === '\\') {
          extracted += char;
          isEscaped = true;
        } else if (char === '"') {
          // Found the closing quote
          break;
        } else {
          extracted += char;
        }
      }
      cursor++;
    }

    // Now we have the escaped string content. 
    // We need to unescape it to get the JSON string.
    // JSON.parse("...") means the content is a string literal.
    // e.g. "{\"a\":1}" -> {"a":1}
    
    // We can use JSON.parse(`"${extracted}"`) to handle the unescaping if extracted is valid.
    // But since extracted contains backslashes that were preserved in the loop, 
    // we need to be careful. 
    
    // The loop preserved the backslashes in `extracted`. 
    // So if the source was `\"`, extracted is `\"`.
    // So `extracted` is exactly what was inside the quotes.
    // So `JSON.parse('"' + extracted + '"')` should return the inner string (which is the JSON).
    
    try {
        const jsonString = JSON.parse('"' + extracted + '"');
        const data = JSON.parse(jsonString);
        
        fs.writeFileSync('zomato_data.json', JSON.stringify(data, null, 2));
        console.log("Successfully extracted and saved JSON data to zomato_data.json");
    } catch (e) {
        console.error("Error parsing extracted string:", e.message);
        fs.writeFileSync('zomato_extracted_debug.txt', extracted);
    }

  } else {
    console.log("No JSON.parse pattern found");
  }
} catch (err) {
  console.error(err);
}
