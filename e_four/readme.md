Demo server location: https://dyn-web-e4.herokuapp.com/  

## Issue
If you open Chrome dev console, you will see an error message.  
This error is supposed to be caught, but it still shows on the console.  
I looked into it in detail. This issue happens if and only if you use axios on Chrome. The exact same code under Node deos not output any error to console. When you paste the code into Chrome dev console, you see extra error output.  
