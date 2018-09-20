INSTRUCTIONS TO OPEN THE PROJECT:

1. The project is uploaded to heroku for easy use
 open https://project-aw.herokuapp.com/

2. login using aaa, bbb, ccc with password: 123

3. It opens a profile page where the user can freely link to stackoverflow page.

4. Here we install a chrome extension 
	(i) Open chrome://extensions --> developer mode --> load unpacked extension --> and browse to the extension 
	    folder and add the entire folder.
	(ii) Turn on the extension to track user events like click, ask question, comment, answer and scroll
  These events get stored in Mongodb using mlab whose credentials are given in the code. You can also access the database
using username:admin and password: root123 -->(read only access)
  The database contains two tables - user-scroll and user click (questions asked, add a comment, answer and click)
5. The profile page consists of three views created using D3
	(i) bar chart representing the number of questions asked by each user
	(ii) scatterplot - representing the scroll data of the user(sometimes does not open in chrome, please use microsoft edge. 
	     a snapshot of the graph is included in the same folder)
	(iii) and the time graph of each user representing the user data for one hour: click, answer, scroll and comment
6. The userprofile also contains an analysis of the data represented in the graph. 
	