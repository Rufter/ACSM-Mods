/**
 * Wait for the whole HTML document to be fully loaded and parsed.
 * This event ensures that all DOM elements are available for manipulation.
 */
document.addEventListener("DOMContentLoaded", function() {

    /**
     * Create a <style> element which will hold custom CSS rules.
     * This CSS targets any element with the class `multiserver` within a parent element
     * that has the class `multiserver-dropdown` and sets its height to 90px.
     */
    const style = document.createElement('style');
    style.textContent = `
        .multiserver-dropdown .multiserver {
            height: 90px;
        }
    `;
    
    // Append the newly created <style> element to the <head> section of the document,
    // so that its styles become applied.
    document.head.appendChild(style);

    /**
     * Select all elements with the class 'multiserver' from the document.
     * These elements are expected to represent individual server blocks.
     */
    const multiServerElements = document.querySelectorAll('.multiserver');

    /**
     * Iterate over each selected server element.
     * The index in the forEach loop is used to determine a server number.
     */
    multiServerElements.forEach(function(serverElement, index) {
        // Use the current index as the server number.
        const serverNumber = index;

        /**
         * Create a new <a> (anchor) element.
         * This link is used to direct users to a live timing view specific to a server.
         */
        const link = document.createElement('a');
        // Set the href attribute to direct the user to the live timing page with a query parameter.
        link.href = `/live-timing?server=${serverNumber}`;
        // Set the text content of the link. 
        link.textContent = '>>view Live Timings<<';

        /**
         * Locate the child element with the class 'players' within the current server element.
         * This element is expected to display the number of players or related player information.
         */
        const playersElement = serverElement.querySelector('.players');
        
        // If the players element exists, modify its content.
        if (playersElement) {
            // Retrieve the current text (expected to be players online) and trim any extra whitespace.
            const playersOnline = playersElement.textContent.trim();
            // Clear the existing content of the players element.
            playersElement.innerHTML = '';

            // Append the live timing link to the players element.
            playersElement.appendChild(link);
            // Append a <br> (line break) element so that the players online text appears on the next line.
            playersElement.appendChild(document.createElement('br')); 
            // Append the text node containing the number of players online.
            playersElement.appendChild(document.createTextNode(playersOnline));
        }
    });
});
