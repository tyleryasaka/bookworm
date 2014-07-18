bookworm
========

JS/Jquery widget that divides html content automatically into pages based on character count, and allows user navigate the pages.

created by Tyler Yasaka | web.tyleryasaka.me | web@tyleryasaka.me

========

Reason for making this widget and advantages over other methods of displaying book-like content:

This widget was created as an alternative way of displaying pages of content such as a book. Popular methods are to use PDF or to use html but manually divide the content into several pages, and display each page at a different url. But I didn't like either of these 2 methods. The downside to PDF is that it does not conform to your site and takes a lot of bandwidth to download. The downside to traditional html pages is that the division must be done manually, and that the user must make a new http request each time the user wants to change the page.

This widget improves on these 2 methods. First of all, it is in html so it loads lightning-fast. Second, it automatically divides the html into pages based on character count. (The one downside to this is that the pages will have varying heights based on white space, but as browsers all display html differently, this is the best I could do.) Also, the user can change the page instantly, since this is a single-page-application. Finally, it includes some neat features, such a previous and next buttons, a "jump to page" button, and a "save my spot" button, which uses cookies to save the user's page number so that the user can close the webpage and not lose his spot.

========

Using this Widget:

If you are familiar with HTML, CSS, and JS/Jquery, it should be pretty self-explanatory.

1. Set the javascript variables at the top of the HTML document to your liking. Make sure this is declared BEFORE you include the "bookworm.js" file. Here can set the character count for each page of the widget and give your content a unique id for use with the "save my spot" functionality.
2. Include Jquery! You must have a link to jquery BEFORE you include the "bookworm.js" file.
3. Include bookworm.js. This must be after your custom javascript variables and after jquery, but still in the head of your HTML document.
4. You must include the css styles in the "bookworm.css" file. You can either link to this file or copy and paste the styles into your own file. If you look at the styles, you will see that there are some you can edit and some you should leave alone. The styles to leave alone must be in your stylesheet somewhere in order for the widget to display properly.
5. Include the necessary html divs. There are 3 such divs: #bookworm-display, #bookworm-control, and #bookworm-content. #bookworm-display is an empty div where the bookworm pages will show up. #bookworm-control contains all of the user controls for bookworm, and can be placed anywhere in the HTML body. #bookworm-content is an invisible div where you will place all of the HTML content to be displayed in your widget. It can be placed anywhere in the body of your HTML.

========

And that's it! If you have any questions/improvement ideas/comments let me know: web@tyleryasaka.me
