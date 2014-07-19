bookworm
========

JS/Jquery widget that divides html content automatically into pages based on character count, and allows user navigate the pages.

See an example here: http://web.tyleryasaka.me/bookworm

========

Let's say you have a book or large amount of content you want to place on your webpage. How do you do it? Your first option is to put a big blob of html on the page. This works well enough, but people will get annoyed if they have to scroll too far. Another option is to divide your content manually into separate pages. Assuming you don't have too many pages to create, this isn't too bad. But the user will get annoyed having to wait for each new web page to load the rest of the content. As a final resort you could even put your content on a pdf file and let the user just view that instead of a webpage. This is fine I guess... But you no longer can embed the content into the rest of your awesome site, and the pdf will take a light year to download.

Your other option is to use my Javascript widget, bookworm. I created it as an alternative to all of the options above as a solution to one of my own projects. What bookworm does is take an arbitrarily large chunk of html and divides it into pages based on character count (you can specify this number). Then the user can navigate those pages quickly and conveniently. They even have the option to save their spot so they can close the webpage and come back to the same spot later.

========

Using this Widget:

If you are familiar with HTML, CSS, and JS/Jquery, it should be pretty self-explanatory.

1. Set the javascript variables at the top of the HTML document to your liking. Make sure this is declared BEFORE you include the "bookworm.js" file. Here can set the character count for each page of the widget and give your content a unique id for use with the "save my spot" functionality.
2. Include Jquery! You must have a link to jquery BEFORE you include the "bookworm.js" file.
3. Include bookworm.js. This must be after your custom javascript variables and after jquery, but still in the head of your HTML document.
4. You must include the css styles in the "bookworm.css" file. You can either link to this file or copy and paste the styles into your own file. If you look at the styles, you will see that there are some you can edit and some you should leave alone. The styles to leave alone must be in your stylesheet somewhere in order for the widget to display properly.
5. Include the necessary html divs. There are 3 such divs: #bookworm-display, #bookworm-control, and #bookworm-content. #bookworm-display is an empty div where the bookworm pages will show up. #bookworm-control contains all of the user controls for bookworm, and can be placed anywhere in the HTML body. #bookworm-content is an invisible div where you will place all of the HTML content to be displayed in your widget. It can be placed anywhere in the body of your HTML.

And that's it! If you have any questions/improvement ideas/comments let me know.

========

created by Tyler Yasaka | http://web.tyleryasaka.me | web@tyleryasaka.me
