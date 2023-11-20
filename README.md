hosted vercel link :-

**https://task-assigned-delta.vercel.app/**

About App.js :-
first of all importing the data from json file and passing as props in the page.js componenet by using of the spread/rest operator which deconstruct an array or object into separate variables;

About page.js Component :-
It appears to be displaying information about a user, specifically Anuj Gosalia, who is identified as the co-founder and CEO at Terribly Tiny Tales and The Page component accepts various props to customize the displayed information where it will be building the structure of the page design and storing the value of props in varible
post: Number of posts.
star: Number of stars.
like: Number of likes.
seen: Number of views.
hearts: Number of hearts.
followers: Number of followers.
following: Number of users being followed.
aug, jan, nov: Counts related to the respective months.
aug_time, jan_time, nov_time: Time information related to the respective months.
views_aug, views_jan, views_nov: View counts for the respective months

about style.css file:-
to give the design to the page i have used css

**General Styling**
Box Sizing: All elements are set to box-sizing: border-box; to include padding and borders in the element's total width and height.

Body Minimum Width: The body has a minimum width of 360px, ensuring a basic level of responsiveness.

1-> Navigation Section
The navigation section is designed with a flex container, featuring a left section with a logo, a line, and the word "STORIES," and a right section containing a "Courses" button.

2-> Header Section
The header section contains a full-width image (.top_image) with responsive styling for different viewport sizes.

3-> Introduction Section
The introduction section (intro_sec) includes a profile display (profile) and user details (description). It features a responsive layout with flex properties and styling for profile photos, follower counts, and social media links.

4-> Responsive Design
There are the media queries for three breakpoints:

768px: Adjustments for tablets and larger screens.
600px: Further adjustments for smaller screens.
494px: Specific styling for mobile devices, optimizing layout and font sizes.
